const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

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
    const clientData = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!clientData.email) {
      return {
        statusCode: 400,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Email is required' }),
      };
    }

    // Prepare client record
    const clientRecord = {
      name: clientData.name || '',
      email: clientData.email,
      phone: clientData.phone || '',
      company: clientData.company || '',
      company_size: clientData.companySize || '',
      goals: clientData.goals || '',
      challenges: clientData.challenges || '',
      budget: clientData.budget || '',
      timeline: clientData.timeline || '',
      source: 'chatbot',
      status: 'new',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // Check if client already exists
    const { data: existingClient } = await supabase
      .from('clients')
      .select('id')
      .eq('email', clientData.email)
      .single();

    let result;
    if (existingClient) {
      // Update existing client
      result = await supabase
        .from('clients')
        .update({
          ...clientRecord,
          updated_at: new Date().toISOString(),
        })
        .eq('email', clientData.email)
        .select();
    } else {
      // Insert new client
      result = await supabase
        .from('clients')
        .insert([clientRecord])
        .select();
    }

    if (result.error) {
      throw new Error(result.error.message);
    }

    // Log successful save
    console.log('Client saved:', {
      email: clientData.email,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        success: true,
        client: result.data[0],
        message: existingClient ? 'Client updated successfully' : 'Client saved successfully',
      }),
    };

  } catch (error) {
    console.error('Save client error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Failed to save client information',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
}; 