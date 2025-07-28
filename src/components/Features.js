import React from 'react';

const features = [
  {
    number: "1",
    title: "ENGAGE INSTANTLY",
    description: "It's seamless to set up and you'll never miss a new inbound lead again. AI Agent Rep starts real conversations via email, SMS, chat & WhatsApp, responding in seconds.",
    benefits: [
      "Easy setup & CRM integration",
      "Enjoy lightning-fast AI responses"
    ]
  },
  {
    number: "2", 
    title: "QUALIFY AUTOMATICALLY",
    description: "Your AI agent asks the right questions to understand customer needs, budget, and timeline. Only qualified leads reach your sales team.",
    benefits: [
      "Smart lead scoring system",
      "Pre-qualified appointments only"
    ]
  },
  {
    number: "3",
    title: "BOOK APPOINTMENTS",
    description: "AI Agent Rep seamlessly integrates with your calendar to book qualified prospects directly into your schedule. No more back-and-forth emails.",
    benefits: [
      "Calendar sync & timezone handling",
      "Instant booking confirmations"
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-dark-950 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How AI Agent Rep <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Three simple steps to transform your lead generation and sales process
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              {/* Number Badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full text-white text-2xl font-bold mb-6 group-hover:scale-110 transition-transform duration-200">
                {feature.number}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  {feature.number}.
                </span> {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/80 leading-relaxed mb-6">
                {feature.description}
              </p>
              
              {/* Benefits */}
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center justify-center space-x-2 text-white/90">
                    <span className="text-green-400">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 