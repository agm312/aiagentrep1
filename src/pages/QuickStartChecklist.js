import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import jsPDF from 'jspdf';

const QuickStartChecklist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Set up colors
    const primaryColor = [82, 196, 160]; // #52c4a0
    const secondaryColor = [29, 161, 242]; // #1da1f2
    const darkColor = [55, 65, 81]; // #374151
    
    // Header - Smaller vertical space
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 25, 'F');
    
    // Logo and title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('AI AGENT REP', 20, 17);
    
    // Main title
    doc.setTextColor(...darkColor);
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.text('AI Agent Quick-Start Checklist', 20, 45);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    doc.text('10 Core Automations Every Service Business Needs', 20, 55);
    
    // Subtitle - Enhanced with bold benefit
    doc.setFontSize(12);
    doc.setTextColor(107, 114, 128); // gray-500
    doc.text('Get your automations live in minutes (not months)', 20, 70);
    
    // Call-out box for interactive version
    doc.setFillColor(255, 255, 255);
    doc.rect(20, 85, 170, 20, 'F');
    doc.setDrawColor(...primaryColor);
    doc.rect(20, 85, 170, 20, 'S');
    doc.setTextColor(...primaryColor);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('Prefer a guided experience?', 25, 95);
    doc.setFont('helvetica', 'normal');
    doc.text('Visit: https://calendly.com/arturo312/ai-agency?month=2025-07', 25, 102);
    doc.text('for interactive version', 25, 109);
    
    // Checklist items - Exactly 10 discrete automations
    const checklistItems = [
      {
        number: '1',
        title: 'Define Your Top 3 Customer Touchpoints',
        description: 'Examples: Website chat widget, email inquiry form, SMS follow-up.'
      },
      {
        number: '2',
        title: 'Map Each Touchpoint to an AI Agent',
        description: 'Chatbot for instant answers, Email sequencer for nurture flows, SMS reminder for appointments'
      },
      {
        number: '3',
        title: 'Gather/Prepare Assets',
        description: 'Chatbot script snippets, Email templates, SMS copy with merge tags'
      },
      {
        number: '4',
        title: 'Set Up Metrics Tracking',
        description: 'Leads captured (form submissions), Email open & click-through rates, Appointments booked'
      },
      {
        number: '5',
        title: 'Create Your Landing Page',
        description: 'Headline, sub-headline, form, social proof, Strong call-to-action button'
      },
      {
        number: '6',
        title: 'Deploy Organic Promotions',
        description: 'Pinned comments on content, Blog banners & sidebars, Social media posts & stories'
      },
      {
        number: '7',
        title: 'Configure Paid Retargeting Ads',
        description: 'Facebook/LinkedIn audiences based on site visitors, Google Search ads for relevant keywords'
      },
      {
        number: '8',
        title: 'Design Email Follow-Up Sequence',
        description: 'Day 0: Deliver PDF + welcome email, Day 2: Client case study, Day 4: Short VSL walkthrough'
      },
      {
        number: '9',
        title: 'Set Up SMS Reminder System',
        description: 'Appointment confirmations, follow-up reminders, re-engagement campaigns'
      },
      {
        number: '10',
        title: 'Plan Your Upsell Strategy',
        description: 'Discovery call script: review checklist answers, Tailored "Build + Maintain" package offer'
      }
    ];
    
    let yPosition = 115;
    
    checklistItems.forEach((item, index) => {
      // Check if we need a new page
      if (yPosition > 250) {
        doc.addPage();
        yPosition = 20;
      }
      
      // Number circle
      doc.setFillColor(...primaryColor);
      doc.circle(25, yPosition + 5, 8, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(item.number, 25, yPosition + 8, { align: 'center' });
      
      // Title
      doc.setTextColor(...darkColor);
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(item.title, 40, yPosition + 8);
      
      // Description
      doc.setTextColor(107, 114, 128);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      
      // Split description into multiple lines if needed
      const splitText = doc.splitTextToSize(item.description, 150);
      doc.text(splitText, 40, yPosition + 18);
      
      // Add checkbox for action prompt
      doc.setFillColor(...primaryColor);
      doc.rect(170, yPosition + 2, 6, 6, 'S');
      doc.setTextColor(...primaryColor);
      doc.setFontSize(8);
      doc.text('□', 173, yPosition + 6);
      
      yPosition += 25 + (splitText.length * 5);
    });
    
    // Bonus resources section
    if (yPosition > 200) {
      doc.addPage();
      yPosition = 20;
    }
    
    doc.setFillColor(...secondaryColor);
    doc.rect(20, yPosition, 170, 15, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Bonus Resources Included:', 25, yPosition + 10);
    
    yPosition += 25;
    
    const bonusItems = [
      'Email template library',
      'SMS script examples',
      'Chatbot conversation flows',
      'Integration checklists',
      'ROI calculator spreadsheet',
      'Discovery call script',
      'Case study templates',
      'Gallery of real-world examples',
      'Interactive setup guide'
    ];
    
    bonusItems.forEach(item => {
      doc.setTextColor(...darkColor);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      doc.text('✓ ' + item, 25, yPosition);
      yPosition += 8;
    });
    
    // Footer - Enhanced with better CTA and social proof
    doc.setFillColor(...primaryColor);
    doc.rect(0, 280, 210, 25, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Ready for your custom plan?', 20, 290);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Schedule a 15-min discovery call: calendly.com/arturo312/ai-agency', 20, 297);
    doc.text('AI Agent Rep - Turn Clicks into Clients', 20, 304);
    
    // Social proof reminder
    doc.setFontSize(9);
    doc.text('"Saved us 5 hrs/week on lead follow-up" - Mike Chen, Marketing Agency', 20, 312);
    
    // Save the PDF
    doc.save('AI-Agent-Quick-Start-Checklist.pdf');
  };

  const handleSubmit = (e) => {
    // Let Netlify handle the form submission naturally
    // The form will submit to Netlify's endpoint automatically
    setIsSubmitting(true);
    // Generate and download professional PDF after form submission
    setTimeout(() => {
      generatePDF();
    }, 1000);
  };

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: 'How long does setup take?',
      answer: 'Most businesses can implement the first 3 automations within 24-48 hours. The full 10-automation setup typically takes 1-2 weeks depending on your current systems.'
    },
    {
      question: 'What software do I need?',
      answer: 'You can start with just a website and email. We\'ll recommend specific tools based on your business type, but most work with popular platforms like Gmail, Slack, and basic CRMs.'
    },
    {
      question: 'Is this really free?',
      answer: 'Yes! The checklist and all bonus resources are completely free. We only offer paid services if you want us to implement the automations for you.'
    },
    {
      question: 'Will this work for my industry?',
      answer: 'Absolutely. These automations are designed for service businesses of all types - from real estate and agencies to healthcare and home services. We customize the approach for your specific needs.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Agent Quick-Start Checklist | 10 Core Automations Every Service Business Needs</title>
        <meta name="description" content="Get your free Quick-Start Checklist and start booking appointments on autopilot. Download the 10 core AI automations every service business needs." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          {/* Logo - Smaller */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">🤖</span>
              </div>
              <span className="text-xl font-bold text-gray-900">AI AGENT REP</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Unlock 10 AI Automations That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52c4a0] to-[#1da1f2]">
              Turn Clicks into Clients
            </span>
          </h1>

          {/* Sub-headline - Bold key benefit */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get your free Quick-Start Checklist and{' '}
            <span className="font-bold text-gray-900">start booking appointments on autopilot</span>
          </p>

          {/* Benefits - Better mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Instant Setup</h3>
              <p className="text-gray-600 text-sm">Get your AI automations running in minutes, not months</p>
            </div>
            <div className="text-center p-4 md:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600 text-sm">Based on 50+ service businesses that scaled with AI</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Step-by-Step</h3>
              <p className="text-gray-600 text-sm">Clear checklist with templates and exact steps</p>
            </div>
          </div>

          {/* Email Form - Enhanced */}
          {!isSubmitted ? (
            <form 
              name="checklist" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/success"
              className="max-w-md mx-auto mb-12"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="checklist" />
              <input type="hidden" name="source" value="checklist_landing_page" />
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your business email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                  required
                />
                <p className="text-xs text-gray-500 -mt-2">Please use a business email for fastest onboarding</p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg text-lg relative"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Preparing Your Checklist...
                    </>
                  ) : (
                    'Get My Free Checklist'
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 text-center">
                No spam. We hate it too. <a href="/privacy" className="text-[#52c4a0] hover:underline">Privacy Policy</a>
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto mb-12 p-6 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="text-green-800 font-bold text-lg mb-2">Checklist Downloaded!</h3>
                <p className="text-green-700 mb-4">Your AI Agent Quick-Start Checklist is ready. Check your email for additional resources.</p>
                <a
                  href="https://calendly.com/arturo312/ai-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Schedule Discovery Call
                </a>
              </div>
            </div>
          )}
        </section>

        {/* Social Proof - Enhanced */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Service Businesses Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Chen</div>
                  <div className="text-sm text-gray-500">Marketing Agency Owner</div>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Saved us 5 hours per week on lead follow-up. The checklist made implementation so much easier than I expected."</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Johnson</div>
                  <div className="text-sm text-gray-500">Real Estate Broker</div>
                  <div className="flex text-yellow-400 text-sm">
                    ★★★★★
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"Booked 3x more appointments in the first month. The step-by-step approach eliminated all the guesswork."</p>
            </div>
          </div>
        </section>

        {/* What's Inside - Expanded to 10 items */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What's Inside Your Quick-Start Checklist</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Define Your Top 3 Customer Touchpoints</h3>
                    <p className="text-gray-600 text-sm">Identify where your customers interact with your business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Map Each Touchpoint to an AI Agent</h3>
                    <p className="text-gray-600 text-sm">Chatbot, email sequencer, SMS follow-up strategies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Gather/Prepare Assets</h3>
                    <p className="text-gray-600 text-sm">Scripts, templates, and copy with merge tags</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Set Up Metrics Tracking</h3>
                    <p className="text-gray-600 text-sm">Leads captured, response rates, appointments booked</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Create Your Landing Page</h3>
                    <p className="text-gray-600 text-sm">Headline, sub-headline, form, social proof</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">6</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Deploy Organic Promotions</h3>
                    <p className="text-gray-600 text-sm">Pinned comments, blog banners, social media</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">7</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Configure Paid Retargeting</h3>
                    <p className="text-gray-600 text-sm">Facebook/LinkedIn audiences, Google Search ads</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">8</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Design Follow-Up Sequence</h3>
                    <p className="text-gray-600 text-sm">Day 0-10 email sequence with case studies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">9</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Plan Your Upsell Strategy</h3>
                    <p className="text-gray-600 text-sm">Discovery call script and package offers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#52c4a0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">10</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Schedule Discovery Call</h3>
                    <p className="text-gray-600 text-sm">15-minute call to review and customize</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Bonus Resources Included:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  Email template library
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  SMS script examples
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  Chatbot conversation flows
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  Integration checklists
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  ROI calculator spreadsheet
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  Discovery call script
                </li>
                <li className="flex items-center">
                  <span className="text-[#52c4a0] mr-2">✓</span>
                  Case study templates
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <span className="text-[#52c4a0] text-xl">
                    {activeFAQ === index ? '−' : '+'}
                  </span>
                </button>
                {activeFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Automate Your Lead Generation?</h2>
          <p className="text-xl text-gray-600 mb-8">Join 500+ service businesses that are booking appointments on autopilot</p>
          <a
            href="https://calendly.com/arturo312/ai-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg text-lg"
          >
            Get My Free Checklist Now
          </a>
        </section>
      </div>
    </>
  );
};

export default QuickStartChecklist; 