
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-law-purple text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h3 className="font-serif text-xl font-bold">THE WOODLANDS<span className="text-law-gold">LAW</span> FIRM</h3>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Dedicated to providing exceptional legal services with expertise in litigation, business planning, and estate matters.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Home</Link></li>
              <li><Link to="/attorneys" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Attorneys</Link></li>
              <li><Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Services</Link></li>
              <li><Link to="/news-events" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">News & Events</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/services#insurance-litigation" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Insurance Litigation</Link></li>
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

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">
            &copy; {currentYear} The Woodlands Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
