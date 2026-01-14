import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function SettlementOfferEffectPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="How does a settlement offer affect a Texas DTPA claim?"
      directAnswer="Settlement offers have significant effects on Texas DTPA claims. If a defendant makes a written settlement offer during the 60-day pre-suit notice period and the consumer rejects it, the consumer's damages may be limited if they recover less at trial than the offer. A reasonable settlement offer that is rejected can reduce or eliminate the consumer's recovery of enhanced damages and attorney's fees."
      rule={[
        "Tex. Bus. & Com. Code § 17.5052 governs settlement offers and their effects.",
        "A defendant may make a settlement offer within 60 days of receiving the pre-suit notice.",
        "If the consumer rejects the offer and recovers less at trial, recovery may be limited.",
        "The offer must be in writing and include specific amounts for each type of damages.",
      ]}
      elements={[
        "The defendant made a written settlement offer.",
        "The offer was made within the required timeframe.",
        "The consumer rejected the offer.",
        "The consumer recovered the same or less at trial than the rejected offer.",
      ]}
      defenses={[
        "The consumer rejected a reasonable settlement offer and recovered less at trial.",
        "The settlement offer was reasonable and made in good faith.",
        "The consumer's rejection of the offer limits their fee recovery.",
      ]}
      deadlines={[
        "Settlement offer must be made within 60 days of receiving pre-suit notice.",
        "The consumer must respond to the offer before the deadline expires.",
        "Failure to respond to an offer may be treated as rejection.",
      ]}
      related={[
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What steps should a consumer take before filing?", to: "/texas-dtpa/steps-before-filing" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
      ]}
    />
  );
}
