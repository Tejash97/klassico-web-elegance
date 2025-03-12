
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductProps = {
  product: {
    id: string;
    name: string;
    slug: string;
    price: number;
    category_id: string;
    image_url: string;
  };
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="group animate-on-scroll opacity-0">
      <div className="bg-white shadow-premium group-hover:shadow-premium-hover transition-all duration-500">
        <div className="relative overflow-hidden">
          <Link to={`/product/${product.slug}`}>
            <img 
              src={product.image_url} 
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
          <Link to={`/product/${product.slug}`}>
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
  );
};

export default ProductCard;
