
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";
import CivilLitigationProcess from "@/components/CivilLitigationProcess";
import CivilCaseResults from "@/components/CivilCaseResults";
import CallToAction from "@/components/CallToAction";

const showCaseResults = false; // Set to false to hide, true to show

const CivilLitigationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { 
      title: "Contract Disputes",
      description: "Resolving breaches of contract, interpretation issues, and enforcement of contractual rights."
    },
    { 
      title: "Partnership Disputes",
      description: "Addressing conflicts between business partners, shareholders, and LLC members."
    },
    { 
      title: "Construction Disputes",
      description: "Handling claims related to construction defects, delays, and payment issues."
    },
    { 
      title: "Commercial Disputes",
      description: "Representing businesses in complex commercial conflicts and unfair competition claims."
    },
    { 
      title: "Business Torts",
      description: "Litigating fraud, interference with contracts, and other business-related wrongful acts."
    },
    { 
      title: "Real Estate Litigation",
      description: "Resolving property disputes, title issues, and real estate transaction conflicts."
    },
    { 
      title: "Employment Litigation",
      description: "Defending against wrongful termination, discrimination, and contract disputes."
    },
    { 
      title: "Alternative Dispute Resolution",
      description: "Facilitating mediation and arbitration to resolve disputes efficiently outside court."
    }
  ];

  const whyChooseUs = [
    "Strategic, results-focused civil litigation approach tailored to your specific objectives",
    "Extensive courtroom experience across diverse industries and case types",
    "Transparent, predictable fee structures with clear communication throughout your case",
    "Strong negotiation skills that frequently resolve cases favorably without trial",
    "Trial-ready preparation that positions you for the strongest possible outcome",
    "Business-minded attorneys who understand your commercial and financial objectives"
  ];

  const process = {
    title: "Our Strategic Civil Litigation Process",
    steps: [
      "Comprehensive Case Evaluation & Strategy Development",
      "Strategic Pre-litigation Negotiations",
      "Precision Pleadings & Initial Motions",
      "Targeted Discovery & Evidence Collection",
      "Alternative Dispute Resolution When Advantageous",
      "Meticulous Trial Preparation & Representation",
      "Post-Trial Motions & Appeals When Necessary"
    ]
  };

  const faq = [
    {
      question: "How long will my civil litigation case take?",
      answer: "The timeline for civil litigation varies greatly depending on the complexity of the case, court docket congestion, and whether a settlement is possible. Simple cases might resolve in a few months, while complex commercial disputes can take years. We work efficiently to resolve your case as quickly as possible while still achieving your objectives. Throughout your case, we'll provide realistic timeline expectations based on the specific circumstances."
    },
    {
      question: "What is alternative dispute resolution, and is it right for my case?",
      answer: "Alternative dispute resolution (ADR) includes processes like mediation and arbitration that allow parties to resolve disputes outside of court. ADR is often faster, less expensive, and more private than traditional litigation. Whether it's right for your case depends on numerous factors including the relationship between the parties, complexity of issues, and your specific goals. Our attorneys carefully evaluate each case to recommend the most effective resolution approach, whether that's negotiation, mediation, arbitration, or traditional litigation."
    },
    {
      question: "What costs can I expect with civil litigation?",
      answer: "Civil litigation costs typically include attorney fees, court filing fees, expert witness fees, deposition expenses, and potentially other costs specific to your case. We provide transparent estimates upfront and discuss fee arrangements that align with your budget and case objectives. Depending on your case, options may include hourly billing, contingency arrangements, or hybrid structures. We work to ensure that litigation costs don't outweigh the potential benefits of pursuing your case."
    },
    {
      question: "How do I know if I have a strong civil litigation case?",
      answer: "A strong civil litigation case generally requires demonstrable damages, clear liability or breach of duty by another party, and the ability to prove these elements with credible evidence. During your initial consultation, our attorneys will evaluate the merits of your potential case by reviewing relevant documents, analyzing applicable laws, and assessing potential defenses. We provide honest assessments of strengths, weaknesses, and likelihood of success before recommending a course of action."
    },
    {
      question: "Do all civil disputes have to go to trial?",
      answer: "No, the vast majority of civil disputes (over 90%) are resolved before trial through settlement negotiations, mediation, or dispositive motions. However, preparing each case as if it will go to trial often produces the best settlement leverage. Our litigation strategy focuses on positioning your case for favorable resolution at the earliest appropriate stage while maintaining readiness for trial if necessary to achieve your objectives."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Strategic Civil Litigation Attorneys"
        subtitle="Results-Focused Advocacy for Complex Legal Disputes in Texas"
        description="Our civil litigation team brings strategic, results-focused representation to businesses and individuals facing high-stakes legal challenges. Whether you're dealing with contract disputes, partnership conflicts, or complex commercial matters, we provide the sophisticated counsel needed to protect your interests effectively."
        image="/lovable-uploads/c63dc061-b55b-4ecb-a111-23cc282089a8.png"
        ctaText="Schedule a Case Strategy Session"
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm represents clients in a wide range of civil disputes, from straightforward contract issues to complex commercial litigation. Our civil litigation attorneys combine thorough legal knowledge with practical business sense to develop strategies that align with your objectives and efficiently resolve disputes. We appreciate that litigation is often a last resort and work diligently to find the most expedient, cost-effective path to resolution while always preparing thoroughly should your case need to go to trial. Our team has significant experience in both Texas state courts and federal courts throughout the region."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />

      <CivilLitigationProcess />
      
      {showCaseResults && <CivilCaseResults />}
      
      <CallToAction 
        title="Ready to Discuss Your Civil Dispute?"
        description="Our litigation attorneys can evaluate your case, explain your options, and help develop a strategic approach tailored to your specific objectives."
        primaryButtonText="Schedule a Case Strategy Session"
        primaryButtonLink="https://woodlandslaw.cliogrow.com/book"
        secondaryButtonText="Explore Our Services"
        secondaryButtonLink="/services"
      />
    </>
  );
};

export default CivilLitigationPage;
