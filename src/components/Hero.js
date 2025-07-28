import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
        <section className="h-screen bg-dark-950 text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-dark-950"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Banner */}
              <div className="inline-block bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/30 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-medium text-white">
                  AI for real-life businesses. Backed by proven results and expert implementation.
                </span>
              </div>
              
              {/* Main Headline */}
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">TURN LEADS INTO SALES.</span>
                <br />
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  ON AUTOPILOT.
                </span>
              </h1>
              
              {/* Sub-headline */}
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6 max-w-2xl">
                Evolve your business with AI Agent Rep. Your AI super rep trains itself to be your best team member, qualifying inbound leads and booking appointments. Smash more sales, zero effort!
              </p>
              
              {/* CTA Form with Rotating Picture */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="flex-1 px-6 py-4 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-primary-500"
                />
                <Link 
                  to="/demo"
                  className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap"
                >
                  See It In Action
                </Link>
              </div>
              
              {/* Stats Bubble Box */}
              <div className="bg-dark-800/50 backdrop-blur-sm border border-dark-600 rounded-xl p-4 mb-4 max-w-md mx-auto lg:mx-0">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">⏰</span>
                    <span className="text-white/90 text-sm font-medium">Save 10+ Hours/Week</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">📈</span>
                    <span className="text-white/90 text-sm font-medium">3x Lead Conversion</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl mb-1">⚡</span>
                    <span className="text-white/90 text-sm font-medium">24/7 Availability</span>
                  </div>
                </div>
              </div>
              
              {/* Reassurance */}
              <p className="text-white/60 text-sm">
                Test our AI agent for <strong className="text-white">free</strong>. You'll love it!*
                <br />
                <span className="text-xs">*no spam, no humans until you ask for one!</span>
              </p>
            </div>
            
            {/* Right Column - Rotating Chat Interface */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="w-72 h-80 bg-dark-800 rounded-3xl p-4 shadow-2xl border border-dark-600 animate-pulse">
                  {/* Chat Header */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-sm">AI Agent Rep</div>
                        <div className="text-white/60 text-xs">Online</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Messages */}
                  <div className="space-y-3">
                    {/* AI Message */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-dark-700 rounded-2xl rounded-tl-md px-3 py-2 max-w-xs">
                        <p className="text-white text-xs">
                          Hey! I'm your AI sales assistant. How can I help you today?
                        </p>
                      </div>
                    </div>
                    
                    {/* User Message */}
                    <div className="flex items-start space-x-2 justify-end">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl rounded-tr-md px-3 py-2 max-w-xs">
                        <p className="text-white text-xs">
                          I'm interested in your AI automation services
                        </p>
                      </div>
                      <div className="w-6 h-6 bg-dark-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">👤</span>
                      </div>
                    </div>
                    
                    {/* AI Response */}
                    <div className="flex items-start space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <div className="bg-dark-700 rounded-2xl rounded-tl-md px-3 py-2 max-w-xs">
                        <p className="text-white text-xs">
                          Great! Let me ask a few questions to understand your needs better. What type of business do you run?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Feature Label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    AUTONOMOUS PRE-QUALIFICATION
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 