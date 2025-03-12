
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BrandStory = () => {
  const storyRef = useRef<HTMLDivElement>(null);

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

    const elements = storyRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-white" ref={storyRef}>
      <div className="premium-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="animate-on-scroll opacity-0 relative z-10">
              <img
                src="https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=2015"
                alt="Klassico Workshop in Mumbai"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="animate-on-scroll opacity-0 animate-delay-200 absolute -bottom-10 -right-10 w-2/3 h-auto z-0 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964"
                alt="Klassico craftsmanship"
                className="w-full h-auto object-cover border-8 border-white shadow-premium"
              />
            </div>
          </div>

          <div className="animate-on-scroll opacity-0 lg:pl-8">
            <span className="inline-block px-4 py-1 bg-klassico-cream text-klassico-navy font-medium text-sm mb-4">
              Our Story
            </span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-klassico-navy mb-6 leading-tight">
              Crafting Premium Garments in the Heart of Mumbai
            </h2>
            <p className="text-gray-700 mb-6">
              For over two decades, Klassico Jeans has been synonymous with quality craftsmanship and timeless design. Our journey began in Mumbai, where we established our production hub with a vision to create premium garments that blend traditional Indian aesthetics with contemporary styles.
            </p>
            <p className="text-gray-700 mb-8">
              Today, we take pride in our extensive collection of jeans, women's kurtis, sarees, men's blazers, and court wear. Each piece is meticulously crafted by our skilled artisans, ensuring unparalleled quality and attention to detail.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-klassico-navy font-medium border-b-2 border-klassico-gold pb-1 transition-all hover:pl-2"
            >
              Learn more about our journey
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
