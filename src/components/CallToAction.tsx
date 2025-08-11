
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  secondaryButtonOnClick?: () => void;
  className?: string;
}

const CallToAction = ({ 
  title, 
  description, 
  primaryButtonText, 
  primaryButtonLink,
  primaryButtonOnClick,
  secondaryButtonText, 
  secondaryButtonLink,
  secondaryButtonOnClick,
  className = "" 
}: CallToActionProps) => {
  return (
    <section className={`bg-law-purple py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">{title}</h2>
        <div className="gold-underline mx-auto mb-6"></div>
        <p className="text-white/80 max-w-3xl mx-auto mb-8">{description}</p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryButtonOnClick ? (
            <button
              onClick={primaryButtonOnClick}
              className="bg-law-gold hover:bg-law-gold-light text-law-navy font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {primaryButtonText}
            </button>
          ) : primaryButtonLink ? (
            <Link 
              to={primaryButtonLink} 
              className="bg-law-gold hover:bg-law-gold-light text-law-navy font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {primaryButtonText}
            </Link>
          ) : (
            <Link 
              to="/schedule"
              className="bg-law-gold hover:bg-law-gold-light text-law-navy font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {primaryButtonText}
            </Link>
          )}
          
          {secondaryButtonText && (secondaryButtonOnClick ? (
            <button
              onClick={secondaryButtonOnClick}
              className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {secondaryButtonText}
            </button>
          ) : secondaryButtonLink ? (
            <Link 
              to={secondaryButtonLink} 
              className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {secondaryButtonText}
            </Link>
          ) : null)}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
