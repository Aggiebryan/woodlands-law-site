import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function UndisclosedFeesPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Does charging excessive or undisclosed fees violate the Texas DTPA?"
      directAnswer="Undisclosed fees can violate the Texas DTPA if they constitute a failure to disclose material information or an unconscionable action. When a business conceals fees that would affect a consumer's purchasing decision, or springs hidden charges after the transaction, this may be actionable. Excessive fees alone may not violate the DTPA unless they involve deception or take unconscionable advantage of the consumer."
      rule={[
        "Failure to disclose material fees known at the time of the transaction may violate § 17.46(b)(24).",
        "Unconscionable actions that take advantage of a consumer's lack of knowledge are prohibited under § 17.45(5).",
        "Advertising one price but charging another (bait-and-switch) is a specific DTPA violation.",
        "The fee must be material to the consumer's decision and hidden or misrepresented.",
      ]}
      elements={[
        "The defendant charged fees that were not disclosed before the transaction.",
        "The undisclosed fees were material to the consumer's purchasing decision.",
        "The consumer would not have agreed to the transaction or would have paid less with full disclosure.",
        "The consumer suffered actual damages from the undisclosed fees.",
      ]}
      defenses={[
        "The fees were disclosed in the contract or before the transaction.",
        "The fees were reasonable and customary in the industry.",
        "The consumer had an opportunity to review and reject the fees.",
        "The fees were not material to the overall transaction.",
      ]}
      related={[
        { title: "Can hidden contract terms support a claim?", to: "/texas-dtpa/hidden-contract-terms" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can car dealer misrepresentations violate the DTPA?", to: "/texas-dtpa/car-dealer-misrepresentations" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
