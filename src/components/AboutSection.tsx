
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
                alt="Woodlands Law Office" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-law-gold p-6 rounded-lg hidden md:block">
                <p className="text-white font-serif text-xl">20+ Years of Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-navy mb-4">
              About Woodlands Law
            </h2>
            <div className="gold-underline mb-6"></div>
            
            <p className="text-gray-600 mb-6">
              Founded in 2003, Woodlands Law has established itself as a trusted name in legal services, 
              specializing in trusts, estates, and business law. Our team of experienced attorneys is 
              committed to providing personalized, comprehensive legal solutions tailored to each 
              client's unique needs.
            </p>
            
            <p className="text-gray-600 mb-8">
              We believe in building long-term relationships with our clients, serving as trusted 
              advisors through life's most important decisions. Our approach combines legal expertise 
              with compassion and understanding, ensuring that your interests are protected and your 
              goals are achieved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/about" 
                className="bg-law-navy hover:bg-law-navy-light text-white font-medium py-3 px-8 rounded transition-colors inline-block text-center"
              >
                Learn More About Us
              </Link>
              
              <Link 
                to="/attorneys" 
                className="border border-law-navy text-law-navy hover:bg-law-navy hover:text-white font-medium py-3 px-8 rounded transition-colors inline-block text-center"
              >
                Meet Our Attorneys
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
