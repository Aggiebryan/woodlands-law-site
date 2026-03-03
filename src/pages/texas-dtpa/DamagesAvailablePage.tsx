import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function DamagesAvailablePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      metaTitle="What Damages Can You Recover Under the Texas DTPA?"
      metaDescription="Learn about economic damages, mental anguish damages, and treble damages available to consumers under the Texas Deceptive Trade Practices Act (DTPA § 17.50)."
      title="What damages are available under the Texas DTPA?"
      directAnswer="Consumers who prevail on a DTPA claim can recover economic damages (actual out-of-pocket losses). If the defendant acted knowingly, the consumer may recover up to two times economic damages plus mental anguish damages. If the defendant acted intentionally, the consumer may recover up to three times economic damages. Prevailing consumers are also entitled to reasonable and necessary attorney's fees."
      rule={[
        "Tex. Bus. & Com. Code § 17.50(b) provides the damage framework.",
        "Economic damages are the baseline recovery for any DTPA violation.",
        "Knowing conduct allows up to 2x economic damages plus mental anguish.",
        "Intentional conduct allows up to 3x economic damages (treble damages).",
        "Attorney's fees are mandatory for prevailing consumers under § 17.50(d).",
      ]}
      elements={[
        "Proof of actual economic damages caused by the violation.",
        "For enhanced damages: proof that defendant acted knowingly or intentionally.",
        "For mental anguish: proof of knowing conduct plus compensable mental anguish.",
        "Reasonable and necessary attorney's fees incurred.",
      ]}
      defenses={[
        "The consumer suffered no actual economic damages.",
        "The damages claimed are speculative or not caused by the violation.",
        "The defendant did not act knowingly or intentionally (limits enhanced damages).",
        "A reasonable settlement offer was made and rejected, limiting recovery.",
      ]}
      damages={[
        "Economic damages: actual out-of-pocket losses.",
        "Mental anguish damages: available with proof of knowing conduct.",
        "Additional damages: up to 2x for knowing, up to 3x for intentional conduct.",
        "Attorney's fees: mandatory for prevailing consumers.",
        "Court costs: recoverable by prevailing party.",
      ]}
      related={[
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
        { title: "Does intent matter for DTPA liability?", to: "/texas-dtpa/intent-required" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
      ]}
    />
  );
}
