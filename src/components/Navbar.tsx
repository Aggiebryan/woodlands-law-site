
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4 fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/307c4d37-d87e-4a89-8107-73533778d172.png" 
            alt="The Woodlands Law Firm" 
            className="h-10" 
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <div className="flex space-x-8 mr-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/our-team" label="Our Team" />
            <NavLink to="/services" label="Services" />
            <NavLink to="/news-events" label="News & Events" />
            <NavLink to="/about" label="About Us" />
          </div>
          
          <a 
  href="https://woodlandslaw.cliogrow.com/book" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-2 px-4 rounded transition-colors inline-block"
>
  Schedule a Consultation
</a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-law-purple"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={toggleMenu} />
            <MobileNavLink to="/our-team" label="Our Team" onClick={toggleMenu} />
            <MobileNavLink to="/services" label="Services" onClick={toggleMenu} />
            <MobileNavLink to="/news-events" label="News & Events" onClick={toggleMenu} />
            <MobileNavLink to="/about" label="About Us" onClick={toggleMenu} />
            <a 
  href="https://woodlandslaw.cliogrow.com/book" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-2 px-4 rounded transition-colors inline-block text-center"
  onClick={toggleMenu}
>
  Schedule a Consultation
</a>
          </div>
        </div>
      )}
    </nav>
  );
};

interface NavLinkProps {
  to: string;
  label: string;
}

const NavLink = ({ to, label }: NavLinkProps) => (
  <Link 
    to={to} 
    className="text-law-purple hover:text-law-gold transition-colors font-medium"
  >
    {label}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink = ({ to, label, onClick }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="text-law-purple hover:text-law-gold transition-colors py-2 block font-medium"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default Navbar;
