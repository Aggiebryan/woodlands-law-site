
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BryanHolmanPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <Link to="/attorneys" className="text-white/80 hover:text-white mb-4 inline-block">
            &larr; Back to Our Team
          </Link>
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            Bryan C. Holman
          </h1>
          <p className="text-law-gold text-xl mb-4">Associate Attorney</p>
          <div className="gold-underline"></div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-gray-200 max-w-md mx-auto md:mx-0">
                <img
                  src="/bryanflag600800.webp"
                  alt="Bryan C. Holman"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-law-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-serif text-law-purple mb-4">Contact Information</h3>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:bryan@woodlands.law" className="text-law-purple hover:text-law-gold">bryan@woodlands.law</a>
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> <a href="tel:+1234567890" className="text-law-purple hover:text-law-gold">(123) 456-7890</a>
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif text-law-purple mb-6">Biography</h2>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Bryan C. Holman serves as Associate Attorney at The Woodlands Law Firm, where he focuses his practice on estate planning, business succession, and civil litigation matters.
                </p>
                <p className="mb-4">
                  Bryan brings a detail-oriented and client-focused approach to his practice, helping individuals and families create comprehensive estate plans tailored to their unique needs and goals. He has particular expertise in crafting solutions for business owners seeking to protect their assets and plan for smooth succession.
                </p>
                <p className="mb-4">
                  In his litigation practice, Bryan represents clients in insurance disputes, contract matters, and business conflicts. His analytical mindset and strong research skills enable him to develop effective strategies for complex legal challenges.
                </p>
                <p className="mb-4">
                  Before joining The Woodlands Law Firm, Bryan gained valuable experience at a boutique estate planning firm in Houston, where he assisted clients with wealth preservation strategies and business entity formation.
                </p>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Education</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>J.D., South Texas College of Law</li>
                  <li>B.B.A., Texas A&M University, Business Administration</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Bar Admissions</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>State Bar of Texas</li>
                  <li>U.S. District Court for the Southern District of Texas</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Professional Associations</h3>
                <ul className="list-disc pl-6">
                  <li>Texas Young Lawyers Association</li>
                  <li>Houston Bar Association</li>
                  <li>The Woodlands Bar Association</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BryanHolmanPage;
