import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ChicagoAIAutomation = () => {
  const features = [
    {
      icon: "📞",
      title: "Automated Booking Calls",
      description: "AI-powered call scripts that work 24/7 in Chicago time zone"
    },
    {
      icon: "💬",
      title: "Smart SMS Campaigns",
      description: "Automated text messaging for Chicago-area leads and customers"
    },
    {
      icon: "🎯",
      title: "Lead Qualification",
      description: "Intelligent lead scoring for Chicago market opportunities"
    },
    {
      icon: "📱",
      title: "Social Media Auto-Posting",
      description: "AI-crafted posts for your Chicago business social presence"
    }
  ];

  const testimonials = [
    {
      quote: "AI Agent Rep transformed our Chicago real estate business. We're handling 3x more leads without hiring additional staff.",
      author: "Sarah Johnson",
      company: "Chicago Real Estate Partners",
      location: "Lincoln Park, Chicago"
    },
    {
      quote: "The 24/7 automation is perfect for our Chicago service business. No more missed calls after hours!",
      author: "Mike Rodriguez",
      company: "Windy City Home Services",
      location: "Wicker Park, Chicago"
    }
  ];

  const faqs = [
    {
      q: "How much does AI automation cost for Chicago businesses?",
      a: "Our pricing starts at $5,000/month for the Build plan, which includes up to 3,000 leads, 10,000 SMS, and 500 calls. We offer custom pricing for larger Chicago enterprises."
    },
    {
      q: "Can you integrate with our existing Chicago business systems?",
      a: "Absolutely! We integrate with all major CRM systems, calendar platforms, and business tools used by Chicago companies. Our team handles the setup for you."
    },
    {
      q: "What kind of support do you provide for Chicago clients?",
      a: "We provide 24/7 monitoring and support, with Chicago business hours (9 AM - 6 PM CT) for direct account management. All plans include ongoing optimization and training."
    }
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>AI Automation Services in Chicago | AI Agent Rep</title>
        <meta name="description" content="AI Agent Rep provides Chicago businesses with cutting-edge AI automation for calls, SMS, lead follow-up, and social posting. Boost efficiency and sales today!" />
        <link rel="canonical" href="https://www.aiagentrep.com/chicago-ai-automation" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="AI Automation Services in Chicago | AI Agent Rep" />
        <meta property="og:description" content="AI Agent Rep provides Chicago businesses with cutting-edge AI automation for calls, SMS, lead follow-up, and social posting. Boost efficiency and sales today!" />
        <meta property="og:url" content="https://www.aiagentrep.com/chicago-ai-automation" />
        <meta property="og:type" content="website" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "AI Agent Rep",
            "description": "AI Automation Services for Chicago Businesses",
            "url": "https://www.aiagentrep.com",
            "telephone": "+1-312-555-AIAG",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Chicago",
              "addressRegion": "IL",
              "addressCountry": "US"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "timeZone": "America/Chicago"
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-500 to-teal-700 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI Automation Services for Chicago Businesses
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Automate calls, SMS, scheduling & more—24/7 support built for the Chicago market.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/demo" 
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
              >
                Free AI Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Chicago-Focused AI Automation Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Chicago Loves Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Why Chicago Businesses Choose <span className="text-teal-600">AI Agent Rep</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Chicago's competitive business landscape demands efficiency and innovation. Our AI automation solutions address the unique challenges faced by Chicago businesses, from no-shows in service industries to staffing shortages in high-demand periods.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  With 24/7 automation that operates in Chicago time zone, your business never misses an opportunity. Whether you're in the Loop, Lincoln Park, or serving the entire Chicagoland area, our AI works around the clock to grow your business.
                </p>
              </div>
              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-teal-800">Chicago Business Benefits</h3>
                <ul className="space-y-3 text-teal-700">
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">✓</span>
                    Cut labor costs by 50%
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">✓</span>
                    Improve response times in Chicago time zone
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">✓</span>
                    Handle 3x more leads without hiring
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">✓</span>
                    Reduce no-shows with automated reminders
                  </li>
                  <li className="flex items-center">
                    <span className="text-teal-500 mr-2">✓</span>
                    24/7 availability for Chicago customers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Chicago Businesses Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-2xl mb-4">"</div>
                  <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-teal-600">{testimonial.company}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              How Chicago AI Automation Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Onboard</h3>
                <p className="text-gray-600">We integrate with your existing Chicago business systems and train our AI on your specific workflows.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Automate</h3>
                <p className="text-gray-600">Your AI assistant begins handling calls, texts, and follow-ups 24/7 in Chicago time zone.</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Grow</h3>
                <p className="text-gray-600">Watch your Chicago business scale efficiently with automated lead generation and customer service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Contact */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Serving All Chicago-Area Businesses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Chicago Coverage</h3>
                <p className="text-teal-100 mb-4">Serving all Chicago-area including:</p>
                <ul className="text-teal-100 space-y-1">
                  <li>• Downtown Chicago (Loop, River North)</li>
                  <li>• North Side (Lincoln Park, Lakeview, Wicker Park)</li>
                  <li>• South Side (Hyde Park, Bridgeport)</li>
                  <li>• West Side (West Loop, Bucktown)</li>
                  <li>• Suburban Chicagoland</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3 text-teal-100">
                  <p>📞 <strong>Phone:</strong> 404-955-7869</p>
                  <p>📧 <strong>Email:</strong> info@aiagentrep.com</p>
                  <p>🕒 <strong>Business Hours:</strong> Mon–Fri, 9 AM–6 PM CT</p>
                  <p>🌍 <strong>24/7 AI Support:</strong> Always available</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Automate Your Chicago Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Join hundreds of Chicago businesses already using AI Agent Rep to grow their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/demo" 
                className="bg-teal-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-600 transition-colors"
              >
                Start Free Demo
              </Link>
              <Link 
                to="/strategy-call" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                Book Strategy Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChicagoAIAutomation; 