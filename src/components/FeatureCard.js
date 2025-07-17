import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ feature, clickable = true }) => {
  const cardContent = (
    <div className="flex flex-col items-start space-y-4 p-6">
      {/* Icon */}
      <div className="text-3xl" aria-hidden="true">
        {feature.icon}
      </div>
      
      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {feature.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link 
        to={`/feature/${feature.id}`} 
        className="block bg-white rounded-xl shadow-soft hover:shadow-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 ease-in-out hover:scale-[1.02] group"
        aria-label={`Learn more about ${feature.title}`}
      >
        {cardContent}
      </Link>
    );
  } else {
    return (
      <div 
        className="block bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 ease-in-out"
        role="article"
        aria-labelledby={`feature-${feature.id}-title`}
      >
        <div className="flex flex-col items-start space-y-4 p-6">
          {/* Icon */}
          <div className="text-3xl" aria-hidden="true">
            {feature.icon}
          </div>
          
          {/* Content */}
          <div className="space-y-2">
            <h3 id={`feature-${feature.id}-title`} className="text-lg font-semibold text-gray-900 leading-tight">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default FeatureCard; 