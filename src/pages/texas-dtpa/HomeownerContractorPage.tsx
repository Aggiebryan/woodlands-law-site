import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function HomeownerContractorPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a homeowner sue under the Texas DTPA for contractor or repair work?"
      directAnswer="Yes. Homeowners who hire contractors for construction, renovation, or repair work are typically considered 'consumers' under the Texas DTPA. If the contractor engaged in false, misleading, or deceptive acts—such as misrepresenting the scope of work, quality of materials, licensing status, or failing to disclose material defects—the homeowner may have a valid DTPA claim. However, the Texas Residential Construction Liability Act (RCLA) also applies to residential construction defects and has specific notice requirements that must be followed."
      rule={[
        "Homeowners seeking construction or repair services qualify as consumers under Tex. Bus. & Com. Code § 17.45(4).",
        "Contractors can be liable for misrepresentations about work quality, materials, licensing, or completion.",
        "The Texas RCLA (Chapter 27, Property Code) provides additional procedures for residential construction defects.",
        "Both DTPA and RCLA claims may apply, but RCLA notice requirements must be satisfied first.",
      ]}
      elements={[
        "The homeowner sought or acquired contractor services for their residence.",
        "The contractor made false, misleading, or deceptive representations.",
        "The homeowner relied on the contractor's representations.",
        "The homeowner suffered damages as a result of the deceptive conduct.",
      ]}
      defenses={[
        "The homeowner failed to provide proper RCLA notice before filing suit.",
        "The contractor made no actionable misrepresentations.",
        "The work was performed as promised; disputes are merely over quality or preference.",
        "The homeowner did not rely on any alleged misrepresentation.",
        "The statute of limitations has expired.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "Can contractor poor workmanship support a DTPA claim?", to: "/texas-dtpa/contractor-poor-workmanship" },
        { title: "Is failure to disclose a DTPA violation?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
      ]}
    />
  );
}
