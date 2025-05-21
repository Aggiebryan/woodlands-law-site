
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AttorneyAdvertisingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-white font-serif font-semibold mb-2">
            Attorney Advertising Notice
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              This website is designed for general information only. The information presented at this site should not be construed as formal legal advice or the formation of a lawyer-client relationship. The principal office is located in The Woodlands, Texas. Attorney Gwendolyn Simpson is responsible for the content of this website.
            </p>
            
            <p>
              While the information on this site is about legal issues, it is not legal advice. Moreover, due to the rapidly changing nature of the law and reliance on information provided by outside sources, the firm and its attorney(s) make no warranty or guarantee concerning the accuracy or reliability of the content at this site or at other sites to which this website links.
            </p>
            
            <p>
              Providing a mobile number to the firm for contact shall be construed as express consent to utilize such a number for SMS and text messaging for the purpose of occasional notifications. You may opt out at any time by providing us notice at admin@woodlands.law or replying STOP.
            </p>
            
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">
              No Attorney-Client Relationship
            </h2>
            
            <div className="gold-underline mb-6"></div>
            
            <p>
              Communication with The Woodlands Law Firm through this website does not create an attorney-client relationship. Please do not send confidential information to us until an attorney-client relationship has been established.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">
             Limitations
            </h2>
            
            <div className="gold-underline mb-6"></div>
            
            <p>
              The Woodlands Law Firm practices law only in jurisdictions where its attorneys are admitted to practice. Attorneys at The Woodlands Law Firm are admitted to practice law in the State of Texas. The materials on this website have been prepared for informational purposes only and are not legal advice.
            </p>
            
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/" 
              className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AttorneyAdvertisingPage;
