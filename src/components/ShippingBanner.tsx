
import { Truck, Globe, Shield } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Pan-India Delivery",
    description: "Fast shipping to all major cities across India",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description: "Delivering premium garments worldwide",
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Crafted with precision and care in Mumbai",
  },
];

const ShippingBanner = () => {
  return (
    <section className="py-14 bg-klassico-navy text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center md:justify-start space-x-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <div className="bg-white/10 p-3 rounded-full">
                <feature.icon className="h-6 w-6 text-klassico-gold" />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-lg">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShippingBanner;
