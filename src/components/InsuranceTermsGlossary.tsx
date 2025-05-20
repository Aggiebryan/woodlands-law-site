
import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

interface GlossaryTerm {
  term: string;
  definition: string;
}

interface GlossarySection {
  letter: string;
  terms: GlossaryTerm[];
}

const InsuranceTermsGlossary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const glossaryTerms: GlossaryTerm[] = [
    {
      term: "Actual Cash Value (ACV)",
      definition: "The value of property at the time of loss, based on its original cost minus depreciation (wear and tear). It is not the amount you paid or what it costs to replace it today."
    },
    {
      term: "Additional Insured",
      definition: "A person or business added to a policy who receives some of the same protections as the named insured. Common in commercial or contractor policies."
    },
    {
      term: "Adjuster (Claims Adjuster)",
      definition: "A person who works for the insurance company (or is hired by them) to investigate and handle claims. They decide how much the insurance company will pay for a loss."
    },
    {
      term: "Aggregate Limit",
      definition: "The most the insurer will pay for all covered losses during a set policy period, usually one year. Once this limit is reached, no further payments are made."
    },
    {
      term: "All-Risk Policy",
      definition: "A policy that covers all types of loss unless specifically excluded. More comprehensive than a named perils policy."
    },
    {
      term: "Appraisal Clause",
      definition: "A section in many insurance policies that allows both sides to hire independent appraisers if there is a disagreement about the value of a loss. A third appraiser, or umpire, helps settle the dispute."
    },
    {
      term: "Assignment of Benefits (AOB)",
      definition: "A legal agreement where a policyholder signs over insurance claim rights to a third party, such as a contractor, allowing them to deal directly with the insurer."
    },
    {
      term: "Bad Faith",
      definition: "When an insurance company unfairly delays, denies, or underpays a valid claim, it may be acting in bad faith. Policyholders can take legal action when this happens."
    },
    {
      term: "Binder",
      definition: "A temporary agreement that provides insurance coverage until the formal policy is issued."
    },
    {
      term: "Cancellation",
      definition: "Termination of a policy before its normal expiration date. This can be done by either the insurer or the policyholder, but Texas law requires proper notice."
    },
    {
      term: "Catastrophic Loss",
      definition: "A large-scale loss from events like hurricanes, wildfires, or floods, affecting many policyholders and often triggering special claim handling rules."
    },
    {
      term: "Claim",
      definition: "A request made to an insurance company to pay for a covered loss or event under the policy."
    },
    {
      term: "Coinsurance Clause",
      definition: "A policy provision that may reduce payment if the insured fails to maintain a minimum amount of coverage relative to property value."
    },
    {
      term: "Coverage",
      definition: "The specific protections and limits listed in your policy. It defines what is covered, how much is covered, and under what conditions."
    },
    {
      term: "Declarations Page",
      definition: "The first page of an insurance policy that summarizes key details like who is insured, the coverage limits, the property covered, and the policy period."
    },
    {
      term: "Declarations Page (Dec Page)",
      definition: "The section of the policy that lists the insured's name, address, policy number, coverage types, limits, deductibles, and effective dates."
    },
    {
      term: "Deductible",
      definition: "The amount you must pay out-of-pocket before your insurance coverage starts to pay. For example, if your deductible is $1,000, you pay that first, and the insurer pays the rest (up to your policy limits)."
    },
    {
      term: "Endorsement (Rider)",
      definition: "A written change or addition to an insurance policy that modifies the original terms."
    },
    {
      term: "Excess Insurance",
      definition: "Coverage that kicks in only after primary insurance limits are exhausted. Often used in business and umbrella policies."
    },
    {
      term: "Exclusion",
      definition: "Something that is not covered by your insurance policy. These are listed in the policy and can include things like certain natural disasters or types of damage."
    },
    {
      term: "Exposure",
      definition: "The extent to which an insurer is at risk of paying a claim. Higher exposure means greater potential liability."
    },
    {
      term: "First-Party Claim",
      definition: "A claim you file with your own insurance company under your own policy."
    },
    {
      term: "Fraud",
      definition: "Intentionally providing false information to an insurer for financial gain. Insurance fraud can involve claimants, insurers, or third parties."
    },
    {
      term: "Grace Period",
      definition: "Extra time after the premium due date during which the policyholder can make payment without losing coverage."
    },
    {
      term: "Hazard",
      definition: "A condition that increases the likelihood of a loss. For example, faulty wiring is a fire hazard."
    },
    {
      term: "Indemnity",
      definition: "The principle that insurance should return you to your financial position before the loss—no more, no less."
    },
    {
      term: "Independent Adjuster",
      definition: "A claims adjuster who is not an employee of the insurance company but is hired to evaluate and handle claims."
    },
    {
      term: "Insurable Interest",
      definition: "You can only buy insurance for something you would suffer a loss from. For example, you can't insure your neighbor's car because you don't have a financial interest in it."
    },
    {
      term: "Insured",
      definition: "The person or entity covered by the insurance policy."
    },
    {
      term: "Insurer",
      definition: "The company providing insurance coverage."
    },
    {
      term: "Lapse",
      definition: "A break in coverage due to non-payment or cancellation. If a policy lapses, the insurer is no longer obligated to pay for losses."
    },
    {
      term: "Liability Insurance",
      definition: "Covers legal claims against the insured for injury or property damage to others. This includes bodily injury and property damage liability."
    },
    {
      term: "Limit of Liability",
      definition: "The maximum amount the insurer will pay under the policy for a covered claim."
    },
    {
      term: "Loss",
      definition: "The damage or financial harm that results in a claim being made. It can be physical damage, theft, or liability."
    },
    {
      term: "Loss of Use",
      definition: "Coverage that pays for living expenses or lost income when you can't use your property due to a covered event. For example, it may pay for a hotel while your home is repaired after a fire."
    },
    {
      term: "Mitigation",
      definition: "Reasonable steps the policyholder must take to prevent further damage after a loss occurs. Failing to mitigate can reduce the insurer's payment."
    },
    {
      term: "Named Insured",
      definition: "The individual or entity specifically named in the policy who holds the primary rights and responsibilities."
    },
    {
      term: "Named Perils",
      definition: "A policy that only covers specific types of damage listed in the policy. If it's not listed, it's not covered."
    },
    {
      term: "Occurrence",
      definition: "An event or repeated exposure to conditions that results in a loss. In liability insurance, it determines which policy applies when multiple periods are involved."
    },
    {
      term: "Per Occurrence Limit",
      definition: "The maximum the insurer will pay for a single covered event."
    },
    {
      term: "Per Person Limit",
      definition: "The maximum an insurer will pay for a single individual's damages under a policy."
    },
    {
      term: "Peril",
      definition: "A specific risk or cause of loss, like fire, hail, theft, or windstorm."
    },
    {
      term: "Personal Injury",
      definition: "In insurance, this term may refer to non-physical harms such as libel, slander, invasion of privacy, or wrongful eviction—distinct from bodily injury."
    },
    {
      term: "Policy Limits",
      definition: "The maximum amount the insurance company will pay for a covered loss. If your damages are more than the policy limit, you must pay the rest out-of-pocket."
    },
    {
      term: "Policyholder",
      definition: "The individual or business that owns the insurance policy."
    },
    {
      term: "Premium",
      definition: "The amount you pay for your insurance policy, usually monthly or annually."
    },
    {
      term: "Proof of Loss",
      definition: "A formal statement you give to the insurer describing your loss, usually including the value and details of the damage."
    },
    {
      term: "Proof of Loss",
      definition: "A written, signed statement provided by the policyholder to prove the amount and details of a loss."
    },
    {
      term: "Reinstatement",
      definition: "Restoring a lapsed policy, often after overdue premiums are paid. Some insurers require underwriting approval."
    },
    {
      term: "Replacement Cost Value (RCV)",
      definition: "The amount it would take to replace or repair damaged property with new property of the same kind and quality, without subtracting depreciation."
    },
    {
      term: "Reservation of Rights",
      definition: "A notice from the insurer saying they are investigating a claim but may deny it later. It lets them look into the claim without promising to pay."
    },
    {
      term: "Reservation of Rights Letter",
      definition: "A letter from the insurer stating that it is investigating or defending a claim, but may later deny coverage based on policy terms."
    },
    {
      term: "Self-Insured Retention (SIR)",
      definition: "The amount a policyholder must pay out-of-pocket before excess insurance applies. Similar to a deductible, but generally used in larger or commercial policies."
    },
    {
      term: "Stacking",
      definition: "Using multiple policies or coverage limits for a single claim. Not allowed in all states or policy types."
    },
    {
      term: "Subrogation",
      definition: "When your insurer pays your claim, they may go after a third party that caused the damage to recover what they paid. You must cooperate with this process."
    },
    {
      term: "Surplus Lines Insurance",
      definition: "Insurance provided by non-admitted carriers—companies not licensed in the state but allowed to sell policies when admitted insurers won't offer coverage."
    },
    {
      term: "Third-Party Claim",
      definition: "A claim made against someone else's insurance. For example, if you are in a car accident and the other driver is at fault, your claim against their insurer is a third-party claim."
    },
    {
      term: "Umbrella Policy",
      definition: "An extra layer of liability coverage that applies once your other policies (auto, home, etc.) have reached their limits."
    },
    {
      term: "Underinsured Motorist (UIM)",
      definition: "Covers you when another driver causes an accident but doesn't have enough insurance to cover your damages."
    },
    {
      term: "Underwriting",
      definition: "The process the insurer uses to evaluate risk and decide whether to offer a policy and at what price."
    },
    {
      term: "Uninsured Motorist (UM)",
      definition: "Covers you when you're hit by a driver who has no insurance or in hit-and-run cases."
    }
  ];

  // Group terms by first letter
  const groupTermsByLetter = (): GlossarySection[] => {
    const termsByLetter: { [key: string]: GlossaryTerm[] } = {};
    
    glossaryTerms.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!termsByLetter[firstLetter]) {
        termsByLetter[firstLetter] = [];
      }
      termsByLetter[firstLetter].push(term);
    });
    
    // Convert to array format sorted by letter
    return Object.keys(termsByLetter)
      .sort()
      .map(letter => ({
        letter,
        terms: termsByLetter[letter].sort((a, b) => a.term.localeCompare(b.term))
      }));
  };

  // Filter terms based on search input
  const filteredSections = (): GlossarySection[] => {
    if (!searchTerm) {
      return groupTermsByLetter();
    }
    
    const lowerSearchTerm = searchTerm.toLowerCase();
    const filteredTerms = glossaryTerms.filter(
      term => term.term.toLowerCase().includes(lowerSearchTerm) ||
              term.definition.toLowerCase().includes(lowerSearchTerm)
    );
    
    const termsByLetter: { [key: string]: GlossaryTerm[] } = {};
    
    filteredTerms.forEach(term => {
      const firstLetter = term.term.charAt(0).toUpperCase();
      if (!termsByLetter[firstLetter]) {
        termsByLetter[firstLetter] = [];
      }
      termsByLetter[firstLetter].push(term);
    });
    
    return Object.keys(termsByLetter)
      .sort()
      .map(letter => ({
        letter,
        terms: termsByLetter[letter].sort((a, b) => a.term.localeCompare(b.term))
      }));
  };

  // Get all available letters for quick navigation
  const allLetters = groupTermsByLetter().map(section => section.letter);

  return (
    <>
      <Helmet>
        <title>Insurance Terms Glossary | The Woodlands Law Firm</title>
        <meta name="description" content="Comprehensive glossary of insurance terms to help you understand your policy and navigate insurance claims in Texas." />
      </Helmet>

      <div className="bg-law-gray-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif text-law-purple mb-4">Insurance Terms Glossary</h1>
            <div className="gold-underline mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Understanding insurance terminology is essential when dealing with claims. This glossary provides definitions 
              for common terms you might encounter during the insurance claim process.
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mb-12 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search terms..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-law-purple focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          
          {/* Alphabet Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {allLetters.map(letter => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded bg-white border border-gray-300 hover:bg-law-gold hover:text-white transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
          
          {/* Glossary Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
            {filteredSections().length > 0 ? (
              filteredSections().map(section => (
                <div key={section.letter} id={section.letter} className="mb-10">
                  <h2 className="text-2xl font-serif text-law-purple border-b-2 border-law-gold pb-2 mb-6">
                    {section.letter}
                  </h2>
                  <dl className="space-y-6">
                    {section.terms.map((term, index) => (
                      <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                        <dt className="text-lg font-medium text-law-purple mb-2">{term.term}</dt>
                        <dd className="text-gray-700">{term.definition}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-600">No terms found matching your search. Try different keywords.</p>
              </div>
            )}
          </div>
          
          {/* Return Link */}
          <div className="mt-10 text-center">
            <Link 
              to="/practice-areas/insurance-litigation" 
              className="text-law-purple hover:text-law-gold transition-colors font-medium"
            >
              ← Return to Insurance Litigation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuranceTermsGlossary;
