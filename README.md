# AI Assist Pro - AI Automation Tools Homepage

A modern, responsive homepage for an AI service company offering automation tools. Built with React and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive grid layout
- **Modern UI**: Clean, minimalist design with subtle shadows and animations
- **Hover Effects**: Smooth lift animations on feature cards
- **Netlify Ready**: Optimized for deployment on Netlify
- **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- React 18
- Tailwind CSS 3
- PostCSS
- Netlify (deployment)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-automation-homepage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

The `netlify.toml` file is already configured for optimal deployment.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js           # Hero section with headline
│   ├── Features.js       # Features grid container
│   └── FeatureCard.js    # Individual feature card
├── App.js                # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind
```

## Features Included

1. **Automated Booking Calls** - AI-powered call scripts and booking automation
2. **Smart Text Messaging** - Automated SMS campaigns and lead nurturing
3. **Lead Qualification** - Intelligent lead scoring and assessment
4. **Follow-up Automation** - Multi-channel automated follow-up sequences
5. **Client Communication** - Automated updates and report generation
6. **Smart Scheduling** - AI-optimized appointment booking system
7. **CRM Integration** - Seamless integration with existing systems

## Customization

- Colors: Modify `tailwind.config.js` to change the color scheme
- Content: Update feature data in `src/components/Features.js`
- Styling: Adjust CSS classes in component files
- Icons: Replace emoji icons with SVG icons or icon libraries

## License

This project is open source and available under the [MIT License](LICENSE). 