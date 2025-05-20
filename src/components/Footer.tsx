import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-law-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="The Woodlands Law Firm" className="h-28 object-fill" />
            </Link>
            <div className="flex space-x-4 mt-4 mb-4">
              <a href="#" className="text-white hover:text-law-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-law-gold transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
                  <path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-law-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-law-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm opacity-80">
              Dedicated to providing exceptional legal services with expertise in litigation, business planning, and estate matters.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Home</Link></li>
              <li><Link to="/our-team" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Services</Link></li>
              <li><Link to="/news-events" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">News & Events</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">About Us</Link></li>
              <li><Link to="/schedule" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/practice-areas/insurance-litigation" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Insurance Litigation</Link></li>
              <li><Link to="/services#personal-injury" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Personal Injury</Link></li>
              <li><Link to="/services#civil-litigation" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Civil Litigation</Link></li>
              <li><Link to="/services#deceptive-trade-practices-act" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">DTPA Claims</Link></li>
              <li><Link to="/services#business-planning" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Business Planning</Link></li>
              <li><Link to="/services#estate-planning" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Estate Planning</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-start text-sm">
                <MapPin className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <span className="opacity-80">2219 Sawdust Rd., Suite 803<br />The Woodlands, TX 77380</span>
              </p>
              <p className="flex items-center text-sm">
                <Phone className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <span className="opacity-80">(832) 626-0116</span>
              </p>
              <p className="flex items-center text-sm">
                <Mail className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <a href="mailto:admin@woodlands.law" className="opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">admin@woodlands.law</a>
              </p>
            </div>
          </div>
        </div>

        {/* Additional Links and Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-70 mb-4 md:mb-0">
              &copy; {currentYear} The Woodlands Law Firm. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/attorney-advertising" className="text-sm opacity-70 hover:opacity-100 hover:text-law-gold transition-colors">
                Attorney Advertising Notice
              </Link>
              <span className="opacity-70">|</span>
              <Link to="/privacy-policy" className="text-sm opacity-70 hover:opacity-100 hover:text-law-gold transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;