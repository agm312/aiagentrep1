import React, { useEffect } from 'react';

export default function ScheduleDemo() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-soft p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Schedule Your Free AI Demo</h1>
        <div className="calendly-inline-widget" data-url="https://calendly.com/arturo312/ai-agency" style={{ minWidth: 320, height: 700 }}></div>
      </div>
    </section>
  );
} 