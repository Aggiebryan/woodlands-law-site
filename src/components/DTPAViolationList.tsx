
import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const violations = [
  {
    category: "False, Misleading, or Deceptive Acts",
    examples: [
      "Passing off goods or services as those of another",
      "Causing confusion about the source, sponsorship, approval, or certification of goods or services",
      "Representing goods or services have characteristics, ingredients, uses, benefits, or quantities they do not have",
      "Representing goods are original or new if they are deteriorated, reconditioned, reclaimed, used, or secondhand",
      "Representing goods or services are of a particular standard, quality, or grade if they are of another",
      "Advertising goods or services with intent not to sell them as advertised",
      "Making false or misleading statements of fact concerning price reductions"
    ]
  },
  {
    category: "Failure to Disclose Information",
    examples: [
      "Failing to disclose information about goods or services that was known at the time of the transaction",
      "Withholding material facts with the intent to induce the consumer into a transaction",
      "Concealing defects or limitations of products or services",
      "Not revealing important exclusions or limitations in warranties or guarantees",
      "Hiding additional fees or charges until after the agreement"
    ]
  },
  {
    category: "Warranty Violations",
    examples: [
      "Breach of express warranties (written or verbal promises about product quality or performance)",
      "Breach of implied warranty of merchantability (product is fit for ordinary purposes)",
      "Breach of implied warranty of fitness for a particular purpose",
      "Refusing to honor warranty terms",
      "Misrepresenting warranty coverage or duration",
      "Creating warranties with misleading terms or unreasonable requirements"
    ]
  },
  {
    category: "Unconscionable Actions or Courses of Action",
    examples: [
      "Taking advantage of a consumer's lack of knowledge, ability, experience, or capacity",
      "Charging grossly excessive prices for goods or services",
      "Creating a gross disparity between the value received and consideration paid",
      "Imposing excessively one-sided contract terms",
      "High-pressure sales tactics targeting vulnerable populations",
      "Exploiting emergency situations or disasters to charge inflated prices"
    ]
  },
  {
    category: "Insurance Code Violations",
    examples: [
      "Misrepresenting policy terms, benefits, advantages, or conditions",
      "Making false statements about dividends or share of surplus to be received",
      "Making false statements about the financial condition of an insurer",
      "Using name or title of a policy that misrepresents its true nature",
      "Unfair claim settlement practices",
      "Failing to promptly respond to claims"
    ]
  }
];

const DTPAViolationList = () => {
  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Common DTPA Violations
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            The Texas Deceptive Trade Practices Act protects consumers from a wide range of deceptive business practices. Here are some common categories of violations our attorneys handle:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {violations.map((violation, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-serif text-law-purple px-4 py-3 bg-white hover:bg-gray-50 rounded-t">
                  {violation.category}
                </AccordionTrigger>
                <AccordionContent className="bg-white px-4 pt-2 pb-4 rounded-b mb-4 border-t">
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {violation.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/practice-areas/deceptive-trade-practices-act/violations-guide" className="text-law-purple hover:text-law-purple-light inline-flex items-center">
            <span className="mr-1">Download Our Complete DTPA Violation Checklist</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DTPAViolationList;
