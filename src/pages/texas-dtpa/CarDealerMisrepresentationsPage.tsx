import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function CarDealerMisrepresentationsPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a car dealer's misrepresentations violate the Texas DTPA?"
      directAnswer="Yes. Car dealers who make false representations about a vehicle's history, condition, mileage, or features can violate the Texas DTPA. Common violations include failing to disclose prior accidents, salvage titles, or flood damage; misrepresenting mileage or vehicle history; and making false claims about warranties or financing terms. Texas law provides strong consumer protections in automobile sales."
      rule={[
        "False representations about a vehicle's characteristics, history, or condition violate § 17.46(b).",
        "Failing to disclose known defects, prior damage, or salvage status is actionable under § 17.46(b)(24).",
        "Odometer tampering or misrepresentation is a separate violation under state and federal law.",
        "Bait-and-switch tactics in advertising vehicles are specifically prohibited.",
      ]}
      elements={[
        "The dealer made false representations about the vehicle's condition, history, or features.",
        "Alternatively, the dealer failed to disclose known material information.",
        "The buyer is a consumer who purchased or leased the vehicle.",
        "The misrepresentation or non-disclosure was a producing cause of actual damages.",
      ]}
      defenses={[
        "The dealer disclosed all known material information.",
        "The buyer had the opportunity to inspect the vehicle and discover the issue.",
        "The representation was accurate based on information available to the dealer.",
        "The claim is barred by the statute of limitations or as-is disclaimers.",
      ]}
      damages={[
        "The difference between the value as represented and actual value.",
        "Cost of repairs for undisclosed defects.",
        "Treble damages for knowing or intentional violations.",
        "Attorney's fees for prevailing consumers.",
      ]}
      related={[
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Can misleading advertising violate the DTPA?", to: "/texas-dtpa/misleading-advertising" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
      ]}
    />
  );
}
