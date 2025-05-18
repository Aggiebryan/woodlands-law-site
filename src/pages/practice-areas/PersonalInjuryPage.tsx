
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";

const PersonalInjuryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "Auto Accidents" },
    { title: "Truck Accidents" },
    { title: "ATV, UTV Accidents" },
    { title: "Pedestrian Accidents" },
    { title: "Slip and Fall Accidents" },
    { title: "Wrongful Death" }
  ];

  const whyChooseUs = [
    "Dedicated personal injury attorneys with proven results",
    "Personalized attention to your specific case needs",
    "No fee unless we win your case",
    "Extensive experience with complex injury claims",
    "Direct access to your attorney throughout your case",
    "Thorough investigation and strong case preparation"
  ];

  const process = {
    title: "Our Personal Injury Process",
    steps: [
      "Free Initial Consultation",
      "Investigation and Evidence Collection",
      "Medical Treatment and Documentation",
      "Case Valuation and Demand",
      "Settlement Negotiation",
      "Litigation if Necessary",
      "Case Resolution"
    ]
  };

  const faq = [
    {
      question: "How much is my personal injury case worth?",
      answer: "The value of your case depends on several factors including the severity of your injuries, medical expenses, lost wages, pain and suffering, and impact on quality of life. During our consultation, we'll evaluate these factors to give you a better understanding of what your case might be worth."
    },
    {
      question: "How long do I have to file a personal injury claim in Texas?",
      answer: "In Texas, the statute of limitations for most personal injury claims is two years from the date of the injury. However, there are exceptions to this rule, so it's important to consult with an attorney as soon as possible to ensure your rights are protected."
    },
    {
      question: "What if I was partially at fault for my accident?",
      answer: "Texas follows a 'modified comparative negligence' rule, which means you can still recover damages even if you were partially at fault, as long as you were not more than 50% responsible. However, your recovery may be reduced by your percentage of fault."
    }
  ];

  return (
    <>
      <PracticeAreaHero
        title="Personal Injury Attorneys"
        subtitle="Dedicated Advocacy for The Woodlands Injury Victims"
        description="When you've been injured due to someone else's negligence, you need an experienced legal team to fight for the compensation you deserve. Our personal injury attorneys have the knowledge, resources, and determination to hold responsible parties accountable."
      />
      
      <PracticeAreaContent
        overview="At The Woodlands Law Firm, our personal injury attorneys are committed to helping accident victims recover compensation for injuries caused by negligence or wrongful acts. We understand the physical, emotional, and financial toll that serious injuries can take on victims and their families. Our team works tirelessly to ensure that our clients receive full and fair compensation for their injuries, medical expenses, lost wages, and pain and suffering."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
    </>
  );
};

export default PersonalInjuryPage;
