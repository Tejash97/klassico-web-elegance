
import { useEffect, useRef } from "react";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: 1,
    name: "Premium Slim Fit Jeans",
    category: "Men's Denim",
    price: 4999,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=1974",
    link: "/product/premium-slim-fit-jeans",
  },
  {
    id: 2,
    name: "Embroidered Silk Kurti",
    category: "Women's Kurti",
    price: 3499,
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1974",
    link: "/product/embroidered-silk-kurti",
  },
  {
    id: 3,
    name: "Classic Wool Blazer",
    category: "Men's Blazer",
    price: 8999,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?q=80&w=1980",
    link: "/product/classic-wool-blazer",
  },
  {
    id: 4,
    name: "Banarasi Silk Saree",
    category: "Women's Saree",
    price: 12999,
    image: "https://images.unsplash.com/photo-1610030454704-89122c66a154?q=80&w=1974",
    link: "/product/banarasi-silk-saree",
  },
];

const FeaturedCollection = () => {
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
    <section className="py-20 bg-klassico-cream/30" ref={sectionRef}>
      <div className="premium-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="animate-on-scroll opacity-0 mb-6 md:mb-0">
            <h2 className="section-heading mb-4">Featured Collection</h2>
            <p className="text-gray-700 max-w-xl">
              Explore our latest designs that showcase the perfect blend of traditional craftsmanship and contemporary style
            </p>
          </div>
          <div className="animate-on-scroll opacity-0 animate-delay-200">
            <Link 
              to="/collections" 
              className="inline-flex items-center text-klassico-navy font-medium hover:text-klassico-gold transition-colors"
            >
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-on-scroll opacity-0 group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="bg-white shadow-premium group-hover:shadow-premium-hover transition-all duration-500">
                <div className="relative overflow-hidden">
                  <Link to={product.link}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                  <Button 
                    className="absolute bottom-4 right-4 bg-white text-klassico-navy hover:bg-klassico-navy hover:text-white rounded-full w-10 h-10 p-0 flex items-center justify-center shadow-premium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                    size="icon"
                    aria-label="Add to bag"
                  >
                    <ShoppingBag className="h-5 w-5" />
                  </Button>
                </div>
                <div className="p-6">
                  <span className="text-sm text-gray-500 mb-2 block">
                    {product.category}
                  </span>
                  <Link to={product.link}>
                    <h3 className="font-playfair text-xl font-semibold mb-2 text-klassico-navy group-hover:text-klassico-gold transition-colors">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-medium text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
