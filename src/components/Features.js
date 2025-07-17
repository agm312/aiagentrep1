import React from 'react';
import FeatureCard from './FeatureCard';
import Section from './Section';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Automated Booking Calls",
      description: "AI-powered call scripts and booking automation",
      icon: "📞"
    },
    {
      id: 2,
      title: "Smart Text Messaging",
      description: "Automated SMS campaigns and lead nurturing",
      icon: "💬"
    },
    {
      id: 3,
      title: "Lead Qualification",
      description: "Intelligent lead scoring and assessment",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Follow-up Automation",
      description: "Multi-channel automated follow-up sequences",
      icon: "🔄"
    },
    {
      id: 5,
      title: "Client Communication",
      description: "Automated updates and report generation",
      icon: "📊"
    },
    {
      id: 6,
      title: "Smart Scheduling",
      description: "AI-optimized appointment booking system",
      icon: "📅"
    },
    {
      id: 7,
      title: "CRM Integration",
      description: "Seamless integration with existing systems",
      icon: "🔗"
    },
    {
      id: 8,
      title: "Social Media Auto Posts",
      description: "AI-crafted posts automatically published to your social channels",
      icon: "📱"
    }
  ];

  return (
    <Section 
      id="features" 
      background="gray" 
      aria-labelledby="features-heading"
    >
      <div className="text-center mb-16">
        <h2 id="features-heading" className="text-3xl font-bold text-gray-900 mb-4">
          AI-Powered Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive Automation for All Fields & Professionals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" role="list" aria-label="AI automation features">
        {features.map((feature) => (
          <div key={feature.id} role="listitem">
            <FeatureCard feature={feature} clickable={false} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features; 