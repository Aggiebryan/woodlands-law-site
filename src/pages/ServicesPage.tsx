import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const ServiceCard = ({ title, icon, description, link }: { title: string; icon: string; description: string; link: string }) => (
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

const ServiceDetail = ({ title, description, items }: { title: string; description: string; items: string[] }) => (
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

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Insurance Litigation",
      icon: "⚖️",
      description: "Expert representation in complex insurance claims disputes and bad faith litigation.",
      link: "/practice-areas/insurance-litigation"
    },
    {
      title: "Personal Injury",
      icon: "🏥",
      description: "Dedicated advocacy for victims of negligence and serious injuries.",
      link: "/practice-areas/personal-injury"
    },
    {
      title: "Civil Litigation",
      icon: "📜",
      description: "Strategic representation in business disputes, contract issues, and civil claims.",
      link: "/practice-areas/civil-litigation"
    },
    {
      title: "Deceptive Trade Practices Act",
      icon: "🔍",
      description: "Protection from unfair, deceptive, and fraudulent business practices.",
      link: "/practice-areas/deceptive-trade-practices-act"
    },
    {
      title: "Business Planning",
      icon: "🏢",
      description: "Comprehensive legal solutions for business formation, growth, and succession.",
      link: "/practice-areas/business-planning"
    },
    {
      title: "Estate Planning",
      icon: "📝",
      description: "Personalized estate plans to protect your legacy and provide for your loved ones.",
      link: "/practice-areas/estate-planning"
    }
  ];

  const serviceDetails = [
    {
      title: "Insurance Litigation",
      description: "When insurance companies deny, delay, or underpay legitimate claims, our litigation team steps in to fight for the coverage you're entitled to receive.",
      items: [
        "First-party insurance disputes",
        "Bad faith claims",
        "Coverage analysis",
        "Claim denials",
        "Property damage claims",
        "Business interruption claims",
        "Health insurance disputes",
        "Negotiation and litigation"
      ]
    },
    {
      title: "Personal Injury",
      description: "Our personal injury attorneys help accident victims recover compensation for injuries caused by negligence or wrongful acts.",
      items: [
        "Auto accidents",
        "Workplace injuries",
        "Premises liability",
        "Product liability",
        "Wrongful death claims",
        "Catastrophic injuries",
        "Medical expenses recovery",
        "Pain and suffering compensation"
      ]
    },
    {
      title: "Civil Litigation",
      description: "We represent clients in a wide range of civil disputes, bringing strategic, results-focused advocacy to complex legal challenges.",
      items: [
        "Contract disputes",
        "Business torts",
        "Partnership disputes",
        "Real estate litigation",
        "Construction disputes",
        "Employment litigation",
        "Commercial disputes",
        "Alternative dispute resolution"
      ]
    },
    {
      title: "Deceptive Trade Practices Act",
      description: "We help consumers and businesses fight back against deceptive, misleading, and fraudulent business practices.",
      items: [
        "False advertising claims",
        "Warranty violations",
        "Misleading business practices",
        "Consumer protection",
        "Unfair competition",
        "Misrepresentation cases",
        "DTPA violations",
        "Statutory damages recovery"
      ]
    },
    {
      title: "Business Planning",
      description: "Our attorneys provide strategic legal guidance for businesses at every stage, from formation to succession planning.",
      items: [
        "Entity formation and selection",
        "Contract drafting and review",
        "Business succession planning",
        "Buy-sell agreements",
        "Risk management strategies",
        "Corporate governance",
        "Business acquisitions",
        "Regulatory compliance"
      ]
    },
    {
      title: "Estate Planning",
      description: "We create comprehensive estate plans that protect your assets, minimize taxes, and ensure your wishes are honored.",
      items: [
        "Wills and trusts",
        "Powers of attorney",
        "Healthcare directives",
        "Asset protection strategies",
        "Probate administration",
        "Estate tax planning",
        "Special needs planning",
        "Legacy planning"
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            Our Services
          </h1>
          <div className="gold-underline"></div>
          <p className="text-white/80 max-w-3xl mt-6">
            The Woodlands Law Firm delivers experienced representation for life's most important legal challenges—from protecting your business and financial future to standing up for your rights in litigation.
          </p>
        </div>
      </div>

      {/* Services Overview */}
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

      {/* Service Details */}
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

      {/* Call to Action */}
      <section className="bg-law-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            Ready to Discuss Your Legal Needs?
          </h2>
          <p className="max-w-2xl mx-auto text-white/80 mb-8">
            Schedule a consultation with one of our experienced attorneys to discuss 
            your specific legal needs and how we can help protect your interests.
          </p>
          <Link 
            to="/contact" 
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
