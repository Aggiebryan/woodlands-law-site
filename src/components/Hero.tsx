
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const images = [
    "/lovable-uploads/846098cf-1b95-4252-ad7d-ecf6b1180d90.png", // gwenwithclient.webp
    "/lovable-uploads/577d394a-a6e5-4fa4-bb3f-92f9ab114264.png", // woodlands1a.webp
    "/lovable-uploads/00199770-5714-4215-8a45-1c186a049246.png", // bryanatdesk.webp
    "/lovable-uploads/e3c160e5-506d-47fc-93c3-51f48fa0f980.png", // woodlands1b.webp
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative bg-transparent min-h-[90vh] flex items-center">
      {/* Images */}
      {images.map((image, index) => (
        <div 
          key={index}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
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
              className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block text-center"
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
