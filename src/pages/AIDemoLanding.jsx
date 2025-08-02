import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const AIDemoLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    website: '',
    problems: [],
    additionalDetails: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (problem) => {
    setFormData(prev => ({
      ...prev,
      problems: prev.problems.includes(problem)
        ? prev.problems.filter(p => p !== problem)
        : [...prev.problems, problem]
    }));
  };

  const problems = [
    'Book more appointments automatically',
    'Qualify leads without manual effort',
    'Streamline scheduling and reminders',
    'Social media posting and content scheduling',
    'Nurture leads with smart follow-up',
    'Automate client communications and updates',
    'Integrate with my CRM or calendar'
  ];

  return (
    <>
      <Helmet>
        <title>Request Your AI Automation Demo | AI Agent Rep</title>
        <meta name="description" content="Request your personalized AI automation demo. Tell us about your business and we'll create a customized demo showing how AI agents can automate your workflows." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Header Spacer */}
        <div className="h-16"></div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Request Your AI Automation Demo
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              Tell us about your business and we'll create a personalized demo showing how AI agents can automate your workflows.
            </p>
            <p className="text-lg text-gray-600">
              We'll review your website to better understand your business and prepare a customized demo.
            </p>
          </div>

          {/* Demo Request Form */}
          <form 
            name="demo-request" 
            method="POST" 
            data-netlify="true" 
            netlify-honeypot="bot-field"
            action="/success"
            className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
          >
            {/* Hidden fields for Netlify Forms */}
            <input type="hidden" name="form-name" value="demo-request" />
            <input type="hidden" name="source" value="demo_request_page" />
            <div className="hidden">
              <input name="bot-field" />
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
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
                  placeholder="Your company name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
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
                  placeholder="your@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
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
                  placeholder="https://yourcompany.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Problems Section */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                What would you like to solve? (Select all that apply) *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <input
                      type="checkbox"
                      id={`problem-${index}`}
                      name="problems"
                      value={problem}
                      checked={formData.problems.includes(problem)}
                      onChange={() => handleCheckboxChange(problem)}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={`problem-${index}`} className="ml-3 text-sm text-gray-700">
                      {problem}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div className="mb-8">
              <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
                Additional details (optional)
              </label>
              <textarea
                id="additionalDetails"
                name="additionalDetails"
                value={formData.additionalDetails}
                onChange={handleInputChange}
                placeholder="Tell us more about your current processes, specific challenges, or any other details that would help us create a better demo for you."
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Submit Section */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-4">* Required fields</p>
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Request Demo
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Need immediate assistance? Contact us at{' '}
              <a href="mailto:info@aiagentrep.com" className="text-blue-600 hover:underline">
                info@aiagentrep.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIDemoLanding; 