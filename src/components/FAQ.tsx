import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How quickly can I get started with AI automation?",
      answer: "You can get started immediately with a free consultation. Our complete setup process takes just one week, with most clients seeing results within the first few days of going live."
    },
    {
      question: "What do I need to provide to get started?",
      answer: "Just bring your current business processes and goals. We'll handle the technical setup, integration with your existing tools, and AI training. No technical expertise required on your end."
    },
    {
      question: "How much does it cost to implement AI automation?",
      answer: "Pricing varies based on your specific needs and business size. We offer flexible packages starting from basic automation to comprehensive AI solutions. Contact us for a personalized quote during your free consultation."
    },
    {
      question: "Will AI automation work with my existing CRM and tools?",
      answer: "Yes! Our AI automation integrates seamlessly with popular CRMs, phone systems, email platforms, and most business tools. We handle all the technical integration during the setup process."
    },
    {
      question: "What kind of support do I get after going live?",
      answer: "You'll receive ongoing support and monitoring to ensure optimal performance. This includes regular check-ins, performance optimization, and immediate assistance whenever needed."
    },
    {
      question: "How do I know if AI automation is right for my business?",
      answer: "If you're spending time on repetitive tasks, missing leads, or want to scale without hiring more staff, AI automation can help. Our free consultation will identify specific opportunities for your business."
    },
    {
      question: "Can I customize the AI to match my business style?",
      answer: "Absolutely! We train your AI assistant on your specific market, services, communication style, and brand voice to ensure authentic interactions that feel natural to your customers."
    },
    {
      question: "What happens during the free consultation?",
      answer: "We'll analyze your current workflow, identify automation opportunities, discuss your goals, and provide a clear roadmap for implementation. No obligation - just valuable insights for your business."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-400 text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">?</span>
            FREQUENTLY ASKED QUESTIONS
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-750 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </div>
              </button>
              
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ; 