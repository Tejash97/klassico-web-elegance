
import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2070",
    title: "Premium Denim Collection",
    subtitle: "Crafted in Mumbai, Delivered Worldwide",
    cta: "Explore Collection",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564840067614-2d617c3a8fff?q=80&w=1932",
    title: "Elegant Sarees & Kurtis",
    subtitle: "Traditional Elegance, Modern Design",
    cta: "Discover Now",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=1974",
    title: "Sophisticated Court Wear",
    subtitle: "Designed for Distinction",
    cta: "Shop Collection",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image with gradient overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              transition: "transform 6000ms ease-in-out",
              transform:
                currentSlide === index ? "scale(1.05)" : "scale(1)",
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
          
          {/* Content */}
          <div className="relative h-full flex items-center z-10">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
              <div className="max-w-2xl ml-4 md:ml-10 lg:ml-20">
                <div
                  className={`opacity-0 ${
                    isLoaded && currentSlide === index
                      ? "animate-fade-in-left"
                      : ""
                  }`}
                >
                  <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                    {slide.title}
                  </h1>
                </div>
                <div
                  className={`opacity-0 ${
                    isLoaded && currentSlide === index
                      ? "animate-fade-in-left animate-delay-200"
                      : ""
                  }`}
                >
                  <p className="font-poppins text-xl md:text-2xl text-white/90 mb-8">
                    {slide.subtitle}
                  </p>
                </div>
                <div
                  className={`opacity-0 ${
                    isLoaded && currentSlide === index
                      ? "animate-fade-in-left animate-delay-300"
                      : ""
                  }`}
                >
                  <Button
                    className="bg-klassico-gold hover:bg-klassico-gold/90 text-white font-medium px-8 py-6 rounded-none text-lg group transition-all duration-300 transform hover:translate-x-1"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-300 rounded-full ${
              currentSlide === index
                ? "w-10 bg-klassico-gold"
                : "w-4 bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
