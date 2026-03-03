import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function TrebleDamagesPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      metaTitle="Treble Damages Under the Texas DTPA | When Can You Recover 3x?"
      metaDescription="Texas DTPA allows recovery of up to three times your economic damages for intentional conduct. Learn when treble damages apply and how to prove intentional violations."
      title="When can a consumer recover treble damages under the Texas DTPA?"
      directAnswer="A consumer can recover treble damages (up to three times economic damages) under the Texas DTPA when the defendant acted intentionally. For knowing conduct (awareness that the act was deceptive), the consumer may recover up to two times economic damages. The distinction between knowing and intentional conduct affects the multiplier applied to damages."
      rule={[
        "Tex. Bus. & Com. Code § 17.50(b)(1) provides for treble damages for intentional conduct.",
        "'Knowing' means actual awareness that the conduct was deceptive.",
        "'Intentional' means specific intent to deceive or harm the consumer.",
        "The burden is on the consumer to prove the defendant's mental state.",
      ]}
      elements={[
        "The defendant committed a DTPA violation.",
        "The violation caused actual economic damages.",
        "For 2x damages: the defendant acted knowingly (with awareness of the deception).",
        "For 3x damages: the defendant acted intentionally (with intent to deceive).",
      ]}
      defenses={[
        "The defendant did not act knowingly or intentionally.",
        "The defendant reasonably believed their conduct was lawful.",
        "A reasonable settlement offer limits the consumer's recovery.",
        "The enhanced damages claim is not supported by evidence of mental state.",
      ]}
      damages={[
        "Knowing conduct: up to 2x economic damages plus mental anguish.",
        "Intentional conduct: up to 3x economic damages (treble damages).",
        "The multiplier is applied to economic damages, not mental anguish.",
        "Attorney's fees are available regardless of the multiplier.",
      ]}
      related={[
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Does intent matter for DTPA liability?", to: "/texas-dtpa/intent-required" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
