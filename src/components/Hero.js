import React from 'react';
import { Link } from 'react-router-dom';
import Section from './Section';

const featureEmojis = ["📞", "💬", "🎯", "🔄", "📊", "📅", "🔗", "🎨"];

const stats = [
  { icon: "⏰", label: "Save 10+ Hours/Week", ariaLabel: "Save over 10 hours per week" },
  { icon: "📈", label: "3x Lead Conversion", ariaLabel: "Triple lead conversion rate" },
  { icon: "⚡", label: "24/7 Availability", ariaLabel: "Available 24 hours, 7 days a week" },
];

export default function Hero() {
  const handleLearnMore = (e) => {
    e.preventDefault();
    const section = document.getElementById('features');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Section 
      role="banner" 
      aria-labelledby="hero-heading"
      className="py-20"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Animated Emoji Row */}
          <div 
            className="flex justify-center lg:justify-start items-center mb-4 animate-emoji-scroll" 
            style={{gap: '1.5rem'}}
            role="presentation"
            aria-hidden="true"
          >
            {featureEmojis.map((emoji, i) => (
              <span 
                key={i} 
                style={{fontSize: '2rem', animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.3}s`}}
                role="presentation"
                aria-hidden="true"
              >
                {emoji}
              </span>
            ))}
          </div>
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            Automate Your Business with <span className="text-primary-600">AI Agent Rep</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mb-6 mx-auto lg:mx-0">
            Streamline operations, boost conversions, and provide 24/7 client service with our comprehensive AI automation suite. No technical expertise required.
          </p>
          {/* Stats Row */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-8" role="list" aria-label="Key benefits">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 text-lg font-semibold text-gray-800 bg-gray-100 rounded-full px-5 py-2 shadow-sm"
                role="listitem"
              >
                <span className="text-2xl" aria-hidden="true">{stat.icon}</span> 
                <span aria-label={stat.ariaLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
            <Link 
              to="/demo" 
              className="btn-primary text-lg px-8 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Try our free AI demo to see how automation works"
            >
              Try Free AI Demo
            </Link>
            <a 
              href="#features" 
              onClick={handleLearnMore} 
              className="btn-secondary text-lg px-8 py-3 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              aria-label="Learn more about our AI automation features"
            >
              Learn More
            </a>
          </div>
        </div>
        {/* Right: Illustration or Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-10 lg:mt-0 relative">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Team collaborating on laptops at a modern workspace with AI automation tools"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            style={{minHeight: 320}}
            loading="eager"
          />
          {/* Notification Card Overlay */}
          <div 
            className="absolute left-4 bottom-4 bg-green-50 border border-green-200 rounded-xl px-5 py-3 shadow-lg flex items-center gap-3 w-[90%] max-w-xs"
            style={{zIndex:2}}
            role="status"
            aria-live="polite"
            aria-label="AI Agent notification"
          >
            <span className="text-green-500 text-xl" aria-hidden="true">●</span>
            <div>
              <div className="font-semibold text-green-700 text-sm mb-1">AI Agent Active</div>
              <div className="text-gray-700 text-sm">"Just qualified 3 new leads and scheduled 2 appointments while you were in your meeting!"</div>
            </div>
          </div>
        </div>
      </div>
      {/* Emoji float animation keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </Section>
  );
} 