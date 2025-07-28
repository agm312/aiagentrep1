# AI Marketing Automation Chatbot & Dashboard

A full-stack AI-powered marketing automation system with a friendly chatbot for client onboarding and an admin dashboard for managing clients and automation workflows.

## Features

### 🤖 AI Chatbot
- **Friendly Personality**: Custom AI personality with warm, conversational tone
- **Client Data Collection**: Automatically extracts and stores client information
- **Natural Conversations**: Uses OpenAI GPT-4 for human-like responses
- **Multi-channel Support**: Embedded widget for website integration

### 📊 Admin Dashboard
- **Client Management**: View, search, and manage all client data
- **Automation Tools**: Send emails and SMS with pre-built templates
- **Analytics**: Track client status, conversions, and engagement
- **Real-time Updates**: Live data from database

### 🔧 Automation Features
- **Email Automation**: SendGrid integration with customizable templates
- **SMS Automation**: Twilio integration for text message campaigns
- **Client Tracking**: Database storage with Supabase
- **Status Management**: Track client journey from lead to conversion

## Tech Stack

- **Frontend**: React with Tailwind CSS
- **Backend**: Netlify Functions (Serverless)
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4
- **Email**: SendGrid
- **SMS**: Twilio
- **Deployment**: Netlify

## Setup Instructions

### 1. Environment Variables

Create a `.env` file in your project root with the following variables:

```env
# OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# Supabase
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_supabase_anon_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@yourdomain.com

# Twilio
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
```

### 2. Database Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor in your Supabase dashboard
3. Run the SQL commands from `supabase-schema.sql` to create the database tables
4. Copy your project URL and anon key to the environment variables

### 3. API Keys Setup

#### OpenAI
1. Sign up at [openai.com](https://openai.com)
2. Create an API key in your account settings
3. Add the key to your environment variables

#### SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key in your account settings
3. Verify your sender email address
4. Add the key and verified email to your environment variables

#### Twilio
1. Sign up at [twilio.com](https://twilio.com)
2. Get your Account SID and Auth Token from the dashboard
3. Purchase a phone number for SMS
4. Add all credentials to your environment variables

### 4. Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Test the chatbot by clicking the chat button in the bottom-right corner

4. Access the admin dashboard at `http://localhost:3000/admin`
   - Username: `admin`
   - Password: `aiagentrep2024`

### 5. Netlify Deployment

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add all environment variables in Netlify's dashboard:
   - Go to Site Settings > Build & Deploy > Environment
   - Add each variable from your `.env` file

4. Deploy your site

## Usage

### For Clients
- Click the chat button on your website
- Have a natural conversation with the AI assistant
- Provide contact information when prompted
- Receive automated follow-ups via email and SMS

### For Admins
- Access `/admin` route with credentials
- View all client data in the dashboard
- Send manual emails and SMS messages
- Track client status and engagement
- Monitor automation performance

## Customization

### AI Personality
Edit the `PERSONA_PROMPT` in `netlify/functions/chatbot.js` to customize the chatbot's personality and behavior.

### Email Templates
Modify the `EMAIL_TEMPLATES` in `netlify/functions/send-email.js` to customize email content and styling.

### SMS Templates
Update the `SMS_TEMPLATES` in `netlify/functions/send-sms.js` to customize SMS message content.

### Dashboard Styling
The admin dashboard uses Tailwind CSS. Modify the classes in `src/components/AdminDashboard.js` to match your brand colors and styling.

## Security Notes

- The current authentication is basic for demo purposes
- For production, implement proper JWT authentication with Auth0 or similar
- Add rate limiting to prevent abuse
- Implement proper CORS policies
- Use environment variables for all sensitive data

## Troubleshooting

### Chatbot Not Responding
- Check OpenAI API key is valid and has credits
- Verify Netlify function is deployed correctly
- Check browser console for errors

### Emails Not Sending
- Verify SendGrid API key and sender email
- Check SendGrid dashboard for delivery status
- Ensure sender email is verified

### SMS Not Sending
- Verify Twilio credentials and phone number
- Check Twilio dashboard for message status
- Ensure phone numbers are in correct format

### Database Issues
- Verify Supabase connection string
- Check database permissions and RLS policies
- Ensure tables are created correctly

## Support

For issues or questions:
1. Check the browser console for errors
2. Review Netlify function logs
3. Verify all environment variables are set correctly
4. Test API keys individually

## License

This project is for demonstration purposes. Customize and use according to your needs. 