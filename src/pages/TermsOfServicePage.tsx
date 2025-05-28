
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-white font-serif font-semibold mb-2">
            Terms of Service
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-sm text-gray-600 mb-6">
              Last Updated: {new Date().toLocaleDateString()}
            </p>
            
            <p>
              Welcome to The Woodlands Law Firm website. These Terms of Service ("Terms") govern your use of our website located at woodlands.law and any related services provided by The Woodlands Law Firm ("we," "us," or "our").
            </p>
            
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            
            <h2>Legal Services Disclaimer</h2>
            <p>
              The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
            </p>
            
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on The Woodlands Law Firm's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
              <li>attempt to decompile or reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
            
            <h2>Attorney-Client Relationship</h2>
            <p>
              Use of this website does not create an attorney-client relationship between you and The Woodlands Law Firm. An attorney-client relationship is formed only when you have signed a written retainer agreement with our firm.
            </p>
            
            <h2>Confidentiality</h2>
            <p>
              Information you submit through our website contact forms or other communication methods may not be confidential or privileged unless an attorney-client relationship has been established. Do not submit confidential information through unsecured methods.
            </p>
            
            <h2>User Accounts and Registration</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for maintaining the confidentiality of your account.
            </p>
            
            <h2>Prohibited Uses</h2>
            <p>
              You may not use our service:
            </p>
            <ul>
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
            </ul>
            
            <h2>Content</h2>
            <p>
              Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the service, including its legality, reliability, and appropriateness.
            </p>
            
            <h2>Privacy Policy</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our website, to understand our practices.
            </p>
            
            <h2>Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
            </p>
            
            <h2>Disclaimer</h2>
            <p>
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, this Company:
            </p>
            <ul>
              <li>excludes all representations and warranties relating to this website and its contents</li>
              <li>excludes all liability for damages arising out of or in connection with your use of this website</li>
            </ul>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall The Woodlands Law Firm, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, consequential, or similar damages arising out of your use of our website.
            </p>
            
            <h2>Governing Law</h2>
            <p>
              These Terms shall be interpreted and governed by the laws of the State of Texas, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
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

export default TermsOfServicePage;
