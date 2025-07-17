import React, { useState } from 'react';

export default function Terms() {
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
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms & Conditions</h1>
      <div className="prose prose-blue max-w-none mb-12">
        <p className="mb-6"><strong>Effective Date: July 11, 2025</strong></p>
        <p className="mb-6">Welcome to <strong>AI Agent Rep</strong> (<a href="http://www.aiagentrep.com">www.aiagentrep.com</a>), by accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our site or subscribing to any of our services.</p>
        <hr className="my-8" />
        <h2 className="mt-10 mb-4">1. Overview</h2>
        <p className="mb-6">AI Agent Rep provides AI-powered automation tools and virtual assistant services to businesses. Our offerings include — but are not limited to — AI booking calls, SMS marketing, lead qualification, scheduling automation, CRM integration, client communications, and AI-generated graphic design.</p>
        <h2 className="mt-10 mb-4">2. Eligibility</h2>
        <p className="mb-6">You must be at least 18 years old and able to form a legally binding contract to use our services. By using this site, you represent and warrant that you meet these eligibility requirements.</p>
        <h2 className="mt-10 mb-4">3. Account Registration</h2>
        <p className="mb-6">To access certain features, you may be required to register for an account. You agree to provide accurate and complete information and to keep it updated. You are responsible for safeguarding your login credentials.</p>
        <h2 className="mt-10 mb-4">4. Subscription & Payment</h2>
        <p className="mb-6">AI Agent Rep operates on a subscription model. By subscribing, you authorize us to charge your selected payment method on a recurring basis (monthly or annually). All prices are listed in USD and subject to change with prior notice. Failure to pay may result in suspension or termination of services.</p>
        <h2 className="mt-10 mb-4">5. Use of Services</h2>
        <p className="mb-6">You agree to use our services only for lawful business purposes. You will not use our tools to send spam, harass individuals, or violate any applicable laws or regulations. Misuse may lead to termination of service without refund.</p>
        <h2 className="mt-10 mb-4">6. AI Limitations</h2>
        <p className="mb-6">While our AI systems are designed to be intelligent and helpful, they are not perfect. We do not guarantee the accuracy, completeness, or reliability of AI-generated content, responses, or decisions. You are responsible for reviewing and verifying outputs before taking action.</p>
        <h2 className="mt-10 mb-4">7. Intellectual Property</h2>
        <p className="mb-6">All content, software, and services provided by AI Agent Rep are protected by intellectual property laws. You may not reproduce, modify, or distribute our materials without prior written consent. Your data remains your property, but we reserve the right to use anonymized performance data to improve our services.</p>
        <h2 className="mt-10 mb-4">8. Confidentiality</h2>
        <p className="mb-6">We respect your privacy and confidentiality. Any business data shared with us for automation or system setup will be treated as confidential and not shared or resold.</p>
        <h2 className="mt-10 mb-4">9. Cancellation & Refunds</h2>
        <p className="mb-6">You may cancel your subscription at any time, but no refunds will be issued for the current billing cycle. To avoid further charges, cancel before the next renewal date. Custom enterprise plans may be subject to separate cancellation terms.</p>
        <h2 className="mt-10 mb-4">10. Termination</h2>
        <p className="mb-6">We reserve the right to terminate or suspend your account at any time if you violate these Terms. We may also discontinue services with reasonable notice.</p>
        <h2 className="mt-10 mb-4">11. Disclaimers</h2>
        <p className="mb-6">AI Agent Rep is provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service. To the fullest extent permitted by law, we disclaim all warranties, express or implied.</p>
        <h2 className="mt-10 mb-4">12. Limitation of Liability</h2>
        <p className="mb-6">In no event shall AI Agent Rep or its affiliates be liable for any indirect, incidental, or consequential damages, including lost profits or business interruptions, arising out of the use or inability to use our services.</p>
        <h2 className="mt-10 mb-4">13. Changes to Terms</h2>
        <p className="mb-6">We may update these Terms at any time. We will notify users of material changes, but it is your responsibility to review them periodically. Continued use of the site after changes indicates acceptance.</p>
        <h2 className="mt-10 mb-4">14. Governing Law</h2>
        <p className="mb-6">These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law principles.</p>
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