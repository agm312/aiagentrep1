const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');

// Initialize Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const formData = JSON.parse(event.body);
    
    // Extract form data
    const { name, email, company, phone, website, problems } = formData;
    
    // Send email notification
    const emailMsg = {
      to: 'hello@aiagentrep.com', // Your email
      from: 'noreply@aiagentrep.com', // Verified sender
      subject: 'New AI Demo Request',
      html: `
        <h2>New AI Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || 'Not provided'}</p>
        <p><strong>Problems to solve:</strong></p>
        <ul>
          ${problems ? problems.map(problem => `<li>${problem}</li>`).join('') : 'None selected'}
        </ul>
        <p><a href="https://aiagentrep.com/demo">View in Dashboard</a></p>
      `
    };

    // Send SMS notification
    const smsMessage = `New AI Demo Request: ${name} from ${company}. Phone: ${phone}. Problems: ${problems ? problems.join(', ') : 'None'}`;

    // Send notifications
    await Promise.all([
      sgMail.send(emailMsg),
      twilioClient.messages.create({
        body: smsMessage,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.YOUR_PHONE_NUMBER // Your phone number
      })
    ]);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Notifications sent successfully' })
    };

  } catch (error) {
    console.error('Error sending notifications:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send notifications' })
    };
  }
}; 