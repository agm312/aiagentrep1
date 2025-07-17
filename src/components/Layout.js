import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen bg-white flex flex-col ${className}`}>
      {/* Skip to main content link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header />
      <main id="main-content" className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 