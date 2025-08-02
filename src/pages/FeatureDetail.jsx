import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const features = [
  {
    id: 1,
    title: "Automated Booking Calls",
    icon: "📞",
    how: "Our AI-powered system automatically calls leads, delivers a custom script, and books appointments directly into your calendar.",
    benefits: [
      "Save time with automated outreach",
      "Never miss a lead",
      "Increase booking rates"
    ],
    cta: "Start Booking Smarter"
  },
  {
    id: 2,
    title: "Smart Text Messaging",
    icon: "💬",
    how: "Send automated, personalized SMS campaigns to nurture leads and keep them engaged.",
    benefits: [
      "Instant communication",
      "Higher engagement rates",
      "Automated follow-ups"
    ],
    cta: "Start Smart Messaging"
  },
  {
    id: 3,
    title: "Lead Qualification",
    icon: "🎯",
    how: "AI scores and qualifies leads so you can focus on the most likely to convert.",
    benefits: [
      "Prioritize high-value leads",
      "Improve conversion rates",
      "Automate lead assessment"
    ],
    cta: "Qualify My Leads"
  },
  {
    id: 4,
    title: "Follow-up Automation",
    icon: "🔄",
    how: "Automate multi-channel follow-up sequences to ensure no lead slips through the cracks.",
    benefits: [
      "Consistent follow-up",
      "Multi-channel outreach",
      "Boost response rates"
    ],
    cta: "Automate My Follow-ups"
  },
  {
    id: 5,
    title: "Client Communication",
    icon: "📊",
    how: "Send automated updates and reports to keep your clients informed and delighted.",
    benefits: [
      "Save time on reporting",
      "Keep clients happy",
      "Professional communication"
    ],
    cta: "Upgrade Client Comms"
  },
  {
    id: 6,
    title: "Smart Scheduling",
    icon: "📅",
    how: "AI-optimized appointment booking system fills your calendar with zero hassle.",
    benefits: [
      "Reduce no-shows",
      "Fill your calendar",
      "Easy rescheduling"
    ],
    cta: "Get Smart Scheduling"
  },
  {
    id: 7,
    title: "CRM Integration",
    icon: "🔗",
    how: "Seamlessly connect your existing systems for unified workflows and data.",
    benefits: [
      "No more data silos",
      "Automate data sync",
      "Streamline operations"
    ],
    cta: "Integrate My CRM"
  },
  {
    id: 8,
    title: "AI Graphic Design",
    icon: "🎨",
    how: "We generate stunning graphics, ads, and marketing assets instantly with AI.",
    benefits: [
      "Save on design costs",
      "Get beautiful results fast",
      "No design skills needed"
    ],
    cta: "Get AI Design"
  }
];

export default function FeatureDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const feature = features.find(f => f.id === Number(id));

  if (!feature) return <div className="text-center mt-20">Feature not found.</div>;

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-10 shadow-soft">
        <div className="flex items-center mb-6">
          <span className="text-4xl mr-4">{feature.icon}</span>
          <h1 className="text-3xl font-bold text-gray-900">{feature.title}</h1>
        </div>
        <h2 className="text-xl font-semibold mb-2">How it works</h2>
        <p className="mb-6 text-gray-700">{feature.how}</p>
        <h2 className="text-xl font-semibold mb-2">Benefits</h2>
        <ul className="mb-6 list-disc list-inside text-gray-700">
          {feature.benefits.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <button onClick={() => navigate('/pricing')} className="btn-primary w-full py-3 text-lg mt-4">{feature.cta}</button>
      </div>
    </section>
  );
} 