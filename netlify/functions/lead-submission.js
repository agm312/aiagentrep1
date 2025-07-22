// Netlify serverless function for lead form submissions
// This handles form submissions from both the checklist and demo landing pages

const sgMail = require('@sendgrid/mail');

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    // Parse the request body
    const leadData = JSON.parse(event.body);
    
    // Validate required fields
    if (!leadData.name || !leadData.email) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Missing required fields',
          message: 'Name and email are required'
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadData.email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ 
          error: 'Invalid email format',
          message: 'Please enter a valid email address'
        })
      };
    }

    // Prepare lead data
    const enrichedLeadData = {
      ...leadData,
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      source: leadData.source || 'unknown',
      status: 'new',
      userAgent: event.headers['user-agent'] || '',
      referrer: event.headers.referer || '',
      ip: event.headers['client-ip'] || event.headers['x-forwarded-for'] || '',
      country: event.headers['x-country'] || 'unknown'
    };

    // Send email notification
    let emailResult = { success: false };
    if (process.env.SENDGRID_API_KEY && process.env.NOTIFICATION_EMAIL) {
      try {
        const emailContent = `
          New lead captured from ${enrichedLeadData.source}:
          
          Name: ${enrichedLeadData.name}
          Email: ${enrichedLeadData.email}
          Source: ${enrichedLeadData.source}
          Timestamp: ${enrichedLeadData.timestamp}
          IP: ${enrichedLeadData.ip}
          Country: ${enrichedLeadData.country}
          User Agent: ${enrichedLeadData.userAgent}
          Referrer: ${enrichedLeadData.referrer}
          
          Lead ID: ${enrichedLeadData.id}
        `;

        const msg = {
          to: process.env.NOTIFICATION_EMAIL,
          from: process.env.FROM_EMAIL || 'noreply@aiagentrep.com',
          subject: `New Lead: ${enrichedLeadData.source}`,
          text: emailContent,
          html: emailContent.replace(/\n/g, '<br>')
        };

        await sgMail.send(msg);
        emailResult = { success: true };
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        emailResult = { success: false, error: emailError.message };
      }
    }

    // Here you could also save to a database (Firebase, Airtable, etc.)
    // For now, we'll just log and return success
    
    console.log('Lead captured:', enrichedLeadData);

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        success: true,
        leadId: enrichedLeadData.id,
        message: 'Lead captured successfully',
        data: {
          lead: enrichedLeadData,
          email: emailResult
        }
      })
    };

  } catch (error) {
    console.error('Error processing lead submission:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'There was an error processing your submission. Please try again.'
      })
    };
  }
}; 