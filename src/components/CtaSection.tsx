
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="bg-law-purple rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Column */}
            <div 
              className="h-64 lg:h-auto bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2671&auto=format')",
              }}
            />
            
            {/* Content Column */}
            <div className="p-8 md:p-12 lg:p-16 flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-4">
                  Ready to Discuss Your Legal Needs?
                </h3>
                
                <p className="text-white/80 mb-8 max-w-lg">
                  Schedule a consultation with one of our experienced attorneys to discuss 
                  your specific legal needs and how we can help protect your interests.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/schedule" 
                    className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block text-center"
                  >
                    Schedule a Consultation
                  </Link>
                  
                  <Link 
                    to="/services" 
                    className="border border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition-colors inline-block text-center"
                  >
                    Learn About Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
