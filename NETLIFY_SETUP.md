# Netlify Deployment Setup for AI Agent Rep Lead Forms

This guide covers deploying the comprehensive lead form handling system to Netlify.

## 🚀 Quick Deploy

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: `18`

## 📋 Environment Variables

Set these in your Netlify dashboard under **Site settings > Environment variables**:

### Required Variables
```bash
NODE_ENV=production
```

### Optional Variables (for email notifications)
```bash
SENDGRID_API_KEY=your_sendgrid_api_key_here
NOTIFICATION_EMAIL=your-email@domain.com
FROM_EMAIL=noreply@yourdomain.com
```

## 🔧 Netlify Functions Setup

The system includes a Netlify serverless function for handling form submissions:

### Function Location
- **File**: `netlify/functions/lead-submission.js`
- **Endpoint**: `/.netlify/functions/lead-submission`

### Function Features
- ✅ CORS enabled for cross-origin requests
- ✅ Input validation (name, email format)
- ✅ Email notifications via SendGrid
- ✅ Lead data enrichment (IP, user agent, referrer)
- ✅ Error handling and logging

## 📊 Lead Dashboard Access

After deployment, access your lead dashboard at:
```
https://your-site.netlify.app/leads
```

### Dashboard Features
- **Real-time stats**: Total leads, today's leads, weekly leads
- **Source tracking**: Filter leads by source (checklist vs demo)
- **CSV export**: Download all leads for external processing
- **Lead details**: Name, email, source, timestamp, status

## 🔄 Form Integration

### Checklist Landing Page
- **URL**: `/checklist`
- **Source**: `checklist_landing_page`
- **Features**: Name + email capture, PDF download

### AI Demo Landing Page
- **URL**: `/ai-demo` or `/demo`
- **Source**: `ai_demo_landing_page`
- **Features**: Name + email capture, demo scheduling

## 📈 Lead Tracking

### Local Storage (Development)
- Leads stored in browser localStorage
- Access via browser dev tools
- Dashboard shows local leads

### Netlify Functions (Production)
- Leads processed by serverless function
- Email notifications sent
- Data logged for analysis

## 🛠️ Development vs Production

### Development Mode
```javascript
// Uses local storage
apiEndpoint = '/api/leads' // Fallback
```

### Production Mode
```javascript
// Uses Netlify function
apiEndpoint = '/.netlify/functions/lead-submission'
```

## 📧 Email Setup (Optional)

### SendGrid Configuration
1. Create SendGrid account
2. Generate API key
3. Set environment variables:
   ```bash
   SENDGRID_API_KEY=SG.your_api_key_here
   NOTIFICATION_EMAIL=your-email@domain.com
   FROM_EMAIL=noreply@yourdomain.com
   ```

### Email Template
The function sends structured emails with:
- Lead name and email
- Source page information
- Timestamp and metadata
- IP address and user agent

## 🔍 Monitoring & Analytics

### Netlify Function Logs
- Access via Netlify dashboard
- Function logs show lead submissions
- Error tracking and debugging

### Lead Analytics
- Dashboard shows conversion rates
- Source attribution tracking
- Time-based lead analysis

## 🚨 Troubleshooting

### Common Issues

1. **Function not found (404)**
   - Ensure `netlify/functions/` directory exists
   - Check `netlify.toml` configuration

2. **CORS errors**
   - Function includes CORS headers
   - Check browser console for errors

3. **Email not sending**
   - Verify SendGrid API key
   - Check environment variables
   - Review function logs

4. **Dashboard not loading**
   - Ensure `/leads` route is accessible
   - Check for JavaScript errors

### Debug Mode
Add to your site's HTML head:
```html
<script>
  window.DEBUG_LEADS = true;
</script>
```

## 📱 Mobile Optimization

Both landing pages are fully responsive:
- Mobile-first design
- Touch-friendly forms
- Optimized for all screen sizes

## 🔒 Security Considerations

- Input validation on both client and server
- CORS protection enabled
- Rate limiting (implement as needed)
- Data sanitization

## 🎯 Performance Optimization

- Netlify CDN for static assets
- Serverless functions for dynamic content
- Optimized bundle sizes
- Fast loading times

## 📞 Support

For issues with:
- **Netlify deployment**: Check Netlify docs
- **Form functionality**: Review function logs
- **Dashboard access**: Verify routing setup

---

**Ready to deploy?** Your lead capture system is now fully integrated and Netlify-ready! 🎉 