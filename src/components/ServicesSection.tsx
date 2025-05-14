
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
      <div className="inline-block p-3 rounded-full bg-law-navy/5 text-law-gold mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-serif font-medium text-law-navy mb-3">{title}</h3>
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
      title: "Estate Planning",
      description: "Comprehensive estate planning to protect your assets and provide for your loved ones.",
      icon: "📝",
      link: "/services#estate-planning"
    },
    {
      title: "Trust Administration",
      description: "Expert guidance through the trust administration process to ensure proper execution.",
      icon: "🏦",
      link: "/services#trust-administration"
    },
    {
      title: "Wills",
      description: "Creation of legally sound wills tailored to your specific wishes and circumstances.",
      icon: "📋",
      link: "/services#wills"
    },
    {
      title: "Probate",
      description: "Assistance with navigating the probate process with efficiency and sensitivity.",
      icon: "⚖️",
      link: "/services#probate"
    },
    {
      title: "Business Formation",
      description: "Legal support for establishing and structuring your business for success.",
      icon: "🏢",
      link: "/services#business-formation"
    },
    {
      title: "Elder Law",
      description: "Specialized legal services addressing the needs of older adults and their families.",
      icon: "👵",
      link: "/services#elder-law"
    }
  ];

  return (
    <section className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-law-navy mb-4">Our Legal Services</h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive legal solutions tailored to protect your assets, 
            facilitate proper estate planning, and ensure your wishes are carried out.
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
            className="bg-law-navy hover:bg-law-navy-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
