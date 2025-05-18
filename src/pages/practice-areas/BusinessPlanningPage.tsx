
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const BusinessPlanningPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "Entity Formation and Selection" },
    { title: "Business Succession Planning" },
    { title: "Risk Management Strategies" },
    { title: "Business Acquisitions" },
    { title: "Contract Drafting and Review" },
    { title: "Buy-Sell Agreements" },
    { title: "Corporate Governance" },
    { title: "Regulatory Compliance" }
  ];

  const whyChooseUs = [
    "Business attorneys with real-world entrepreneurial experience",
    "Proactive legal planning that prevents future issues",
    "Holistic approach integrating business and legal strategies",
    "Long-term relationship focus rather than transactional approach",
    "Industry-specific knowledge for targeted solutions",
    "Access to our professional network of financial and tax advisors"
  ];

  const process = {
    title: "Our Business Planning Process",
    steps: [
      "Initial Business Strategy Consultation",
      "Risk Assessment & Opportunity Analysis",
      "Legal Structure Recommendation",
      "Documentation Preparation",
      "Implementation & Filing",
      "Ongoing Legal Support"
    ]
  };

  const faq = [
    {
      question: "What business entity structure is best for my company?",
      answer: "The ideal structure depends on various factors including liability concerns, tax considerations, management preferences, and growth plans. Common options include LLCs, corporations (C-corps and S-corps), partnerships, and sole proprietorships. Our attorneys analyze your specific situation to recommend the most advantageous structure for your business goals."
    },
    {
      question: "When should I start planning for business succession?",
      answer: "Business succession planning should begin as early as possible - ideally several years before any anticipated ownership transition. Early planning allows time to identify and train successors, implement tax-efficient transfer strategies, and ensure a smooth transition that preserves business value and relationships."
    },
    {
      question: "What key contracts should every business have?",
      answer: "Essential contracts vary by industry, but most businesses benefit from having: clear operating agreements or bylaws, employment agreements, client/customer contracts, vendor agreements, confidentiality/non-disclosure agreements, and if applicable, commercial leases and intellectual property assignments. We help identify and develop the specific contracts your business needs."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Business Planning Attorneys"
        subtitle="Strategic Legal Guidance for The Woodlands Businesses"
        description="Our attorneys provide comprehensive legal solutions for businesses at every stage, from formation to succession planning. We partner with business owners to provide practical, forward-thinking legal guidance that supports your business objectives."
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm delivers strategic legal planning for businesses of all sizes, from startups to established companies. Our business planning attorneys help entrepreneurs and business owners navigate legal complexities while focusing on sustainable growth and success. We take the time to understand your business model, industry challenges, and long-term goals, allowing us to provide tailored legal solutions that align with your specific needs rather than one-size-fits-all approaches."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default BusinessPlanningPage;
