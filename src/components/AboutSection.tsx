
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2532&auto=format" 
                alt="The Woodlands Law Firm Office" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-law-gold p-6 rounded-lg hidden md:block">
                <p className="text-white font-serif text-xl">20+ Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">
              About The Woodlands Law Firm
            </h2>
            <div className="gold-underline mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              The Woodlands Law Firm delivers experienced representation for life's most important legal challenges—from protecting your business and financial future to standing up for your rights in litigation. Our firm combines aggressive advocacy in civil disputes with thoughtful estate and legacy planning. We serve as trusted counsel, helping Texans protect what they've built and plan for what's next.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block text-center"
              >
                Learn More About Us
              </Link>
              
              <Link 
                to="/ourteam" 
                className="border border-law-purple text-law-purple hover:bg-law-purple hover:text-white font-medium py-3 px-8 rounded transition-colors inline-block text-center"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
