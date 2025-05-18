
import { CheckCircle } from "lucide-react";

interface ServiceDetailProps {
  title: string;
  description: string;
  items: string[];
}

const ServiceDetail = ({ title, description, items }: ServiceDetailProps) => (
  <div className="py-12 border-b border-gray-200 last:border-0" id={title.toLowerCase().replace(/\s+/g, '-')}>
    <h3 className="text-2xl font-serif text-law-purple mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 max-w-3xl">{description}</p>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-law-gold mr-2 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceDetail;
