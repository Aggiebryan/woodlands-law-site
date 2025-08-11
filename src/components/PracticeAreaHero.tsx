
import { Link } from "react-router-dom";
import type { ButtonHTMLAttributes } from "react";

interface PracticeAreaHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  ctaButtonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const PracticeAreaHero = ({ 
  title, 
  subtitle, 
  description, 
  image,
  ctaText,
  ctaLink,
  onCtaClick,
  ctaButtonProps
}: PracticeAreaHeroProps) => {
  return (
    <section 
      className="relative bg-cover bg-center py-24 md:py-32"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white mb-3">
            {title}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-white/80 mb-6">
            {subtitle}
          </h2>
          
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            {description}
          </p>
          
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
              {...ctaButtonProps}
            >
              {ctaText}
            </button>
          ) : ctaLink ? (
            <Link 
              to={ctaLink}
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {ctaText}
            </Link>
          ) : (
            <a 
              href="https://woodlandslaw.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreaHero;
