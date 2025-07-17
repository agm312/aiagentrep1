import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth } from '../firebase';

const Logo = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
    aria-hidden="true"
    role="img"
  >
    <rect x="3" y="7" width="30" height="18" rx="9" fill="#06b6d4" />
    <rect x="8" y="12" width="20" height="8" rx="4" fill="white" />
    <circle cx="14" cy="16" r="1.5" fill="#06b6d4" />
    <circle cx="22" cy="16" r="1.5" fill="#06b6d4" />
    <rect x="16" y="19" width="4" height="1.5" rx="0.75" fill="#06b6d4" />
    <rect x="12" y="4" width="12" height="3" rx="1.5" fill="#06b6d4" />
  </svg>
);

const Header = () => {
  const location = useLocation();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center text-2xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1"
              aria-label="AI Agent Rep - Home"
            >
              <Logo />
              <span>AI Agent Rep</span>
            </Link>
          </div>
          
          {/* CTA Button */}
          {location.pathname !== '/dashboard' && (
            <div>
              <Link 
                to="/demo" 
                className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                aria-label="Try our free AI demo to see how automation works"
              >
                Try AI Demo
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 