import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const demoTypes = [
  {
    id: 'standard',
    name: 'Standard Chat',
    icon: '💬',
    description: 'Clean, professional chat interface for demonstrations.',
    color: 'bg-green-500',
  },
  {
    id: 'website',
    name: 'Website Widget',
    icon: '🖥️',
    description: 'Embed an interactive chat widget on your website.',
    color: 'bg-blue-500',
  },
  {
    id: 'sms',
    name: 'SMS Chat',
    icon: '📱',
    description: 'Simulate SMS conversations with your AI assistant.',
    color: 'bg-green-600',
  },
  {
    id: 'messenger',
    name: 'Messenger',
    icon: '📘',
    description: 'Demo your AI assistant as a Facebook Messenger bot.',
    color: 'bg-blue-600',
  },
  {
    id: 'instagram',
    name: 'Instagram DM',
    icon: '📷',
    description: 'Showcase your AI assistant in Instagram direct messages.',
    color: 'bg-pink-500',
  },
];

export default function AIDemoGenerator() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const handleDemoSelect = (demoType) => {
    setSelectedDemo(demoType);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-4xl font-bold mb-2">Create New Demo</h1>
          <p className="text-gray-400">Choose the type of AI chatbot demo you want to create</p>
        </div>

        {/* Demo Type Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {demoTypes.map((demo) => (
            <div
              key={demo.id}
              onClick={() => handleDemoSelect(demo)}
              className={`bg-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-200 hover:scale-105 border-2 ${
                selectedDemo?.id === demo.id 
                  ? 'border-teal-400 bg-gray-700' 
                  : 'border-gray-700 hover:border-gray-600'
              }`}
            >
              <div className={`w-12 h-12 ${demo.color} rounded-lg flex items-center justify-center text-2xl mb-4`}>
                {demo.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{demo.name}</h3>
              <p className="text-gray-400 text-sm">{demo.description}</p>
            </div>
          ))}
        </div>

        {/* Next Button */}
        {selectedDemo && (
          <div className="flex justify-center">
            <Link
              to={`/ai-demo-config/${selectedDemo.id}`}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Continue with {selectedDemo.name}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 