import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-background border-b border-gray-800 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">AI Agent Rep</span>
          </div>
          <a
            href="https://aiagentrep.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 