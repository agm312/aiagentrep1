import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mr-2">
    <span className="text-white text-lg font-bold">🤖</span>
  </div>
);

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-dark-950/80 backdrop-blur-sm border-b border-dark-800 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label="AI Agent Rep - Home"
            >
              <Logo />
              <span>AI AGENT REP</span>
            </Link>
          </div>
          
          {/* CTA Button */}
          {location.pathname !== '/dashboard' && (
            <div>
              <Link 
                to="/demo" 
                className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105"
                aria-label="Book a call to learn more about AI automation"
              >
                Book a Call
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 