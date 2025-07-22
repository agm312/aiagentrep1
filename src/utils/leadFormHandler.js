// Lead Form Handler for AI Agent Rep
// Handles form submissions, data validation, and lead saving

class LeadFormHandler {
  constructor() {
    // Use Netlify function in production, fallback to local storage in development
    this.apiEndpoint = process.env.NODE_ENV === 'production' 
      ? '/.netlify/functions/lead-submission'
      : process.env.REACT_APP_API_ENDPOINT || '/api/leads';
    this.storageKey = 'ai_agent_rep_leads';
  }

  // Test if localStorage is available (for privacy mode detection)
  isLocalStorageAvailable() {
    try {
      const test = '__localStorage_test__';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }

  // Validate form data
  validateFormData(formData) {
    const errors = [];

    // Validate name
    if (!formData.name || formData.name.trim().length < 2) {
      errors.push('Name must be at least 2 characters long');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }

    // Validate business email (optional enhancement)
    if (formData.email && formData.email.includes('gmail.com') && !formData.email.includes('+')) {
      console.warn('Consider using a business email for faster onboarding');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // Save lead data to local storage (for development/testing)
  saveToLocalStorage(leadData) {
    try {
      // Check if localStorage is available
      if (!this.isLocalStorageAvailable()) {
        console.warn('localStorage not available (privacy mode or disabled)');
        return { success: false, error: 'localStorage not available' };
      }

      const existingLeads = this.getFromLocalStorage();
      const newLead = {
        ...leadData,
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        source: leadData.source || 'unknown',
        status: 'new',
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        url: window.location.href
      };
      
      existingLeads.push(newLead);
      localStorage.setItem(this.storageKey, JSON.stringify(existingLeads));
      
      console.log('Lead saved to local storage:', newLead);
      return { success: true, leadId: newLead.id };
    } catch (error) {
      console.error('Error saving to local storage:', error);
      return { success: false, error: error.message };
    }
  }

  // Get leads from local storage
  getFromLocalStorage() {
    try {
      // Check if localStorage is available
      if (!this.isLocalStorageAvailable()) {
        console.warn('localStorage not available (privacy mode or disabled)');
        return [];
      }

      const leads = localStorage.getItem(this.storageKey);
      return leads ? JSON.parse(leads) : [];
    } catch (error) {
      console.error('Error reading from local storage:', error);
      return [];
    }
  }

  // Save lead data to server/API
  async saveToServer(leadData) {
    try {
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...leadData,
          source: 'checklist_landing_page',
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent,
          referrer: document.referrer
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Lead saved to server:', result);
      return { success: true, data: result };
    } catch (error) {
      console.error('Error saving to server:', error);
      return { success: false, error: error.message };
    }
  }

  // Send email notification (if configured)
  async sendEmailNotification(leadData) {
    try {
      const emailData = {
        to: process.env.REACT_APP_NOTIFICATION_EMAIL || 'arturo@aiagentrep.com',
        subject: 'New Lead: AI Agent Quick-Start Checklist',
        body: `
          New lead captured from checklist landing page:
          
          Name: ${leadData.name}
          Email: ${leadData.email}
          Source: Checklist Landing Page
          Timestamp: ${new Date().toISOString()}
          
          Lead ID: ${Date.now()}
        `
      };

      // This would integrate with your email service (SendGrid, etc.)
      console.log('Email notification data:', emailData);
      return { success: true };
    } catch (error) {
      console.error('Error sending email notification:', error);
      return { success: false, error: error.message };
    }
  }

  // Main form submission handler
  async handleFormSubmission(formData) {
    console.log('Processing form submission:', formData);

    // Validate form data
    const validation = this.validateFormData(formData);
    if (!validation.isValid) {
      return {
        success: false,
        errors: validation.errors,
        message: 'Please fix the form errors and try again.'
      };
    }

    try {
      // Check if localStorage is available first
      const isPrivacyMode = !this.isLocalStorageAvailable();
      
      // Save to server first (prioritize server-side storage)
      let serverResult = { success: false };
      if (this.apiEndpoint !== '/api/leads') {
        try {
          serverResult = await this.saveToServer(formData);
        } catch (serverError) {
          console.warn('Server save failed:', serverError);
        }
      }

      // Save to local storage (if available)
      const localResult = this.saveToLocalStorage(formData);
      
      // Send email notification (if configured)
      const emailResult = await this.sendEmailNotification(formData);

      // Determine success based on server OR local storage
      const isSuccessful = serverResult.success || localResult.success;
      
      // Return success response
      return {
        success: isSuccessful,
        leadId: localResult.leadId || serverResult.data?.leadId,
        message: isPrivacyMode 
          ? 'Thank you! Your submission has been sent to our team. Please check your email for confirmation.'
          : 'Thank you! Your checklist is being prepared.',
        isPrivacyMode,
        data: {
          local: localResult,
          server: serverResult,
          email: emailResult
        }
      };

    } catch (error) {
      console.error('Error in form submission:', error);
      return {
        success: false,
        error: error.message,
        message: 'There was an error processing your submission. Please try again.'
      };
    }
  }

  // Get lead statistics
  getLeadStats() {
    try {
      const leads = this.getFromLocalStorage();
      return {
        totalLeads: leads.length,
        todayLeads: leads.filter(lead => {
          const today = new Date().toDateString();
          const leadDate = new Date(lead.timestamp).toDateString();
          return today === leadDate;
        }).length,
        thisWeekLeads: leads.filter(lead => {
          const weekAgo = new Date();
          weekAgo.setDate(weekAgo.getDate() - 7);
          return new Date(lead.timestamp) > weekAgo;
        }).length,
        leads: leads
      };
    } catch (error) {
      console.error('Error getting lead stats:', error);
      return { totalLeads: 0, todayLeads: 0, thisWeekLeads: 0, leads: [] };
    }
  }

  // Export leads data
  exportLeads() {
    try {
      const leads = this.getFromLocalStorage();
      const csvContent = this.convertToCSV(leads);
      
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ai_agent_rep_leads_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      return { success: true, count: leads.length };
    } catch (error) {
      console.error('Error exporting leads:', error);
      return { success: false, error: error.message };
    }
  }

  // Convert leads data to CSV
  convertToCSV(leads) {
    if (leads.length === 0) return 'No leads to export';
    
    const headers = Object.keys(leads[0]);
    const csvRows = [headers.join(',')];
    
    leads.forEach(lead => {
      const values = headers.map(header => {
        const value = lead[header];
        return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
      });
      csvRows.push(values.join(','));
    });
    
    return csvRows.join('\n');
  }
}

// Create and export singleton instance
const leadFormHandler = new LeadFormHandler();

export default leadFormHandler;

// Export the class for testing or custom instances
export { LeadFormHandler }; 