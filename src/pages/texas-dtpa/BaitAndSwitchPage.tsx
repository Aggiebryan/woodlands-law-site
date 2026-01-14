import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function BaitAndSwitchPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Is bait-and-switch pricing illegal under the Texas DTPA?"
      directAnswer="Yes, bait-and-switch pricing is explicitly prohibited under the Texas DTPA. The statute specifically identifies as deceptive the practice of advertising goods or services with the intent not to sell them as advertised, or failing to disclose that the advertised item is unavailable. This includes luring customers with an attractive advertised price and then pressuring them to purchase a more expensive alternative, or adding charges that make the final price substantially higher than advertised."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(9) prohibits advertising goods or services with intent not to sell them as advertised.",
        "Section 17.46(b)(10) prohibits advertising goods or services with intent not to supply a reasonable expectable public demand.",
        "Section 17.46(b)(11) prohibits making false or misleading statements concerning the reasons for or existence of price reductions.",
        "The practice of 'drip pricing'—gradually revealing hidden fees—can constitute bait-and-switch.",
      ]}
      elements={[
        "The defendant advertised goods or services at a specific price or with specific terms.",
        "The defendant did not intend to sell the goods or services as advertised, OR the final price differed materially.",
        "The consumer relied on the advertisement in deciding to engage with the business.",
        "The consumer suffered actual damages (e.g., paid more than expected, wasted time).",
      ]}
      defenses={[
        "The advertised item was available and sold as advertised to consumers who wanted it.",
        "Any substitution was clearly disclosed and the consumer voluntarily chose the alternative.",
        "The advertisement included clear disclaimers about availability or additional charges.",
        "The price difference was due to disclosed options or upgrades selected by the consumer.",
      ]}
      damages={[
        "Economic damages include the difference between the advertised and actual price paid.",
        "Treble damages may apply if the conduct was knowing or intentional.",
        "Attorney's fees are available to prevailing consumers.",
        "In egregious cases, mental anguish damages may be recoverable.",
      ]}
      related={[
        { title: "When do hidden fees violate the DTPA?", to: "/texas-dtpa/hidden-fees" },
        { title: "Can misleading financing terms trigger DTPA claims?", to: "/texas-dtpa/financing-terms-apr" },
        { title: "Can misleading advertising violate the DTPA?", to: "/texas-dtpa/misleading-advertising" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available under the DTPA?", to: "/texas-dtpa/damages-available" },
        { title: "Can a car dealer's misrepresentations violate the DTPA?", to: "/texas-dtpa/car-dealer-misrepresentations" },
      ]}
    />
  );
}
