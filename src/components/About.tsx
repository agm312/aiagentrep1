import { Users, Award, Target, CheckCircle, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Served" },
    { icon: Award, value: "15+", label: "Industry Recognition" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: CheckCircle, value: "1000+", label: "Projects Completed" }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of the curve with cutting-edge AI technologies and methodologies."
    },
    {
      title: "Client Success",
      description: "Your success is our priority. We build solutions that deliver measurable results."
    },
    {
      title: "Transparency",
      description: "Clear communication and honest partnerships built on trust and reliability."
    },
    {
      title: "Scalability",
      description: "Future-proof solutions that grow with your business and adapt to changing needs."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - About Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Leading the Future of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                AI Automation
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a team of AI specialists, engineers, and business strategists dedicated to transforming how businesses operate. With years of experience in artificial intelligence and automation, we deliver solutions that don't just meet expectations—they exceed them.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                <span>Expert team with 10+ years in AI development</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                <span>Proven track record across multiple industries</span>
              </div>
              <div className="flex items-center text-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                <span>24/7 support and maintenance services</span>
              </div>
            </div>
            
            <a 
              href="https://aiagentrep.com/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-block"
            >
              Book a Call
            </a>
          </div>
          
          {/* Right Side - Statistics and Values */}
          <div className="space-y-12">
            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.value}</div>
                  <div className="text-white">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Our Core Values</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{value.title}</h4>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 