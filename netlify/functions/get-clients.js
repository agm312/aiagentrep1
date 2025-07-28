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
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
      },
    };
  }

  try {
    // Basic authentication check (you can enhance this with JWT verification)
    const authHeader = event.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return {
        statusCode: 401,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ error: 'Unauthorized' }),
      };
    }

    // Get query parameters
    const { status, limit = 50, offset = 0, search } = event.queryStringParameters || {};

    // Build query
    let query = supabase
      .from('clients')
      .select('*')
      .order('created_at', { ascending: false });

    // Apply filters
    if (status) {
      query = query.eq('status', status);
    }

    if (search) {
      query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,company.ilike.%${search}%`);
    }

    // Apply pagination
    query = query.range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    const { data: clients, error, count } = await query;

    if (error) {
      throw new Error(error.message);
    }

    // Get total count for pagination
    const { count: totalCount } = await supabase
      .from('clients')
      .select('*', { count: 'exact', head: true });

    // Get status counts for dashboard stats
    const { data: statusCounts } = await supabase
      .from('clients')
      .select('status');

    const stats = {
      total: totalCount || 0,
      new: statusCounts?.filter(c => c.status === 'new').length || 0,
      active: statusCounts?.filter(c => c.status === 'active').length || 0,
      converted: statusCounts?.filter(c => c.status === 'converted').length || 0,
    };

    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        clients: clients || [],
        stats,
        pagination: {
          limit: parseInt(limit),
          offset: parseInt(offset),
          total: totalCount || 0,
        },
      }),
    };

  } catch (error) {
    console.error('Get clients error:', error);
    
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({
        error: 'Failed to retrieve clients',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined,
      }),
    };
  }
}; 