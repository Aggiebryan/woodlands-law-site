
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TexasDTPAInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-law-purple mb-4">
          Understanding the Texas DTPA
        </h2>
        <div className="gold-underline mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Texas DTPA Statutory Framework
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    The Texas Deceptive Trade Practices-Consumer Protection Act is codified in Texas Business & Commerce Code § 17.41-17.63. Key aspects include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Broad protection for consumers against false, misleading, and deceptive business practices</li>
                    <li>The "laundry list" of specifically prohibited acts in Section 17.46(b)</li>
                    <li>Private right of action for consumers</li>
                    <li>Powerful remedies including treble damages and attorney's fees</li>
                    <li>Specific pre-suit notice requirements</li>
                    <li>Defenses and exemptions for certain businesses and transactions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Who Qualifies as a "Consumer"
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Under the DTPA, a "consumer" is defined as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>An individual, partnership, corporation, or governmental entity</li>
                    <li>Who seeks or acquires goods or services by purchase or lease</li>
                    <li>Businesses can qualify as consumers if they have assets under $25 million</li>
                    <li>The goods or services must form the basis of the complaint</li>
                    <li>No privity of contract is required with the defendant</li>
                  </ul>
                  <p className="mt-4">
                    Our attorneys can help determine if you qualify as a consumer under the DTPA for your specific situation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  The DTPA Pre-Suit Notice Requirement
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Before filing a DTPA lawsuit, consumers must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide written notice to the defendant at least 60 days before filing suit</li>
                    <li>Include specific details about the complaint</li>
                    <li>Specify the amount of economic damages, mental anguish damages, and attorney's fees sought</li>
                    <li>Give the defendant an opportunity to settle with a written offer</li>
                  </ul>
                  <p className="mt-4">
                    There are exceptions to this requirement in certain situations, such as when the statute of limitations would expire or when counterclaims are filed.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  DTPA Tie-In Statutes
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Several Texas laws "tie in" to the DTPA, meaning violations of these statutes can be pursued as DTPA claims with its enhanced remedies:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Texas Insurance Code (particularly Chapters 541 and 542)</li>
                    <li>Texas Property Code (landlord-tenant and timeshare provisions)</li>
                    <li>Texas Finance Code (certain credit and lending practices)</li>
                    <li>Texas Health & Safety Code (certain healthcare provisions)</li>
                    <li>Texas Occupations Code (regulations for various professions)</li>
                  </ul>
                  <p className="mt-4">
                    These tie-in statutes significantly expand the reach of the DTPA into specialized areas of business.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Key Texas Supreme Court Decisions
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Several important Texas Supreme Court decisions have shaped DTPA law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cruz v. Andrews Restoration</strong> - Defined requirements for DTPA damages</li>
                    <li><strong>PPG Industries v. JMB/Houston Centers</strong> - Limited assignment of DTPA claims</li>
                    <li><strong>Amstadt v. U.S. Brass Corp.</strong> - Established "upstream" manufacturer liability limitations</li>
                    <li><strong>Tony Gullo Motors v. Chapa</strong> - Set standards for attorney's fees and segregation of claims</li>
                    <li><strong>Doe v. Boys Clubs of Greater Dallas</strong> - Established "producing cause" requirement</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  DTPA vs. Common Law Fraud
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Key distinctions between DTPA claims and common law fraud:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>DTPA does not require proof of intent for basic violations (though it does for multiple damages)</li>
                    <li>DTPA provides for automatic recovery of attorney's fees for prevailing consumers</li>
                    <li>DTPA has specific statutory elements rather than common law elements</li>
                    <li>DTPA claims have a shorter statute of limitations (2 years vs. 4 years for fraud)</li>
                    <li>DTPA has the pre-suit notice requirement not found in fraud claims</li>
                    <li>DTPA has specific statutory exemptions and defenses different from fraud</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a
            href="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-law-purple hover:text-law-purple-light"
          >
            <span className="mr-2">Download Our Texas Consumer Rights Guide</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TexasDTPAInfo;
