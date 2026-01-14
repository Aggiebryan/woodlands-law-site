import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function PartialBusinessUsePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can an individual sue under the Texas DTPA if the purchase was partly for business use?"
      directAnswer="Yes, in many cases. Texas courts have held that a consumer does not lose DTPA protection merely because the goods or services were used partly for business purposes. The key inquiry is whether the goods or services were acquired for personal, family, or household purposes—even if there is some incidental business use. However, if the purchase was primarily or exclusively for business use, DTPA protections may be limited or unavailable, especially for larger business transactions."
      rule={[
        "Tex. Bus. & Com. Code § 17.45(4) defines 'consumer' as one who seeks or acquires goods or services by purchase or lease.",
        "Texas courts apply a 'predominant purpose' test in mixed-use situations.",
        "Incidental business use does not automatically disqualify someone from consumer status.",
        "Large business transactions may be excluded under the DTPA's business-consumer provisions.",
      ]}
      elements={[
        "The claimant sought or acquired goods or services by purchase or lease.",
        "The primary purpose of the transaction was for personal, family, or household use.",
        "The goods or services form the basis of the DTPA complaint.",
        "Any business use was incidental or secondary to the personal use.",
      ]}
      defenses={[
        "The purchase was primarily or exclusively for commercial or business purposes.",
        "The claimant is a large business entity exceeding DTPA asset thresholds.",
        "The transaction was a commercial transaction between sophisticated business parties.",
        "No consumer relationship existed between the parties.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "Can a business bring a DTPA claim?", to: "/texas-dtpa/can-a-business-sue" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Can a homeowner sue for contractor work?", to: "/texas-dtpa/homeowner-contractor" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
