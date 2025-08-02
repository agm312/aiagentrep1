import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const ROIOfAIAutomation = () => {
  const [calculatorData, setCalculatorData] = useState({
    totalInvestment: 50000,
    annualSavings: 75000,
    additionalRevenue: 25000,
    timeframe: 3
  });

  const [roiResult, setRoiResult] = useState(null);

  const calculateROI = useCallback(() => {
    const { totalInvestment, annualSavings, additionalRevenue, timeframe } = calculatorData;
    const totalBenefits = (annualSavings + additionalRevenue) * timeframe;
    const roi = ((totalBenefits - totalInvestment) / totalInvestment) * 100;
    setRoiResult(roi.toFixed(2));
  }, [calculatorData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCalculatorData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  React.useEffect(() => {
    calculateROI();
  }, [calculateROI]);

  return (
    <Layout>
      <Helmet>
        <title>ROI of AI Automation: How to Measure, Calculate & Maximize</title>
        <meta name="description" content="Learn how to measure the ROI of AI automation with our easy calculator, real-world examples, and expert tips. Includes images, internal/external links & a YouTube embed." />
        <meta name="keywords" content="ROI of AI automation, AI ROI calculator, automation ROI, measure AI benefits, AI automation return on investment" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ROI of AI Automation: How to Measure, Calculate & Maximize" />
        <meta property="og:description" content="Learn how to measure the ROI of AI automation with our easy calculator, real-world examples, and expert tips." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://aiagentrep.com/roi-of-ai-automation" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ROI of AI Automation: How to Measure, Calculate & Maximize" />
        <meta name="twitter:description" content="Learn how to measure the ROI of AI automation with our easy calculator, real-world examples, and expert tips." />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "ROI of AI Automation: How to Measure, Calculate & Maximize",
            "description": "Learn how to measure the ROI of AI automation with our easy calculator, real-world examples, and expert tips.",
            "image": "https://aiagentrep.com/roi-calculator-diagram.jpg",
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
            "datePublished": "2025-01-11",
            "dateModified": "2025-01-11",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://aiagentrep.com/roi-of-ai-automation"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ROI of AI Automation: How to Measure, Calculate & Maximize
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-blue-100">
                Discover the true return on investment of AI automation with our comprehensive guide and interactive calculator
              </p>
              
              {/* Key Benefits - Enhanced with larger icons and third bullet */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center mb-12 text-blue-100">
                <div className="flex items-center">
                  <span className="text-green-400 mr-3 text-2xl" aria-hidden="true">✓</span>
                  <span className="text-lg">Calculate AI investment payback instantly</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3 text-2xl" aria-hidden="true">✓</span>
                  <span className="text-lg">Learn proven tactics to boost ROI</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-400 mr-3 text-2xl" aria-hidden="true">✓</span>
                  <span className="text-lg">Access top AI ROI studies & case studies</span>
                </div>
              </div>
              

              
              {/* Enhanced CTAs with better hierarchy */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a 
                  href="#calculator" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  Try Our Calculator
                </a>
                <Link 
                  to="/demo" 
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {/* Calculator Section - Moved to top */}
          <section id="calculator" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              AI Automation ROI Calculator
            </h2>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Input Form */}
                <div>
                  <h3 className="text-xl font-semibold mb-6">Enter Your Data</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Investment ($)
                      </label>
                      <input
                        type="number"
                        name="totalInvestment"
                        value={calculatorData.totalInvestment}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="50000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Annual Savings ($)
                      </label>
                      <input
                        type="number"
                        name="annualSavings"
                        value={calculatorData.annualSavings}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="75000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Revenue ($)
                      </label>
                      <input
                        type="number"
                        name="additionalRevenue"
                        value={calculatorData.additionalRevenue}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="25000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeframe (Years)
                      </label>
                      <input
                        type="number"
                        name="timeframe"
                        value={calculatorData.timeframe}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="3"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="bg-white p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Your ROI Results</h3>
                  
                  {roiResult && (
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">
                        {roiResult}%
                      </div>
                      <div className="text-lg text-gray-600 mb-4">
                        Return on Investment
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span>Total Investment:</span>
                          <span className="font-semibold">${calculatorData.totalInvestment.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Annual Benefits:</span>
                          <span className="font-semibold">${(calculatorData.annualSavings + calculatorData.additionalRevenue).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Benefits ({calculatorData.timeframe} years):</span>
                          <span className="font-semibold">${((calculatorData.annualSavings + calculatorData.additionalRevenue) * calculatorData.timeframe).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Net Profit:</span>
                          <span className="font-semibold text-green-600">
                            ${(((calculatorData.annualSavings + calculatorData.additionalRevenue) * calculatorData.timeframe) - calculatorData.totalInvestment).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link 
                  to="/demo" 
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Detailed ROI Analysis
                </Link>
              </div>
            </div>
          </section>
          
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is ROI of AI Automation?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Return on Investment (ROI) of AI automation measures the financial benefits your business gains from implementing AI solutions compared to the costs involved. It's the key metric that determines whether your AI automation initiatives are delivering real value to your bottom line.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In today's competitive business landscape, understanding and maximizing AI automation ROI is crucial for making informed decisions about technology investments. Companies that effectively measure and optimize their AI ROI typically see 3-5x returns within the first 18 months.
            </p>
            
            {/* ROI Formula Diagram */}
            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4">The ROI Formula</h3>
              <div className="text-center">
                <div className="text-2xl font-mono bg-white p-4 rounded border">
                  ROI = (Total Benefits - Total Investment) ÷ Total Investment × 100
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Where Total Benefits = (Annual Savings + Additional Revenue) × Timeframe
                </p>
              </div>
            </div>
          </section>

          {/* How to Measure Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How to measure ROI of AI automation?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Costs to Consider</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Implementation Costs:</strong> Software licenses, hardware, initial setup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Training Costs:</strong> Employee training, change management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Maintenance Costs:</strong> Ongoing support, updates, monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span><strong>Integration Costs:</strong> Connecting with existing systems</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">Benefits to Calculate</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Labor Savings:</strong> Reduced manual work hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Revenue Uplift:</strong> Increased sales from automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Error Reduction:</strong> Cost savings from fewer mistakes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span><strong>Scalability Benefits:</strong> Ability to handle more volume</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>



          {/* Real-World Examples */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Real-World AI Automation ROI Examples
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">E-commerce Customer Service Automation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Investment:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• AI Chatbot Implementation: $25,000</li>
                      <li>• Integration & Training: $10,000</li>
                      <li>• Annual Maintenance: $5,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Returns:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Labor Savings: $80,000/year</li>
                      <li>• Increased Sales: $40,000/year</li>
                      <li>• Error Reduction: $15,000/year</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <strong>ROI: 270% in first year</strong>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Manufacturing Process Automation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Investment:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• AI Vision System: $50,000</li>
                      <li>• Equipment Integration: $30,000</li>
                      <li>• Staff Training: $15,000</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Returns:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Quality Improvement: $60,000/year</li>
                      <li>• Production Increase: $80,000/year</li>
                      <li>• Waste Reduction: $25,000/year</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-100 rounded">
                  <strong>ROI: 175% in first year</strong>
                </div>
              </div>
            </div>
          </section>





          {/* FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50">
                  What factors affect AI automation ROI?
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Key factors include implementation complexity, industry type, company size, existing technology infrastructure, employee adoption rates, and the specific use case being automated. Companies with clear processes and high-volume repetitive tasks typically see higher ROI.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50">
                  How often should I recalculate ROI?
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Recalculate ROI quarterly during the first year, then annually. Monitor key metrics monthly to ensure you're on track. Major changes in business processes or technology should trigger immediate ROI reassessment.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50">
                  What's the typical payback period for AI automation?
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Most AI automation projects show positive ROI within 6-18 months. Simple process automation can pay for itself in 3-6 months, while complex enterprise solutions may take 12-24 months to break even.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50">
                  How do I measure intangible benefits?
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    Intangible benefits like improved customer satisfaction, employee morale, and brand reputation can be quantified through surveys, retention rates, and customer lifetime value calculations. Assign conservative monetary values to include in ROI calculations.
                  </p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg">
                <button className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50">
                  What's the difference between ROI and TCO?
                </button>
                <div className="px-6 pb-4">
                  <p className="text-gray-700">
                    ROI (Return on Investment) measures the percentage return on your investment. TCO (Total Cost of Ownership) includes all costs over the lifetime of the solution. Both metrics are important - ROI shows profitability, while TCO shows the full financial impact.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Calculate Your AI Automation ROI?
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Get a detailed ROI analysis tailored to your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Free ROI Analysis
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ROIOfAIAutomation; 