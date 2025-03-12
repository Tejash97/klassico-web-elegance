
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Denim Collection",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?q=80&w=1974",
    link: "/category/jeans",
  },
  {
    id: 2,
    name: "Women's Kurtis",
    image: "https://images.unsplash.com/photo-1610030454706-a159c0a4c3e4?q=80&w=1974",
    link: "/category/kurtis",
  },
  {
    id: 3,
    name: "Elegant Sarees",
    image: "https://images.unsplash.com/photo-1610030454289-61a48f571d4f?q=80&w=1974",
    link: "/category/sarees",
  },
  {
    id: 4,
    name: "Men's Blazers",
    image: "https://images.unsplash.com/photo-1598808503746-f34cffc2073b?q=80&w=1974",
    link: "/category/blazers",
  },
];

const CategorySection = () => {
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

    const childElements = sectionRef.current?.querySelectorAll(".category-item");
    childElements?.forEach((el) => observer.observe(el));

    return () => {
      childElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="premium-container">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="section-heading">Explore Our Collections</h2>
          <p className="section-subheading">
            Discover premium garments crafted with precision and style for the modern Indian wardrobe
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="category-item opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={category.link} className="category-card group block">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-playfair text-2xl mb-2">
                      {category.name}
                    </h3>
                    <span className="inline-flex items-center text-klassico-gold font-medium group-hover:underline">
                      Explore Collection
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
