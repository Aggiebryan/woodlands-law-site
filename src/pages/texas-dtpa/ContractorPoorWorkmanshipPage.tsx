import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function ContractorPoorWorkmanshipPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a contractor's poor workmanship support a Texas DTPA claim?"
      directAnswer="Poor workmanship alone is typically not sufficient to support a DTPA claim—it is usually just a breach of contract. However, if the contractor made false representations about their qualifications, the materials they would use, or the quality of work to be performed, those misrepresentations may support a DTPA claim. Additionally, if the contractor knew the work was defective and concealed it, this could constitute a failure to disclose."
      rule={[
        "Mere poor workmanship or breach of contract is not automatically a DTPA violation.",
        "False representations about qualifications, materials, or work quality can be actionable.",
        "Failing to disclose known defects in completed work may violate § 17.46(b)(24).",
        "The Residential Construction Liability Act (RCLA) may apply to residential construction claims and has its own notice requirements.",
      ]}
      elements={[
        "The contractor made false representations about qualifications, materials, or expected work quality.",
        "Alternatively, the contractor knew of defects and failed to disclose them.",
        "The claimant is a consumer who sought construction services.",
        "The misrepresentation or non-disclosure was a producing cause of actual damages.",
      ]}
      defenses={[
        "The claim is solely for poor workmanship with no separate deceptive act.",
        "The contractor made no false representations about the work.",
        "The homeowner was aware of the work quality before final payment.",
        "The claim should be brought under the RCLA, not the DTPA.",
      ]}
      deadlines={[
        "RCLA requires 60 days' written notice before filing suit for residential construction defects.",
        "DTPA has a separate 60-day pre-suit notice requirement.",
        "The statute of limitations is generally two years from discovery.",
      ]}
      related={[
        { title: "Is breach of contract a DTPA violation?", to: "/texas-dtpa/breach-of-contract" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
