import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import leadFormHandler from '../utils/leadFormHandler';

const DemoForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    message: '',
    solutions: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (solution) => {
    setFormData(prev => ({
      ...prev,
      solutions: prev.solutions.includes(solution)
        ? prev.solutions.filter(s => s !== solution)
        : [...prev.solutions, solution]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    
    try {
      // Prepare data for Netlify Forms
      const netlifyData = {
        'form-name': 'demo-request',
        name: formData.name,
        email: formData.email,
        company: formData.company,
        website: formData.website,
        message: formData.message,
        solutions: formData.solutions.join(', '),
        source: 'demo_form_page'
      };
      
      // Submit directly to Netlify Forms
      const netlifyResponse = await fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(netlifyData)
      });
      
      if (netlifyResponse.ok) {
        console.log('Demo request form submitted via Netlify Forms');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', website: '', message: '', solutions: [] });
      } else {
        throw new Error('Netlify Forms submission failed');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      alert('There was an error processing your submission. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Request Demo | AI Agent Rep</title>
        <meta name="description" content="Request a personalized AI automation demo from AI Agent Rep. See how our custom AI agents can transform your business processes." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🤖</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AI AGENT REP</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Your AI Automation Demo
            </h1>
            <p className="text-lg text-gray-600">
              Tell us about your business and we'll create a personalized demo showing how AI agents can automate your workflows.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We'll review your website to better understand your business and prepare a customized demo.
            </p>
          </div>

          {/* Demo Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            {!isSubmitted ? (
              <form 
                name="demo-request" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                {/* Hidden fields for Netlify Forms */}
                <input type="hidden" name="form-name" value="demo-request" />
                <div className="hidden">
                  <input name="bot-field" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Website *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                      placeholder="https://yourcompany.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What would you like to solve? (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Book more appointments automatically',
                      'Nurture leads with smart follow-up',
                      'Qualify leads without manual effort',
                      'Automate client communications and updates',
                      'Streamline scheduling and reminders',
                      'Integrate with my CRM or calendar',
                      'Social media posting and content scheduling'
                    ].map((solution) => (
                      <label key={solution} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.solutions.includes(solution)}
                          onChange={() => handleCheckboxChange(solution)}
                          className="w-4 h-4 text-[#52c4a0] border-gray-300 rounded focus:ring-[#52c4a0] focus:ring-2"
                        />
                        <span className="text-sm text-gray-700">{solution}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional details (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none resize-none"
                    placeholder="Tell us more about your current processes, specific challenges, or any other details that would help us create a better demo for you."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    * Required fields
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting || formData.solutions.length === 0}
                    className="px-8 py-3 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Demo'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Demo Request Submitted!
                </h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest! We'll review your requirements and get back to you within 24 hours to schedule your personalized AI automation demo.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', company: '', website: '', message: '', solutions: [] });
                  }}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Contact us at{' '}
              <a href="mailto:info@aiagentrep.com" className="text-[#52c4a0] hover:underline">
                info@aiagentrep.com
              </a>
            </p>
          </div>

          {/* What to Expect Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              What to Expect from Your Demo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#52c4a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">15-Minute Call</h3>
                <p className="text-sm text-gray-600">Quick, focused demo showing exactly how AI can solve your specific challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#1da1f2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Examples</h3>
                <p className="text-sm text-gray-600">See real AI agents in action, customized to your business needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#52c4a0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Next Steps</h3>
                <p className="text-sm text-gray-600">Get a clear roadmap for implementing AI automation in your business</p>
              </div>
            </div>
          </div>

          {/* Why Choose AI Agent Rep */}
          <div className="mt-8 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Choose AI Agent Rep?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#52c4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">No-Code Setup</h3>
                  <p className="text-sm opacity-90">We handle all the technical implementation while you focus on growing your business</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#52c4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24-48 Hour Launch</h3>
                  <p className="text-sm opacity-90">Most clients see their AI automation live within 1-2 days after the demo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#52c4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Seamless Integration</h3>
                  <p className="text-sm opacity-90">Works with your existing CRM, calendar, and communication tools</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[#52c4a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Proven Results</h3>
                  <p className="text-sm opacity-90">50+ businesses already automating with us and seeing real results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoForm; 