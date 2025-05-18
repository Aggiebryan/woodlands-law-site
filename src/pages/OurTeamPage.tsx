
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OurTeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            Our Team
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
                <img src="/gwen600800flag.webp" alt="Gwendolyn Simpson" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Gwendolyn Simpson</h3>
              <p className="text-law-gold font-medium mb-2">Managing Attorney</p>
              <p className="text-gray-600 mb-4 text-justify">
                Gwendolyn Simpson is a native Houstonian and a graduate of Baylor Law School with decades of experience in civil litigation, transactions, probate, and personal injury.
              </p>
              <Link to="/team/gwendolyn-simpson" className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto">
                View Profile
              </Link>
            </div>

            {/* Attorney 2 */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-200">
                <img src="/bryanflag600800.webp" alt="Bryan C. Holman" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Bryan C. Holman</h3>
              <p className="text-law-gold font-medium mb-2">Associate Attorney</p>
              <p className="text-gray-600 mb-4 text-justify">
                Bryan Holman brings extensive experience as a former insurance adjuster and entrepreneur, offering unique insights into insurance claims, business law, and litigation.
              </p>
              <Link to="/team/bryan-holman" className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto">
                View Profile
              </Link>
            </div>

            {/* Staff Member - Courtney */}
            <div className="flex flex-col">
              <div className="rounded-lg overflow-hidden mb-4 aspect-[3/4] bg-gray-100 relative">
                <img 
                  src="/Courtneyblack background.webp" 
                  alt="Courtney Fields" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    // If image fails to load, show fallback content
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'w-full h-full flex items-center justify-center bg-gray-200';
                      const initials = document.createElement('span');
                      initials.className = 'text-4xl font-serif text-law-purple';
                      initials.textContent = 'CF';
                      fallback.appendChild(initials);
                      parent.appendChild(fallback);
                    }
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-0">
                  <span className="text-4xl font-serif text-law-purple">CF</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-law-purple mb-1">Courtney Fields</h3>
              <p className="text-law-gold font-medium mb-2">Legal Assistant</p>
              <p className="text-gray-600 mb-4 text-justify">
                Courtney Fields is a skilled legal assistant with excellent organizational abilities and client communication skills. She manages case documentation, coordinates schedules, and ensures the office runs smoothly.
              </p>
              <Link to="/team/courtney-fields" className="text-law-purple hover:text-law-gold transition-colors font-medium mt-auto">
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
            Our attorneys bring decades of combined experience across multiple practice areas, 
            offering the skill and sophistication of larger firms with the personalized attention 
            and accessibility of a local practice.
          </p>
          <Link to="/contact" className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>;
};
export default OurTeamPage;
