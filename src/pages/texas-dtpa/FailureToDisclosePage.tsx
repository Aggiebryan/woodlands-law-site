import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function FailureToDisclosePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a business violate the Texas DTPA by failing to disclose material information?"
      directAnswer="Yes. Under the Texas DTPA, a business can be liable for failing to disclose information that a consumer would consider material to their transaction. This includes known defects, prior damage, hidden fees, or other facts that would influence a reasonable consumer's decision. The failure to disclose must be material, meaning it would likely affect the consumer's choice to purchase or the price they would pay."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(24) prohibits failing to disclose information known at the time of the transaction.",
        "The information must be known to the seller and intended to induce the consumer to enter a transaction.",
        "Non-disclosure is actionable when the consumer would not have entered the transaction if they had known.",
        "There is no general duty to disclose; the duty arises when information is material and the seller has superior knowledge.",
      ]}
      elements={[
        "The defendant knew material information at the time of the transaction.",
        "The defendant failed to disclose that information to the consumer.",
        "The non-disclosure was intended to induce the consumer to enter the transaction.",
        "The consumer suffered actual damages as a result.",
      ]}
      defenses={[
        "The information was disclosed or readily available to the consumer.",
        "The information was not material to the transaction.",
        "The defendant did not know the information at the time of the transaction.",
        "The consumer would have entered the transaction regardless of disclosure.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Can hidden contract terms support a claim?", to: "/texas-dtpa/hidden-contract-terms" },
        { title: "Does charging undisclosed fees violate the DTPA?", to: "/texas-dtpa/undisclosed-fees" },
        { title: "Can a contractor's poor workmanship support a claim?", to: "/texas-dtpa/contractor-poor-workmanship" },
        { title: "Can car dealer misrepresentations violate the DTPA?", to: "/texas-dtpa/car-dealer-misrepresentations" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
