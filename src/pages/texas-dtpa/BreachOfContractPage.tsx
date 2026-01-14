import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function BreachOfContractPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Is a breach of contract automatically a Texas DTPA violation?"
      directAnswer="No. A simple breach of contract is not automatically a violation of the Texas DTPA. The DTPA requires a false, misleading, or deceptive act, an unconscionable action, or a breach of warranty—not merely a failure to perform contractual obligations. However, if a party made false representations to induce the contract or never intended to perform, those acts may separately violate the DTPA."
      rule={[
        "The DTPA does not create a cause of action for breach of contract alone.",
        "There must be a separate deceptive act, unconscionable conduct, or warranty breach.",
        "Breach of an express warranty made part of the basis of the bargain can be actionable under the DTPA.",
        "False representations made to induce the contract are distinct from later non-performance.",
      ]}
      elements={[
        "The defendant made a false representation or engaged in deceptive conduct beyond mere non-performance.",
        "The deceptive act was separate from the breach of contract.",
        "The claimant is a consumer under the DTPA.",
        "The deceptive act was a producing cause of actual damages.",
      ]}
      defenses={[
        "The claim is solely for breach of contract with no separate deceptive act.",
        "No false representations were made during contract formation.",
        "The defendant intended to perform but failed due to circumstances beyond their control.",
        "The claim is barred by the statute of limitations.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can hidden contract terms support a claim?", to: "/texas-dtpa/hidden-contract-terms" },
        { title: "Do I have to rely on the misrepresentation?", to: "/texas-dtpa/reliance-required" },
        { title: "Can a contractor's poor workmanship support a claim?", to: "/texas-dtpa/contractor-poor-workmanship" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
