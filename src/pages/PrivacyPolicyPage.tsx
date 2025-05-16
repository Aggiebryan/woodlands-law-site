
import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-white font-serif font-semibold mb-2">
            Privacy Policy
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p>
              This Privacy Policy describes how The Woodlands Law Firm ("we," "us," or "our") collects, uses, and discloses your personal information when you visit our website, use our services, or otherwise interact with us. By using our website or services, you consent to the practices described in this policy.
            </p>
            
            <h2>Information We Collect</h2>
            
            <p>
              We may collect the following types of information:
            </p>
            
            <ul>
              <li>
                <strong>Contact Information:</strong> Such as name, email address, postal address, and telephone number.
              </li>
              <li>
                <strong>Inquiry Information:</strong> Information provided in your communications with us, including consultation requests and information about your legal matter.
              </li>
              <li>
                <strong>Usage Information:</strong> Information about how you use our website, including browser type, domain names, IP addresses, pages viewed, access times, and referring website addresses.
              </li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            
            <p>
              We may use your information for the following purposes:
            </p>
            
            <ul>
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and fulfill your requests</li>
              <li>To send you administrative information</li>
              <li>To personalize your experience on our website</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and interests</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            
            <p>
              We may share your information with:
            </p>
            
            <ul>
              <li>Service providers who perform services on our behalf</li>
              <li>Professional advisors, such as lawyers, bankers, auditors, and insurers</li>
              <li>Third parties to whom we may choose to sell, transfer, or merge parts of our business or our assets</li>
              <li>Law enforcement or other government authorities when required by law</li>
            </ul>
            
            <h2>Security of Your Information</h2>
            
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the security of your information.
            </p>
            
            <h2>Your Rights</h2>
            
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, or delete your information. To exercise these rights, please contact us using the information provided below.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
            </p>
            
            <h2>Contact Us</h2>
            
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            
            <address>
              The Woodlands Law Firm<br />
              2219 Sawdust Rd., Suite 803<br />
              The Woodlands, TX 77380<br />
              Phone: (832) 626-0116<br />
              Email: admin@woodlands.law
            </address>
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

export default PrivacyPolicyPage;
