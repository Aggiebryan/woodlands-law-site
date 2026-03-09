import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function AsIsClausePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title='Does an "as-is" clause waive DTPA liability in Texas?'
      directAnswer='An "as-is" clause can provide a defense to certain DTPA claims, but it does not provide blanket immunity. Texas law recognizes that a valid as-is clause may bar claims based on the condition of goods or property, but it generally cannot defeat claims based on affirmative misrepresentations made by the seller. The enforceability depends on factors including whether the clause was conspicuous, negotiated, and whether the buyer was a sophisticated party.'
      rule={[
        "In Prudential Ins. Co. v. Jefferson Assocs., the court held that an “as is” clause did not bar the buyer’s fraud and DTPA claims where the seller allegedly made affirmative misrepresentations and concealed the building’s asbestos condition, even though the buyer had inspected the property.",
        "An as-is clause does not protect a seller who makes affirmative misrepresentations about the goods or property.",
        "The clause must be clear, unambiguous, and agreed to voluntarily—not buried in fine print.",
        "Courts consider the relative sophistication of the parties and whether the clause was meaningfully negotiated.",
      ]}
      elements={[
        "For the as-is defense to apply, the defendant must prove the clause was clear and conspicuous.",
        "The buyer must have had an opportunity to inspect or investigate.",
        "The claim must relate to conditions discoverable through reasonable inspection, not active concealment.",
      ]}
      defenses={[
        "A properly drafted and negotiated as-is clause may bar warranty claims.",
        "The defense is stronger when both parties are sophisticated commercial entities.",
        "Courts may enforce as-is clauses when the buyer had access to all relevant information.",
        "However, the clause fails if the seller made fraudulent or intentionally misleading statements.",
      ]}
      damages={[
        "If the as-is clause is invalid, standard DTPA damages apply including economic damages and potentially treble damages.",
        "If the clause is enforced, the consumer may be limited to breach of contract remedies.",
        "Attorney's fees may still be recoverable if the consumer prevails on claims not barred by the clause.",
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
