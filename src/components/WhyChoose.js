import React from 'react';

const benefits = [
  {
    icon: "⏰",
    metric: "80% Time Savings",
    title: "Save 10+ Hours Weekly",
    description: "Eliminate repetitive tasks and focus on high-value activities like closing deals and building relationships."
  },
  {
    icon: "📈",
    metric: "300% Conversion Increase",
    title: "3x Lead Conversion",
    description: "Instant response times and intelligent follow-ups dramatically improve your conversion rates."
  },
  {
    icon: "🛡️",
    metric: "24/7 Always On",
    title: "24/7 Availability",
    description: "Never miss a lead again. Your AI assistant works around the clock, even when you're sleeping."
  },
  {
    icon: "⚡",
    metric: "<30s Response Time",
    title: "Instant Response",
    description: "Respond to inquiries in under 30 seconds, giving you a competitive edge in fast-moving markets."
  },
  {
    icon: "💖",
    metric: "95% Client Satisfaction",
    title: "Better Client Experience",
    description: "Provide consistent, professional service that builds trust and generates referrals."
  },
  {
    icon: "💰",
    metric: "40% Revenue Growth",
    title: "Increased Revenue",
    description: "Handle more leads, close more deals, and grow your business without hiring additional staff."
  }
];

const WhyChoose = () => (
  <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-yellow-500 text-xl">⚡</span>
          <span className="text-blue-600 font-semibold tracking-wider text-sm">PROVEN RESULTS</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Why Professionals Choose AI Agent Rep
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Join hundreds of successful businesses who have transformed with AI automation. See the benefits that matter most to your bottom line.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">{benefit.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{benefit.metric}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose; 