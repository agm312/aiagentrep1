import React from 'react';

const benefits = [
  {
    icon: (
      <span className="bg-blue-100 text-blue-600 rounded-full p-3 text-3xl">⏰</span>
    ),
    stat: '80%',
    statLabel: 'Time Savings',
    title: 'Save 10+ Hours Weekly',
    desc: 'Eliminate repetitive tasks and focus on high-value activities like closing deals and building relationships.'
  },
  {
    icon: (
      <span className="bg-green-100 text-green-600 rounded-full p-3 text-3xl">📈</span>
    ),
    stat: '300%',
    statLabel: 'Conversion Increase',
    title: '3x Lead Conversion',
    desc: 'Instant response times and intelligent follow-ups dramatically improve your conversion rates.'
  },
  {
    icon: (
      <span className="bg-purple-100 text-purple-600 rounded-full p-3 text-3xl">🛡️</span>
    ),
    stat: '24/7',
    statLabel: 'Always On',
    title: '24/7 Availability',
    desc: "Never miss a lead again. Your AI assistant works around the clock, even when you're sleeping."
  },
  {
    icon: (
      <span className="bg-orange-100 text-orange-600 rounded-full p-3 text-3xl">⚡</span>
    ),
    stat: '<30s',
    statLabel: 'Response Time',
    title: 'Instant Response',
    desc: 'Respond to inquiries in under 30 seconds, giving you a competitive edge in fast-moving markets.'
  },
  {
    icon: (
      <span className="bg-pink-100 text-pink-600 rounded-full p-3 text-3xl">💖</span>
    ),
    stat: '95%',
    statLabel: 'Client Satisfaction',
    title: 'Better Client Experience',
    desc: 'Provide consistent, professional service that builds trust and generates referrals.'
  },
  {
    icon: (
      <span className="bg-indigo-100 text-indigo-600 rounded-full p-3 text-3xl">💸</span>
    ),
    stat: '40%',
    statLabel: 'Revenue Growth',
    title: 'Increased Revenue',
    desc: 'Handle more leads, close more deals, and grow your business without hiring additional staff.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary-600 text-xl font-bold">⚡</span>
            <span className="uppercase text-primary-600 font-semibold tracking-wider text-sm">Proven Results</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Professionals Choose <span className="text-primary-600">AI Agent Rep</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful businesses who have transformed with AI automation. See the benefits that matter most to your bottom line.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-soft p-8 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-4">
                {b.icon}
                <div>
                  <div className="text-2xl font-bold text-gray-900">{b.stat}</div>
                  <div className="text-sm text-gray-500 font-semibold">{b.statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-gray-600 text-base">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 