
import React from "react";
import { Link } from "react-router-dom";

interface CallToActionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundClass?: string;
}

const CallToAction = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundClass = "bg-law-purple"
}: CallToActionProps) => {
  // Check if the links are internal or external
  const isInternalPrimary = !primaryButtonLink.startsWith('http');
  const isInternalSecondary = secondaryButtonLink ? !secondaryButtonLink.startsWith('http') : false;
  
  return (
    <section className={`${backgroundClass} py-16 text-center`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-white mb-6">{title}</h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {isInternalPrimary ? (
            <Link 
              to={primaryButtonLink} 
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {primaryButtonText}
            </Link>
          ) : (
            <a 
              href={primaryButtonLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {primaryButtonText}
            </a>
          )}
          
          {secondaryButtonText && secondaryButtonLink && (
            isInternalSecondary ? (
              <Link 
                to={secondaryButtonLink} 
                className="bg-white hover:bg-gray-100 text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
              >
                {secondaryButtonText}
              </Link>
            ) : (
              <a 
                href={secondaryButtonLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-gray-100 text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
              >
                {secondaryButtonText}
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
