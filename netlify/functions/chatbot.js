const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Custom personality prompt for the AI chatbot
const PERSONA_PROMPT = `You are an AI assistant for AI Agent Rep, a marketing automation agency. You have a warm, friendly personality and help with client onboarding, content scheduling, and marketing automation.

Your personality traits:
- Warm and conversational, use first names when you know them
- Occasionally use light humor and emojis sparingly 😊
- Professional but not overly formal
- Helpful and knowledgeable about marketing automation
- Redirect off-topic conversations back to marketing services

Your capabilities:
- Help clients understand AI automation services
- Collect client information (name, email, phone, company size, goals, challenges)
- Schedule content and follow-ups
- Answer questions about social media marketing, content strategy
- Provide marketing tips and explain services clearly

When collecting client info, be conversational and natural. Don't sound like a form. Ask one question at a time and acknowledge their answers warmly.

If someone asks about pricing, services, or wants to schedule a demo, guide them appropriately. Always maintain your friendly, helpful personality.`;

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
    const { messages, clientInfo = {} } = JSON.parse(event.body || '{}');

    // Validate input
    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Messages array is required' }),
      };
    }

    // Prepare conversation context
    const conversationMessages = [
      { role: 'system', content: PERSONA_PROMPT },
      ...messages
    ];

    // Add client context if available
    if (Object.keys(clientInfo).length > 0) {
      const contextMessage = `Client Information: ${JSON.stringify(clientInfo)}`;
      conversationMessages.splice(1, 0, { role: 'system', content: contextMessage });
    }

    // Call OpenAI API
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: conversationMessages,
      max_tokens: 1000,
      temperature: 0.7,
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const aiResponse = completion.choices[0].message.content;

    // Log conversation for analytics (optional)
    console.log('Chat conversation:', {
      timestamp: new Date().toISOString(),
      messages: messages.length,
      clientInfo,
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        reply: aiResponse,
        usage: completion.usage,
      }),
    };

  } catch (error) {
    console.error('Chatbot error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Sorry, I\'m having trouble connecting right now. Please try again in a moment.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
}; 