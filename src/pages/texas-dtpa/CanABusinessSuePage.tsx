import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function CanABusinessSuePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a business bring a Texas DTPA claim?"
      directAnswer="Yes, but with limitations. A business can qualify as a 'consumer' under the Texas DTPA if it sought or acquired goods or services by purchase or lease and the goods or services form the basis of the complaint. However, businesses with assets of $25 million or more cannot recover damages under the DTPA. Additionally, business consumers may face heightened defenses and limitations on damages depending on the nature of their claim."
      rule={[
        "Tex. Bus. & Com. Code § 17.45(4) includes corporations and partnerships in the definition of 'consumer.'",
        "Businesses with assets of $25 million or more are excluded from recovering damages under § 17.49(g).",
        "The business must have sought goods or services, not just engaged in a commercial transaction.",
        "Business-to-business transactions may still be covered if the goods/services form the basis of the complaint.",
      ]}
      elements={[
        "The business sought or acquired goods or services by purchase or lease.",
        "The goods or services form the basis of the DTPA complaint.",
        "The business has assets of less than $25 million.",
        "A deceptive act was a producing cause of actual damages.",
      ]}
      defenses={[
        "The business has assets of $25 million or more.",
        "The transaction was purely for investment or financial purposes, not goods or services.",
        "The business is a sophisticated commercial entity with equal bargaining power.",
        "The claim is governed by contract terms that preclude DTPA recovery.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Is breach of contract a DTPA violation?", to: "/texas-dtpa/breach-of-contract" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
      ]}
    />
  );
}
