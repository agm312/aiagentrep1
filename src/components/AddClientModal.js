import React, { useState } from 'react';
import { X, User, Mail, Phone, Building, Target, MessageSquare, Calendar, DollarSign, Plus, Save } from 'lucide-react';

const AddClientModal = ({ isOpen, onClose, onClientAdded }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState({
    // Basic Info
    name: '',
    email: '',
    phone: '',
    company: '',
    company_size: '',
    
    // Business Info
    goals: '',
    challenges: '',
    budget: '',
    timeline: '',
    
    // Services
    services: {
      sms_campaigns: false,
      email_automation: false,
      content_creation: false,
      social_media: false,
      lead_generation: false,
      analytics: false
    },
    
    // Campaign Details
    campaign_type: '',
    target_audience: '',
    campaign_budget: '',
    start_date: '',
    end_date: '',
    
    // Custom Fields
    notes: '',
    source: 'manual',
    status: 'new'
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service]
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // For local development, create a mock client if functions aren't available
      let clientData;
      
      try {
        // Try to save client to database
        const response = await fetch('/.netlify/functions/save-client', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          clientData = result.client;
        } else {
          throw new Error('Failed to save client');
        }
      } catch (dbError) {
        console.warn('Database save failed, creating local client:', dbError);
        
        // Create a mock client for local development
        clientData = {
          id: Date.now().toString(),
          ...formData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };
      }
      
      // Try to send welcome email if email automation is selected
      if (formData.services.email_automation && formData.email) {
        try {
          await fetch('/.netlify/functions/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: formData.email,
              template: 'welcome',
              clientName: formData.name,
            }),
          });
        } catch (emailError) {
          console.warn('Email send failed:', emailError);
        }
      }

      // Try to send welcome SMS if SMS campaigns are selected
      if (formData.services.sms_campaigns && formData.phone) {
        try {
          await fetch('/.netlify/functions/send-sms', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: formData.phone,
              template: 'welcome',
              clientName: formData.name,
            }),
          });
        } catch (smsError) {
          console.warn('SMS send failed:', smsError);
        }
      }

      onClientAdded(clientData);
      onClose();
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        company_size: '',
        goals: '',
        challenges: '',
        budget: '',
        timeline: '',
        services: {
          sms_campaigns: false,
          email_automation: false,
          content_creation: false,
          social_media: false,
          lead_generation: false,
          analytics: false
        },
        campaign_type: '',
        target_audience: '',
        campaign_budget: '',
        start_date: '',
        end_date: '',
        notes: '',
        source: 'manual',
        status: 'new'
      });
      
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Failed to add client. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Plus size={24} />
              <h2 className="text-2xl font-bold">Add New Client</h2>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-8 px-6">
            {[
              { id: 'basic', label: 'Basic Info', icon: User },
              { id: 'business', label: 'Business Details', icon: Building },
              { id: 'services', label: 'Services & Campaigns', icon: Target },
              { id: 'campaign', label: 'Campaign Setup', icon: MessageSquare }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-indigo-600 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <form onSubmit={handleSubmit}>
            {/* Basic Info Tab */}
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                                         <input
                       type="text"
                       required
                       value={formData.name}
                       onChange={(e) => handleInputChange('name', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="John Doe"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                                         <input
                       type="email"
                       required
                       value={formData.email}
                       onChange={(e) => handleInputChange('email', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="john@company.com"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                                         <input
                       type="tel"
                       value={formData.phone}
                       onChange={(e) => handleInputChange('phone', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="+1 (555) 123-4567"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                                         <input
                       type="text"
                       value={formData.company}
                       onChange={(e) => handleInputChange('company', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="Company Inc."
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Size
                    </label>
                                         <select
                       value={formData.company_size}
                       onChange={(e) => handleInputChange('company_size', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Business Details Tab */}
            {activeTab === 'business' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Goals
                    </label>
                                         <textarea
                       value={formData.goals}
                       onChange={(e) => handleInputChange('goals', e.target.value)}
                       rows={3}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="What are your main business objectives?"
                     />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Challenges
                    </label>
                                         <textarea
                       value={formData.challenges}
                       onChange={(e) => handleInputChange('challenges', e.target.value)}
                       rows={3}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="What challenges are you facing?"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range
                    </label>
                                         <select
                       value={formData.budget}
                       onChange={(e) => handleInputChange('budget', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     >
                      <option value="">Select budget</option>
                      <option value="$1K-$5K">$1K - $5K</option>
                      <option value="$5K-$10K">$5K - $10K</option>
                      <option value="$10K-$25K">$10K - $25K</option>
                      <option value="$25K-$50K">$25K - $50K</option>
                      <option value="$50K+">$50K+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline
                    </label>
                                         <select
                       value={formData.timeline}
                       onChange={(e) => handleInputChange('timeline', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     >
                      <option value="">Select timeline</option>
                      <option value="Immediate">Immediate</option>
                      <option value="1-2 weeks">1-2 weeks</option>
                      <option value="1 month">1 month</option>
                      <option value="2-3 months">2-3 months</option>
                      <option value="3+ months">3+ months</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Services Tab */}
            {activeTab === 'services' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Select Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { key: 'sms_campaigns', label: 'SMS Campaigns', description: 'Automated text message marketing campaigns' },
                      { key: 'email_automation', label: 'Email Automation', description: 'Drip campaigns and automated email sequences' },
                      { key: 'content_creation', label: 'Content Creation', description: 'AI-powered content for social media and blogs' },
                      { key: 'social_media', label: 'Social Media Management', description: 'Complete social media strategy and posting' },
                      { key: 'lead_generation', label: 'Lead Generation', description: 'AI-powered lead qualification and nurturing' },
                      { key: 'analytics', label: 'Analytics & Reporting', description: 'Performance tracking and detailed reports' }
                    ].map((service) => (
                      <div
                        key={service.key}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          formData.services[service.key]
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleServiceToggle(service.key)}
                      >
                        <div className="flex items-start space-x-3">
                          <input
                            type="checkbox"
                            checked={formData.services[service.key]}
                            onChange={() => handleServiceToggle(service.key)}
                            className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">{service.label}</h4>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Campaign Setup Tab */}
            {activeTab === 'campaign' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Type
                    </label>
                                         <select
                       value={formData.campaign_type}
                       onChange={(e) => handleInputChange('campaign_type', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     >
                      <option value="">Select campaign type</option>
                      <option value="lead_generation">Lead Generation</option>
                      <option value="brand_awareness">Brand Awareness</option>
                      <option value="product_launch">Product Launch</option>
                      <option value="customer_retention">Customer Retention</option>
                      <option value="event_promotion">Event Promotion</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Target Audience
                    </label>
                                         <input
                       type="text"
                       value={formData.target_audience}
                       onChange={(e) => handleInputChange('target_audience', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="e.g., Small business owners, 25-45"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Campaign Budget
                    </label>
                                         <input
                       type="text"
                       value={formData.campaign_budget}
                       onChange={(e) => handleInputChange('campaign_budget', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="$5,000"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                                         <input
                       type="date"
                       value={formData.start_date}
                       onChange={(e) => handleInputChange('start_date', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                                         <input
                       type="date"
                       value={formData.end_date}
                       onChange={(e) => handleInputChange('end_date', e.target.value)}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black"
                     />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes
                    </label>
                                         <textarea
                       value={formData.notes}
                       onChange={(e) => handleInputChange('notes', e.target.value)}
                       rows={4}
                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-black placeholder-gray-500"
                       placeholder="Any additional information about the client or campaign..."
                     />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-6 border-t border-gray-200">
              <div className="flex space-x-3">
                {activeTab !== 'basic' && (
                  <button
                    type="button"
                    onClick={() => {
                      const tabs = ['basic', 'business', 'services', 'campaign'];
                      const currentIndex = tabs.indexOf(activeTab);
                      setActiveTab(tabs[currentIndex - 1]);
                    }}
                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Previous
                  </button>
                )}
                {activeTab !== 'campaign' && (
                  <button
                    type="button"
                    onClick={() => {
                      const tabs = ['basic', 'business', 'services', 'campaign'];
                      const currentIndex = tabs.indexOf(activeTab);
                      setActiveTab(tabs[currentIndex + 1]);
                    }}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
              
              {activeTab === 'campaign' && (
                <button
                  type="submit"
                  disabled={loading || !formData.name || !formData.email}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  ) : (
                    <Save size={16} />
                  )}
                  <span>{loading ? 'Saving...' : 'Save Client & Start Campaign'}</span>
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal; 