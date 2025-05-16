
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Check } from "lucide-react";

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  detailedDescription: string | JSX.Element;
  icon: string;
  items: string[];
  faq?: { question: string; answer: string }[];
}

const ServiceDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services: Record<string, ServiceInfo> = {
    "insurance-litigation": {
      id: "insurance-litigation",
      title: "Insurance Litigation",
      description: "Expert representation in complex insurance claims disputes and bad faith litigation.",
      icon: "⚖️",
      detailedDescription: (
        <>
          <p className="mb-4">
            When insurance companies deny, delay, or underpay legitimate claims, our litigation team steps in to fight for the coverage you're entitled to receive. Insurance companies often rely on complex policy language, exclusions, and technicalities to minimize or deny claims, but our attorneys have the knowledge and experience to level the playing field.
          </p>
          <p className="mb-4">
            We represent policyholders in disputes involving property damage, business interruption, liability coverage, life insurance, disability claims, and more. Our attorneys understand the nuanced strategies insurance companies use and can effectively counter them with evidence-based arguments that protect your rights under the policy and relevant laws.
          </p>
          <p className="mb-4">
            Bad faith insurance practices occur when insurers unreasonably deny claims, fail to properly investigate, delay payment, or engage in other tactics designed to avoid their contractual obligations. Texas law provides specific remedies for policyholders who have been subjected to bad faith practices. Our firm can help you pursue all available compensation, including policy benefits, attorney's fees, and potentially additional damages when insurers act in bad faith.
          </p>
        </>
      ),
      items: [
        "First-party insurance disputes",
        "Bad faith claims",
        "Coverage analysis",
        "Claim denials",
        "Property damage claims",
        "Business interruption claims",
        "Health insurance disputes",
        "Negotiation and litigation"
      ],
      faq: [
        {
          question: "How do I know if my insurance company is acting in bad faith?",
          answer: "Signs of bad faith include unreasonable delays, refusal to investigate claims properly, denials without valid explanation, offering settlements far below claim value, or misrepresenting policy provisions."
        },
        {
          question: "How long do I have to file an insurance dispute in Texas?",
          answer: "In Texas, most insurance policies contain contractual limitations of 2-3 years for filing suit, though this can vary by policy type. Additionally, statutory bad faith claims typically have a 2-year statute of limitations from the date the claim was denied."
        },
        {
          question: "Can I recover attorney's fees in an insurance dispute?",
          answer: "Yes, Texas law often allows for the recovery of attorney's fees in successful insurance claim disputes, particularly in cases involving breach of contract or statutory violations."
        }
      ]
    },
    "personal-injury": {
      id: "personal-injury",
      title: "Personal Injury",
      description: "Dedicated advocacy for victims of negligence and serious injuries.",
      icon: "🏥",
      detailedDescription: (
        <>
          <p className="mb-4">
            Personal injuries can have devastating financial, physical, and emotional consequences. When those injuries are caused by someone else's negligence, you deserve fair compensation. Our personal injury practice is devoted to helping accident victims recover the full compensation they're entitled to receive for their injuries, lost wages, medical expenses, and pain and suffering.
          </p>
          <p className="mb-4">
            We handle a wide range of personal injury matters, from automobile accidents and workplace injuries to premises liability and product defects. Our approach combines thorough case investigation, expert consultation, and strategic negotiation to build the strongest possible claim for our clients.
          </p>
          <p className="mb-4">
            While many personal injury cases settle out of court, we prepare every case as if it will go to trial. This preparation and willingness to litigate often results in more favorable settlement offers from insurance companies who recognize that we're committed to securing maximum compensation for our clients. If a fair settlement can't be reached, we have the courtroom experience to effectively present your case to a judge and jury.
          </p>
        </>
      ),
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
    // Additional service entries for other practice areas
    "civil-litigation": {
      id: "civil-litigation",
      title: "Civil Litigation",
      description: "Strategic representation in business disputes, contract issues, and civil claims.",
      icon: "📜",
      detailedDescription: (
        <>
          <p className="mb-4">
            Civil litigation encompasses a wide range of disputes between parties seeking monetary damages or specific performance rather than criminal sanctions. Our litigation team represents clients in state and federal courts, as well as in alternative dispute resolution forums like mediation and arbitration.
          </p>
          <p className="mb-4">
            We handle both plaintiff and defense work across numerous civil litigation matters, including contract disputes, business torts, partnership disagreements, real estate conflicts, construction disputes, and employment issues. Our attorneys bring a practical, results-oriented approach to every case, focusing on efficient and effective resolution strategies.
          </p>
          <p className="mb-4">
            While we are always prepared to take your case to trial, we recognize that litigation can be expensive, time-consuming, and unpredictable. We work with each client to develop a litigation strategy that aligns with their specific goals and circumstances, whether that means aggressive prosecution or defense of claims, early settlement negotiations, or alternative dispute resolution.
          </p>
        </>
      ),
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
    "deceptive-trade-practices-act": {
      id: "deceptive-trade-practices-act",
      title: "Deceptive Trade Practices Act",
      description: "Protecting consumers and businesses from unfair, deceptive, and fraudulent practices.",
      icon: "🔍",
      detailedDescription: (
        <>
          <p className="mb-4">
            The Texas Deceptive Trade Practices Act (DTPA) provides powerful legal remedies for consumers who have been victims of false, misleading, or deceptive business practices. This consumer protection law covers a wide range of misconduct, including false advertising, warranty violations, insurance misrepresentations, and various forms of consumer fraud.
          </p>
          <p className="mb-4">
            Our attorneys have extensive experience both prosecuting and defending DTPA claims. We help consumers who have been harmed by deceptive practices recover damages, which may include economic losses, mental anguish in certain cases, and potentially up to three times actual damages if the conduct was committed knowingly or intentionally.
          </p>
          <p className="mb-4">
            We also counsel businesses on DTPA compliance and defend companies against unfounded DTPA claims. Whether you're a consumer who has been wronged or a business facing a DTPA claim, our attorneys can provide knowledgeable representation that protects your interests.
          </p>
        </>
      ),
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
    "business-planning": {
      id: "business-planning",
      title: "Business Planning",
      description: "Comprehensive legal solutions for business formation, growth, and succession.",
      icon: "🏢",
      detailedDescription: (
        <>
          <p className="mb-4">
            Effective business planning provides the foundation for both current operations and future opportunities. Our business planning services help entrepreneurs, established businesses, and family enterprises establish sound legal frameworks, manage risks, and plan for transitions.
          </p>
          <p className="mb-4">
            For new businesses, we provide guidance on entity selection, formation documents, operating agreements, and regulatory compliance. We help established businesses with contract drafting and review, employment matters, risk management strategies, and protection of intellectual property.
          </p>
          <p className="mb-4">
            Business succession planning is essential for ensuring continuity when owners retire, face health issues, or pass away. We work with business owners to develop comprehensive succession plans that address ownership transfers, management transitions, and liquidity needs while minimizing tax implications and potential disputes among successors.
          </p>
        </>
      ),
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
    "estate-planning": {
      id: "estate-planning",
      title: "Estate Planning",
      description: "Personalized estate plans to protect your legacy and provide for your loved ones.",
      icon: "📝",
      detailedDescription: (
        <>
          <p className="mb-4">
            Estate planning is more than just drafting a will—it's about creating a comprehensive plan to protect your assets, provide for your loved ones, and establish your legacy. Our estate planning attorneys take a personalized approach, getting to know your family, your assets, and your goals to create customized solutions that address your specific needs.
          </p>
          <p className="mb-4">
            We help clients develop estate plans that include wills, trusts, powers of attorney, and healthcare directives, all designed to ensure your wishes are honored and your family is provided for in the event of incapacity or death. Our attorneys can also assist with tax planning strategies to minimize estate and gift taxes, protecting more of your hard-earned assets for your beneficiaries.
          </p>
          <p className="mb-4">
            For clients with complex estates, business interests, or special family situations, we develop sophisticated planning techniques to address unique challenges. This might include business succession planning, special needs trusts, asset protection strategies, or charitable giving plans that align with your values and goals.
          </p>
        </>
      ),
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
  };
  
  const service = services[id as string];

  if (!service) {
    return (
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif text-law-purple mb-4">Service Not Found</h1>
          <p className="mb-6">The service you are looking for does not exist.</p>
          <Link 
            to="/services" 
            className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <span className="inline-block text-4xl mb-4">{service.icon}</span>
            <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
              {service.title}
            </h1>
            <div className="gold-underline mx-auto"></div>
            <p className="text-white/80 max-w-2xl mx-auto mt-6">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-law-purple mb-6">Overview</h2>
            <div className="prose max-w-none text-gray-600 mb-12">
              {service.detailedDescription}
            </div>
            
            <h2 className="text-3xl font-serif text-law-purple mb-6">Our Services Include</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-law-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            {service.faq && (
              <>
                <h2 className="text-3xl font-serif text-law-purple mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6 mb-12">
                  {service.faq.map((item, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-serif text-law-purple mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* CTA Form */}
            <div className="bg-law-gray-light p-8 rounded-lg shadow-sm mt-12">
              <h2 className="text-2xl font-serif text-law-purple mb-4 text-center">
                Discuss Your {service.title} Needs
              </h2>
              <p className="text-center text-gray-600 mb-6">
                Complete the form below to schedule a consultation with our experienced attorneys.
              </p>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-law-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-law-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-law-purple"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-law-purple"
                  />
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Situation</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-law-purple"
                  ></textarea>
                </div>
                
                <div className="md:col-span-2 text-center">
                  <button 
                    type="submit"
                    className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
                  >
                    Request Consultation
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-12 text-center">
              <Link 
                to="/services" 
                className="border border-law-purple text-law-purple hover:bg-law-purple hover:text-white font-medium py-3 px-8 rounded transition-colors inline-block"
              >
                Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;
