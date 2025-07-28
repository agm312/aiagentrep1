-- Create clients table
CREATE TABLE clients (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  company TEXT,
  company_size TEXT,
  goals TEXT,
  challenges TEXT,
  budget TEXT,
  timeline TEXT,
  source TEXT DEFAULT 'chatbot',
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'active', 'converted', 'lost')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create scheduled_content table for automation
CREATE TABLE scheduled_content (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  content_type TEXT NOT NULL CHECK (content_type IN ('email', 'sms', 'social')),
  content TEXT NOT NULL,
  scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
  sent_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed', 'cancelled')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create conversation_logs table
CREATE TABLE conversation_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
  session_id TEXT NOT NULL,
  message_type TEXT NOT NULL CHECK (message_type IN ('user', 'bot')),
  content TEXT NOT NULL,
  metadata JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create automation_rules table
CREATE TABLE automation_rules (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  trigger_type TEXT NOT NULL CHECK (trigger_type IN ('new_client', 'status_change', 'time_based')),
  trigger_conditions JSONB,
  actions JSONB NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_clients_email ON clients(email);
CREATE INDEX idx_clients_status ON clients(status);
CREATE INDEX idx_clients_created_at ON clients(created_at);
CREATE INDEX idx_scheduled_content_scheduled_at ON scheduled_content(scheduled_at);
CREATE INDEX idx_scheduled_content_status ON scheduled_content(status);
CREATE INDEX idx_conversation_logs_client_id ON conversation_logs(client_id);
CREATE INDEX idx_conversation_logs_session_id ON conversation_logs(session_id);

-- Enable Row Level Security (RLS)
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;
ALTER TABLE scheduled_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE automation_rules ENABLE ROW LEVEL SECURITY;

-- Create policies for admin access (you can customize these based on your auth setup)
CREATE POLICY "Allow all operations for authenticated users" ON clients
  FOR ALL USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON scheduled_content
  FOR ALL USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON conversation_logs
  FOR ALL USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON automation_rules
  FOR ALL USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_clients_updated_at BEFORE UPDATE ON clients
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_automation_rules_updated_at BEFORE UPDATE ON automation_rules
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample automation rules
INSERT INTO automation_rules (name, trigger_type, trigger_conditions, actions) VALUES
(
  'Welcome Email for New Clients',
  'new_client',
  '{"status": "new"}',
  '{"type": "send_email", "template": "welcome", "delay_hours": 1}'
),
(
  'Follow-up Email After 3 Days',
  'time_based',
  '{"days_after_creation": 3, "status": "new"}',
  '{"type": "send_email", "template": "followUp"}'
),
(
  'SMS Reminder After 7 Days',
  'time_based',
  '{"days_after_creation": 7, "status": "new"}',
  '{"type": "send_sms", "template": "reminder"}'
); 