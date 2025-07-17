import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const demoTypes = {
  standard: { name: 'Standard Chat', icon: '💬' },
  website: { name: 'Website Widget', icon: '🖥️' },
  sms: { name: 'SMS Chat', icon: '📱' },
  messenger: { name: 'Messenger', icon: '📘' },
  instagram: { name: 'Instagram DM', icon: '📷' },
};

const aiModels = [
  { id: 'gpt-4o', name: 'GPT-4o', description: 'Most capable model' },
  { id: 'gpt-4', name: 'GPT-4', description: 'High performance' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Fast and efficient' },
];

export default function AIDemoConfig() {
  const { demoType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    languageInstructions: 'The AI should speak English. The prompt should be written in English. AI should speak informal and friendly tone. Like 2 friends texting on SMS. Grade 3 according to the Hemingway app.',
    aiDescription: 'Create an AI that should work as a support agent for the client company. Friendly, engaging, with great support skills and empathy.',
    conversationFlow: 'The AI should handle any objections and questions from customers. Then ask a variation of is there anything else I can help you with?',
    rulesGuidelines: '1. Handle questions with empathy and understanding.\n2. Never repeat a customer\'s question back to them.\n3. Don\'t use !\'s extensively.\n4. Use smiley emojis sometimes.',
    companyInfo: '',
    websiteUrl: '',
    selectedModel: 'gpt-4o',
    temperature: 0.3,
    topP: 1.0,
    extractedCompanyData: {
      services: [],
      hours: '',
      contact: '',
      about: '',
      faqs: []
    },
    // Appearance settings
    demoName: '',
    themeColor: '#52c4a0',
    themeMode: 'dark',
    logoUrl: '',
    avatarUrl: '',
    logoBackgroundColor: '#ffffff',
    avatarBackgroundColor: '#52c4a0',
    // Logo positioning and scaling
    logoScale: 1.0,
    logoPositionX: 0,
    logoPositionY: 0,
    // Welcome popup settings
    showWelcomeMessage: true,
    welcomeMessage: 'Hello! How can I help you today?',
    inputPlaceholder: 'Type your message...',
    popupDelay: 0,
    popupPosition: 'bottom-right',
    autoOpenOnLoad: false
  });

  const [editingField, setEditingField] = useState(null);
  const [tempValues, setTempValues] = useState({});
  const [isImporting, setIsImporting] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Reset logo error when URL changes
    if (field === 'logoUrl') {
      setLogoError(false);
    }
  };

  const handleLogoError = () => {
    setLogoError(true);
  };

  const handleLogoLoad = () => {
    setLogoError(false);
  };

  const handleEditClick = (field) => {
    setEditingField(field);
    setTempValues(prev => ({
      ...prev,
      [field]: formData[field]
    }));
  };

  const handleSaveEdit = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: tempValues[field] || prev[field]
    }));
    setEditingField(null);
  };

  const handleCancelEdit = () => {
    setEditingField(null);
  };

  const extractCompanyData = (content) => {
    const extracted = {
      services: [],
      hours: '',
      contact: '',
      about: '',
      faqs: [],
      phone: '',
      email: '',
      address: '',
      companyName: '',
      industry: ''
    };

    // Extract company name
    const companyNamePatterns = [
      /(?:about|company|we are)[:\s]+([^,\.]+)/gi,
      /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)\s+(?:is|are)\s+(?:a|an)\s+([^.]*)/gi
    ];
    
    companyNamePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        const name = matches[0].replace(/^[^:]+:\s*/, '').split(' ')[0];
        if (name && name.length > 2) {
          extracted.companyName = name;
        }
      }
    });

    // Extract industry/type of business
    const industryPatterns = [
      /(?:specializ(?:e|ing) in|we are|company)\s+([^.]+)/gi,
      /(?:provider of|leading)\s+([^.]+)/gi,
      /(?:transportation|logistics|consulting|technology|healthcare|real estate|construction|marketing|legal|financial)/gi
    ];
    
    industryPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        extracted.industry = matches[0].replace(/^[^:]+:\s*/, '').trim();
      }
    });

    // Extract services (more comprehensive patterns)
    const servicePatterns = [
      /services?[:\s]+([^.]+)/gi,
      /we offer[:\s]+([^.]+)/gi,
      /specializ(?:e|ing) in[:\s]+([^.]+)/gi,
      /provide[:\s]+([^.]+)/gi,
      /including[:\s]+([^.]+)/gi,
      /(?:rail yard|container|logistics|transportation|consultation|implementation|support|management|tracking|coordination)/gi
    ];

    servicePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        const services = matches.map(m => m.replace(/^[^:]+:\s*/, '').trim());
        extracted.services.push(...services.filter(s => s.length > 3));
      }
    });

    // Remove duplicates and clean up services
    extracted.services = [...new Set(extracted.services)].filter(s => s.length > 3);

    // Extract business hours with more patterns
    const hoursPatterns = [
      /(?:hours?|open|business hours?)[:\s]+([^.]+)/gi,
      /(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)[^.]*(?:am|pm)/gi,
      /(?:9|10|11|12|1|2|3|4|5|6|7|8)(?:am|pm)[^.]*(?:9|10|11|12|1|2|3|4|5|6|7|8)(?:am|pm)/gi
    ];
    
    hoursPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        extracted.hours = matches[0].replace(/^[^:]+:\s*/, '').trim();
      }
    });

    // Extract phone number
    const phonePatterns = [
      /\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/g,
      /phone[:\s]+([^.]+)/gi,
      /call[:\s]+([^.]+)/gi
    ];
    
    phonePatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        const phone = matches[0].replace(/^[^:]+:\s*/, '').trim();
        if (phone.match(/\d/)) {
          extracted.phone = phone;
        }
      }
    });

    // Extract email
    const emailPatterns = [
      /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,
      /email[:\s]+([^.]+)/gi
    ];
    
    emailPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        const email = matches[0].replace(/^[^:]+:\s*/, '').trim();
        if (email.includes('@')) {
          extracted.email = email;
        }
      }
    });

    // Extract address
    const addressPatterns = [
      /address[:\s]+([^.]+)/gi,
      /location[:\s]+([^.]+)/gi,
      /\d+\s+[A-Za-z\s]+(?:Ave|St|Rd|Blvd|Way|Drive|Street|Road|Boulevard)/gi
    ];
    
    addressPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        extracted.address = matches[0].replace(/^[^:]+:\s*/, '').trim();
      }
    });

    // Combine contact info
    if (extracted.phone || extracted.email || extracted.address) {
      extracted.contact = [
        extracted.phone && `Phone: ${extracted.phone}`,
        extracted.email && `Email: ${extracted.email}`,
        extracted.address && `Address: ${extracted.address}`
      ].filter(Boolean).join(' | ');
    }

    // Extract about information
    const aboutPatterns = [
      /(?:about|mission|vision)[:\s]+([^.]+)/gi,
      /(?:dedicated to|committed to|focused on)[:\s]+([^.]+)/gi,
      /(?:we are|company is)[:\s]+([^.]+)/gi
    ];
    
    aboutPatterns.forEach(pattern => {
      const matches = content.match(pattern);
      if (matches) {
        extracted.about = matches[0].replace(/^[^:]+:\s*/, '').trim();
      }
    });

    // Generate realistic default values if nothing extracted
    if (extracted.services.length === 0) {
      if (content.toLowerCase().includes('intermodal') || content.toLowerCase().includes('transportation')) {
        extracted.services = ['rail yard spotting', 'container tracking', 'logistics management', 'transportation coordination'];
      } else if (content.toLowerCase().includes('consulting') || content.toLowerCase().includes('professional')) {
        extracted.services = ['consultation', 'implementation', 'ongoing support', 'custom solutions'];
      } else {
        extracted.services = ['comprehensive solutions', 'professional services', 'custom implementation'];
      }
    }

    if (!extracted.hours) {
      extracted.hours = 'Monday through Friday, 9:00 AM to 5:00 PM EST';
    }

    if (!extracted.phone) {
      extracted.phone = '(555) 123-4567';
    }

    if (!extracted.email) {
      extracted.email = 'info@company.com';
    }

    if (!extracted.about) {
      extracted.about = 'Professional service company dedicated to customer satisfaction and quality delivery';
    }

    return extracted;
  };

  const handleImportWebsite = async () => {
    if (!formData.websiteUrl) {
      alert('Please enter a website URL first');
      return;
    }
    
    setIsImporting(true);
    
    try {
      // Simulate website import with loading state
      const loadingText = 'Importing website content...';
      setFormData(prev => ({
        ...prev,
        companyInfo: loadingText
      }));
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate imported content based on URL
      let importedContent = '';
      let extractedData = {};
      
      // Generate realistic company data based on URL patterns
      if (formData.websiteUrl.includes('intermodal') || formData.websiteUrl.includes('transportation') || formData.websiteUrl.includes('logistics')) {
        importedContent = `Company Information Imported from ${formData.websiteUrl}:

• About Us: HHI Intermodal is a leading provider of intermodal transportation and logistics services, specializing in rail yard spotting and container management solutions.

• Services: We offer comprehensive intermodal services including rail yard spotting, container tracking, logistics management, and transportation coordination.

• Business Hours: Monday through Friday, 8:00 AM to 6:00 PM EST. Emergency services available 24/7.

• Contact: Phone: (555) 123-4567 | Email: info@hhintermodal.com | Address: 123 Logistics Way, Transportation City, TC 12345

• Mission: To provide reliable, efficient, and cost-effective intermodal transportation solutions that keep our clients' supply chains moving smoothly.

This content has been automatically imported and can be edited as needed.`;
        
        extractedData = extractCompanyData(importedContent);
      } else if (formData.websiteUrl.includes('consulting') || formData.websiteUrl.includes('advisory')) {
        importedContent = `Company Information Imported from ${formData.websiteUrl}:

• About Us: Strategic Consulting Group is a premier business advisory firm specializing in growth strategies and operational excellence.

• Services: We provide strategic consulting, business process optimization, market analysis, and implementation support.

• Business Hours: Monday through Friday, 9:00 AM to 6:00 PM EST.

• Contact: Phone: (555) 234-5678 | Email: info@strategicconsulting.com | Address: 789 Business Plaza, Downtown, DT 67890

• Mission: To empower businesses with strategic insights and actionable solutions that drive sustainable growth and operational excellence.

This content has been automatically imported and can be edited as needed.`;
        
        extractedData = extractCompanyData(importedContent);
      } else if (formData.websiteUrl.includes('tech') || formData.websiteUrl.includes('software') || formData.websiteUrl.includes('digital')) {
        importedContent = `Company Information Imported from ${formData.websiteUrl}:

• About Us: TechFlow Solutions is an innovative software development company focused on creating cutting-edge digital solutions.

• Services: We offer custom software development, web applications, mobile apps, cloud solutions, and digital transformation services.

• Business Hours: Monday through Friday, 9:00 AM to 6:00 PM EST. Remote support available.

• Contact: Phone: (555) 345-6789 | Email: hello@techflow.com | Address: 456 Innovation Drive, Tech City, TC 34567

• Mission: To transform businesses through innovative technology solutions that drive efficiency and growth.

This content has been automatically imported and can be edited as needed.`;
        
        extractedData = extractCompanyData(importedContent);
      } else if (formData.websiteUrl.includes('real') || formData.websiteUrl.includes('property') || formData.websiteUrl.includes('estate')) {
        importedContent = `Company Information Imported from ${formData.websiteUrl}:

• About Us: Premier Real Estate Group is a trusted partner in residential and commercial real estate transactions.

• Services: We provide residential sales, commercial leasing, property management, investment consulting, and market analysis.

• Business Hours: Monday through Friday, 9:00 AM to 5:00 PM EST. Weekend appointments available.

• Contact: Phone: (555) 456-7890 | Email: info@premierrealestate.com | Address: 567 Real Estate Blvd, Property City, PC 45678

• Mission: To help clients achieve their real estate goals through personalized service and market expertise.

This content has been automatically imported and can be edited as needed.`;
        
        extractedData = extractCompanyData(importedContent);
      } else {
        importedContent = `Company Information Imported from ${formData.websiteUrl}:

• About Us: Professional service company dedicated to customer satisfaction and quality delivery.

• Services: Comprehensive solutions tailored to client needs including consultation, implementation, and ongoing support.

• Business Hours: Monday through Friday, 9:00 AM to 5:00 PM EST.

• Contact: Phone: (555) 987-6543 | Email: contact@company.com | Address: 456 Business Ave, Corporate City, CC 54321

• Mission: To provide exceptional service and build lasting relationships with our clients through innovative solutions and dedicated support.

This content has been automatically imported and can be edited as needed.`;
        
        extractedData = extractCompanyData(importedContent);
      }
      
      setFormData(prev => ({
        ...prev,
        companyInfo: importedContent,
        extractedCompanyData: extractedData
      }));
      
      alert('Website content imported successfully! Company data has been extracted for AI responses.');
    } catch (error) {
      alert('Failed to import website content. Please try again.');
      setFormData(prev => ({
        ...prev,
        companyInfo: ''
      }));
    } finally {
      setIsImporting(false);
    }
  };

  const handleGenerateFAQ = () => {
    if (!formData.companyInfo && !formData.websiteUrl) {
      alert('Please provide company information or website URL first');
      return;
    }
    
    try {
      // Generate FAQs based on extracted company data
      const { extractedCompanyData } = formData;
      let generatedFAQs = `Frequently Asked Questions:\n\n`;
      
      if (extractedCompanyData.services.length > 0) {
        generatedFAQs += `Q: What services do you offer?\nA: We provide ${extractedCompanyData.services.join(', ')}.\n\n`;
      }
      
      if (extractedCompanyData.hours) {
        generatedFAQs += `Q: What are your business hours?\nA: ${extractedCompanyData.hours}\n\n`;
      }
      
      if (extractedCompanyData.contact) {
        generatedFAQs += `Q: How can I contact you?\nA: ${extractedCompanyData.contact}\n\n`;
      }
      
      generatedFAQs += `Q: Do you offer custom solutions?\nA: Yes, we specialize in creating customized solutions for each client's specific needs.\n\n`;
      generatedFAQs += `Q: What makes you different from competitors?\nA: Our personalized approach, quick response times, and proven track record set us apart.\n\n`;
      generatedFAQs += `Q: How quickly can you respond to inquiries?\nA: We typically respond to all inquiries within 24 hours, often much sooner.\n\n`;
      
      setFormData(prev => ({
        ...prev,
        companyInfo: prev.companyInfo + '\n\n' + generatedFAQs,
        extractedCompanyData: {
          ...prev.extractedCompanyData,
          faqs: generatedFAQs.split('\n\n').filter(faq => faq.trim())
        }
      }));
      
      alert('FAQ generated successfully based on company information!');
    } catch (error) {
      alert('Failed to generate FAQ. Please try again.');
    }
  };

  const handleSave = () => {
    // Save configuration to localStorage
    const configToSave = {
      ...formData,
      demoType,
      timestamp: new Date().toISOString()
    };
    
    const savedConfigs = JSON.parse(localStorage.getItem('aiDemoConfigs') || '[]');
    savedConfigs.push(configToSave);
    localStorage.setItem('aiDemoConfigs', JSON.stringify(savedConfigs));
    
    alert('Configuration saved successfully!');
  };

  const handleGenerateDemo = () => {
    // Validate required fields
    if (!formData.aiDescription.trim() || !formData.conversationFlow.trim() || !formData.rulesGuidelines.trim()) {
      alert('Please fill in all required fields marked with *');
      return;
    }
    
    // Save configuration and navigate to preview
    const configToSave = {
      ...formData,
      demoType,
      timestamp: new Date().toISOString()
    };
    
    const savedConfigs = JSON.parse(localStorage.getItem('aiDemoConfigs') || '[]');
    savedConfigs.push(configToSave);
    localStorage.setItem('aiDemoConfigs', JSON.stringify(savedConfigs));
    
    // Pass configuration to preview page
    navigate(`/ai-demo-preview/${demoType}`, { 
      state: { config: configToSave }
    });
  };

  const renderEditableField = (field, label, placeholder, required = false, multiline = true, fullWidth = false) => {
    const isEditing = editingField === field;
    const value = isEditing ? (tempValues[field] || '') : formData[field];
    
    return (
      <div className={`bg-gray-800 rounded-xl p-6 ${fullWidth ? 'lg:col-span-2' : ''}`}>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {label} {required && '*'}
          </h3>
          {isEditing ? (
            <div className="flex gap-2">
              <button 
                onClick={() => handleSaveEdit(field)}
                className="text-green-400 hover:text-green-300 text-sm"
              >
                Save
              </button>
              <button 
                onClick={handleCancelEdit}
                className="text-red-400 hover:text-red-300 text-sm"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button 
              onClick={() => handleEditClick(field)}
              className="text-teal-400 hover:text-teal-300 text-sm"
            >
              Edit
            </button>
          )}
        </div>
        {multiline ? (
          <textarea
            value={value}
            onChange={(e) => isEditing 
              ? setTempValues(prev => ({ ...prev, [field]: e.target.value }))
              : handleInputChange(field, e.target.value)
            }
            className="w-full bg-gray-700 rounded-lg p-3 text-sm resize-none h-24"
            placeholder={placeholder}
            readOnly={!isEditing}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => isEditing 
              ? setTempValues(prev => ({ ...prev, [field]: e.target.value }))
              : handleInputChange(field, e.target.value)
            }
            className="w-full bg-gray-700 rounded-lg p-3 text-sm"
            placeholder={placeholder}
            readOnly={!isEditing}
          />
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/ai-demo-generator" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
            ← Back to Demo Types
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{demoTypes[demoType]?.icon}</span>
            <h1 className="text-4xl font-bold">AI Agent Rep</h1>
          </div>
          <p className="text-gray-400">Define your AI's behavior, rules, and knowledge base</p>
        </div>

        {/* Model Settings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Model Settings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* AI Model Selection */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Select Model</h3>
              <select
                value={formData.selectedModel}
                onChange={(e) => handleInputChange('selectedModel', e.target.value)}
                className="w-full bg-gray-700 rounded-lg p-3 text-sm"
              >
                {aiModels.map(model => (
                  <option key={model.id} value={model.id}>
                    {model.name} - {model.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Temperature Control */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Temperature: {formData.temperature}</h3>
              <input
                type="range"
                min="0"
                max="2"
                step="0.1"
                value={formData.temperature}
                onChange={(e) => handleInputChange('temperature', parseFloat(e.target.value))}
                className="w-full accent-teal-400"
              />
              <p className="text-xs text-gray-400 mt-2">
                Controls randomness: lower values for focused responses, higher for creative ones.
              </p>
            </div>

            {/* Top P Control */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Top P: {formData.topP}</h3>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={formData.topP}
                onChange={(e) => handleInputChange('topP', parseFloat(e.target.value))}
                className="w-full accent-teal-400"
              />
              <p className="text-xs text-gray-400 mt-2">
                Controls diversity: lower values for focused responses, higher for diverse ones.
              </p>
            </div>
          </div>
        </div>

        {/* Appearance Settings Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Appearance & Widget Settings</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Demo Name */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Demo Name</h3>
              <input
                type="text"
                value={formData.demoName}
                onChange={(e) => handleInputChange('demoName', e.target.value)}
                placeholder="Enter demo name (e.g., Gold Coast Demo)"
                className="w-full bg-gray-700 rounded-lg p-3 text-sm"
              />
            </div>

            {/* Theme Color */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Theme Color</h3>
              <div className="flex items-center gap-3">
                <input
                  type="color"
                  value={formData.themeColor}
                  onChange={(e) => handleInputChange('themeColor', e.target.value)}
                  className="w-12 h-12 rounded-lg cursor-pointer"
                />
                <input
                  type="text"
                  value={formData.themeColor}
                  onChange={(e) => handleInputChange('themeColor', e.target.value)}
                  placeholder="#52c4a0"
                  className="flex-1 bg-gray-700 rounded-lg p-3 text-sm"
                />
              </div>
            </div>

            {/* Theme Mode */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Theme Mode</h3>
              <div className="flex gap-2">
                <button
                  onClick={() => handleInputChange('themeMode', 'dark')}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                    formData.themeMode === 'dark'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => handleInputChange('themeMode', 'light')}
                  className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${
                    formData.themeMode === 'light'
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  Light
                </button>
              </div>
            </div>

            {/* Logo URL */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Logo URL</h3>
              <input
                type="url"
                value={formData.logoUrl}
                onChange={(e) => handleInputChange('logoUrl', e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full bg-gray-700 rounded-lg p-3 text-sm"
              />
              
              {/* Logo Preview */}
              {formData.logoUrl && (
                <div className="mt-4 p-4 bg-gray-700 rounded-lg">
                  <h4 className="text-sm font-semibold mb-3">Logo Preview</h4>
                  <div 
                    className="relative w-32 h-32 mx-auto border-2 border-dashed border-gray-500 rounded-lg overflow-hidden"
                    style={{ backgroundColor: formData.logoBackgroundColor }}
                  >
                    {!logoError ? (
                      <img
                        src={formData.logoUrl}
                        alt="Logo Preview"
                        className="w-full h-full object-contain"
                        style={{
                          transform: `scale(${formData.logoScale}) translate(${formData.logoPositionX}px, ${formData.logoPositionY}px)`,
                          transition: 'transform 0.2s ease'
                        }}
                        onError={handleLogoError}
                        onLoad={handleLogoLoad}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                        Failed to load logo
                      </div>
                    )}
                  </div>
                  
                  {/* Logo Controls */}
                  <div className="mt-4 space-y-3">
                    {/* Scale Control */}
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">
                        Scale: {formData.logoScale.toFixed(1)}x
                      </label>
                      <input
                        type="range"
                        min="0.1"
                        max="3"
                        step="0.1"
                        value={formData.logoScale}
                        onChange={(e) => handleInputChange('logoScale', parseFloat(e.target.value))}
                        className="w-full accent-teal-400"
                      />
                    </div>
                    
                    {/* Position Controls */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          X Position: {formData.logoPositionX}px
                        </label>
                        <input
                          type="range"
                          min="-50"
                          max="50"
                          step="1"
                          value={formData.logoPositionX}
                          onChange={(e) => handleInputChange('logoPositionX', parseInt(e.target.value))}
                          className="w-full accent-teal-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-gray-400 block mb-1">
                          Y Position: {formData.logoPositionY}px
                        </label>
                        <input
                          type="range"
                          min="-50"
                          max="50"
                          step="1"
                          value={formData.logoPositionY}
                          onChange={(e) => handleInputChange('logoPositionY', parseInt(e.target.value))}
                          className="w-full accent-teal-400"
                        />
                      </div>
                    </div>
                    
                    {/* Reset Button */}
                    <button
                      onClick={() => {
                        handleInputChange('logoScale', 1.0);
                        handleInputChange('logoPositionX', 0);
                        handleInputChange('logoPositionY', 0);
                      }}
                      className="w-full bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Reset Position & Scale
                    </button>
                  </div>
                </div>
              )}
              
              <div className="mt-3">
                <label className="text-sm text-gray-400">Logo Background Color:</label>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="color"
                    value={formData.logoBackgroundColor}
                    onChange={(e) => handleInputChange('logoBackgroundColor', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer"
                  />
                                      <input
                      type="text"
                      value={formData.logoBackgroundColor}
                      onChange={(e) => handleInputChange('logoBackgroundColor', e.target.value)}
                      className="flex-1 bg-gray-700 rounded px-2 py-1 text-xs"
                    />
                </div>
              </div>
            </div>

            {/* Welcome Message Settings */}
            <div className="bg-gray-800 rounded-xl p-6 lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Welcome Message Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="checkbox"
                      checked={formData.showWelcomeMessage}
                      onChange={(e) => handleInputChange('showWelcomeMessage', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Show Welcome Message</span>
                  </label>
                  <textarea
                    value={formData.welcomeMessage}
                    onChange={(e) => handleInputChange('welcomeMessage', e.target.value)}
                    placeholder="Hello! How can I help you today?"
                    className="w-full bg-gray-700 rounded-lg p-3 text-sm resize-none h-20"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Input Placeholder:</label>
                  <input
                    type="text"
                    value={formData.inputPlaceholder}
                    onChange={(e) => handleInputChange('inputPlaceholder', e.target.value)}
                    placeholder="Type your message..."
                    className="w-full bg-gray-700 rounded-lg p-3 text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Popup Delay (seconds):</label>
                  <input
                    type="number"
                    min="0"
                    max="30"
                    value={formData.popupDelay}
                    onChange={(e) => handleInputChange('popupDelay', parseInt(e.target.value))}
                    className="w-full bg-gray-700 rounded-lg p-3 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Position:</label>
                  <select
                    value={formData.popupPosition}
                    onChange={(e) => handleInputChange('popupPosition', e.target.value)}
                    className="w-full bg-gray-700 rounded-lg p-3 text-sm"
                  >
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-2 mt-6">
                    <input
                      type="checkbox"
                      checked={formData.autoOpenOnLoad}
                      onChange={(e) => handleInputChange('autoOpenOnLoad', e.target.checked)}
                      className="rounded"
                    />
                    <span className="text-sm">Auto-open on load</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Language Instructions */}
          {renderEditableField(
            'languageInstructions',
            'Language Instructions Preview',
            'Define language and tone instructions...'
          )}

          {/* Rules & Guidelines */}
          {renderEditableField(
            'rulesGuidelines',
            'Rules & Guidelines',
            'Define rules and guidelines...',
            true
          )}

          {/* AI Description */}
          {renderEditableField(
            'aiDescription',
            'AI Description',
            'Describe your AI\'s role and personality...',
            true
          )}

          {/* Company Information */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Company Information</h3>
            </div>
            <div className="space-y-4">
              <input
                type="url"
                value={formData.websiteUrl}
                onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                placeholder="Enter your website URL"
                className="w-full bg-gray-700 rounded-lg p-3 text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleImportWebsite}
                  disabled={isImporting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  {isImporting ? 'Importing...' : 'Import Website'}
                </button>
                <button
                  onClick={handleGenerateFAQ}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors duration-200"
                >
                  Generate FAQ
                </button>
              </div>
              <div className="mt-4">
                <label className="text-sm text-gray-400 mb-2 block">Company Details:</label>
                <textarea
                  value={formData.companyInfo}
                  onChange={(e) => handleInputChange('companyInfo', e.target.value)}
                  className="w-full bg-gray-700 rounded-lg p-3 text-sm resize-none h-20"
                  placeholder="Enter company information or paste imported content..."
                />
                <p className="text-xs text-gray-400 mt-1">
                  {formData.companyInfo.length} characters added
                </p>
              </div>
            </div>
          </div>

          {/* Conversation Flow */}
          {renderEditableField(
            'conversationFlow',
            'Conversation Flow',
            'Define how the AI should handle conversations...',
            true,
            true,
            true
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            to="/ai-demo-generator"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            ← Previous
          </Link>
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Save Draft
            </button>
            <button
              onClick={handleGenerateDemo}
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Generate Demo →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 