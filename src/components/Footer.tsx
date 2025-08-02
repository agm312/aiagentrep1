import { Zap, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left Side - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AI Agent Rep</span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforming businesses with cutting-edge AI automation solutions. We help companies increase efficiency, reduce costs, and scale operations.
            </p>
            <div className="flex items-center text-gray-300">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@aiagentrep.com</span>
            </div>
          </div>
          
          {/* Right Side - Company Links */}
          <div className="md:text-right">
            <h3 className="text-white font-bold mb-4">Company</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AI Agent Rep. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 