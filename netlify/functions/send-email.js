const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Email templates
const EMAIL_TEMPLATES = {
  welcome: {
    subject: 'Welcome to AI Agent Rep! 🚀',
    html: (clientName) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">Welcome to AI Agent Rep!</h2>
        <p>Hi ${clientName || 'there'}! 👋</p>
        <p>Thank you for your interest in AI-powered marketing automation. We're excited to help you transform your business with cutting-edge AI technology.</p>
        <p>Here's what you can expect from us:</p>
        <ul>
          <li>🤖 AI-powered content creation and scheduling</li>
          <li>📊 Advanced analytics and performance tracking</li>
          <li>🎯 Personalized marketing automation</li>
          <li>📱 Multi-channel campaign management</li>
        </ul>
        <p>Our team will be in touch within 24 hours to discuss your specific needs and create a customized automation strategy.</p>
        <p>In the meantime, feel free to explore our services or reach out with any questions!</p>
        <p>Best regards,<br>The AI Agent Rep Team</p>
      </div>
    `
  },
  followUp: {
    subject: 'Your AI Automation Strategy is Ready! 💡',
    html: (clientName) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">Your AI Automation Strategy</h2>
        <p>Hi ${clientName || 'there'}! 👋</p>
        <p>Based on our conversation, we've prepared a personalized AI automation strategy for your business.</p>
        <p>Here's what we recommend:</p>
        <ul>
          <li>🎯 Targeted content automation</li>
          <li>📈 Performance optimization</li>
          <li>🔄 Automated follow-up sequences</li>
          <li>📊 Real-time analytics dashboard</li>
        </ul>
        <p>Would you like to schedule a 15-minute call to discuss this strategy in detail?</p>
        <p>Just reply to this email or book a time that works for you!</p>
        <p>Best regards,<br>The AI Agent Rep Team</p>
      </div>
    `
  },
  reminder: {
    subject: 'Don\'t Miss Out on AI Automation! ⏰',
    html: (clientName) => `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366f1;">AI Automation Reminder</h2>
        <p>Hi ${clientName || 'there'}! 👋</p>
        <p>We noticed you were interested in AI automation for your business. Don't let your competitors get ahead!</p>
        <p>Our AI solutions can help you:</p>
        <ul>
          <li>🚀 Scale your marketing efforts 10x</li>
          <li>💰 Reduce costs while increasing ROI</li>
          <li>⏰ Save 20+ hours per week on manual tasks</li>
          <li>📈 Boost engagement and conversions</li>
        </ul>
        <p>Ready to get started? Book a quick strategy call with our team!</p>
        <p>Best regards,<br>The AI Agent Rep Team</p>
      </div>
    `
  }
};

exports.handler = async (event) => {
  // Handle CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
    };
  }

  try {
    const { to, template, clientName, customSubject, customBody } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!to) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Recipient email is required' }),
      };
    }

    let emailContent;
    
    if (customSubject && customBody) {
      // Use custom email content
      emailContent = {
        subject: customSubject,
        html: customBody
      };
    } else if (template && EMAIL_TEMPLATES[template]) {
      // Use predefined template
      emailContent = {
        subject: EMAIL_TEMPLATES[template].subject,
        html: EMAIL_TEMPLATES[template].html(clientName || 'there')
      };
    } else {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Valid template or custom content is required' }),
      };
    }

    // Prepare email message
    const msg = {
      to: to,
      from: process.env.SENDGRID_FROM_EMAIL || 'noreply@aiagentrep.com',
      subject: emailContent.subject,
      html: emailContent.html,
    };

    // Send email
    await sgMail.send(msg);

    // Log successful email
    console.log('Email sent:', {
      to: to,
      template: template || 'custom',
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
      }),
    };

  } catch (error) {
    console.error('Send email error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
}; 