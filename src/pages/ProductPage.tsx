
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingBag, ChevronRight, Check, Truck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import ProductCard from "@/components/ProductCard";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category_id: string;
  image_url: string;
  additional_images?: string[];
  sizes?: string[];
  available: boolean;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  description?: string;
};

const ProductPage = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        // Fetch the product
        const { data: productData, error: productError } = await supabase
          .from("products")
          .select("*")
          .eq("slug", slug)
          .single();

        if (productError) throw productError;
        setProduct(productData);
        setMainImage(productData.image_url);
        
        if (productData.sizes && productData.sizes.length > 0) {
          setSelectedSize(productData.sizes[0]);
        }

        // Fetch the category
        const { data: categoryData, error: categoryError } = await supabase
          .from("categories")
          .select("*")
          .eq("id", productData.category_id)
          .single();

        if (categoryError) throw categoryError;
        setCategory(categoryData);

        // Fetch related products
        const { data: relatedData, error: relatedError } = await supabase
          .from("products")
          .select("*")
          .eq("category_id", productData.category_id)
          .neq("id", productData.id)
          .limit(4);

        if (relatedError) throw relatedError;
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProductDetails();
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (!selectedSize && product?.sizes && product.sizes.length > 0) {
      toast.error("Please select a size");
      return;
    }
    
    toast.success(`${product?.name} added to your cart`);
    // In a real app, you would implement cart functionality here
  };

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="premium-container py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Skeleton className="aspect-square w-full rounded-sm" />
              <div className="flex space-x-4 mt-4">
                <Skeleton className="w-20 h-20" />
                <Skeleton className="w-20 h-20" />
                <Skeleton className="w-20 h-20" />
              </div>
            </div>
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
              <div className="mt-6">
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="premium-container py-32 text-center">
          <h1 className="font-playfair text-3xl mb-4">Product Not Found</h1>
          <p className="mb-8">The product you are looking for does not exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const images = product.additional_images 
    ? [product.image_url, ...product.additional_images]
    : [product.image_url];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="premium-container">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-klassico-navy">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to={`/category/${category?.slug}`} className="hover:text-klassico-navy">{category?.name}</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-700">{product.name}</span>
          </div>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-12">
        <div className="premium-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 overflow-hidden rounded-sm">
                <img 
                  src={mainImage} 
                  alt={product.name}
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {images.length > 1 && (
                <div className="flex space-x-4">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer border-2 ${
                        mainImage === image ? "border-klassico-navy" : "border-transparent"
                      }`}
                      onClick={() => handleImageClick(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`}
                        className="w-20 h-20 object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl font-bold text-klassico-navy mb-2">
                {product.name}
              </h1>
              
              <p className="text-2xl font-medium text-gray-900 mb-6">
                ₹{product.price.toLocaleString()}
              </p>
              
              <div className="prose prose-gray max-w-none mb-8">
                <p>{product.description}</p>
              </div>
              
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-medium mb-3">Size</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`w-12 h-12 flex items-center justify-center border ${
                          selectedSize === size
                            ? "border-klassico-navy bg-klassico-navy text-white"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-gray-300 inline-flex">
                  <button 
                    className="px-4 py-2 border-r border-gray-300"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button 
                    className="px-4 py-2 border-l border-gray-300"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <Button 
                className="w-full mb-4 h-12 bg-klassico-navy hover:bg-klassico-navy/90"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <span>In stock and ready to ship</span>
                </div>
                <div className="flex items-center">
                  <Truck className="h-4 w-4 text-klassico-gold mr-2" />
                  <span>Free shipping on orders over ₹2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Details Tabs */}
      <section className="py-12 bg-gray-50">
        <div className="premium-container">
          <Tabs defaultValue="description">
            <TabsList className="w-full justify-start mb-8 bg-transparent border-b">
              <TabsTrigger value="description" className="rounded-none border-b-2 border-transparent data-[state=active]:border-klassico-navy px-8">
                Description
              </TabsTrigger>
              <TabsTrigger value="details" className="rounded-none border-b-2 border-transparent data-[state=active]:border-klassico-navy px-8">
                Details
              </TabsTrigger>
              <TabsTrigger value="care" className="rounded-none border-b-2 border-transparent data-[state=active]:border-klassico-navy px-8">
                Care Instructions
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="description" className="mt-0">
              <div className="prose prose-gray max-w-none">
                <p className="text-lg">{product.description}</p>
                <p>
                  Crafted with precision and attention to detail, this premium garment showcases the
                  finest qualities of Indian craftsmanship. Each piece is meticulously made in our
                  Mumbai production hub by skilled artisans who bring decades of experience to their work.
                </p>
                <p>
                  The fabric is sourced from the finest mills, ensuring comfort, durability, and a
                  luxurious feel that sets our products apart.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="mt-0">
              <div className="prose prose-gray max-w-none">
                <h3>Product Specifications</h3>
                <ul>
                  <li>Premium quality fabric</li>
                  <li>Made in Mumbai, India</li>
                  <li>Carefully crafted by skilled artisans</li>
                  <li>Designed for comfort and durability</li>
                  {category?.name.includes("Denim") && (
                    <>
                      <li>98% cotton, 2% elastane</li>
                      <li>Button closure with zip fly</li>
                    </>
                  )}
                  {category?.name.includes("Kurti") && (
                    <>
                      <li>100% premium cotton</li>
                      <li>Traditional hand embroidery</li>
                    </>
                  )}
                  {category?.name.includes("Saree") && (
                    <>
                      <li>Pure silk with fine detailing</li>
                      <li>Includes matching blouse piece</li>
                    </>
                  )}
                  {category?.name.includes("Blazer") && (
                    <>
                      <li>Fine wool blend</li>
                      <li>Fully lined interior</li>
                      <li>Multiple interior pockets</li>
                    </>
                  )}
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-0">
              <div className="prose prose-gray max-w-none">
                <h3>Care Instructions</h3>
                {category?.name.includes("Denim") && (
                  <>
                    <p>To ensure the longevity of your Klassico denim:</p>
                    <ul>
                      <li>Machine wash cold with similar colors</li>
                      <li>Use mild detergent</li>
                      <li>Turn inside out before washing</li>
                      <li>Avoid bleach</li>
                      <li>Hang to dry or tumble dry low</li>
                      <li>Iron on low if needed</li>
                    </ul>
                  </>
                )}
                {category?.name.includes("Kurti") && (
                  <>
                    <p>To preserve the beauty of your Klassico kurti:</p>
                    <ul>
                      <li>Hand wash or gentle machine wash</li>
                      <li>Wash with similar colors</li>
                      <li>Use mild detergent</li>
                      <li>Do not bleach</li>
                      <li>Hang to dry in shade</li>
                      <li>Iron on medium heat if needed</li>
                    </ul>
                  </>
                )}
                {category?.name.includes("Saree") && (
                  <>
                    <p>To maintain the elegance of your Klassico saree:</p>
                    <ul>
                      <li>Dry clean recommended</li>
                      <li>If hand washing, use cold water and mild detergent</li>
                      <li>Do not wring or twist</li>
                      <li>Dry flat in shade</li>
                      <li>Store by folding with acid-free tissue paper</li>
                      <li>Iron on low heat if needed</li>
                    </ul>
                  </>
                )}
                {category?.name.includes("Blazer") && (
                  <>
                    <p>To maintain the sophistication of your Klassico blazer:</p>
                    <ul>
                      <li>Dry clean only</li>
                      <li>Brush gently after wearing</li>
                      <li>Hang on a proper suit hanger</li>
                      <li>Allow to air between wearings</li>
                      <li>Store in a breathable garment bag</li>
                    </ul>
                  </>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16">
          <div className="premium-container">
            <h2 className="font-playfair text-3xl font-bold text-klassico-navy mb-12 text-center">
              You May Also Like
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductPage;
