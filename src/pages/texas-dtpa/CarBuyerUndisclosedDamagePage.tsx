import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function CarBuyerUndisclosedDamagePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a car buyer sue under the Texas DTPA for undisclosed vehicle damage or history?"
      directAnswer="Yes. Texas law requires dealers to disclose material facts about a vehicle's condition and history. If a dealer fails to disclose prior accident damage, flood damage, salvage title status, odometer rollback, or other material defects—or affirmatively misrepresents the vehicle's condition—a car buyer may have a valid DTPA claim. The failure to disclose known material facts that would affect the buyer's decision is a classic DTPA violation."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(24) prohibits failure to disclose material information known to the seller.",
        "Sellers must disclose known defects that would affect the buyer's decision.",
        "Affirmative misrepresentations about vehicle condition violate § 17.46(b)(5) and (7).",
        "Odometer fraud is separately actionable under federal and state law.",
      ]}
      elements={[
        "The buyer purchased or leased a vehicle from the seller.",
        "The seller knew of material damage, defects, or history issues.",
        "The seller failed to disclose or affirmatively misrepresented the vehicle's condition.",
        "The buyer relied on the seller's representations or non-disclosures.",
        "The buyer suffered damages as a result.",
      ]}
      defenses={[
        "The seller had no knowledge of the undisclosed damage or defect.",
        "The buyer was informed of the vehicle's history or condition before purchase.",
        "The buyer purchased the vehicle 'as-is' with proper disclosure (though 'as-is' has limits).",
        "The buyer failed to conduct reasonable inspection or relied on their own investigation.",
        "The alleged defect was not material to the transaction.",
      ]}
      related={[
        { title: "Can car dealers violate the DTPA?", to: "/texas-dtpa/car-dealer-misrepresentations" },
        { title: "Is failure to disclose a DTPA violation?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Does an 'as-is' clause waive DTPA liability?", to: "/texas-dtpa/as-is-clause" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
      ]}
    />
  );
}
