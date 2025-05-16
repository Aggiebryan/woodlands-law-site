import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check, Clock, MapPin, Phone } from "lucide-react";
import GoogleMap from "../components/GoogleMap";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            About The Woodlands Law Firm
          </h1>
          <div className="gold-underline"></div>
          <p className="text-white/80 max-w-3xl mt-6">
            Protecting What Matters. Advocating When It Counts. Planning for the Future.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-gray-600 mb-6">
                At The Woodlands Law Firm, we provide focused, results-driven legal representation for individuals, families, and businesses throughout Texas. Our attorneys bring decades of combined experience across multiple practice areas, offering the skill and sophistication of larger firms with the personalized attention and accessibility of a local practice. From high-stakes litigation to comprehensive estate and business planning, we stand beside our clients at every critical legal moment.
              </p>
              <h2 className="text-2xl font-serif text-law-purple mb-4">Our Legacy of Protection and Advocacy</h2>
              <p className="text-gray-600 mb-6">
                Founded on the belief that every client deserves both aggressive representation and thoughtful counsel, The Woodlands Law Firm blends civil litigation, insurance disputes, personal injury claims, business planning, and estate planning into a full-service approach to legal protection. Our diverse practice allows us to deliver tailored strategies that protect clients' rights today and preserve what they've built for tomorrow.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2532&auto=format" 
                alt="The Woodlands Law Firm Office" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">Litigation with Purpose</h2>
            <p className="text-gray-600 mb-6">
              Our litigation team is known for its determined, client-focused advocacy in complex civil disputes. Whether representing victims of negligence, businesses facing unfair practices, or individuals denied rightful insurance claims, we work tirelessly to hold wrongdoers accountable and pursue the justice our clients deserve. Our attorneys handle matters including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Insurance litigation and bad faith claims</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Personal injury and catastrophic accidents</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Deceptive Trade Practices Act (DTPA) violations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Business and contract disputes</span>
              </li>
            </ul>
            <p className="text-gray-600">
              We approach each case with precision, urgency, and a commitment to achieving meaningful results.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">Strategic Business Planning</h2>
            <p className="text-gray-600 mb-6">
              Every business, whether new or established, needs a legal foundation that supports growth, limits liability, and protects owners from future disputes. The Woodlands Law Firm works with entrepreneurs, business owners, and investors to develop clear, customized business strategies and legal structures. Our services include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Business formation and entity selection</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Contract drafting and negotiation</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Succession and exit planning</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Risk management and asset protection strategies</span>
              </li>
            </ul>
            <p className="text-gray-600">
              Our attorneys provide business owners with the guidance they need to make sound decisions, protect their operations, and plan for long-term success.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">Estate Planning and Probate</h2>
            <p className="text-gray-600 mb-6">
              Protecting your legacy starts with a plan. At The Woodlands Law Firm, we help families and individuals secure their future through personalized estate planning and probate services. Whether you are planning for young children, retirement, or complex business succession, we deliver clear and customized solutions that provide peace of mind. Our services include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Wills, revocable and irrevocable trusts</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Probate and estate administration</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Asset protection and tax-efficient strategies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Powers of attorney and advanced healthcare directives</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Special needs and elder care planning</span>
              </li>
            </ul>
            <p className="text-gray-600">
              We take the time to understand your family, your assets, and your goals—crafting plans that are designed to work when your loved ones need them most.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">The Full-Service Advantage</h2>
            <p className="text-gray-600">
              Because our attorneys work across litigation, insurance disputes, business law, and estate matters, we offer clients strategic advantages that single-focus firms cannot. Our litigation experience informs the drafting of stronger estate and business documents, while our planning clients benefit from proactive measures designed to avoid future disputes. This integrated approach allows us to deliver solutions that are both comprehensive and preventive.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">Our Commitment to Clients</h2>
            <p className="text-gray-600 mb-6">
              At The Woodlands Law Firm, we are more than attorneys—we are trusted advisors dedicated to your success, security, and peace of mind. We are committed to:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Providing honest, straightforward guidance</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Listening carefully to your goals and concerns</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Explaining your options in clear, plain language</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Offering practical, cost-effective legal strategies</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0" />
                <span>Building lasting relationships based on trust and respect</span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-serif text-law-purple mb-4">Let's Protect What Matters Most</h2>
            <p className="text-gray-600 mb-8">
              Whether you are facing a legal dispute, planning for your family's future, or protecting your business, The Woodlands Law Firm is ready to serve as your trusted legal partner. Contact us today to schedule a consultation.
            </p>
            <Link 
              to="/contact" 
              className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Schedule a Consultation
            </Link>
          </div>
          
          {/* Contact Information with Map */}
          <div className="mt-20 border-t pt-16">
            <h2 className="text-3xl font-serif text-law-purple mb-8 text-center">Visit Our Office</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <GoogleMap />
              </div>
              
              <div className="bg-law-gray-light p-8 rounded-lg">
                <div className="mb-6">
                  <h3 className="text-xl font-serif text-law-purple mb-3">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-law-gold mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Office Address</p>
                        <p className="text-gray-600">2219 Sawdust Rd., Suite 803</p>
                        <p className="text-gray-600">The Woodlands, TX 77380</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-law-gold mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">(832) 626-0116</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-law-gold mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Office Hours</p>
                        <p className="text-gray-600">Monday - Friday: 8:30 AM - 5:00 PM</p>
                        <p className="text-gray-600">Additional hours by appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-6 rounded transition-colors block text-center w-full"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
