
import { useEffect } from "react";
import { Link } from "react-router-dom";

const GwendolynSimpsonPage = () => {
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
            Gwendolyn Simpson
          </h1>
          <p className="text-law-gold text-xl mb-4">Managing Attorney</p>
          <div className="gold-underline"></div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-gray-200 max-w-md mx-auto md:mx-0">
                <img
                  src="/gwen600800flag.webp"
                  alt="Gwendolyn Simpson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-law-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-serif text-law-purple mb-4">Contact Information</h3>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:gwen@woodlands.law" className="text-law-purple hover:text-law-gold">gwen@woodlands.law</a>
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
                  Gwendolyn Simpson is the Managing Attorney at The Woodlands Law Firm, where she brings nearly three decades of experience in insurance litigation, civil disputes, and estate planning to her practice.
                </p>
                <p className="mb-4">
                  Known for her thorough approach and strategic thinking, Gwendolyn has successfully represented clients in complex insurance claims, business disputes, and high-value personal injury cases throughout Texas. Her practice spans both trial and appellate work, with significant experience in federal and state courts.
                </p>
                <p className="mb-4">
                  Prior to founding The Woodlands Law Firm, Gwendolyn served as senior counsel at a regional insurance defense firm, where she gained invaluable insight into the tactics and strategies used by insurance companies—knowledge that now benefits her policyholder clients.
                </p>
                <p className="mb-4">
                  Gwendolyn's dedication to her clients extends beyond litigation. She also helps individuals and families create comprehensive estate plans that protect their assets and provide for seamless wealth transfer across generations.
                </p>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Education</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>J.D., University of Houston Law Center</li>
                  <li>B.A., Rice University, Political Science, summa cum laude</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Bar Admissions</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>State Bar of Texas</li>
                  <li>U.S. District Court for the Southern District of Texas</li>
                  <li>U.S. District Court for the Eastern District of Texas</li>
                  <li>U.S. Court of Appeals for the Fifth Circuit</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Professional Associations</h3>
                <ul className="list-disc pl-6">
                  <li>Texas Trial Lawyers Association</li>
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

export default GwendolynSimpsonPage;
