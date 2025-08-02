import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ready to transform your business with AI automation? Let's discuss your project and create a custom solution that drives results.
          </p>
          <a
            href="https://aiagentrep.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 text-center inline-block"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 