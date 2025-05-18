
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  link: string;
}

const ServiceCard = ({ title, icon, description, link }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow border-t-2 border-law-gold">
    <div className="mb-5">
      <div className="inline-block p-3 rounded-full bg-law-purple/5 text-law-gold mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-serif font-medium text-law-purple mb-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-5">{description}</p>
    <Link
      to={link}
      className="text-law-gold font-medium hover:underline"
    >
      Learn More
    </Link>
  </div>
);

export default ServiceCard;
