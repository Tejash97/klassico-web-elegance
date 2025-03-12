
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-klassico-cream/20">
        <div className="premium-container text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-klassico-navy mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Crafting premium garments in the heart of Mumbai since 2005
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20" ref={sectionRef}>
        <div className="premium-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll opacity-0">
              <h2 className="section-heading mb-6">Our Journey</h2>
              <p className="text-gray-700 mb-6">
                Klassico was born from a passion for quality craftsmanship and timeless design. What began as a small workshop in Mumbai has grown into a respected name in the Indian fashion industry.
              </p>
              <p className="text-gray-700 mb-6">
                Our founder, Raj Sharma, started with a simple vision: to create garments that blend traditional Indian craftsmanship with contemporary design sensibilities. This vision has guided every decision we've made since our establishment in 2005.
              </p>
              <p className="text-gray-700">
                Today, Klassico stands for quality, authenticity, and responsible fashion. We take pride in our Mumbai roots while serving customers across India and around the world.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 animate-delay-200">
              <img 
                src="https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=2070"
                alt="Klassico workshop" 
                className="w-full h-auto rounded-sm shadow-premium"
              />
            </div>
          </div>
          
          <Separator className="my-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-on-scroll opacity-0">
              <img 
                src="https://images.unsplash.com/photo-1604671801908-6f0c6a092c05?q=80&w=2070"
                alt="Klassico manufacturing" 
                className="w-full h-auto rounded-sm shadow-premium"
              />
            </div>
            <div className="order-1 lg:order-2 animate-on-scroll opacity-0 animate-delay-200">
              <h2 className="section-heading mb-6">Our Production Hub</h2>
              <p className="text-gray-700 mb-6">
                Our state-of-the-art production facility in Mumbai is where traditional craftsmanship meets modern technology. We've invested in equipment and processes that maintain the highest standards of quality while minimizing environmental impact.
              </p>
              <p className="text-gray-700 mb-6">
                Every garment passes through multiple quality checks before it leaves our workshop. Our team of skilled artisans brings decades of collective experience to each piece they create.
              </p>
              <p className="text-gray-700">
                We believe in fair labor practices and provide our team with a safe, supportive work environment. Many of our craftspeople have been with us for over a decade, contributing to the consistent quality that defines Klassico.
              </p>
            </div>
          </div>
          
          <Separator className="my-20" />
          
          <div className="text-center animate-on-scroll opacity-0">
            <h2 className="section-heading mb-6">Our Values</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-16">
              At Klassico, our business is built on a foundation of core values that guide everything we do.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <div className="w-16 h-16 bg-klassico-cream/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-klassico-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-klassico-navy">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on materials or workmanship, ensuring every product stands the test of time.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <div className="w-16 h-16 bg-klassico-cream/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-klassico-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-klassico-navy">Ethical Practices</h3>
                <p className="text-gray-600">
                  We prioritize fair labor, responsible sourcing, and environmentally conscious production methods.
                </p>
              </div>
              
              <div className="bg-white p-8 shadow-premium hover:shadow-premium-hover transition-all duration-300">
                <div className="w-16 h-16 bg-klassico-cream/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-klassico-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12h20M16 6l6 6-6 6"></path>
                  </svg>
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-4 text-klassico-navy">Customer Focus</h3>
                <p className="text-gray-600">
                  From design to delivery, we prioritize your satisfaction, creating garments that enhance your lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
