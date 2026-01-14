import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function FalseVerbalStatementsPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can false verbal statements support a Texas DTPA claim?"
      directAnswer="Yes. Under the Texas DTPA, false verbal statements can support a claim if they constitute a false, misleading, or deceptive act or practice in the conduct of trade or commerce. The statute does not require misrepresentations to be in writing. However, the consumer must prove what was said, that it was false or misleading, and that it was a producing cause of damages."
      rule={[
        "The DTPA covers any false, misleading, or deceptive act or practice, whether written or oral.",
        "Tex. Bus. & Com. Code § 17.46(b) does not limit claims to written representations.",
        "Oral representations about product quality, characteristics, or terms can be actionable.",
        "The key is whether the statement was false and made in connection with a consumer transaction.",
      ]}
      elements={[
        "The defendant made a false or misleading verbal statement.",
        "The statement was made in the conduct of trade or commerce.",
        "The claimant is a consumer under the DTPA.",
        "The false statement was a producing cause of actual damages.",
      ]}
      defenses={[
        "The statement was never made or was accurately represented.",
        "The statement was mere opinion or puffery, not a factual claim.",
        "The consumer cannot prove reliance or damages caused by the statement.",
        "The claim is time-barred under the two-year statute of limitations.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Does intent to deceive matter?", to: "/texas-dtpa/intent-required" },
        { title: "Do I have to rely on the misrepresentation?", to: "/texas-dtpa/reliance-required" },
        { title: "Can hidden contract terms support a claim?", to: "/texas-dtpa/hidden-contract-terms" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
