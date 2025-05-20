
import { useEffect, useState } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";
import EstatePlanningComparison from "@/components/EstatePlanningComparison";
import CallToAction from "@/components/CallToAction";
import EstatePlanningLifeStages from "@/components/EstatePlanningLifeStages";
import EstateConsultationForm from "@/components/estate/EstateConsultationForm";

const EstatePlanningPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const caseTypes = [
    { 
      title: "Wills and Trusts",
      description: "Comprehensive estate planning documents tailored to your unique family situation and goals."
    },
    { 
      title: "Healthcare Directives",
      description: "Medical powers of attorney and living wills that ensure your healthcare wishes are respected."
    },
    { 
      title: "Probate Administration",
      description: "Guidance through the Texas probate process with efficiency and sensitivity."
    },
    { 
      title: "Special Needs Planning",
      description: "Specialized trusts that provide for loved ones while preserving government benefits."
    },
    { 
      title: "Powers of Attorney",
      description: "Financial and legal protections that ensure your affairs are managed according to your wishes."
    },
    { 
      title: "Asset Protection Strategies",
      description: "Advanced planning techniques to safeguard your wealth from creditors and lawsuits."
    },
    { 
      title: "Estate Tax Planning",
      description: "Strategic approaches to minimize estate and gift tax exposure for larger estates."
    },
    { 
      title: "Legacy Planning",
      description: "Personalized plans to transmit values, wisdom, and meaningful assets to future generations."
    }
  ];

  const whyChooseUs = [
    "Specialized estate planning attorneys with advanced tax and asset protection expertise",
    "Customized plans precisely tailored to your family's unique dynamics and needs",
    "Clear, jargon-free communication that makes complex legal concepts accessible",
    "Comprehensive approach addressing all aspects of your legacy, not just financial assets",
    "Regular plan reviews and updates to accommodate life changes and evolving goals",
    "Seamless integration with your existing financial advisors, CPAs, and insurance professionals"
  ];

  const process = {
    title: "Our Estate Planning Process",
    steps: [
      "Initial Consultation & Goal Identification",
      "Comprehensive Asset & Family Assessment",
      "Personalized Plan Design & Strategy Development",
      "Document Preparation & Detailed Review",
      "Formal Execution & Proper Funding",
      "Regular Review & Updates as Needed"
    ]
  };

  const faq = [
    {
      question: "Do I need an estate plan if I don't have significant wealth?",
      answer: "Yes, estate planning is important regardless of wealth level. Even modest estates benefit from proper planning to ensure assets are distributed according to your wishes, guardians are named for minor children, and healthcare directives are in place. Without a plan, state law determines what happens to your assets and potentially your minor children. Estate planning also addresses critical non-financial matters such as healthcare decisions and guardianship of minor children."
    },
    {
      question: "What's the difference between a will and a trust?",
      answer: "A will is a document that specifies how your assets should be distributed after death and goes through probate court. A trust is a legal arrangement where a trustee holds and manages assets for beneficiaries, can take effect during your lifetime, and typically avoids probate. Trusts offer more privacy and control but require more extensive setup and maintenance. Many comprehensive estate plans utilize both wills and trusts to accomplish different objectives."
    },
    {
      question: "How often should I update my estate plan?",
      answer: "We recommend reviewing your estate plan every 3-5 years or whenever you experience significant life events such as marriage, divorce, birth of children, major asset acquisition/sale, business changes, or relocation to another state. Tax law changes may also necessitate updates to ensure your plan remains optimized. Regular reviews ensure your plan continues to reflect your current wishes and family circumstances."
    },
    {
      question: "What happens if I die without an estate plan in Texas?",
      answer: "Dying without an estate plan in Texas means your assets will be distributed according to the state's intestacy laws, which may not reflect your wishes. The probate process can become more complex and expensive, and the court will decide guardianship of minor children. Additionally, your assets become a matter of public record, and you lose the opportunity to minimize taxes or protect assets from creditors or spendthrift heirs."
    },
    {
      question: "How do I ensure my estate plan works for a blended family?",
      answer: "Blended families require special consideration in estate planning. Strategies may include carefully structured trusts that provide for your current spouse while ensuring children from previous relationships ultimately receive their intended inheritance. Clear documentation of non-probate assets (like life insurance and retirement accounts) is essential, as these pass outside your will. We recommend specific provisions addressing family heirlooms and personal property to prevent disputes."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Securing Your Legacy"
        subtitle="Personalized Estate Planning for Texas Families"
        description="Our estate planning team creates comprehensive strategies that protect your assets, minimize taxes, and ensure your wishes are honored. We help you create a meaningful legacy that provides for your loved ones according to your values while preserving family harmony."
        image="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png"
        ctaText="Schedule Your Estate Planning Consultation"
        onCtaClick={handleOpenForm}
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm provides thoughtful estate planning services designed to give you peace of mind about your family's future. Our estate planning attorneys work closely with you to understand your unique circumstances, family dynamics, financial situation, and long-term goals. We then craft personalized plans that address your specific concerns while maximizing asset protection and minimizing tax implications. Whether you need basic will preparation or sophisticated trust structures for complex estates, we provide clear guidance through every step of the process, ensuring your legacy is preserved exactly as you intend."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />

      <EstatePlanningComparison />
      
      <EstatePlanningLifeStages />
      
      <CallToAction 
        title="Ready to Secure Your Family's Future?"
        description="Schedule a consultation with one of our experienced estate planning attorneys to create a personalized plan that protects what matters most to you."
        primaryButtonText="Schedule Your Estate Planning Consultation"
        primaryButtonLink="#"
        primaryButtonOnClick={handleOpenForm}
        secondaryButtonText="Download Estate Planning Guide"
        secondaryButtonLink="/resources/estate-planning-guide"
      />

      <EstateConsultationForm
        open={isFormOpen}
        onOpenChange={setIsFormOpen}
      />
    </>
  );
};

export default EstatePlanningPage;
