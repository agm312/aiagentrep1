import React from 'react';
import { Link } from 'react-router-dom';

export default function GuaranteeSection() {
  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="max-w-3xl mx-auto rounded-2xl bg-white shadow-soft p-8 flex flex-col items-center border border-green-200">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-green-600 text-2xl">✔️</span>
          <span className="text-green-700 font-semibold text-lg">Our Guarantee</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">Up and Running in 7 Days or Less</h2>
        <p className="text-gray-700 text-center mb-6 max-w-xl">
          We guarantee your AI automation will be fully operational within one week, or we'll continue working at no additional cost until it is.
        </p>
        <Link
          to="/demo"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg px-8 py-3 text-lg shadow transition"
        >
          Start Your 7-Day Setup
        </Link>
      </div>
    </section>
  );
} 