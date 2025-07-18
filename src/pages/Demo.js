import React, { useState } from 'react';

const PROBLEMS = [
  'Book more appointments automatically',
  'Nurture leads with smart follow-up',
  'Qualify leads without manual effort',
  'Automate client communications and updates',
  'Streamline scheduling and reminders',
  'Integrate with my CRM or calendar',
  'Automate social media posting and content scheduling',
];

export default function Demo() {
  const [selected, setSelected] = useState([]);

  const handleCheckbox = (problem) => {
    setSelected((prev) =>
      prev.includes(problem)
        ? prev.filter((p) => p !== problem)
        : [...prev, problem]
    );
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-soft p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Request Your Free AI Demo</h1>
        <form 
          name="ai-demo" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          encType="application/x-www-form-urlencoded"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="ai-demo" />
          <p className="hidden">
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Company</label>
            <input type="text" name="company" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Website <span className="text-gray-400 text-sm">(optional)</span></label>
            <input type="url" name="website" placeholder="https://yourwebsite.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">What would you like to solve? <span className="text-gray-400 text-sm">(Select all that apply)</span></label>
            <div className="space-y-2">
              {PROBLEMS.map((problem, idx) => (
                <label key={idx} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="problems[]"
                    value={problem}
                    checked={selected.includes(problem)}
                    onChange={() => handleCheckbox(problem)}
                    className="accent-primary-600"
                  />
                  {problem}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="btn-primary w-full mt-4">Request Demo</button>
        </form>
      </div>
    </section>
  );
} 