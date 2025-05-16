
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-law-purple min-h-[90vh] flex items-center">
      <div 
        className="absolute inset-0 z-0 opacity-70 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://github.com/Aggiebryan/woodlands-law-site/blob/f78cf265180b10fabcdf829a40513ae0174e48e6/public/woodlands_lifted%20photography_stock-1-3.webp/:/rs=w:1535,m')",
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
