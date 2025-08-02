import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  background = 'white', 
  padding = 'py-20', 
  role = 'region',
  'aria-labelledby': ariaLabelledBy,
  ...props 
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50'
  };

  return (
    <section 
      className={`${bgClasses[background]} ${padding} px-4 sm:px-6 lg:px-8 ${className}`}
      role={role}
      aria-labelledby={ariaLabelledBy}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section; 