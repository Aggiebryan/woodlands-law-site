import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function CommonDefensesPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="What are common defenses to a Texas DTPA claim?"
      directAnswer="Defendants in Texas DTPA cases have several potential defenses, including that the claimant is not a 'consumer,' that no deceptive act occurred, that the claim is time-barred, that pre-suit notice was defective, that a reasonable settlement offer was rejected, or that statutory exemptions apply. The DTPA also exempts certain professionals and transactions from liability."
      rule={[
        "The claimant must qualify as a 'consumer' under § 17.45(4).",
        "Statutory exemptions exist for certain professionals (attorneys, physicians, etc.) under § 17.49.",
        "The two-year statute of limitations bars untimely claims.",
        "Failure to provide proper 60-day pre-suit notice limits recovery.",
        "Rejection of a reasonable settlement offer can limit damages and fees.",
      ]}
      elements={[
        "Standing defense: the claimant is not a consumer under the DTPA.",
        "No violation: the conduct was not false, misleading, or deceptive.",
        "Causation defense: the alleged conduct did not cause the claimed damages.",
        "Procedural defenses: statute of limitations or notice failures.",
      ]}
      defenses={[
        "The claimant does not qualify as a consumer under the DTPA.",
        "The conduct was not deceptive or was mere puffery.",
        "The claim is barred by the statute of limitations.",
        "The claimant failed to provide proper pre-suit notice.",
        "A professional or transactional exemption applies.",
        "A reasonable settlement offer was rejected and limits recovery.",
        "The claimant's own conduct caused their damages.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can an individual be personally liable?", to: "/texas-dtpa/personal-liability" },
      ]}
    />
  );
}
