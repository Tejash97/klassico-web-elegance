
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-20">
        <div className="text-center px-4">
          <h1 className="font-playfair text-6xl md:text-8xl font-bold text-klassico-navy mb-6">404</h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-md mx-auto">
            We couldn't find the page you were looking for
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center text-klassico-navy border border-klassico-navy px-6 py-3 hover:bg-klassico-navy hover:text-white transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
