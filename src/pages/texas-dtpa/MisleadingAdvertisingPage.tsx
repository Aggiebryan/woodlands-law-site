import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function MisleadingAdvertisingPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can misleading advertising violate the Texas DTPA?"
      directAnswer="Yes. Misleading advertising can violate the Texas DTPA if it contains false, misleading, or deceptive representations about goods or services and a consumer relies on those representations to their detriment. Common examples include false claims about product quality, deceptive pricing, bait-and-switch tactics, and exaggerated performance claims. The advertising need not be intentionally deceptive to create liability."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b) prohibits advertising goods or services with intent not to sell them as advertised.",
        "False representations about product characteristics, quality, or price are actionable.",
        "Bait-and-switch tactics—advertising one product to sell another—violate the DTPA.",
        "Deceptive price comparisons and false 'sale' pricing can be violations.",
      ]}
      elements={[
        "The advertising contained a false, misleading, or deceptive representation.",
        "The claimant is a consumer who sought or acquired goods or services.",
        "The consumer relied on the advertising in making a purchase decision.",
        "The misleading advertising was a producing cause of actual damages.",
      ]}
      defenses={[
        "The advertising was truthful and not misleading.",
        "The claims were mere puffery or obvious exaggeration.",
        "The consumer did not rely on the advertising.",
        "No damages resulted from the advertising.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can false verbal statements support a claim?", to: "/texas-dtpa/false-verbal-statements" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Do I have to rely on the misrepresentation?", to: "/texas-dtpa/reliance-required" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Can car dealer misrepresentations violate the DTPA?", to: "/texas-dtpa/car-dealer-misrepresentations" },
      ]}
    />
  );
}
