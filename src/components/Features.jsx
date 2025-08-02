import React from 'react';

const services = [
  {
    icon: "📞",
    title: "Automated Booking Calls",
    description: "AI-powered call scripts and booking automation"
  },
  {
    icon: "💬",
    title: "Smart Text Messaging",
    description: "Automated SMS campaigns and lead nurturing"
  },
  {
    icon: "🎯",
    title: "Lead Qualification",
    description: "Intelligent lead scoring and assessment"
  },
  {
    icon: "🔄",
    title: "Follow-up Automation",
    description: "Multi-channel automated follow-up sequences"
  },
  {
    icon: "📊",
    title: "Client Communication",
    description: "Automated updates and report generation"
  },
  {
    icon: "📅",
    title: "Smart Scheduling",
    description: "AI-optimized appointment booking system"
  },
  {
    icon: "🔗",
    title: "CRM Integration",
    description: "Seamless integration with existing systems"
  },
  {
    icon: "📱",
    title: "Social Media Auto Posts",
    description: "AI-crafted posts automatically published to your social channels"
  }
];

export default function Features() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive Automation for All Fields & Professionals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-3xl mb-4 text-gray-600">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 