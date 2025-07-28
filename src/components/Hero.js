import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Feature Icons Row */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-6">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">📞</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">💬</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">🎯</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">🔄</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">📊</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">📅</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">🔗</span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-600">🎨</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Automate Your Business with{' '}
              <span className="text-blue-600">AI Agent Rep</span>
            </h1>
            
            {/* Sub-headline */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Streamline operations, boost conversions, and provide 24/7 client service with our comprehensive AI automation suite. No technical expertise required.
            </p>
            
            {/* Benefit Cards */}
            <div className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto lg:mx-0">
              <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-center">
                <div className="text-red-500 text-lg mb-1">⏰</div>
                <div className="text-sm font-medium text-gray-900">Save 10+ Hours/Week</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-center">
                <div className="text-red-500 text-lg mb-1">📈</div>
                <div className="text-sm font-medium text-gray-900">3x Lead Conversion</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-full px-4 py-2 text-center">
                <div className="text-yellow-500 text-lg mb-1">⚡</div>
                <div className="text-sm font-medium text-gray-900">24/7 Availability</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/demo"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Try Free AI Demo
              </Link>
              <Link 
                to="/ai"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Column - Image with Overlay */}
          <div className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg relative overflow-hidden">
                {/* Placeholder for the table image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🖥️</div>
                    <p className="text-gray-500">Team working at table</p>
                  </div>
                </div>
                
                {/* Overlay Box */}
                <div className="absolute bottom-4 left-4 bg-green-100 border border-green-200 rounded-lg p-4 max-w-xs">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-800">AI Agent Active</span>
                  </div>
                  <p className="text-sm text-green-700">
                    "Just qualified 3 new leads and scheduled 2 appointments while you were in your meeting!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 