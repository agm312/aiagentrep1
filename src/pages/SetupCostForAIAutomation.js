import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const SetupCostForAIAutomation = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Debug logging
  console.log('SetupCostForAIAutomation component rendering');

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>AI Automation Setup Cost in 2025 | AI Agent Rep</title>
        <meta name="description" content="Discover the full cost breakdown of setting up AI automation—from consultation to monthly fees. Tailored for small to enterprise businesses." />
        <meta name="keywords" content="setup cost for AI automation, AI automation pricing, automation setup fees, AI implementation cost" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Automation Setup Cost in 2025 | AI Agent Rep" />
        <meta property="og:description" content="Discover the full cost breakdown of setting up AI automation—from consultation to monthly fees. Tailored for small to enterprise businesses." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://aiagentrep.com/setup-cost-for-ai-automation" />
        <meta property="og:image" content="https://aiagentrep.com/preview-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Automation Setup Cost in 2025 | AI Agent Rep" />
        <meta name="twitter:description" content="Discover the full cost breakdown of setting up AI automation—from consultation to monthly fees. Tailored for small to enterprise businesses." />
        <meta name="twitter:image" content="https://aiagentrep.com/preview-image.jpg" />
        
        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "AI Automation Setup Cost in 2025 | AI Agent Rep",
            "description": "Discover the full cost breakdown of setting up AI automation—from consultation to monthly fees. Tailored for small to enterprise businesses.",
            "image": "https://aiagentrep.com/preview-image.jpg",
            "author": {
              "@type": "Organization",
              "name": "AI Agent Rep"
            },
            "publisher": {
              "@type": "Organization",
              "name": "AI Agent Rep",
              "logo": {
                "@type": "ImageObject",
                "url": "https://aiagentrep.com/favicon.svg"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": "2025-01-01"
          })}
        </script>
      </Helmet>
      
      <div className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Setup Cost for AI Automation: What to Expect in 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Thinking about implementing AI automation but worried about the setup costs? 
              We break down everything you need to know about AI automation pricing, 
              from initial investment to ongoing fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#calculator"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('calculator').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Get Free Cost Estimate
              </a>
              <a 
                href="https://aiagentrep.com/demo" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                See AI Demo
              </a>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* What Determines AI Automation Setup Costs? */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Determines AI Automation Setup Costs?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Business Size & Complexity</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Number of employees and departments</li>
                    <li>• Existing systems and integrations</li>
                    <li>• Data volume and processing needs</li>
                    <li>• Custom workflow requirements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Technology Requirements</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• AI model complexity and training</li>
                    <li>• Integration with existing software</li>
                    <li>• Data migration and cleanup</li>
                    <li>• Security and compliance needs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Typical Price Ranges by Business Type */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Typical Price Ranges by Business Type
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Small Business</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$2,500 - $8,000</p>
                  <p className="text-gray-600 mb-4">Basic automation for lead generation and customer service</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Email automation</li>
                    <li>• Basic chatbot</li>
                    <li>• Lead scoring</li>
                    <li>• Simple integrations</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Medium Business</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$8,000 - $25,000</p>
                  <p className="text-gray-600 mb-4">Comprehensive automation with advanced features</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Multi-channel automation</li>
                    <li>• Advanced AI chatbot</li>
                    <li>• Predictive analytics</li>
                    <li>• Custom integrations</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Enterprise</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">$25,000+</p>
                  <p className="text-gray-600 mb-4">Full-scale AI transformation with custom solutions</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Custom AI models</li>
                    <li>• Enterprise integrations</li>
                    <li>• Advanced analytics</li>
                    <li>• Dedicated support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* One-Time Costs vs. Ongoing Fees */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                One-Time Costs vs. Ongoing Fees
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">One-Time Setup Costs</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span><strong>Initial Consultation:</strong> $500 - $2,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span><strong>System Design:</strong> $1,000 - $5,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span><strong>Implementation:</strong> $1,500 - $15,000</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 font-bold mr-2">•</span>
                      <span><strong>Training:</strong> $500 - $2,000</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Ongoing Monthly Fees</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Platform Subscription:</strong> $200 - $1,500/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Maintenance & Updates:</strong> $100 - $500/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>Support & Monitoring:</strong> $150 - $800/month</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 font-bold mr-2">•</span>
                      <span><strong>AI Model Training:</strong> $50 - $300/month</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Reduce Setup Costs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                How to Reduce Setup Costs Without Cutting Corners
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Start Small & Scale</h3>
                  <p className="text-gray-600 mb-4">
                    Begin with a pilot program focusing on one high-impact area. 
                    This reduces initial investment while proving ROI before expanding.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Choose one department or process</li>
                    <li>• Set clear success metrics</li>
                    <li>• Document learnings for expansion</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Leverage Existing Tools</h3>
                  <p className="text-gray-600 mb-4">
                    Integrate with your current software stack instead of replacing everything. 
                    This saves on both setup costs and training time.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Use existing CRM and marketing tools</li>
                    <li>• Leverage current data sources</li>
                    <li>• Minimize new software purchases</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Cost Calculator */}
            <div id="calculator" className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Calculate Your AI Automation Setup Cost
              </h2>
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Business Size
                    </label>
                    <select 
                      id="business-size-select"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      onChange={(e) => {
                        const size = e.target.value;
                        let setupCost = 0;
                        let monthlyCost = 0;
                        
                        switch(size) {
                          case 'small':
                            setupCost = 5500;
                            monthlyCost = 1200;
                            break;
                          case 'medium':
                            setupCost = 16500;
                            monthlyCost = 2500;
                            break;
                          case 'large':
                            setupCost = 35000;
                            monthlyCost = 5000;
                            break;
                          default:
                            setupCost = 0;
                            monthlyCost = 0;
                        }
                        
                        // Apply industry modifier to monthly cost only
                        const industrySelect = document.getElementById('industry-select');
                        if (industrySelect && industrySelect.value) {
                          const industry = industrySelect.value;
                          let monthlyModifier = 0;
                          
                          switch(industry) {
                            case 'healthcare':
                              monthlyModifier = 0.10;
                              break;
                            case 'real-estate':
                              monthlyModifier = 0;
                              break;
                            case 'legal':
                              monthlyModifier = 0.05;
                              break;
                            case 'consulting':
                              monthlyModifier = -0.10;
                              break;
                            case 'retail':
                              monthlyModifier = 0.10;
                              break;
                            case 'manufacturing':
                              monthlyModifier = 0;
                              break;
                            case 'other':
                              monthlyModifier = 0.05;
                              break;
                            default:
                              monthlyModifier = 0;
                          }
                          
                          monthlyCost = Math.round(monthlyCost * (1 + monthlyModifier));
                        }
                        
                        document.getElementById('setup-cost').textContent = `$${setupCost.toLocaleString()}`;
                        document.getElementById('monthly-cost').textContent = `$${monthlyCost.toLocaleString()}`;
                        document.getElementById('payback-period').textContent = size === 'small' ? '6-8 months' : size === 'medium' ? '8-12 months' : '12-18 months';
                      }}
                    >
                      <option value="">Select business size</option>
                      <option value="small">Small Business (1-10 employees)</option>
                      <option value="medium">Medium Business (11-50 employees)</option>
                      <option value="large">Large Business (50+ employees)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Industry
                    </label>
                    <select 
                      id="industry-select"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      onChange={(e) => {
                        // Trigger the business size calculation to update with industry modifier
                        const sizeSelect = document.getElementById('business-size-select');
                        if (sizeSelect && sizeSelect.value) {
                          sizeSelect.dispatchEvent(new Event('change'));
                        }
                      }}
                    >
                      <option value="">Select industry</option>
                      <option value="healthcare">Healthcare & Medical</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="legal">Legal Services</option>
                      <option value="consulting">Consulting</option>
                      <option value="retail">Retail & E-commerce</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-blue-600" id="setup-cost">$0</p>
                    <p className="text-gray-600">Setup Cost</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-blue-600" id="monthly-cost">$0</p>
                    <p className="text-gray-600">Monthly Cost</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-blue-600" id="payback-period">-</p>
                    <p className="text-gray-600">Payback Period</p>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-gray-600 mb-4">
                    *Estimates based on typical automation needs. Get your exact quote below.
                  </p>
                  <a 
                    href="/demo" 
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Get Exact Quote
                  </a>
                </div>
              </div>
            </div>



            {/* Is AI Automation Worth the Investment? */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Is AI Automation Worth the Investment?
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  The short answer: <strong>Yes, absolutely.</strong> Here's why AI automation 
                  typically pays for itself within 6-12 months:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Immediate Benefits</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• 24/7 customer service availability</li>
                      <li>• Faster lead response times</li>
                      <li>• Reduced manual data entry</li>
                      <li>• Improved customer satisfaction</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Long-term Value</h3>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Scalable growth without proportional costs</li>
                      <li>• Data-driven insights for better decisions</li>
                      <li>• Competitive advantage in your market</li>
                      <li>• Increased team productivity</li>
                    </ul>
                  </div>
                </div>


              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFAQ(0)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">What's the typical ROI of AI automation?</h3>
                    <span className="text-blue-600 text-2xl font-bold">
                      {openFAQ === 0 ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === 0 && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">
                        Most businesses see a 300-500% ROI within the first year. Small businesses typically see payback in 6-12 months, while larger enterprises may take 12-18 months due to higher initial investment.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFAQ(1)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">How long does AI automation setup usually take?</h3>
                    <span className="text-blue-600 text-2xl font-bold">
                      {openFAQ === 1 ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === 1 && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">
                        Basic automation can be set up in 2-4 weeks. More complex implementations with custom integrations typically take 6-12 weeks. We provide a detailed timeline during your initial consultation.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFAQ(2)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">Can I automate without replacing my current systems?</h3>
                    <span className="text-blue-600 text-2xl font-bold">
                      {openFAQ === 2 ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === 2 && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">
                        Absolutely! We specialize in integrating with existing software like CRM systems, email platforms, and social media tools. This approach reduces costs and minimizes disruption to your workflow.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="bg-gray-50 rounded-lg border border-gray-200">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                    onClick={() => toggleFAQ(3)}
                  >
                    <h3 className="text-xl font-semibold text-gray-800">What ongoing support is included?</h3>
                    <span className="text-blue-600 text-2xl font-bold">
                      {openFAQ === 3 ? '−' : '+'}
                    </span>
                  </button>
                  {openFAQ === 3 && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600">
                        All our packages include technical support, ongoing monitoring, and regular system updates. We also conduct performance reviews to ensure your automation continues delivering results.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Internal Links Section */}
            <div className="mb-16 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="https://aiagentrep.com/demo" className="text-blue-600 hover:text-blue-800 font-medium">
                  → See AI Automation in Action
                </a>
                <a href="/checklist" className="text-blue-600 hover:text-blue-800 font-medium">
                  → Download Our AI Implementation Checklist
                </a>
                <a href="/demo" className="text-blue-600 hover:text-blue-800 font-medium">
                  → Get Your Custom Cost Estimate
                </a>
                <a href="/pricing" className="text-blue-600 hover:text-blue-800 font-medium">
                  → View Our Transparent Pricing
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Calculate Your Exact Setup Cost?
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Get a personalized cost estimate based on your specific business needs and goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/demo" 
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
                >
                  Book a Free Automation Audit
                </a>
                <a 
                  href="https://aiagentrep.com/demo" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  See Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SetupCostForAIAutomation; 