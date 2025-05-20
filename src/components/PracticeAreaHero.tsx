
import { Link } from "react-router-dom";

interface PracticeAreaHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

const PracticeAreaHero = ({ 
  title, 
  subtitle, 
  description, 
  image, 
  ctaText = "Schedule a Free Consultation",
  ctaLink = "https://woodlandslaw.cliogrow.com/book"
}: PracticeAreaHeroProps) => {
  return (
    <div className="relative bg-law-purple py-24">
      {/* Background image with overlay */}
      {image && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-4">
              {title}
            </h1>
            <div className="gold-underline"></div>
            <p className="text-xl text-white/80 mt-6 font-serif">
              {subtitle}
            </p>
            <p className="text-white/80 mt-4 mb-8 max-w-2xl">
              {description}
            </p>
            <a 
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              {ctaText}
            </a>
          </div>
          {image && (
            <div className="hidden lg:flex justify-end">
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-xl max-w-full h-auto object-cover" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaHero;
