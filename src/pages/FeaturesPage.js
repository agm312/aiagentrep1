import React from 'react';
import { Link } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: "Automated Booking Calls",
    description: "AI-powered call scripts and booking automation. Save time and never miss a lead with intelligent call handling.",
    icon: "📞"
  },
  {
    id: 2,
    title: "Smart Text Messaging",
    description: "Automated SMS campaigns and lead nurturing. Reach your prospects instantly and keep them engaged.",
    icon: "💬"
  },
  {
    id: 3,
    title: "Lead Qualification",
    description: "Intelligent lead scoring and assessment. Focus on the leads most likely to convert.",
    icon: "🎯"
  },
  {
    id: 4,
    title: "Follow-up Automation",
    description: "Multi-channel automated follow-up sequences. Never let a lead slip through the cracks.",
    icon: "🔄"
  },
  {
    id: 5,
    title: "Client Communication",
    description: "Automated updates and report generation. Keep your clients informed and delighted.",
    icon: "📊"
  },
  {
    id: 6,
    title: "Smart Scheduling",
    description: "AI-optimized appointment booking system. Fill your calendar with zero hassle.",
    icon: "📅"
  },
  {
    id: 7,
    title: "CRM Integration",
    description: "Seamless integration with your existing systems. Connect your workflows and data effortlessly.",
    icon: "🔗"
  },
  {
    id: 8,
    title: "AI Graphic Design",
    description: "Instantly generate stunning graphics, ads, and marketing assets with AI. Save on design costs and get beautiful results in seconds.",
    icon: "🎨"
  }
];

export default function FeaturesPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-gray-900 text-center">All AI Tools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(feature => (
            <Link
              key={feature.id}
              to={`/feature/${feature.id}`}
              className="bg-white rounded-xl p-8 shadow-soft card-hover flex flex-col items-start space-y-4 transition hover:shadow-lg focus:outline-none"
            >
              <div className="text-4xl mb-2">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="max-w-2xl mx-auto mt-16 text-center bg-primary-600 rounded-2xl p-10 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Experience AI in Action?</h2>
        <p className="text-lg text-blue-100 mb-6">See how these tools can transform your business. Try a live demo now!</p>
        <Link to="/demo" className="inline-block bg-white text-primary-600 font-bold rounded-lg px-8 py-4 text-lg shadow hover:bg-blue-50 transition">Try Free AI Demo</Link>
      </div>
    </section>
  );
} 