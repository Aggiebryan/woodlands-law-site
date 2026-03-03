import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AttorneyAdvertisingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Attorney Advertising Notice | The Woodlands Law Firm</title>
        <meta name="description" content="This page contains the attorney advertising disclosure for The Woodlands Law Firm, in compliance with the Texas Disciplinary Rules of Professional Conduct." />
      </Helmet>
      {/* Page Header */}
      <div className="relative bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-white font-serif font-semibold mb-2">Attorney Advertising Notice</h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              This website provides general information about legal matters. It does not constitute legal advice and
              does not create an attorney–client relationship. An attorney–client relationship is formed only through a
              written agreement signed by the firm and the client in accordance with Texas law. The principal office of
              The Woodlands Law Firm, PLLC is located in The Woodlands, Texas. Attorneys Gwendolyn Simpson and Bryan C.
              Holman are responsible for the content of this website.
            </p>

            <p>
              The materials presented on this site address legal topics but are provided for informational purposes
              only. Laws and court decisions change over time. The firm does not guarantee the accuracy, completeness,
              or current validity of the information contained on this site or on any external websites linked herein.
              Reliance on this information without consulting an attorney licensed in the appropriate jurisdiction is
              not advised.
            </p>

            <p>
              By providing a mobile telephone number to the firm, you consent to receive occasional SMS or text message
              communications related to firm notifications or your matter. You may opt out at any time by replying
              “STOP” to any message or by providing written notice to admin@woodlands.law,
            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">
              No Attorney-Client Relationship
            </h2>

            <div className="gold-underline mb-6"></div>

            <p>
              Communication with The Woodlands Law Firm through this website does not create an attorney-client
              relationship. Please do not send confidential information to us until an attorney-client relationship has
              been established.
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">Limitations</h2>

            <div className="gold-underline mb-6"></div>

            <p>
              The Woodlands Law Firm practices law only in jurisdictions where its attorneys are admitted to practice.
              Attorneys at The Woodlands Law Firm are admitted to practice law in the State of Texas. The materials on
              this website have been prepared for informational purposes only and are not legal advice.
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
