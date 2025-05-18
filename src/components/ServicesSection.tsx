
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => (
  <div className="bg-white p-8 rounded shadow-md hover:shadow-lg transition-shadow border-t-2 border-law-gold">
    <div className="mb-5 text-center">
      <div className="inline-block p-3 rounded-full bg-law-purple/5 text-law-gold mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-serif font-medium text-law-purple mb-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-5 text-center">{description}</p>
    <div className="text-center">
      <Link
        to={link}
        className="text-law-gold font-medium hover:underline"
      >
        Learn More
      </Link>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Insurance Litigation",
      description: "Expert representation in insurance claims disputes and bad faith litigation.",
      icon: "⚖️",
      link: "/practice-areas/insurance-litigation"
    },
    {
      title: "Personal Injury",
      description: "Dedicated advocacy for victims of negligence and serious injuries.",
      icon: "🏥",
      link: "/practice-areas/personal-injury"
    },
    {
      title: "Civil Litigation",
      description: "Strategic representation in business disputes, contract issues, and civil claims.",
      icon: "📜",
      link: "/practice-areas/civil-litigation"
    },
    {
      title: "Deceptive Trade Practices Act",
      description: "Protection from unfair, deceptive, and fraudulent business practices.",
      icon: "🔍",
      link: "/practice-areas/deceptive-trade-practices-act"
    },
    {
      title: "Business Planning",
      description: "Comprehensive legal solutions for business formation, growth, and succession.",
      icon: "🏢",
      link: "/practice-areas/business-planning"
    },
    {
      title: "Estate Planning",
      description: "Personalized estate plans to protect your legacy and provide for your loved ones.",
      icon: "📝",
      link: "/practice-areas/estate-planning"
    }
  ];

  return (
    <section className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-purple mb-4">Our Legal Services</h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal solutions across multiple practice areas, 
            from complex litigation to thorough business and estate planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
