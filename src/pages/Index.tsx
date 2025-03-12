
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategorySection from "@/components/CategorySection";
import BrandStory from "@/components/BrandStory";
import FeaturedCollection from "@/components/FeaturedCollection";
import ShippingBanner from "@/components/ShippingBanner";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <BrandStory />
      <ShippingBanner />
      <FeaturedCollection />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
