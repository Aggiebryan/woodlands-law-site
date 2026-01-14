import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function StepsBeforeFilingPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="What steps should a consumer take before filing a Texas DTPA claim?"
      directAnswer="Before filing a Texas DTPA claim, consumers should: (1) determine if they qualify as a 'consumer' under the statute; (2) identify the specific deceptive act and gather supporting evidence; (3) calculate actual economic damages; (4) send the required 60-day pre-suit notice to the defendant; and (5) evaluate any settlement offer received. Failure to follow these steps can limit recovery or result in dismissal."
      rule={[
        "Consumer status must be established before bringing a DTPA claim.",
        "Evidence of the deceptive act and damages should be preserved.",
        "The 60-day pre-suit notice is mandatory under § 17.505.",
        "The notice must describe the complaint and damages in reasonable detail.",
        "The defendant's settlement offer must be evaluated before filing suit.",
      ]}
      elements={[
        "Confirm consumer status: sought or acquired goods or services.",
        "Identify the deceptive act or practice.",
        "Gather evidence: contracts, communications, receipts, photos.",
        "Calculate actual economic damages.",
        "Draft and send the 60-day pre-suit notice.",
        "Evaluate any settlement offer from the defendant.",
      ]}
      defenses={[
        "The consumer did not properly preserve evidence.",
        "The pre-suit notice was defective or untimely.",
        "The consumer rejected a reasonable settlement offer.",
        "The claim was filed before the 60-day period expired.",
      ]}
      deadlines={[
        "Send pre-suit notice at least 60 days before filing.",
        "File within the two-year statute of limitations.",
        "Respond to settlement offers within the notice period.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Where can a DTPA lawsuit be filed?", to: "/texas-dtpa/where-to-file" },
      ]}
    />
  );
}
