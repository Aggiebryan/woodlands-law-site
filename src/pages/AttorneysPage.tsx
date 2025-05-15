
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AttorneysPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            Our Team
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Team Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 - Gwendolyn Simpson */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="/gwen600800flag.webp"
                  alt="Gwendolyn Simpson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Gwendolyn Simpson</h3>
              <p className="text-law-gold font-medium mb-2">Managing Attorney</p>
              <p className="text-gray-600 mb-4">
                Gwendolyn Simpson brings nearly 30 years of experience representing clients in complex insurance and commercial litigation...
              </p>
              <Link 
                to="/team/gwendolyn-simpson" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </Link>
            </div>

            {/* Team Member 2 - Bryan C. Holman */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="/bryanflag600800.webp"
                  alt="Bryan C. Holman"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Bryan C. Holman</h3>
              <p className="text-law-gold font-medium mb-2">Associate Attorney</p>
              <p className="text-gray-600 mb-4">
                Bryan Holman has specialized in offering comprehensive estate planning and business succession services...
              </p>
              <Link 
                to="/team/bryan-holman" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </Link>
            </div>

            {/* Team Member 3 - Courtney Field */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="/placeholder.svg"
                  alt="Courtney Field"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Courtney Field</h3>
              <p className="text-law-gold font-medium mb-2">Legal Assistant</p>
              <p className="text-gray-600 mb-4">
                Courtney Field provides essential administrative support and client service for our entire legal team...
              </p>
              <Link 
                to="/team/courtney-field" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-law-gray-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Experienced Legal Representation
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Our team brings decades of combined experience across multiple practice areas, 
            offering the skill and sophistication of larger firms with the personalized attention 
            and accessibility of a local practice.
          </p>
          <Link 
            to="/contact" 
            className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AttorneysPage;
