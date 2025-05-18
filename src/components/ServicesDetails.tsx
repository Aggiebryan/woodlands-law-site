
import ServiceDetail from "./ServiceDetail";

interface ServicesDetailsProps {
  serviceDetails: {
    title: string;
    description: string;
    items: string[];
  }[];
}

const ServicesDetails = ({ serviceDetails }: ServicesDetailsProps) => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="mb-12">
        <h2 className="text-3xl font-serif text-law-purple mb-4">Our Practice Areas</h2>
        <div className="gold-underline mb-6"></div>
        <p className="text-gray-600 max-w-4xl">
          At The Woodlands Law Firm, we combine aggressive advocacy in civil disputes with thoughtful estate and legacy planning. We serve as trusted counsel, helping Texans protect what they've built and plan for what's next.
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {serviceDetails.map((detail, index) => (
          <ServiceDetail
            key={index}
            title={detail.title}
            description={detail.description}
            items={detail.items}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesDetails;
