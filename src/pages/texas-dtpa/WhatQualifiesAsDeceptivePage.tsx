import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function WhatQualifiesAsDeceptivePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="What qualifies as a deceptive act under the Texas DTPA?"
      directAnswer="A deceptive act under the Texas DTPA includes any false, misleading, or deceptive act or practice in the conduct of trade or commerce. The statute lists specific prohibited acts in its 'laundry list,' including misrepresentations about a product's characteristics, origin, sponsorship, or approval, as well as bait-and-switch tactics and failures to disclose known defects. A consumer does not need to prove the defendant intended to deceive—only that the act was deceptive and caused damages."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b) lists over 30 specific deceptive acts and practices.",
        "Deceptive acts include false representations about goods or services, misleading price comparisons, and failure to disclose information.",
        "The list is not exclusive; courts may find other acts deceptive based on context.",
        "A representation is deceptive if it has the capacity to deceive an ordinary consumer.",
      ]}
      elements={[
        "The claimant is a 'consumer' under the DTPA.",
        "The defendant committed a false, misleading, or deceptive act or practice.",
        "The deceptive act was a producing cause of actual damages.",
      ]}
      defenses={[
        "The statement was mere puffery or opinion, not a factual representation.",
        "The consumer was not actually deceived or did not rely on the representation.",
        "The defendant qualifies for a statutory exemption (e.g., media, professional services).",
        "The claim is barred by the statute of limitations.",
      ]}
      related={[
        { title: "Can false verbal statements support a DTPA claim?", to: "/texas-dtpa/false-verbal-statements" },
        { title: "Does a business have to intend to deceive?", to: "/texas-dtpa/intent-required" },
        { title: "Can misleading advertising violate the DTPA?", to: "/texas-dtpa/misleading-advertising" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
