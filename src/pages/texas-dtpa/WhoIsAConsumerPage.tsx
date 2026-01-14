import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function WhoIsAConsumerPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Who qualifies as a 'consumer' under the Texas DTPA?"
      directAnswer="Under the Texas DTPA, a 'consumer' is an individual, partnership, corporation, or governmental entity that seeks or acquires goods or services by purchase or lease. The goods or services must form the basis of the complaint. To qualify, the claimant must have been seeking goods or services—not just money—and must have had a transaction or potential transaction with the defendant. Certain large businesses and some transactions are excluded."
      rule={[
        "Tex. Bus. & Com. Code § 17.45(4) defines 'consumer' broadly to include individuals and entities.",
        "The consumer must seek or acquire goods or services by purchase or lease.",
        "The goods or services must form the basis of the DTPA complaint.",
        "A person seeking only money damages (not goods or services) is generally not a consumer.",
      ]}
      elements={[
        "The claimant is an individual, partnership, corporation, or governmental entity.",
        "The claimant sought or acquired goods or services by purchase or lease.",
        "The goods or services form the basis of the complaint.",
        "The claimant's claim arises from a consumer transaction.",
      ]}
      defenses={[
        "The claimant did not seek or acquire goods or services from the defendant.",
        "The claimant was seeking only money, not goods or services.",
        "The claimant is a large business exceeding asset thresholds for business-consumer claims.",
        "The transaction was not a consumer transaction under the statute.",
      ]}
      related={[
        { title: "Can a business bring a DTPA claim?", to: "/texas-dtpa/can-a-business-sue" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
