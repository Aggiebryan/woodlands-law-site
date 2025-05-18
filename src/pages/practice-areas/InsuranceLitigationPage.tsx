
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const InsuranceLitigationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "First-Party Insurance Disputes" },
    { title: "Coverage Analysis" },
    { title: "Property Damage Claims" },
    { title: "Health Insurance Disputes" },
    { title: "Bad Faith Claims" },
    { title: "Business Interruption Claims" },
    { title: "Negotiation and Litigation" }
  ];

  const whyChooseUs = [
    "Specialized experience with insurance law and regulations",
    "Track record of successful claims against insurance companies",
    "Understanding of complex policy language and coverage issues",
    "Skilled negotiators with insurance adjusters and legal teams",
    "Trial-ready approach that incentivizes fair settlement offers",
    "Personalized strategy for each client's unique situation"
  ];

  const process = {
    title: "Our Insurance Litigation Process",
    steps: [
      "Policy Review & Case Evaluation",
      "Claim Documentation",
      "Strategic Demand Preparation",
      "Settlement Negotiations",
      "Litigation if Necessary",
      "Resolution & Recovery"
    ]
  };

  const faq = [
    {
      question: "My insurance claim was denied. What should I do?",
      answer: "If your claim has been denied, it's important to request a written explanation for the denial, review your policy carefully, and gather supporting documentation. Our attorneys can review your case, identify potential legal grounds for challenging the denial, and help you pursue all available remedies."
    },
    {
      question: "What is insurance bad faith?",
      answer: "Insurance bad faith occurs when an insurance company unreasonably denies, delays, or underpays a valid claim. This can include failing to properly investigate claims, misrepresenting policy provisions, or making unreasonably low settlement offers. If proven, bad faith claims can result in additional damages beyond the policy limits."
    },
    {
      question: "How long does an insurance company have to settle a claim in Texas?",
      answer: "Under Texas law, insurance companies must acknowledge receipt of a claim within 15 days, begin investigation within 15 days, and accept or reject a claim within 45 days (though this period can be extended in certain circumstances). Failing to meet these deadlines may constitute a violation of the Texas Insurance Code."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Insurance Litigation Attorneys"
        subtitle="Fighting for Your Coverage Rights in The Woodlands"
        description="When insurance companies deny, delay, or underpay legitimate claims, our litigation team steps in to fight for the coverage you're entitled to receive. We have the expertise to level the playing field against powerful insurance companies."
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm specializes in representing policyholders in disputes with insurance companies. Our insurance litigation attorneys have extensive experience helping clients recover what they're owed under their policies when insurance companies act in bad faith or wrongfully deny claims. We understand the complex language of insurance policies and the tactics insurers use to minimize payments, and we use this knowledge to advocate effectively for our clients."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default InsuranceLitigationPage;
