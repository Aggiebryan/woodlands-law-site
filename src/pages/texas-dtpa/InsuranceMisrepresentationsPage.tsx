import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function InsuranceMisrepresentationsPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can insurance claim misrepresentations violate the Texas DTPA?"
      directAnswer="Yes. The Texas DTPA incorporates violations of the Texas Insurance Code as actionable conduct. When an insurance company misrepresents coverage, denies a valid claim without proper investigation, or engages in unfair claims practices, policyholders may bring a DTPA claim. The Texas Insurance Code's unfair settlement practices are 'tie-in' statutes that allow consumers to pursue DTPA remedies, including treble damages for knowing violations."
      rule={[
        "Tex. Bus. & Com. Code § 17.50(a)(4) allows claims based on Insurance Code violations.",
        "Texas Insurance Code Chapter 541 prohibits unfair methods of competition and unfair practices.",
        "Misrepresenting policy provisions, coverage, or benefits is specifically prohibited.",
        "Failing to promptly investigate claims or offer fair settlements can be actionable.",
      ]}
      elements={[
        "The insurance company engaged in unfair claims practices or misrepresentations.",
        "The conduct violates the Texas Insurance Code.",
        "The claimant is a consumer (policyholder) under the DTPA.",
        "The violation was a producing cause of actual damages.",
      ]}
      defenses={[
        "The claim denial was based on a legitimate policy exclusion or coverage dispute.",
        "The insurer conducted a reasonable investigation before denying the claim.",
        "The alleged misrepresentation was accurate under the policy terms.",
        "The consumer failed to comply with policy conditions.",
      ]}
      damages={[
        "Economic damages for the claim amount wrongfully denied.",
        "Treble damages for knowing Insurance Code violations.",
        "Mental anguish damages in appropriate cases.",
        "Attorney's fees for prevailing consumers.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "Can attorney's fees be recovered?", to: "/texas-dtpa/attorneys-fees" },
      ]}
    />
  );
}
