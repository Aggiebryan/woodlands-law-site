
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
              The content on this website has been prepared by The Woodlands Law Firm for informational purposes only and should not be construed as legal advice. This information is not intended to create, and receipt of it does not constitute, an attorney-client relationship. Internet subscribers and online readers should not act upon this information without seeking professional counsel.
            </p>
            
            <p>
              The information presented on this site about legal issues, legal terms, and legal procedures is to provide general information only. While we strive to ensure the information on this site is accurate, complete, and current, we make no warranty or guarantee concerning the accuracy or reliability of the content at this site or at other sites to which we link.
            </p>
            
            <p>
              The choice of an attorney is an important decision and should not be based solely on advertising. Past results afford no guarantee of future results. Every case is different and must be judged on its own merits. No representation is made that the quality of the legal services to be performed is greater than the quality of legal services performed by other lawyers.
            </p>
            
            <p>
              Some images on this website are stock photography used to illustrate concepts discussed and may not depict actual clients or events. Any resemblance to actual events, locales, or persons, living or dead, is entirely coincidental.
            </p>
            
            <p>
              In accordance with rules established by state bar associations and other professional regulatory bodies, this website may constitute attorney advertising in some jurisdictions. Prior results do not guarantee a similar outcome.
            </p>
            
            <p>
              All written and visual content on this site is the property of The Woodlands Law Firm and is protected by U.S. and international copyright laws. The information contained on this website may not be copied, reproduced, distributed, or displayed without the express written permission of The Woodlands Law Firm.
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
