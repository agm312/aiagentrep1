import React from 'react';
import AutomatedTasksAnimation from '../components/AutomatedTasksAnimation';

const RobotLaptop = () => (
  <div className="fixed bottom-6 right-6 z-10 pointer-events-none" style={{width: 110, height: 110}}>
    {/* Robot with laptop, hands animated for typing, and headset */}
    <svg viewBox="0 0 110 110" width="110" height="110" fill="none" style={{overflow: 'visible'}}>
      {/* Laptop base */}
      <rect x="30" y="80" width="50" height="12" rx="2" fill="#bbb" />
      {/* Laptop screen */}
      <rect x="36" y="54" width="38" height="28" rx="3" fill="#e0e7ef" stroke="#888" strokeWidth="2" />
      {/* Robot body */}
      <ellipse cx="55" cy="48" rx="15" ry="18" fill="#60a5fa" />
      {/* Robot head */}
      <ellipse cx="55" cy="30" rx="12" ry="12" fill="#3b82f6" />
      {/* Headset band */}
      <path d="M43 30 Q55 14 67 30" stroke="#22223b" strokeWidth="2.5" fill="none" />
      {/* Left earcup */}
      <ellipse cx="43" cy="30" rx="2.5" ry="3.5" fill="#22223b" />
      {/* Right earcup */}
      <ellipse cx="67" cy="30" rx="2.5" ry="3.5" fill="#22223b" />
      {/* Microphone boom */}
      <path d="M67 36 Q74 38 72 44" stroke="#22223b" strokeWidth="1.5" fill="none" />
      {/* Microphone tip */}
      <circle cx="72" cy="44" r="2" fill="#22223b" />
      {/* Eyes */}
      <ellipse cx="51" cy="30" rx="2.2" ry="2.7" fill="#fff" />
      <ellipse cx="59" cy="30" rx="2.2" ry="2.7" fill="#fff" />
      {/* Left Arm (bent, static) */}
      <path d="M44 60 Q40 70 48 78" stroke="#60a5fa" strokeWidth="6" fill="none" />
      {/* Right Arm (bent, static) */}
      <path d="M66 60 Q70 70 62 78" stroke="#60a5fa" strokeWidth="6" fill="none" />
      {/* Left Hand (animated) */}
      <g className="robot-hand-typing-left">
        <ellipse cx="48" cy="82" rx="3.2" ry="2.2" fill="#3b82f6" />
      </g>
      {/* Right Hand (animated) */}
      <g className="robot-hand-typing-right">
        <ellipse cx="62" cy="82" rx="3.2" ry="2.2" fill="#3b82f6" />
      </g>
    </svg>
    <style>{`
      .robot-hand-typing-left {
        transform-box: fill-box;
        transform-origin: 48px 82px;
        animation: robot-hand-type-left 0.14s infinite alternate;
      }
      .robot-hand-typing-right {
        transform-box: fill-box;
        transform-origin: 62px 82px;
        animation: robot-hand-type-right 0.14s infinite alternate;
        animation-delay: 0.07s;
      }
      @keyframes robot-hand-type-left {
        0% { transform: translateY(0); }
        100% { transform: translateY(6px); }
      }
      @keyframes robot-hand-type-right {
        0% { transform: translateY(0); }
        100% { transform: translateY(6px); }
      }
    `}</style>
  </div>
);

export default function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      <AutomatedTasksAnimation />
      <RobotLaptop />
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">About AI Agent Rep</h1>
        <p className="text-lg text-gray-700 mb-4">AI Agent Rep is dedicated to helping businesses automate, optimize, and grow. Our suite of 8 powerful AI tools is designed to streamline your operations, boost productivity, and unlock hidden revenue in your leads and customers.</p>
        <p className="text-lg text-gray-700">We believe in making advanced automation accessible and affordable for every business. With a focus on simplicity, results, and world-class support, we're your partner in the future of business automation.</p>
      </div>
    </section>
  );
} 