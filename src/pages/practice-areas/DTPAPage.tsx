
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const DTPAPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "False Advertising Claims" },
    { title: "Misleading Business Practices" },
    { title: "Unfair Competition" },
    { title: "DTPA Violations" },
    { title: "Warranty Violations" },
    { title: "Consumer Protection" },
    { title: "Misrepresentation Cases" },
    { title: "Statutory Damages Recovery" }
  ];

  const whyChooseUs = [
    "Specialized knowledge of Texas DTPA laws and regulations",
    "Experience representing both consumers and businesses",
    "Ability to recover statutory damages and attorney fees",
    "Track record of successful DTPA claims and defenses",
    "Focus on efficient resolution while maximizing recovery",
    "Clear communication throughout complex legal processes"
  ];

  const process = {
    title: "Our DTPA Case Process",
    steps: [
      "Initial Case Evaluation",
      "Evidence Collection & Documentation",
      "Pre-suit Demand Letter",
      "Negotiation Attempts",
      "Filing of Formal DTPA Claims",
      "Litigation & Discovery",
      "Resolution through Settlement or Trial"
    ]
  };

  const faq = [
    {
      question: "What deceptive practices are covered under the Texas DTPA?",
      answer: "The Texas DTPA covers a wide range of deceptive practices, including false, misleading, or deceptive acts; unconscionable actions; breaches of warranty; insurance code violations; and certain tie-in statutes. Common examples include false advertising, bait-and-switch tactics, misrepresentations about products or services, and failing to disclose material information."
    },
    {
      question: "What damages can I recover in a DTPA case?",
      answer: "Under the DTPA, consumers may recover economic damages, and in cases involving knowing or intentional conduct, up to three times those damages (treble damages). The statute also allows for recovery of court costs and reasonable attorney's fees. In some cases, mental anguish damages may also be available."
    },
    {
      question: "How long do I have to file a DTPA claim in Texas?",
      answer: "The statute of limitations for most DTPA claims in Texas is two years from the date you discovered or should have discovered the deceptive act or practice. There is also a separate provision requiring that the action be brought within two years after the consumer discovered or should have discovered the occurrence of the false, misleading, or deceptive act or practice."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Deceptive Trade Practices Act Attorneys"
        subtitle="Protecting Consumers and Businesses in The Woodlands"
        description="We help consumers and businesses fight back against deceptive, misleading, and fraudulent business practices. Our attorneys have extensive experience with Texas DTPA cases and know how to effectively pursue or defend these specialized claims."
      />
      
      <PracticeAreaContent
        overview="The Texas Deceptive Trade Practices-Consumer Protection Act (DTPA) provides powerful legal remedies for consumers who have been victims of false, misleading, or deceptive business practices. At The Woodlands Law Firm, our attorneys have deep experience with DTPA claims, representing both consumers seeking justice and businesses defending against allegations. We understand the technical requirements and procedural nuances of these cases, allowing us to effectively navigate this complex area of law."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default DTPAPage;
