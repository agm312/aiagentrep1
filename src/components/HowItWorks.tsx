import { MessageSquare, Settings, Brain, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: 1,
      title: "Free Consultation",
      description: "We analyze your current workflow and identify automation opportunities specific to your business.",
      time: "1 Day"
    },
    {
      icon: Settings,
      number: 2,
      title: "Custom Setup",
      description: "Our team configures your AI automation system with your CRM, phone system, and existing tools.",
      time: "2-3 Days"
    },
    {
      icon: Brain,
      number: 3,
      title: "AI Training",
      description: "We train your AI assistant on your specific market, services, and communication style for authentic interactions.",
      time: "1 Week"
    },
    {
      icon: Rocket,
      number: 4,
      title: "Go Live",
      description: "Launch your AI automation and start seeing results immediately with full support and monitoring.",
      time: "Ongoing"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4 mr-2" />
            SIMPLE PROCESS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works: <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">From Setup to Success</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Getting started with AI Agent Rep is easier than you think. Our proven 4-step process gets you up and running in just one week.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                
                <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {step.time}
                </div>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 