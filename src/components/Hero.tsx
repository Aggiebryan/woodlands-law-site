
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const Hero = () => {
  const images = [
    "/woodlands_lifted photography_stock-1-3.jpg",
    "/gwenwithclient.jpg",
    "/woodlands_lifted photography_stock-1-4.jpg",
    "/Bryan-in-front-of-woman.jpg"
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-law-purple min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-cover bg-center transition-opacity duration-1000"
        style={{ 
          backgroundImage: `url('${images[currentImageIndex]}')`,
        }}
      />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-semibold mb-6">
            Building Trust Through <br/>
            <span className="text-law-gold">Legal Excellence</span>
          </h1>
          
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl">
            Comprehensive advocacy for complex disputes and future planning—personalized service devoted to securing justice and preserving your legacy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block text-center"
            >
              Schedule a Consultation
            </Link>
            
            <Link 
              to="/services" 
              className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition-colors inline-block text-center"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
