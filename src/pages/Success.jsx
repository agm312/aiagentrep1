import React from 'react';
import { Link } from 'react-router-dom';

export default function Success() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-8 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-8">
          Your request has been submitted successfully. Our team will reach out within 24 hours to discuss your AI automation needs.
        </p>
        
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-teal-800 mb-2">What's Next?</h3>
          <ul className="text-sm text-teal-700 space-y-1 text-left">
            <li>• You'll receive a confirmation email</li>
            <li>• Our team will schedule your consultation</li>
            <li>• We'll discuss your automation requirements</li>
            <li>• You'll get a custom proposal</li>
          </ul>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="block w-full bg-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            Return to Homepage
          </Link>
          <Link
            to="/demo"
            className="block w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Try Free AI Demo
          </Link>
        </div>
      </div>
    </div>
  );
} 