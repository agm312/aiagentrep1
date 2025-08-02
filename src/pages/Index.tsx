import { useEffect } from "react";
import Layout from "@/components/Layout.tsx";
import Hero from "@/components/Hero.tsx";
import Services from "@/components/Services.tsx";
import HowItWorks from "@/components/HowItWorks.tsx";
import About from "@/components/About.tsx";
import FAQ from "@/components/FAQ.tsx";
import Contact from "@/components/Contact.tsx";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <Layout>
      <Hero />
      <Services />
      <HowItWorks />
      <About />
      <FAQ />
      <Contact />
    </Layout>
  );
};

export default Index; 