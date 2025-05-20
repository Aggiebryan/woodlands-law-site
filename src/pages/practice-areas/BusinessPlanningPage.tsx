
import { useEffect, useState } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";
import BusinessEntityComparison from "@/components/BusinessEntityComparison";
import CallToAction from "@/components/CallToAction";
import BusinessLifecycle from "@/components/BusinessLifecycle";
import BusinessConsultationForm from "@/components/business/BusinessConsultationForm";

const BusinessPlanningPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const caseTypes = [
    { 
      title: "Entity Formation and Selection",
      description: "Strategic guidance on choosing and establishing the optimal business structure for your goals."
    },
    { 
      title: "Business Succession Planning",
      description: "Comprehensive strategies for ownership transition that preserve business value and legacy."
    },
    { 
      title: "Risk Management Strategies",
      description: "Proactive legal approaches to identify and mitigate potential business liability concerns."
    },
    { 
      title: "Business Acquisitions",
      description: "Due diligence and transaction guidance for purchasing existing businesses or assets."
    },
    { 
      title: "Contract Drafting and Review",
      description: "Customized agreements that protect your interests and create clarity in business relationships."
    },
    { 
      title: "Buy-Sell Agreements",
      description: "Structured plans for ownership changes due to death, disability, retirement, or owner disputes."
    },
    { 
      title: "Corporate Governance",
      description: "Development of bylaws, operating agreements, and policies that establish clear authority and procedures."
    },
    { 
      title: "Regulatory Compliance",
      description: "Navigation of industry-specific regulations to ensure your business operates within legal requirements."
    }
  ];

  const whyChooseUs = [
    "Business attorneys with practical entrepreneurial experience who understand real-world challenges",
    "Proactive legal planning that prevents costly disputes and liabilities before they arise",
    "Holistic approach integrating business strategy, tax considerations, and legal protections",
    "Long-term relationship focus with regular legal checkups rather than transactional approach",
    "Industry-specific knowledge for targeted solutions relevant to your business sector",
    "Access to our professional network of financial advisors, CPAs, and insurance specialists"
  ];

  const process = {
    title: "Our Strategic Business Planning Process",
    steps: [
      "Initial Business Strategy Consultation",
      "Comprehensive Risk & Opportunity Analysis",
      "Legal Structure & Protection Recommendations",
      "Documentation Preparation & Review",
      "Implementation & Filing with Proper Authorities",
      "Ongoing Legal Support & Compliance Monitoring"
    ]
  };

  const faq = [
    {
      question: "What business entity structure is best for my company?",
      answer: "The ideal structure depends on various factors including liability concerns, tax considerations, management preferences, and growth plans. Common options include LLCs, corporations (C-corps and S-corps), partnerships, and sole proprietorships. Our attorneys analyze your specific situation including ownership plans, liability exposure, tax implications, and capital needs to recommend the most advantageous structure for your business goals both short and long-term."
    },
    {
      question: "When should I start planning for business succession?",
      answer: "Business succession planning should begin as early as possible - ideally several years before any anticipated ownership transition. Early planning allows time to identify and train successors, implement tax-efficient transfer strategies, and ensure a smooth transition that preserves business value and relationships. For family businesses, succession planning is particularly important to address potential conflicts and ensure fair treatment while maintaining operational continuity."
    },
    {
      question: "What key contracts should every business have?",
      answer: "Essential contracts vary by industry, but most businesses benefit from having: clear operating agreements or bylaws, employment agreements, client/customer contracts, vendor agreements, confidentiality/non-disclosure agreements, and if applicable, commercial leases and intellectual property assignments. We help identify and develop the specific contracts your business needs with provisions tailored to your operations and industry requirements."
    },
    {
      question: "How can I protect my personal assets from business liabilities?",
      answer: "Multiple strategies can help separate personal and business assets, including: forming the appropriate business entity (like an LLC or corporation), maintaining proper business formalities, securing adequate business insurance coverage, using carefully drafted contracts with limitation of liability provisions, and potentially creating additional asset protection trusts. The right combination depends on your specific situation, industry risks, and personal asset portfolio."
    },
    {
      question: "What should I consider when buying or selling a business?",
      answer: "Key considerations include proper valuation, deal structure (asset vs. stock sale), tax implications, due diligence on operations/financials/legal issues, treatment of existing employees, handling of accounts receivable/payable, assignability of contracts and leases, non-compete provisions, and transition planning. Our attorneys guide buyers and sellers through each step to ensure thorough evaluation and protection throughout the transaction."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Strategic Business Legal Counsel"
        subtitle="Forward-Thinking Solutions for Texas Entrepreneurs and Companies"
        description="Our business planning team provides comprehensive legal guidance that protects your enterprise while enabling growth. We partner with entrepreneurs and established business owners to identify risks, seize opportunities, and build sustainable companies with strong legal foundations."
        image="/lovable-uploads/307c4d37-d87e-4a89-8107-73533778d172.png"
        ctaText="Schedule a Business Strategy Session"
        onCtaClick={handleOpenForm}
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm delivers strategic legal planning for businesses at all stages, from startups to established companies preparing for succession. Our business planning attorneys help entrepreneurs and business owners navigate legal complexities while focusing on sustainable growth and success. We take the time to understand your business model, industry challenges, and long-term goals, allowing us to provide tailored legal solutions that align with your specific needs rather than one-size-fits-all approaches. Our practical, business-minded counsel helps you make informed decisions that protect your interests while supporting your commercial objectives."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />

      <BusinessEntityComparison />
      
      <BusinessLifecycle />
      
      <CallToAction 
        title="Ready to Strengthen Your Business Legally?"
        description="Schedule a consultation with our business planning attorneys to identify and address potential legal issues before they impact your operations or growth."
        primaryButtonText="Schedule a Business Strategy Session"
        primaryButtonOnClick={handleOpenForm}
        secondaryButtonText="Download Business Formation Guide"
        secondaryButtonLink="/resources/business-formation-guide"
      />

      <BusinessConsultationForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
      />
    </>
  );
};

export default BusinessPlanningPage;
