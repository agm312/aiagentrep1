import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team collaborating on business strategy",
      description: "Team working at table"
    },
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Business meeting with laptops and coffee",
      description: "Modern workspace collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Team brainstorming with digital displays",
      description: "AI-powered team collaboration"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

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
          
          {/* Right Column - Rotating Images with Overlay */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
              {/* Rotating Images */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              ))}
              
              {/* Image Description */}
              <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 rounded-lg px-3 py-2">
                <p className="text-gray-700 text-sm font-medium">
                  {images[currentImageIndex].description}
                </p>
              </div>
              
              {/* Overlay Box */}
              <div className="absolute bottom-4 right-4 bg-green-100 border border-green-200 rounded-lg p-4 max-w-xs">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-800">AI Agent Active</span>
                </div>
                <p className="text-sm text-green-700">
                  "Just qualified 3 new leads and scheduled 2 appointments while you were in your meeting!"
                </p>
              </div>
              
              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 