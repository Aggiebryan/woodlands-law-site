
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const CivilLitigationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "Contract Disputes" },
    { title: "Partnership Disputes" },
    { title: "Construction Disputes" },
    { title: "Commercial Disputes" },
    { title: "Business Torts" },
    { title: "Real Estate Litigation" },
    { title: "Employment Litigation" },
    { title: "Alternative Dispute Resolution" }
  ];

  const whyChooseUs = [
    "Strategic, results-focused civil litigation approach",
    "Experience across diverse industries and case types",
    "Cost-effective representation with transparent billing",
    "Strong negotiation skills that often resolve cases without trial",
    "Trial-ready preparation that strengthens your position",
    "Business-minded attorneys who understand your objectives"
  ];

  const process = {
    title: "Our Civil Litigation Process",
    steps: [
      "Case Evaluation & Strategy Development",
      "Pre-litigation Negotiations",
      "Pleadings & Initial Motions",
      "Discovery & Evidence Collection",
      "Mediation or Settlement Conference",
      "Trial Preparation & Representation",
      "Appeal if Necessary"
    ]
  };

  const faq = [
    {
      question: "How long will my civil litigation case take?",
      answer: "The timeline for civil litigation varies greatly depending on the complexity of the case, court docket congestion, and whether a settlement is possible. Simple cases might resolve in a few months, while complex commercial disputes can take years. We work efficiently to resolve your case as quickly as possible while still achieving your objectives."
    },
    {
      question: "What is alternative dispute resolution, and is it right for my case?",
      answer: "Alternative dispute resolution (ADR) includes processes like mediation and arbitration that allow parties to resolve disputes outside of court. ADR is often faster, less expensive, and more private than traditional litigation. Whether it's right for your case depends on numerous factors including the relationship between the parties, complexity of issues, and your specific goals."
    },
    {
      question: "What costs can I expect with civil litigation?",
      answer: "Civil litigation costs typically include attorney fees, court filing fees, expert witness fees, deposition expenses, and potentially other costs specific to your case. We provide transparent estimates upfront and discuss fee arrangements that align with your budget and case objectives."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Civil Litigation Attorneys"
        subtitle="Strategic Representation for Complex Legal Disputes in The Woodlands"
        description="Our civil litigation team brings strategic, results-focused advocacy to complex legal challenges. Whether you're facing a contract dispute, partnership conflict, or other civil matter, we provide the sophisticated representation needed to protect your interests."
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm represents clients in a wide range of civil disputes, from straightforward contract issues to complex commercial litigation. Our civil litigation attorneys combine thorough legal knowledge with practical business sense to develop strategies that align with your objectives and efficiently resolve disputes. We appreciate that litigation is often a last resort and work to find the most expedient, cost-effective path to resolution while always preparing thoroughly should your case need to go to trial."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default CivilLitigationPage;
