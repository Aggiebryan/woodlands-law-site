
import { Link } from "react-router-dom";

interface PracticeAreaHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
}

const PracticeAreaHero = ({ title, subtitle, description, image }: PracticeAreaHeroProps) => {
  return (
    <div className="relative bg-law-purple py-24">
      <div className="container mx-auto px-4">
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
            <Link 
              to="/schedule" 
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Schedule a Free Consultation
            </Link>
          </div>
          {image && (
            <div className="hidden lg:block">
              <img 
                src={image} 
                alt={title} 
                className="rounded-lg shadow-xl max-w-full h-auto" 
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreaHero;
