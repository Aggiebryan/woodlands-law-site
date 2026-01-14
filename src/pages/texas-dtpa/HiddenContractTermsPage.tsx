import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function HiddenContractTermsPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can hidden contract terms support a Texas DTPA claim?"
      directAnswer="Yes. Hidden contract terms can support a Texas DTPA claim if they constitute an unconscionable action or a failure to disclose material information. This includes burying important terms in fine print, using confusing language to obscure fees or limitations, or failing to draw attention to terms that materially affect the consumer's rights. However, not every unfavorable contract term is actionable—the term must be hidden in a way that deceives the consumer."
      rule={[
        "Tex. Bus. & Com. Code § 17.45(5) defines unconscionable action as an act that takes advantage of a consumer's lack of knowledge or ability.",
        "Failing to disclose material contract terms can violate § 17.46(b)(24).",
        "Consumers have a duty to read contracts, but deliberately obscured terms may still be actionable.",
        "Courts consider whether the term was conspicuously disclosed and whether a reasonable consumer would understand it.",
      ]}
      elements={[
        "The contract contained a material term that was hidden or obscured.",
        "The consumer was not reasonably aware of the term before entering the contract.",
        "The hidden term took unfair advantage of the consumer's lack of knowledge.",
        "The consumer suffered actual damages as a result.",
      ]}
      defenses={[
        "The term was conspicuously disclosed in the contract.",
        "The consumer had an opportunity to read and understand the contract.",
        "The term is not material to the transaction.",
        "The consumer suffered no damages from the term.",
      ]}
      related={[
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Does charging undisclosed fees violate the DTPA?", to: "/texas-dtpa/undisclosed-fees" },
        { title: "Is breach of contract a DTPA violation?", to: "/texas-dtpa/breach-of-contract" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
