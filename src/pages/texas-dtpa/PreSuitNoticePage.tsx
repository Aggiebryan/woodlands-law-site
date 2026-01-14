import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function PreSuitNoticePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Is pre-suit notice required before filing a Texas DTPA lawsuit?"
      directAnswer="Yes. Before filing a DTPA lawsuit, the consumer must send written notice to the defendant at least 60 days before filing. The notice must describe the specific complaint in reasonable detail and state the amount of economic damages, mental anguish damages, and attorney's fees claimed. Failure to provide proper notice can limit the damages recoverable and may result in abatement of the lawsuit."
      rule={[
        "Tex. Bus. & Com. Code § 17.505 requires 60-day written pre-suit notice.",
        "The notice must be sent at least 60 days before filing the lawsuit.",
        "The notice must describe the complaint and damages in reasonable detail.",
        "The defendant has 60 days to inspect, offer to cure, or make a settlement offer.",
      ]}
      elements={[
        "Written notice must be provided to the defendant.",
        "The notice must be sent at least 60 days before filing suit.",
        "The notice must describe the specific complaint and damages sought.",
        "The consumer must allow the defendant to respond before filing.",
      ]}
      defenses={[
        "The consumer failed to provide the required 60-day pre-suit notice.",
        "The notice did not adequately describe the complaint or damages.",
        "The lawsuit was filed before the 60-day period expired.",
        "The defendant made a reasonable settlement offer that was rejected.",
      ]}
      deadlines={[
        "60-day notice must be sent before filing suit.",
        "The defendant has 60 days to respond with a settlement offer.",
        "The statute of limitations is tolled during the notice period in certain circumstances.",
      ]}
      related={[
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "What steps should a consumer take before filing?", to: "/texas-dtpa/steps-before-filing" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
