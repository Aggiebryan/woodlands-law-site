
import { Link } from "react-router-dom";

interface ServicesCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ServicesCTA = ({ title, description, buttonText, buttonLink }: ServicesCTAProps) => {
  // Check if the link is to the schedule page or should be an external link
  const isScheduleLink = buttonLink === "/schedule";
  
  return (
    <section className="bg-law-purple py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif text-white mb-4">
          {title}
        </h2>
        <p className="max-w-2xl mx-auto text-white/80 mb-8">
          {description}
        </p>
        
        {isScheduleLink ? (
          <Link 
            to={buttonLink} 
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            {buttonText}
          </Link>
        ) : (
          <a 
            href="https://woodlandslaw.cliogrow.com/book" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  );
};

export default ServicesCTA;
