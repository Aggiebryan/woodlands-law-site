
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
          <h1 className="text-law-purple font-serif text-2xl font-bold">THE WOODLANDS<span className="text-law-gold">LAW</span> FIRM</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/our-team" label="Our Team" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/news-events" label="News & Events" />
          <NavLink to="/about" label="About Us" />
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
