
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const practiceAreas = [
    { title: "Insurance Litigation", path: "/practice-areas/insurance-litigation" },
    { title: "Personal Injury", path: "/practice-areas/personal-injury" },
    { title: "Civil Litigation", path: "/practice-areas/civil-litigation" },
    { title: "Deceptive Trade Practices Act", path: "/practice-areas/deceptive-trade-practices-act" },
    { title: "Business Planning", path: "/practice-areas/business-planning" },
    { title: "Estate Planning", path: "/practice-areas/estate-planning" }
  ];

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
            
            {/* Services Dropdown */}
            <div className="relative group">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-law-purple hover:text-law-gold transition-colors font-medium bg-transparent hover:bg-transparent focus:bg-transparent">
                      Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white rounded-md shadow-lg p-2 min-w-[220px]">
                      <div className="grid gap-1">
                        <Link 
                          to="/services" 
                          className="block px-4 py-2 text-law-purple hover:text-law-gold hover:bg-gray-50 transition-colors font-medium rounded-md"
                        >
                          All Services
                        </Link>
                        <hr className="my-1" />
                        {practiceAreas.map((area) => (
                          <Link 
                            key={area.path} 
                            to={area.path} 
                            className="block px-4 py-2 text-law-purple hover:text-law-gold hover:bg-gray-50 transition-colors font-medium rounded-md"
                          >
                            {area.title}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            
            <NavLink to="/news-events" label="News & Events" />
            <NavLink to="/about" label="About Us" />
          </div>
          
          <Link 
            to="/schedule"
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-2 px-4 rounded transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
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
            
            {/* Mobile Practice Areas Submenu */}
            <div className="ml-4 flex flex-col space-y-2">
              {practiceAreas.map((area) => (
                <MobileNavLink 
                  key={area.path} 
                  to={area.path} 
                  label={area.title} 
                  onClick={toggleMenu} 
                />
              ))}
            </div>
            
            <MobileNavLink to="/news-events" label="News & Events" onClick={toggleMenu} />
            <MobileNavLink to="/about" label="About Us" onClick={toggleMenu} />
            <Link 
              to="/schedule"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-2 px-4 rounded transition-colors inline-block text-center"
              onClick={toggleMenu}
            >
              Schedule a Consultation
            </Link>
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
