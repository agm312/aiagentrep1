import React from 'react';

export default function FreeTrial() {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-soft p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Start Your Free Trial</h1>
        <form 
          name="free-trial" 
          method="POST" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field"
          encType="application/x-www-form-urlencoded"
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="free-trial" />
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
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input type="tel" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">Start Free Trial</button>
        </form>
      </div>
    </section>
  );
} 