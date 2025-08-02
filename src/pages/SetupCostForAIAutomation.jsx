import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const SetupCostForAIAutomation = () => {
  // Move all useState hooks to the top level - outside of try-catch
  const [openFAQ, setOpenFAQ] = useState(null);
  const [businessSize, setBusinessSize] = useState('small');
  const [industry, setIndustry] = useState('other');

  try {
    console.log("✅ SetupCostForAIAutomation component starting");
    console.log("✅ State initialized");

    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

    // Calculate costs based on selections
    const calculateCosts = () => {
      const baseSetupCosts = {
        small: 5000,
        medium: 10000,
        large: 25000
      };
      
      const baseMonthlyCosts = {
        small: 1200,
        medium: 2500,
        large: 5000
      };
      
      const industryModifiers = {
        healthcare: 1.10, // +10%
        realestate: 1.00, // 0%
        legal: 1.05,      // +5%
        consulting: 0.90, // -10%
        retail: 1.10,     // +10%
        manufacturing: 1.00, // 0%
        other: 1.00       // 0%
      };
      
      const setupCost = baseSetupCosts[businessSize];
      const monthlyCost = Math.round(baseMonthlyCosts[businessSize] * industryModifiers[industry]);
      const paybackPeriod = Math.ceil(setupCost / monthlyCost);
      
      return { setupCost, monthlyCost, paybackPeriod };
    };

    const { setupCost, monthlyCost, paybackPeriod } = calculateCosts();

    console.log("✅ About to render JSX");

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
          
          {/* Simplified Schema Markup */}
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Setup Cost for AI Automation",
              "description": "Discover the full cost breakdown of setting up AI automation—from consultation to monthly fees.",
              "url": "https://aiagentrep.com/setup-cost-for-ai-automation"
            }`}
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
                      <li>• Data security and compliance needs</li>
                      <li>• Custom development requirements</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Typical Price Ranges */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Typical Price Ranges by Business Type
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Small Business</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">$2,500 - $5,000</p>
                    <p className="text-sm text-gray-600 mb-4">(set up cost)</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 1-10 employees</li>
                      <li>• Basic automation workflows</li>
                      <li>• Standard integrations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Medium Business</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">$5,000 - $10,000</p>
                    <p className="text-sm text-gray-600 mb-4">(set up cost)</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 11-50 employees</li>
                      <li>• Advanced automation</li>
                      <li>• Custom integrations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Large Business</h3>
                    <p className="text-3xl font-bold text-blue-600 mb-2">$10,000 - $25,000</p>
                    <p className="text-sm text-gray-600 mb-4">(set up cost)</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 50+ employees</li>
                      <li>• Enterprise automation</li>
                      <li>• Complex integrations</li>
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
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">One-Time Setup Costs</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Consultation & Planning:</strong> $500 - $2,000</span>
                      </li>
                      <li>
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>System Setup:</strong> $1,000 - $5,000</span>
                      </li>
                      <li>
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Integration:</strong> $500 - $3,000</span>
                      </li>
                      <li>
                        <span className="text-green-600 font-bold mr-2">•</span>
                        <span><strong>Data Migration:</strong> $300 - $1,500</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Ongoing Monthly Fees</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li>
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Platform Subscription:</strong> $200 - $1,000</span>
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Maintenance & Updates:</strong> $100 - $500</span>
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>Support & Monitoring:</strong> $150 - $750</span>
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold mr-2">•</span>
                        <span><strong>AI Model Training:</strong> $50 - $300</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cost Calculator */}
              <div id="calculator" className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Calculate Your AI Automation Setup Cost
                </h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <label htmlFor="business-size-select" className="block text-sm font-medium text-gray-700 mb-2">
                        Business Size
                      </label>
                      <select
                        id="business-size-select"
                        value={businessSize}
                        onChange={(e) => setBusinessSize(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      >
                        <option value="small">Small Business (1-10 employees)</option>
                        <option value="medium">Medium Business (11-50 employees)</option>
                        <option value="large">Large Business (50+ employees)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="industry-select" className="block text-sm font-medium text-gray-700 mb-2">
                        Industry
                      </label>
                      <select
                        id="industry-select"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900"
                      >
                        <option value="other">Other</option>
                        <option value="healthcare">Healthcare & Medical</option>
                        <option value="realestate">Real Estate</option>
                        <option value="legal">Legal Services</option>
                        <option value="consulting">Consulting</option>
                        <option value="retail">Retail & E-Commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Estimated Costs</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Setup Cost</p>
                        <p className="text-2xl font-bold text-blue-600">${setupCost.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
                        <p className="text-2xl font-bold text-green-600">${monthlyCost.toLocaleString()}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-1">Payback Period</p>
                        <p className="text-2xl font-bold text-purple-600">{paybackPeriod} months</p>
                      </div>
                    </div>
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
                      Begin with core automation workflows and gradually expand. This approach reduces initial costs while proving ROI.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Focus on high-impact, low-complexity tasks first</li>
                      <li>• Use existing tools and integrations</li>
                      <li>• Implement in phases rather than all at once</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Choose the Right Partner</h3>
                    <p className="text-gray-600 mb-4">
                      Work with experienced AI automation agencies that understand your industry and can optimize costs.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Look for industry-specific experience</li>
                      <li>• Ask about cost optimization strategies</li>
                      <li>• Request detailed breakdowns of all fees</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Is AI Automation Worth the Investment? */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Is AI Automation Worth the Investment?
                </h2>
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                      <h3 className="text-2xl font-bold text-green-600 mb-2">40%</h3>
                      <p className="text-gray-600">Average time savings per employee</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600 mb-2">3-6 months</h3>
                      <p className="text-gray-600">Typical payback period</p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-purple-600 mb-2">300%</h3>
                      <p className="text-gray-600">Average ROI over 3 years</p>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-lg text-gray-700 mb-4">
                      Most businesses see a return on their AI automation investment within 3-6 months, 
                      with ongoing benefits that compound over time.
                    </p>
                    <a 
                      href="https://aiagentrep.com/demo" 
                      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                    >
                      See Live Demo
                    </a>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      question: "How long does AI automation setup typically take?",
                      answer: "Setup time varies by complexity, but most businesses can expect 2-6 weeks from initial consultation to full implementation. Simple workflows may take just a few days, while complex enterprise solutions can take 8-12 weeks."
                    },
                    {
                      question: "Can I automate without replacing my current systems?",
                      answer: "Absolutely! Most AI automation solutions integrate with your existing software and tools. We work with your current tech stack to add automation capabilities without disrupting your workflow."
                    },
                    {
                      question: "What ongoing support is included?",
                      answer: "All our packages include technical support, ongoing monitoring, and regular system updates. We also conduct performance reviews to ensure your automation continues delivering results."
                    },
                    {
                      question: "How do I know if AI automation is right for my business?",
                      answer: "If you're spending significant time on repetitive tasks, dealing with customer inquiries, or managing data entry, AI automation can likely help. We offer free consultations to assess your specific needs and potential ROI."
                    },
                    {
                      question: "What's the ROI of AI automation?",
                      answer: "Most businesses see 200-400% ROI within the first year. This comes from time savings, improved customer response times, reduced errors, and increased productivity. The exact ROI depends on your specific use cases and implementation."
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                        <span className="text-blue-600">
                          {openFAQ === index ? '−' : '+'}
                        </span>
                      </button>
                      {openFAQ === index && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">
                  Ready to Calculate Your Exact Setup Cost?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Get a personalized cost estimate and see how AI automation can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://aiagentrep.com/demo" 
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200"
                  >
                    See AI Demo
                  </a>
                  <a 
                    href="#calculator"
                    className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('calculator').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                  >
                    Get Free Estimate
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  } catch (error) {
    console.error("❌ Error in SetupCostForAIAutomation:", error);
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-4">Please refresh the page or contact support.</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }
};

export default SetupCostForAIAutomation; 