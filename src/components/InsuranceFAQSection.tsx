
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of insurance disputes do you handle?",
    answer: "We represent policyholders in disputes involving all types of insurance coverage, including homeowners, commercial property, business interruption, life, health, disability, auto, and liability insurance policies."
  },
  {
    question: "How long do I have to file a lawsuit against my insurance company in Texas?",
    answer: "In Texas, most insurance policy disputes are subject to a 2-year statute of limitations from the date your claim was denied. Some policies may contractually shorten this period. It's crucial to consult with an attorney promptly after a denial to protect your rights."
  },
  {
    question: "What is insurance 'bad faith' and how do I know if it applies to my case?",
    answer: "Insurance bad faith occurs when an insurer unreasonably denies, delays, or underpays a valid claim. Examples include failing to properly investigate, misrepresenting policy provisions, or making unreasonably low settlement offers. Our attorneys can review your claim to identify potential bad faith practices."
  },
  {
    question: "What damages can I recover in an insurance dispute case?",
    answer: "You may be entitled to the policy benefits wrongfully denied, plus additional damages including statutory interest (18% in some cases), attorney's fees, court costs, and potentially up to three times your actual damages if willful violations are proven."
  },
  {
    question: "Do I need to hire an attorney for my insurance claim dispute?",
    answer: "While you can attempt to resolve disputes directly with your insurer, having experienced legal representation often leads to significantly better outcomes. Insurance companies have teams of lawyers protecting their interests, and having your own attorney levels the playing field."
  },
  {
    question: "How much does it cost to hire an insurance litigation attorney?",
    answer: "We typically handle insurance dispute cases on a contingency fee basis, meaning we only get paid if we recover money for you. This arrangement allows you to obtain quality legal representation without paying upfront legal fees."
  },
  {
    question: "My claim was denied due to a policy exclusion. Can you still help me?",
    answer: "Yes. Insurance companies sometimes misinterpret exclusions or apply them incorrectly. We carefully analyze your policy language and the specific facts of your claim to identify potential coverage arguments despite apparent exclusions."
  },
  {
    question: "The insurance company is offering a settlement. Should I accept it?",
    answer: "Before accepting any settlement offer, it's advisable to have an attorney review your policy and the full extent of your damages. Initial offers are often significantly lower than what you may be entitled to receive."
  },
  {
    question: "What is the Texas Prompt Payment of Claims Act?",
    answer: "This law (Chapter 542 of the Texas Insurance Code) requires insurers to acknowledge, investigate, and pay or deny claims within specific timeframes. If they fail to do so, they may owe statutory interest (18% annually) and attorney's fees in addition to the claim amount."
  },
  {
    question: "Can you help with an insurance claim that was denied several months ago?",
    answer: "Yes, as long as the statute of limitations hasn't expired. In Texas, you typically have two years from the date of denial to file a lawsuit, though this period can be modified by your policy. Contact us for a case evaluation as soon as possible."
  }
];

const InsuranceFAQSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Frequently Asked Questions</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about insurance litigation in Texas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-serif text-law-purple hover:text-law-gold py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default InsuranceFAQSection;
