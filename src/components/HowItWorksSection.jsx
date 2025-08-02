import React from 'react';

const steps = [
  {
    icon: <span className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl">💬</span>,
    title: 'Free Consultation',
    desc: 'We analyze your current workflow and identify automation opportunities specific to your business.',
    duration: '1 Day'
  },
  {
    icon: <span className="bg-green-100 text-green-600 rounded-full p-4 text-3xl">⚙️</span>,
    title: 'Custom Setup',
    desc: 'Our team configures your AI automation system with your CRM, phone system, and existing tools.',
    duration: '2-3 Days'
  },
  {
    icon: <span className="bg-purple-100 text-purple-600 rounded-full p-4 text-3xl">🤖</span>,
    title: 'AI Training',
    desc: 'We train your AI assistant on your specific market, services, and communication style for authentic interactions.',
    duration: '1 Week'
  },
  {
    icon: <span className="bg-indigo-100 text-indigo-600 rounded-full p-4 text-3xl">🚀</span>,
    title: 'Go Live',
    desc: 'Launch your AI automation and start seeing results immediately with full support and monitoring.',
    duration: 'Ongoing'
  }
];

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-primary-600 text-xl font-bold">🚀</span>
            <span className="uppercase text-primary-600 font-semibold tracking-wider text-sm">Simple Process</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works: <span className="text-primary-600">From Setup to Success</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with AI Agent Rep is easier than you think. Our proven 4-step process gets you up and running in just one week.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 mb-8">
          {steps.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow-soft">
              <div className="mb-4 relative">
                {step.icon}
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-base border-2 border-white shadow">{i+1}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-base mb-4">{step.desc}</p>
              <span className="inline-block bg-blue-100 text-blue-700 font-semibold rounded-full px-4 py-1 text-sm mt-auto">{step.duration}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyProcessWorksSection() {
  return (
    <section className="bg-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Process Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've refined our setup process based on hundreds of successful implementations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-soft">
            <span className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl mb-4">📞</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Seamless Integration</h3>
            <p className="text-gray-600 text-base text-center">Works with your existing phone system, CRM, and tools</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-soft">
            <span className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl mb-4">✔️</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600 text-base text-center">Every interaction is monitored and optimized for best results</p>
          </div>
          <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-soft">
            <span className="bg-blue-100 text-blue-600 rounded-full p-4 text-3xl mb-4">📈</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Learning</h3>
            <p className="text-gray-600 text-base text-center">AI gets smarter over time, improving performance automatically</p>
          </div>
        </div>
      </div>
    </section>
  );
} 