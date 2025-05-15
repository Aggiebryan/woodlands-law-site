
import { useEffect } from "react";

const OurTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            Our Attorneys
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Attorney Profiles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Attorney 1 */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="https://github.com/Aggiebryan/woodlands-law-site/blob/main/public/gwen600800flag.webp"
                  alt="Gwendolyn Simpson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Gwendolyn Simpson</h3>
              <p className="text-law-gold font-medium mb-2">Managing Attorney</p>
              <p className="text-gray-600 mb-4">
                Ray Purser brings nearly 30 years of experience representing clients in complex insurance and commercial litigation...
              </p>
              <a 
                href="#" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </a>
            </div>

            {/* Attorney 2 */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="https://estates.woodlands.law/wp-content/uploads/2021/03/Ray-Purser-Preferred-Head-Shot-Sized-and-Enhanced.jpg"
                  alt="Ryan H. Briscoe"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Ryan H. Briscoe</h3>
              <p className="text-law-gold font-medium mb-2">Partner</p>
              <p className="text-gray-600 mb-4">
                Ryan Briscoe has specialized in offering comprehensive estate planning and business succession services...
              </p>
              <a 
                href="#" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </a>
            </div>

            {/* Attorney 3 */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img
                  src="https://estates.woodlands.law/wp-content/uploads/2021/03/Ray-Purser-Preferred-Head-Shot-Sized-and-Enhanced.jpg"
                  alt="John R. Bartos"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">John R. Bartos</h3>
              <p className="text-law-gold font-medium mb-2">Partner</p>
              <p className="text-gray-600 mb-4">
                John Bartos focuses his practice on estate planning, probate, and retirement planning...
              </p>
              <a 
                href="#" 
                className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto"
              >
                View Profile
              </a>
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
            Our attorneys bring decades of combined experience across multiple practice areas, 
            offering the skill and sophistication of larger firms with the personalized attention 
            and accessibility of a local practice.
          </p>
          <a 
            href="/contact" 
            className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default AttorneysPage;
