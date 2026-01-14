import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function IntentRequiredPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Does a business have to intend to deceive to violate the Texas DTPA?"
      directAnswer="No. The Texas DTPA does not require proof of intent to deceive for basic liability. A consumer need only prove that a false, misleading, or deceptive act occurred and was a producing cause of damages. However, proving that the defendant acted 'knowingly' or 'intentionally' allows the consumer to seek enhanced damages, including up to three times actual damages."
      rule={[
        "Basic DTPA liability does not require proof of intent, knowledge, or negligence.",
        "A consumer must prove the act was deceptive and caused damages—not that the defendant meant to deceive.",
        "Tex. Bus. & Com. Code § 17.50(b) allows treble damages only when conduct is knowing or intentional.",
        "'Knowing' means actual awareness of the falsity; 'intentional' means specific intent to deceive.",
      ]}
      elements={[
        "The claimant is a consumer under the DTPA.",
        "A false, misleading, or deceptive act occurred.",
        "The act was a producing cause of actual damages.",
        "For enhanced damages: the defendant acted knowingly or intentionally.",
      ]}
      defenses={[
        "The representation was accurate or not misleading.",
        "The defendant had no knowledge of any falsity (limits damages, not liability).",
        "The claim falls under a statutory exemption.",
        "The consumer failed to comply with pre-suit notice requirements.",
      ]}
      damages={[
        "Economic damages are available without proof of intent.",
        "Knowing conduct allows up to two times economic damages plus mental anguish.",
        "Intentional conduct allows up to three times economic damages.",
        "Attorney's fees are available to prevailing consumers.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
      ]}
    />
  );
}
