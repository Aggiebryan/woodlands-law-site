
import { useEffect } from "react";
import ServicesPageHeader from "../components/ServicesPageHeader";
import ServicesOverview from "../components/ServicesOverview";
import ServicesDetails from "../components/ServicesDetails";
import ServicesCTA from "../components/ServicesCTA";

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
      <ServicesPageHeader 
        title="Our Services"
        description="The Woodlands Law Firm delivers experienced representation for life's most important legal challenges—from protecting your business and financial future to standing up for your rights in litigation."
      />

      {/* Services Overview */}
      <ServicesOverview services={services} />

      {/* Service Details */}
      <ServicesDetails serviceDetails={serviceDetails} />

      {/* Call to Action */}
      <ServicesCTA 
        title="Ready to Discuss Your Legal Needs?"
        description="Schedule a consultation with one of our experienced attorneys to discuss your specific legal needs and how we can help protect your interests."
        buttonText="Schedule a Consultation"
        buttonLink="/schedule"
      />
    </div>
  );
};

export default ServicesPage;
