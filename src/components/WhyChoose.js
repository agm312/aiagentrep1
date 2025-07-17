import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 17v2a2 2 0 002 2h14a2 2 0 002-2v-2M16 11V7a4 4 0 10-8 0v4M12 15v2" /></svg>
    ),
    title: 'Increase Conversions',
    desc: 'Boost your lead conversion rate by 300% with intelligent automation and personalized communication.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Save 20+ Hours/Week',
    desc: 'Automate repetitive tasks and focus on what matters most – closing deals and building relationships.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-white mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m9-4V7a4 4 0 00-8 0v4m12 4v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2" /></svg>
    ),
    title: '24/7 Client Service',
    desc: 'Never miss a lead with round-the-clock automated responses and intelligent follow-up sequences.'
  }
];

const WhyChoose = () => (
  <section className="bg-primary-600 py-16 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose AI Agent Rep?</h2>
      <p className="text-lg text-blue-100 mb-12">Join thousands of successful businesses who have transformed with AI automation</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center bg-primary-500 bg-opacity-20 rounded-2xl p-8">
            {f.icon}
            <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
            <p className="text-blue-100 text-base">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChoose; 