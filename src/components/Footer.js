import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-dark-950 text-white py-16 px-6 lg:px-12">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Logo and Brand */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-lg font-bold">🤖</span>
            </div>
            <span className="text-xl font-bold text-white">AI AGENT REP</span>
          </div>
          <p className="text-white/60 mb-6 max-w-md">
            Transform your business with AI-powered automation. Qualify leads, book appointments, and scale your sales without hiring more people.
          </p>
        </div>
        
        {/* Legal Links */}
        <div className="flex justify-end">
          <div className="text-right">
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-white/60 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-dark-800 mt-12 pt-8 text-center">
        <p className="text-white/60 text-sm">© 2025 AI Agent Rep. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer; 