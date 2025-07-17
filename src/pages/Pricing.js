import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ROI_BASE = 0.085; // 8.5% conversion rate for ROI calculation
const AVG_DEAL = 1000; // Average deal value in USD

const plans = [
  {
    name: 'Build',
    price: '$5,000/mo',
    features: [
      'Up to 3,000 leads',
      '10,000 SMS',
      '500 calls',
      '15 social media posts',
      'CRM & Calendar sync',
      'Custom onboarding',
      'Live reporting dashboard',
    ],
    cta: 'Try Free AI Demo',
    ctaLink: '/demo',
  },
  {
    name: 'Grow',
    price: '$10,000/mo',
    features: [
      '25,000 SMS',
      '1,500 calls',
      '5,000 leads',
      '50 social media posts',
      'Priority AI training',
      'Slack integration',
      'API access',
      'Multi-brand/client support',
    ],
    cta: 'Try Free AI Demo',
    ctaLink: '/demo',
  },
  {
    name: 'Dominate',
    price: 'Custom',
    features: [
      '🏆 Strategy-first partnership',
      '📞 Required strategy call',
      '📊 Fully customized automation',
      '💬 Dedicated AI specialist',
      '🧠 NLP model fine-tuning',
      '📈 Conversion tracking setup',
      '🛠️ White-label and on-call support',
    ],
    cta: 'Book Strategy Call',
    ctaLink: '/strategy-call',
  },
];

const FAQS = [
  {
    q: 'What exactly do I get for $5,000/month?',
    a: `You get a full AI-powered automation suite tailored to your business. This includes booking calls, lead follow-ups, text campaigns, appointment scheduling, CRM sync, reporting, and even social media auto posts — all done for you. It's like hiring 3–5 full-time assistants, without the overhead.`,
    icon: '💰'
  },
  {
    q: 'Is this plug-and-play or do I need to set anything up?',
    a: `We handle everything. From onboarding, CRM/API integrations, to setting up call/text scripts and automation flows — we make sure it's ready to go for your business within days, not weeks.`,
    icon: '⚡'
  },
  {
    q: 'Can this work for my industry?',
    a: `Yes — while we specialize in service-based and sales-driven businesses, the AI tools are flexible and can adapt to most industries including real estate, home services, agencies, and eCommerce. We tailor the automations to fit your specific workflows.`,
    icon: '🎯'
  },
  {
    q: 'Will I lose control over my communication with leads or clients?',
    a: `Not at all. You stay in control. We set up the AI to work with your tone, timing, and preferences. You'll also get a dashboard to monitor messages, bookings, and performance — or pause anything anytime.`,
    icon: '🔒'
  },
  {
    q: 'What if something breaks or stops working?',
    a: `All plans come with ongoing monitoring and support. Higher plans include Slack channels, priority tickets, and even dedicated account managers. We're on top of it before you even notice.`,
    icon: '🛠️'
  },
  {
    q: 'Can I scale or customize the services?',
    a: `Absolutely. You can add more features, increase volume, or even request custom automations or API integrations. For high-tier clients, we offer fully bespoke AI workflows, branding, and white-label options.`,
    icon: '📈'
  },
  {
    q: 'Why should I choose you over just using AI tools myself?',
    a: `Most AI tools give you the pieces — we build the entire system. Instead of learning, testing, and managing 10 tools, you get a done-for-you, proven AI engine that works while you sleep. We're not a tool — we're your AI operations department.`,
    icon: '🤖'
  },
];

export default function Pricing() {
  const [newLeads, setNewLeads] = useState(500);
  const [agedLeads, setAgedLeads] = useState(50);
  const [upsell, setUpsell] = useState(5000);
  const [openFaq, setOpenFaq] = useState(null);

  const calcRevenue = () => {
    const newRev = newLeads * ROI_BASE * AVG_DEAL;
    const agedRev = agedLeads * ROI_BASE * AVG_DEAL * 0.7;
    const upsellRev = upsell * 0.12 * AVG_DEAL;
    return Math.round(newRev + agedRev + upsellRev);
  };

  return (
    <section className="bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Title above plans/prices */}
        <h2 className="text-4xl font-extrabold text-center mb-10 text-white">Choose Your Plan</h2>
        {/* New Card-Based Plans Layout */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center mb-16">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`flex-1 bg-white rounded-2xl shadow-lg p-6 lg:p-8 flex flex-col items-center border-2 transition-all duration-200
                ${plan.name === 'Build' ? 'border-teal-400 scale-105 shadow-2xl' : 'border-gray-200'}
                ${plan.name === 'Dominate' ? 'bg-gray-50 text-gray-900' : 'text-gray-900'}
              `}
              style={{ minWidth: 280, maxWidth: 350 }}
            >
              <div className="text-2xl font-bold mb-2 text-center">{plan.name}</div>
              <div className={`text-3xl font-extrabold mb-4 text-center ${plan.name === 'Build' ? 'text-teal-500' : plan.name === 'Grow' ? 'text-gray-800' : 'text-gray-500'}`}>{plan.price}</div>
              <ul className="mb-8 w-full text-base text-left space-y-3">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">✔</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to={plan.ctaLink}
                className={`w-full text-center rounded-lg px-4 lg:px-6 py-3 font-bold transition text-sm lg:text-base
                  ${plan.name === 'Build' ? 'bg-teal-400 text-white hover:bg-teal-500' : ''}
                  ${plan.name === 'Grow' ? 'bg-gray-900 text-white border border-gray-300 hover:bg-gray-800' : ''}
                  ${plan.name === 'Dominate' ? 'bg-white text-teal-600 border-2 border-teal-400 hover:bg-teal-50' : ''}
                `}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
        {/* Title above calculator */}
        <h2 className="text-3xl font-bold text-center mb-8 text-white">See Your AI Revenue Boost</h2>
        <div className="mb-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Sliders */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 shadow-soft flex flex-col items-center">
              <div className="w-full space-y-8">
                <div>
                  <label className="block mb-2 font-semibold">Amount of New Leads (under 60 days old):</label>
                  <input type="range" min="0" max="10000" step="100" value={newLeads} onChange={e => setNewLeads(Number(e.target.value))} className="w-full accent-teal-400" />
                  <div className="text-3xl font-bold text-teal-400 text-center mt-2">{newLeads.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Amount of Aged Leads (over 60 days old):</label>
                  <input type="range" min="0" max="10000" step="100" value={agedLeads} onChange={e => setAgedLeads(Number(e.target.value))} className="w-full accent-teal-400" />
                  <div className="text-3xl font-bold text-teal-400 text-center mt-2">{agedLeads.toLocaleString()}</div>
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Amount of Current Customers to Upsell To:</label>
                  <input type="range" min="0" max="10000" step="100" value={upsell} onChange={e => setUpsell(Number(e.target.value))} className="w-full accent-teal-400" />
                  <div className="text-3xl font-bold text-teal-400 text-center mt-2">{upsell.toLocaleString()}</div>
                </div>
              </div>
            </div>
            {/* ROI Result */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 shadow-soft flex flex-col justify-center items-center">
              <div className="text-2xl font-bold mb-4 text-gray-200">Additional Revenue:</div>
              <div className="text-5xl lg:text-6xl font-extrabold text-teal-400 mb-4">${calcRevenue().toLocaleString()}</div>
              <div className="text-gray-400 text-center text-sm lg:text-base">These numbers are based on typical results seen with our home improvement partners. Your results may vary.</div>
            </div>
          </div>
        </div>
        {/* Banner Section */}
        <div className="mb-12 flex justify-center">
          <div className="w-full rounded-3xl bg-teal-400 flex flex-col items-center py-12 lg:py-16 px-4 relative" style={{maxWidth: 900}}>
            <div className="text-white text-5xl lg:text-7xl font-extrabold mb-4 text-center drop-shadow-lg">Up to 3×</div>
            <div className="text-white text-xl lg:text-3xl font-semibold mb-2 text-center">cheaper than hiring staff</div>
            <div className="text-white text-sm lg:text-base mb-8 text-center opacity-90">No salaries, benefits, or training costs</div>
            <Link to="/demo" className="border-2 border-dashed border-white text-white px-6 lg:px-8 py-3 rounded-full text-base lg:text-lg font-semibold hover:bg-white hover:text-teal-500 transition-colors duration-200">
              Try Free AI Demo
            </Link>
          </div>
        </div>
        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto pb-16">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl shadow-soft hover:bg-gray-750 transition-colors duration-200 focus-within:ring-2 focus-within:ring-teal-400 focus-within:ring-offset-2 focus-within:ring-offset-gray-900">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800 rounded-xl"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg" aria-hidden="true">{faq.icon}</span>
                    <span className="text-lg md:text-xl font-semibold text-white">{faq.q}</span>
                  </div>
                  <span className={`ml-4 text-2xl transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === idx && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-6 pb-5 text-base text-gray-300"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}