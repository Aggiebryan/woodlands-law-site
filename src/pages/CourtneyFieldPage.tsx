
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CourtneyFieldPage = () => {
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
            Courtney Field
          </h1>
          <p className="text-law-gold text-xl mb-4">Legal Assistant</p>
          <div className="gold-underline"></div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6 aspect-[3/4] bg-gray-200 max-w-md mx-auto md:mx-0">
                <img
                  src="/placeholder.svg"
                  alt="Courtney Field"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-law-gray-light p-6 rounded-lg">
                <h3 className="text-xl font-serif text-law-purple mb-4">Contact Information</h3>
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:courtney@woodlands.law" className="text-law-purple hover:text-law-gold">courtney@woodlands.law</a>
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
                  Courtney Field serves as Legal Assistant at The Woodlands Law Firm, where she provides essential administrative support to our legal team and serves as a primary point of contact for clients.
                </p>
                <p className="mb-4">
                  With exceptional organizational skills and attention to detail, Courtney manages case files, coordinates client meetings, prepares legal documents, and ensures the smooth operation of the firm's day-to-day activities. Her commitment to professionalism and client service makes her an invaluable member of our team.
                </p>
                <p className="mb-4">
                  Courtney works closely with both attorneys and clients to facilitate communication and ensure that client needs are promptly addressed. Her friendly demeanor and efficient approach help create a welcoming environment for clients navigating complex legal matters.
                </p>
                <p className="mb-4">
                  Prior to joining The Woodlands Law Firm, Courtney gained experience in client relations and administrative management in both legal and corporate settings. Her diverse background enables her to understand the unique needs of our varied client base.
                </p>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Education</h3>
                <ul className="list-disc pl-6 mb-6">
                  <li>B.A., Sam Houston State University, Business Administration</li>
                  <li>Paralegal Certificate, Lone Star College</li>
                </ul>
                
                <h3 className="text-2xl font-serif text-law-purple my-6">Skills & Expertise</h3>
                <ul className="list-disc pl-6">
                  <li>Legal document preparation and management</li>
                  <li>Client relations and communication</li>
                  <li>Office administration and scheduling</li>
                  <li>Legal research assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourtneyFieldPage;
