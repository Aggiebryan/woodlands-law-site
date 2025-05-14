
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-law-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h3 className="font-serif text-xl font-bold">WOODLANDS<span className="text-law-gold">LAW</span></h3>
            </Link>
            <p className="text-sm opacity-80 mb-4">
              Dedicated to providing exceptional legal services with expertise in trusts, estates, and related areas of law.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Services</Link></li>
              <li><Link to="/attorneys" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Attorneys</Link></li>
              <li><Link to="/trusts" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Trusts</Link></li>
              <li><Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/services#estate-planning" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Estate Planning</Link></li>
              <li><Link to="/services#trust-administration" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Trust Administration</Link></li>
              <li><Link to="/services#wills" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Wills</Link></li>
              <li><Link to="/services#probate" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Probate</Link></li>
              <li><Link to="/services#business-formation" className="text-sm opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">Business Formation</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3">
              <p className="flex items-start text-sm">
                <MapPin className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <span className="opacity-80">123 Legal Avenue, Suite 200<br />Woodlands, TX 77380</span>
              </p>
              <p className="flex items-center text-sm">
                <Phone className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <span className="opacity-80">(281) 555-7890</span>
              </p>
              <p className="flex items-center text-sm">
                <Mail className="mr-2 h-5 w-5 text-law-gold flex-shrink-0" />
                <a href="mailto:info@woodlands.law" className="opacity-80 hover:opacity-100 hover:text-law-gold transition-colors">info@woodlands.law</a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm opacity-70">
            &copy; {currentYear} Woodlands Law. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
