import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function AsIsClausePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title='Does an "as-is" clause waive DTPA liability in Texas?'
      directAnswer='A valid as-is agreement can negate causation and defeat fraud, negligence, and DTPA claims concerning property condition. Fraudulent inducement, interference with inspection, and the circumstances of the transaction can affect enforceability. An allegation of misrepresentation alone does not automatically defeat the agreement.'
      rule={[
        "Prudential Ins. Co. of Am. v. Jefferson Assocs., Ltd., 896 S.W.2d 156, 161–62 (Tex. 1995), enforced the buyer’s as-is agreement and rendered a take-nothing judgment. The Court did not find an applicable fraud or inspection-interference exception on that record.",
        "A buyer who validly agrees to accept property as is generally accepts the risk of its condition, negating causation for claims within the agreement’s scope.",
        "The Court recognized exceptions for fraudulent inducement and conduct that prevents an independent inspection, and considered bargaining position, sophistication, and the circumstances of the agreement.",
      ]}
      elements={[
        "Review the agreement’s wording, scope, and circumstances rather than treating every as-is clause alike.",
        "Determine whether the buyer relied on an independent assessment and voluntarily accepted the risk of the property’s condition.",
        "Evaluate evidence of fraudulent inducement or interference with inspection; the mere existence of an undiscovered defect does not establish an exception.",
      ]}
      defenses={[
        "A seller may rely on a valid as-is agreement to negate the causal connection between alleged conduct and claimed damages.",
        "A buyer may contest enforceability with evidence of fraudulent inducement, inspection interference, or other circumstances recognized by the governing law.",
        "An as-is agreement and a statutory waiver of DTPA rights present different legal questions.",
      ]}
      damages={[
        "An enforceable as-is agreement may defeat the affected claims entirely; it does not guarantee an alternative contract recovery.",
        "If a claim survives, the consumer must still prove its elements, causation, and recoverable damages.",
        "DTPA enhanced damages require the statutory mental-state findings; attorney’s fees require a qualifying recovery.",
      ]}
      related={[
        { title: "Can a merger clause defeat a DTPA claim?", to: "/texas-dtpa/merger-integration-clause" },
        { title: "Are non-reliance clauses enforceable?", to: "/texas-dtpa/non-reliance-disclaimer" },
        { title: "Is a breach of contract automatically a DTPA violation?", to: "/texas-dtpa/breach-of-contract" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "What are common defenses to a DTPA claim?", to: "/texas-dtpa/common-defenses" },
        { title: "What damages are available under the DTPA?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
