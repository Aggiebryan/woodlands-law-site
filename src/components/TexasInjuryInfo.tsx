
import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TexasInjuryInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-law-purple mb-4">
          Texas Personal Injury Law: What You Need to Know
        </h2>
        <div className="gold-underline mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Modified Comparative Negligence in Texas
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Texas follows a "modified comparative negligence" rule with a 51% bar. This means:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>You can still recover damages even if you were partially at fault for your accident</li>
                    <li>Your compensation will be reduced by your percentage of fault</li>
                    <li>If you're found to be 51% or more responsible, you cannot recover any damages</li>
                    <li>Insurance companies often try to shift blame to minimize their payout</li>
                  </ul>
                  <p className="mt-4">
                    Our attorneys are experienced in countering comparative negligence arguments and preserving your right to fair compensation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Texas Statute of Limitations
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    In Texas, you generally have:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>2 years</strong> from the date of injury to file most personal injury lawsuits</li>
                    <li><strong>2 years</strong> from the date of death to file a wrongful death claim</li>
                    <li><strong>6 months</strong> to file notice of claim against government entities (cities, counties)</li>
                    <li><strong>Special rules</strong> for minors and those who are mentally incapacitated</li>
                    <li><strong>Discovery rule</strong> may apply when injuries aren't immediately apparent</li>
                  </ul>
                  <p className="mt-4">
                    Missing these deadlines can permanently bar your right to compensation, which is why contacting an attorney promptly is crucial.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Damage Caps in Texas
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Texas law limits damages in certain types of cases:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>No caps</strong> on economic damages in most personal injury cases</li>
                    <li><strong>No caps</strong> on non-economic damages in most personal injury cases</li>
                    <li><strong>Medical malpractice cases</strong> are capped at $250,000 for non-economic damages against doctors/providers</li>
                    <li><strong>Claims against government entities</strong> are capped at $250,000-$300,000 depending on the entity</li>
                    <li><strong>Punitive damages</strong> are limited to the greater of: (1) $200,000 or (2) two times economic damages plus non-economic damages up to $750,000</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Insurance Requirements in Texas
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Texas minimum auto insurance requirements (30/60/25):
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>$30,000</strong> for bodily injury per person</li>
                    <li><strong>$60,000</strong> total bodily injury per accident</li>
                    <li><strong>$25,000</strong> property damage per accident</li>
                  </ul>
                  <p className="mt-4 mb-4">
                    These minimums are often insufficient for serious injuries. Optional coverage includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Uninsured/Underinsured Motorist (UM/UIM)</strong> coverage</li>
                    <li><strong>Personal Injury Protection (PIP)</strong> coverage</li>
                    <li><strong>Medical Payments</strong> coverage</li>
                  </ul>
                  <p className="mt-4">
                    We help clients identify all potential sources of recovery, including multiple insurance policies that may apply to your case.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Recent Texas Supreme Court Decisions
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Several recent Texas Supreme Court decisions have impacted personal injury law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>In re Allstate</strong> - Affecting discovery of insurance company's business practices</li>
                    <li><strong>In re K&L Auto Crushers</strong> - Regarding discovery of medical provider billing practices</li>
                    <li><strong>Kingsley v. Brim</strong> - Relating to premises liability for independent contractors</li>
                    <li><strong>Tarrant County v. Bonner</strong> - Impacting governmental immunity claims</li>
                  </ul>
                  <p className="mt-4">
                    Our attorneys stay current with evolving case law to provide the most effective representation for your specific circumstances.
                  </p>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-serif text-law-purple">
                  Local Court Information
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  <p className="mb-4">
                    Personal injury cases in our region may be handled in:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Montgomery County District Courts</strong> (9th, 221st, 284th, 359th, 410th, 418th, 435th, and 457th Judicial Districts)</li>
                    <li><strong>Harris County District Courts</strong> (numerous civil district courts)</li>
                    <li><strong>Federal Courts</strong> - Southern District of Texas</li>
                  </ul>
                  <p className="mt-4">
                    Our attorneys have extensive experience in these local courts and understand the specific procedures, judges, and local rules that can impact your case.
                  </p>
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
            <span className="mr-2">Download Our Texas Personal Injury Guide</span>
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

export default TexasInjuryInfo;
