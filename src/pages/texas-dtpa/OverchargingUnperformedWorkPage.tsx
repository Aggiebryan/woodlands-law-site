import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function OverchargingUnperformedWorkPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can service providers violate the Texas DTPA by overcharging or billing for unperformed work?"
      directAnswer="Yes. Billing for services not actually performed, charging for parts not installed, or significantly overcharging beyond the agreed price can constitute deceptive trade practices under Texas law. These practices may violate DTPA provisions prohibiting false or misleading statements, failure to disclose material information, and unconscionable conduct. Intentional overbilling schemes may also support claims for additional damages."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(5) prohibits misrepresenting the characteristics of goods or services.",
        "Charging for services not performed is a misrepresentation of what was provided.",
        "§ 17.50(a)(3) allows claims for unconscionable actions that take advantage of consumers.",
        "Intentional or knowing conduct can trigger additional damages under § 17.50(b).",
      ]}
      elements={[
        "The consumer hired the service provider for goods or services.",
        "The service provider billed for work not performed or parts not installed.",
        "The billing was false, misleading, or unconscionable.",
        "The consumer paid the inflated or fraudulent charges.",
        "The consumer suffered economic damages as a result.",
      ]}
      defenses={[
        "All billed services were actually performed and properly documented.",
        "Any billing discrepancies were honest mistakes promptly corrected.",
        "The consumer agreed to the charges in advance.",
        "The charges were reasonable and customary for the services rendered.",
        "The consumer failed to dispute the charges within a reasonable time.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can contractor poor workmanship support a DTPA claim?", to: "/texas-dtpa/contractor-poor-workmanship" },
        { title: "When do hidden fees violate the DTPA?", to: "/texas-dtpa/hidden-fees" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "When are treble damages available?", to: "/texas-dtpa/treble-damages" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
