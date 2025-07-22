import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const AIDemoLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };



  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: '📅',
      title: 'Fill Your Calendar While You Sleep',
      description: 'AI-driven phone scripts & live booking that work 24/7'
    },
    {
      icon: '💬',
      title: 'Convert Cold Leads Into Conversations',
      description: 'Triggered SMS & email sequences that nurture prospects'
    },
    {
      icon: '🔍',
      title: 'Never Drop a Follow-Up Again',
      description: 'Score & prioritize leads automatically with smart reminders'
    },
    {
      icon: '🔌',
      title: 'Plug Into Any CRM in Minutes',
      description: 'Auto-schedule meetings & integrate with your existing tools'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Instantly Spin Up Your Live Demo',
      description: 'Pick a time on our calendar and see your AI automation in action',
      link: 'https://calendly.com/arturo312/ai-agency',
      linkText: 'Schedule Demo'
    },
    {
      number: '2',
      title: 'Customize to Your Goals',
      description: 'Let us know which parts of sales or support you want automated'
    },
    {
      number: '3',
      title: 'See Results in Real Time',
      description: 'We\'ll spin up a live demo, answer your questions, and get you 100% set up'
    }
  ];

  const faqs = [
    {
      question: 'Do I need to code?',
      answer: 'Not at all! Our AI automation platform is completely no-code. We handle all the technical setup while you focus on growing your business.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We integrate with all major CRMs (Salesforce, HubSpot, Pipedrive), calendar systems (Google Calendar, Outlook), payment processors (Stripe, PayPal), and communication platforms (Slack, Teams).'
    },
    {
      question: 'How long does it take to launch?',
      answer: 'Most clients see their AI automation live within 24-48 hours after our demo. We can have basic workflows running the same day.'
    },
    {
      question: 'Is the demo really free?',
      answer: 'Absolutely! Our free AI automation demo is completely free with no strings attached. We want you to see the value before making any decisions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free AI Automation Demo | AI Agent Rep</title>
        <meta name="description" content="Try our Free AI Automation Demo today and see how custom AI agents can auto-post on socials, nurture leads, schedule appointments, and integrate seamlessly with your CRM." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Free AI Automation Demo",
            "description": "See how custom AI agents can automate your sales, marketing, and support workflows.",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">🤖</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">AI AGENT REP</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            See Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#52c4a0] to-[#1da1f2]">
              AI Automation in Action
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Get your free AI automation demo and see how our custom AI agents can instantly:
          </p>
          
          <ul className="text-lg text-gray-600 mb-8 space-y-2 max-w-2xl mx-auto">
            <li>• Auto-post on socials</li>
            <li>• Nurture & qualify leads via SMS & email</li>
            <li>• Schedule appointments and follow-ups</li>
            <li>• Seamlessly integrate with your CRM, calendar & payments</li>
          </ul>

          {/* Email Form - Above the fold */}
            <form 
              name="ai-demo" 
              method="POST" 
              data-netlify="true" 
              netlify-honeypot="bot-field"
              action="/success"
              className="max-w-md mx-auto mb-8"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="ai-demo" />
              <input type="hidden" name="source" value="ai_demo_landing_page" />
              <div className="hidden">
                <input name="bot-field" />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your business email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#52c4a0] focus:border-transparent outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Demo'}
                  </button>
                </div>
                <p className="text-sm text-gray-500">No spam. We hate it too.</p>
              </div>
            </form>


        </section>



        {/* Benefits Grid */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Our Free AI Automation Demo Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How the Demo Works */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-gray-50">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Book Your Free AI Automation Demo in 30 Seconds</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-3">{step.description}</p>
                  {step.link && (
                    <a
                      href={step.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
                    >
                      {step.linkText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg relative">
              <div className="absolute -top-3 left-6 w-6 h-6 bg-gray-50 transform rotate-45"></div>
              <p className="text-gray-600 mb-4">"Our last client saw 3× more qualified leads in 7 days after implementing their AI automation."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Marketing Agency Owner</div>
                  <div className="text-sm text-gray-500">5-star review</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg relative">
              <div className="absolute -top-3 left-6 w-6 h-6 bg-gray-50 transform rotate-45"></div>
              <p className="text-gray-600 mb-4">"The AI agents handle all our lead qualification and scheduling. It's like having a full-time assistant."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Real Estate Broker</div>
                  <div className="text-sm text-gray-500">5-star review</div>
                </div>
              </div>
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
        <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center bg-gradient-to-r from-[#52c4a0] to-[#1da1f2] rounded-lg mx-4 mb-8 shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Stop Chasing Leads?</h2>
          <p className="text-xl text-white/90 mb-4">Book your free AI automation demo today and let our agents work for you.</p>
          <p className="text-lg text-white/80 mb-8 font-semibold">Only 5 demo slots left this week!</p>
          <a
            href="https://calendly.com/arturo312/ai-agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#52c4a0] font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get My Free AI Automation Demo
          </a>
        </section>
      </div>
    </>
  );
};

export default AIDemoLanding; 