import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function FamilyMemberClaimPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can a family member sue under the Texas DTPA if the contract was in someone else's name?"
      directAnswer="It depends. Texas courts have recognized that a person can be a 'consumer' under the DTPA even if they are not the named party on the contract, provided they were seeking to acquire goods or services and were an intended beneficiary of the transaction. For example, a spouse or family member who was intended to use or benefit from the goods or services may have standing. However, a mere bystander or someone with no connection to the transaction typically cannot sue under the DTPA."
      rule={[
        "Tex. Bus. & Com. Code § 17.45(4) focuses on whether the person 'seeks or acquires' goods or services.",
        "Standing is not limited to the person whose name is on the contract.",
        "The claimant must have been an intended beneficiary or participant in the consumer transaction.",
        "Bystanders or those with no transactional connection generally lack standing.",
      ]}
      elements={[
        "The family member sought or was intended to acquire or use the goods or services.",
        "There was a consumer transaction between the defendant and the purchasing party.",
        "The family member was an intended beneficiary of that transaction.",
        "The family member suffered damages due to deceptive acts in connection with the transaction.",
      ]}
      defenses={[
        "The family member had no involvement in or benefit from the transaction.",
        "The family member was not an intended beneficiary of the purchase.",
        "The family member is a mere bystander with no consumer relationship.",
        "The actual purchaser's claims were settled or released.",
      ]}
      related={[
        { title: "Who qualifies as a consumer?", to: "/texas-dtpa/who-is-a-consumer" },
        { title: "Can a business bring a DTPA claim?", to: "/texas-dtpa/can-a-business-sue" },
        { title: "Can an individual sue for partial business use?", to: "/texas-dtpa/partial-business-use" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
