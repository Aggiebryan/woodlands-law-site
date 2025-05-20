
import { Shield, FileText, Handshake, Gavel } from "lucide-react";

const processSteps = [
  {
    icon: <FileText className="h-12 w-12 text-law-gold" />,
    title: "Claim Assessment",
    description: "We review your policy and denied claim to identify potential legal grounds for dispute."
  },
  {
    icon: <Shield className="h-12 w-12 text-law-gold" />,
    title: "Demand Letter",
    description: "We prepare a formal demand to the insurer outlining their obligations under the policy."
  },
  {
    icon: <Handshake className="h-12 w-12 text-law-gold" />,
    title: "Negotiation",
    description: "We negotiate directly with the insurance company to secure the compensation you deserve."
  },
  {
    icon: <Gavel className="h-12 w-12 text-law-gold" />,
    title: "Litigation",
    description: "If necessary, we file suit and represent your interests aggressively in court."
  }
];

const InsuranceClaimProcess = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">The Insurance Claim Dispute Process</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Our experienced attorneys guide you through each step of challenging an insurance company's denial or underpayment of your valid claim.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-serif text-law-purple mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 flex justify-center">
                <span className="bg-law-gold text-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceClaimProcess;
