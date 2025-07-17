import React, { useState } from 'react';

export default function Privacy() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would handle sending the form data to your backend or email service
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose prose-blue max-w-none mb-12">
        <p className="mb-6"><strong>Effective Date: July 11, 2025</strong></p>
        <p className="mb-6">At <strong>AI Agent Rep</strong> (<a href="http://www.aiagentrep.com">www.aiagentrep.com</a>), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you interact with our website, services, and tools.</p>
        <hr className="my-8" />
        <h2 className="mt-10 mb-4">1. Information We Collect</h2>
        <p className="mb-2 font-semibold">Personal Information:</p>
        <ul className="mb-6 list-disc pl-6">
          <li>Name, email address, phone number, company name, and payment information when you sign up for our services.</li>
        </ul>
        <p className="mb-2 font-semibold">Usage Information:</p>
        <ul className="mb-6 list-disc pl-6">
          <li>Information about your interactions with our website and services, such as page views, click behavior, and usage logs.</li>
        </ul>
        <p className="mb-2 font-semibold">Automated Data:</p>
        <ul className="mb-6 list-disc pl-6">
          <li>Cookies, IP address, browser type, device data, and time stamps to help us understand site usage and improve performance.</li>
        </ul>
        <h2 className="mt-10 mb-4">2. How We Use Your Information</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Deliver and improve our services</li>
          <li>Set up and manage your account</li>
          <li>Process payments and manage subscriptions</li>
          <li>Communicate with you (support, updates, promotions)</li>
          <li>Analyze system usage to enhance features and performance</li>
        </ul>
        <h2 className="mt-10 mb-4">3. Sharing Your Information</h2>
        <p className="mb-6">We do <strong>not</strong> sell or rent your personal information. We may share data with trusted third parties only when necessary to:</p>
        <ul className="mb-6 list-disc pl-6">
                          <li>Process payments and transactions</li>
          <li>Manage hosting or infrastructure</li>
          <li>Send emails or messages (e.g., SendGrid, Twilio)</li>
          <li>Comply with legal obligations</li>
        </ul>
        <p className="mb-6">All third-party providers are required to maintain the confidentiality and security of your information.</p>
        <h2 className="mt-10 mb-4">4. Cookies & Tracking Technologies</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Remember user preferences</li>
          <li>Analyze website performance</li>
          <li>Deliver personalized experiences</li>
        </ul>
        <p className="mb-6">You can control cookies through your browser settings, though some features may not work as intended if disabled.</p>
        <h2 className="mt-10 mb-4">5. Data Security</h2>
        <p className="mb-6">We implement industry-standard safeguards (encryption, access control, monitoring) to protect your information. However, no system is 100% secure. We encourage you to use strong passwords and protect your account access.</p>
        <h2 className="mt-10 mb-4">6. Your Rights</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>Access, update, or delete your personal information</li>
          <li>Object to or restrict processing</li>
          <li>Request data portability</li>
          <li>Opt out of marketing communications at any time</li>
        </ul>
        <h2 className="mt-10 mb-4">7. Data Retention</h2>
        <ul className="mb-6 list-disc pl-6">
          <li>We retain your information only as long as necessary to provide services</li>
          <li>Comply with legal or contractual obligations</li>
          <li>Resolve disputes and enforce our agreements</li>
        </ul>
        <h2 className="mt-10 mb-4">8. Children's Privacy</h2>
        <p className="mb-6">Our services are not intended for individuals under the age of 18. We do not knowingly collect personal data from minors.</p>
        <h2 className="mt-10 mb-4">9. Changes to This Policy</h2>
        <p className="mb-6">We may update this Privacy Policy from time to time.<br />
        Significant changes will be posted on this page with an updated July 11, 2025.<br />
        Continued use of the website indicates your acceptance of the changes.</p>
      </div>
      <div className="bg-gray-100 rounded-xl p-8 shadow max-w-lg mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold">Thank you for reaching out! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">How could we help you?</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500" />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        )}
      </div>
    </section>
  );
} 