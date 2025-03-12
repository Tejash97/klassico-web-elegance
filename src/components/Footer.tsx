
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link to="/" className="font-playfair text-2xl font-bold text-klassico-navy mb-6 inline-block">
              Klassico
            </Link>
            <p className="text-gray-600 mb-6">
              Premium garments crafted with precision and style for the modern Indian wardrobe. Made in Mumbai, delivered worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-klassico-navy transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-klassico-navy transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-klassico-navy transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Collections</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/category/jeans" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Denim Collection
                </Link>
              </li>
              <li>
                <Link to="/category/kurtis" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Women's Kurtis
                </Link>
              </li>
              <li>
                <Link to="/category/sarees" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Elegant Sarees
                </Link>
              </li>
              <li>
                <Link to="/category/blazers" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Men's Blazers
                </Link>
              </li>
              <li>
                <Link to="/category/court-wear" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Court Wear
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Customer Care</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-klassico-navy transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-klassico-gold mr-3 mt-0.5" />
                <span className="text-gray-600">
                  Klassico Production Hub<br />
                  Mumbai, Maharashtra, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-klassico-gold mr-3" />
                <span className="text-gray-600">+91 9876543210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-klassico-gold mr-3" />
                <span className="text-gray-600">info@klassicojeans.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Klassico Jeans. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-klassico-navy transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-klassico-navy transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-policy" className="text-sm text-gray-500 hover:text-klassico-navy transition-colors">
              Shipping Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
