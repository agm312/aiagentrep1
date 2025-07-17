import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-center text-white pt-12 pb-6 px-4 mt-16">
    <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 mb-2">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="7" width="30" height="18" rx="9" fill="#06b6d4" />
          <rect x="8" y="12" width="20" height="8" rx="4" fill="white" />
          <circle cx="14" cy="16" r="1.5" fill="#06b6d4" />
          <circle cx="22" cy="16" r="1.5" fill="#06b6d4" />
          <rect x="16" y="19" width="4" height="1.5" rx="0.75" fill="#06b6d4" />
          <rect x="12" y="4" width="12" height="3" rx="1.5" fill="#06b6d4" />
        </svg>
        <span className="text-2xl font-bold text-cyan-400">AI Agent Rep</span>
      </div>
      {/* Footer Links */}
      <div className="flex flex-wrap justify-center gap-6 text-cyan-200 text-base mb-2">
        <Link to="/pricing" className="hover:underline">Plans & Pricing</Link>
        <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
        <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
      </div>
      {/* Copyright */}
      <div className="text-cyan-100 text-sm mt-2">© 2025 AI Agent Rep. All Rights Reserved.</div>
    </div>
  </footer>
);

export default Footer; 