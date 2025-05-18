
import ServiceCard from "./ServiceCard";

interface ServicesOverviewProps {
  services: {
    title: string;
    icon: string;
    description: string;
    link: string;
  }[];
}

const ServicesOverview = ({ services }: ServicesOverviewProps) => (
  <section className="py-16 bg-law-gray-light">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            icon={service.icon}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOverview;
