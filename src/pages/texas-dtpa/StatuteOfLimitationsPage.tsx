import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function StatuteOfLimitationsPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="What is the statute of limitations for a Texas DTPA claim?"
      directAnswer="The statute of limitations for most Texas DTPA claims is two years. The limitations period begins to run when the consumer discovers or, in the exercise of reasonable diligence, should have discovered the deceptive act or practice. This 'discovery rule' can extend the time to file, but consumers should act promptly once they become aware of potential claims."
      rule={[
        "Tex. Bus. & Com. Code § 17.565 sets a two-year statute of limitations.",
        "The period runs from the date of discovery of the deceptive act, not the date of the transaction.",
        "The discovery rule applies: the clock starts when the consumer knew or should have known of the violation.",
        "Some claims may be tolled (paused) if the defendant concealed the violation.",
      ]}
      elements={[
        "The claim must be filed within two years of discovery of the deceptive act.",
        "Discovery means actual knowledge or constructive knowledge through reasonable diligence.",
        "The consumer must prove when they discovered or should have discovered the violation.",
      ]}
      defenses={[
        "The claim was filed more than two years after the consumer discovered or should have discovered the violation.",
        "The consumer had constructive knowledge earlier than claimed.",
        "No tolling applies because there was no fraudulent concealment.",
      ]}
      deadlines={[
        "Two-year statute of limitations from discovery of the deceptive act.",
        "60-day pre-suit notice must be sent before filing suit.",
        "Failure to file within limitations bars the claim entirely.",
      ]}
      related={[
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What steps should a consumer take before filing?", to: "/texas-dtpa/steps-before-filing" },
        { title: "Where can a DTPA lawsuit be filed?", to: "/texas-dtpa/where-to-file" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
      ]}
    />
  );
}
