import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function AttorneysFeesPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a prevailing consumer recover attorney's fees under the Texas DTPA?"
      directAnswer="Yes. Under the Texas DTPA, a prevailing consumer is entitled to recover reasonable and necessary attorney's fees. This fee-shifting provision is one of the DTPA's most important features, as it allows consumers to pursue claims that might otherwise be too expensive to litigate. However, if a consumer rejects a reasonable settlement offer and recovers less at trial, the fee award may be reduced."
      rule={[
        "Tex. Bus. & Com. Code § 17.50(d) mandates attorney's fees for prevailing consumers.",
        "Fees must be 'reasonable and necessary' based on the work performed.",
        "Rejecting a reasonable settlement offer can reduce or eliminate fee recovery.",
        "The prevailing defendant may also recover fees if the claim was groundless, brought in bad faith, or for harassment.",
      ]}
      elements={[
        "The consumer prevails on at least one DTPA claim.",
        "The attorney's fees claimed are reasonable and necessary.",
        "The work performed was related to the DTPA claim.",
        "The consumer did not reject a more favorable settlement offer.",
      ]}
      defenses={[
        "The consumer did not prevail on any DTPA claim.",
        "The fees claimed are unreasonable or unnecessary.",
        "The consumer rejected a reasonable settlement offer.",
        "The claim was groundless, entitling the defendant to fees.",
      ]}
      damages={[
        "Reasonable and necessary attorney's fees for prevailing consumers.",
        "Fees may be reduced if a reasonable settlement offer was rejected.",
        "Appellate attorney's fees may also be recoverable.",
        "Court costs are separately recoverable.",
      ]}
      related={[
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "When can a consumer recover treble damages?", to: "/texas-dtpa/treble-damages" },
        { title: "How does a settlement offer affect a claim?", to: "/texas-dtpa/settlement-offer-effect" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "What steps should a consumer take before filing?", to: "/texas-dtpa/steps-before-filing" },
      ]}
    />
  );
}
