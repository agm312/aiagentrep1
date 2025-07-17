import React from 'react';
import { useNavigate } from 'react-router-dom';

const features = [
  'Full access to all 8 tools',
  'Unlimited leads & campaigns',
  'Priority support',
];

const calendlyUrl = "https://calendly.com/arturo312/ai-agency";

const ReadyToTransform = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-600 mb-8">Get a personalized demo and see how AI automation can 3x your productivity.</p>
        <button
          onClick={() => navigate('/demo')}
          className="btn-primary text-lg px-10 py-4"
        >
          Schedule Free Demo
        </button>
        <div className="text-gray-400 mt-4 text-sm">Free AI demo trial · No credit card required · Cancel anytime</div>
      </div>
    </section>
  );
};

export default ReadyToTransform; 