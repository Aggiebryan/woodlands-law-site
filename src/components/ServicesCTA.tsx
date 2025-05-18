
import { Link } from "react-router-dom";

interface ServicesCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ServicesCTA = ({ title, description, buttonText, buttonLink }: ServicesCTAProps) => (
  <section className="bg-law-purple py-16">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-serif text-white mb-4">
        {title}
      </h2>
      <p className="max-w-2xl mx-auto text-white/80 mb-8">
        {description}
      </p>
      <Link 
        to={buttonLink} 
        className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
      >
        {buttonText}
      </Link>
    </div>
  </section>
);

export default ServicesCTA;
