const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// SMS templates
const SMS_TEMPLATES = {
  welcome: (clientName) => 
    `Hi ${clientName || 'there'}! 👋 Welcome to AI Agent Rep. We're excited to help you automate your marketing. Our team will reach out within 24 hours to discuss your strategy.`,
  
  followUp: (clientName) => 
    `Hi ${clientName || 'there'}! 💡 Your AI automation strategy is ready. Would you like to schedule a quick call to discuss it? Reply YES to book a time.`,
  
  reminder: (clientName) => 
    `Hi ${clientName || 'there'}! ⏰ Don't let your competitors get ahead with AI automation. Ready to scale your marketing 10x? Book a strategy call today!`,
  
  appointment: (clientName, date) => 
    `Hi ${clientName || 'there'}! 📅 Your AI strategy call is confirmed for ${date}. We'll discuss your automation roadmap and answer all your questions. See you then!`,
  
  content: (clientName) => 
    `Hi ${clientName || 'there'}! 📝 Your AI-generated content is ready for review. Check your email for the latest posts and let us know if you'd like any changes.`
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
    const { to, template, clientName, customMessage, date } = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!to) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Recipient phone number is required' }),
      };
    }

    let messageContent;
    
    if (customMessage) {
      // Use custom message
      messageContent = customMessage;
    } else if (template && SMS_TEMPLATES[template]) {
      // Use predefined template
      messageContent = SMS_TEMPLATES[template](clientName, date);
    } else {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Valid template or custom message is required' }),
      };
    }

    // Format phone number (ensure it starts with +1 for US numbers)
    let formattedNumber = to;
    if (!formattedNumber.startsWith('+')) {
      formattedNumber = formattedNumber.startsWith('1') ? `+${formattedNumber}` : `+1${formattedNumber}`;
    }

    // Send SMS
    const message = await client.messages.create({
      body: messageContent,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: formattedNumber,
    });

    // Log successful SMS
    console.log('SMS sent:', {
      to: formattedNumber,
      template: template || 'custom',
      messageId: message.sid,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: true,
        message: 'SMS sent successfully',
        messageId: message.sid,
      }),
    };

  } catch (error) {
    console.error('Send SMS error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Failed to send SMS',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
}; 