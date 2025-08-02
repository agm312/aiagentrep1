import { MessageSquare, Settings, BarChart3, FileText, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that handles customer inquiries 24/7, reducing support costs and improving customer satisfaction.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Learning & Improvement"],
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with smart automation that adapts to your business needs.",
      features: ["Custom Workflows", "API Integrations", "Real-time Monitoring"],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics and predictive modeling.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports"],
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automated document analysis, extraction, and processing for enhanced productivity.",
      features: ["OCR Technology", "Data Extraction", "Workflow Integration"],
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed specifically for your unique business challenges and requirements.",
      features: ["Custom Development", "Scalable Architecture", "Ongoing Support"],
      color: "from-purple-600 to-blue-600"
    },
    {
      icon: Users,
      title: "Content Generation",
      description: "AI-powered content creation for marketing, documentation, and communication needs.",
      features: ["Multi-format Content", "Brand Voice Training", "SEO Optimization"],
      color: "from-blue-600 to-purple-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our AI Automation Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions designed to transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://aiagentrep.com/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300 text-center block"
              >
                See It In Action
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 