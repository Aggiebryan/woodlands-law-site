
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const EstatePlanningPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "Wills and Trusts" },
    { title: "Healthcare Directives" },
    { title: "Probate Administration" },
    { title: "Special Needs Planning" },
    { title: "Powers of Attorney" },
    { title: "Asset Protection Strategies" },
    { title: "Estate Tax Planning" },
    { title: "Legacy Planning" }
  ];

  const whyChooseUs = [
    "Specialized estate planning attorneys with tax expertise",
    "Customized plans tailored to your family's unique needs",
    "Clear communication that simplifies complex legal concepts",
    "Comprehensive approach addressing all aspects of your legacy",
    "Regular plan reviews to accommodate life changes",
    "Integration with your existing financial and tax advisors"
  ];

  const process = {
    title: "Our Estate Planning Process",
    steps: [
      "Initial Consultation & Goal Setting",
      "Asset & Family Assessment",
      "Plan Design & Strategy Development",
      "Document Preparation & Review",
      "Formal Execution & Funding",
      "Periodic Review & Updates"
    ]
  };

  const faq = [
    {
      question: "Do I need an estate plan if I don't have significant wealth?",
      answer: "Yes, estate planning is important regardless of wealth level. Even modest estates benefit from proper planning to ensure assets are distributed according to your wishes, guardians are named for minor children, and healthcare directives are in place. Without a plan, state law determines what happens to your assets and potentially your minor children."
    },
    {
      question: "What's the difference between a will and a trust?",
      answer: "A will is a document that specifies how your assets should be distributed after death and goes through probate court. A trust is a legal arrangement where a trustee holds and manages assets for beneficiaries, can take effect during your lifetime, and typically avoids probate. Trusts offer more privacy and control but require more extensive setup and maintenance."
    },
    {
      question: "How often should I update my estate plan?",
      answer: "We recommend reviewing your estate plan every 3-5 years or whenever you experience significant life events such as marriage, divorce, birth of children, major asset acquisition/sale, business changes, or relocation to another state. Tax law changes may also necessitate updates to ensure your plan remains optimized."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Estate Planning Attorneys"
        subtitle="Securing Your Legacy in The Woodlands"
        description="Our estate planning team creates comprehensive strategies that protect your assets, minimize taxes, and ensure your wishes are honored. We help you create a meaningful legacy that provides for your loved ones according to your values."
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm provides thoughtful estate planning services designed to give you peace of mind about your family's future. Our estate planning attorneys work closely with you to understand your unique circumstances, family dynamics, financial situation, and long-term goals. We then craft personalized plans that address your specific concerns while maximizing asset protection and minimizing tax implications. Whether you need basic will preparation or sophisticated trust structures, we provide clear guidance through every step of the process."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default EstatePlanningPage;
