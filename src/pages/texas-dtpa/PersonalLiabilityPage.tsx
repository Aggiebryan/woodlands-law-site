import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function PersonalLiabilityPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can an individual be personally liable under the Texas DTPA?"
      directAnswer="Yes. Individuals can be personally liable under the Texas DTPA if they personally participated in the deceptive conduct. Corporate officers, employees, or agents who commit or authorize deceptive acts may be held individually liable alongside the business entity. The corporate form does not shield individuals from liability for their own tortious conduct."
      rule={[
        "The DTPA imposes liability on any person who commits a deceptive act.",
        "Corporate officers and employees may be personally liable for their own deceptive conduct.",
        "Personal participation in the violation is required for individual liability.",
        "The corporate veil does not protect individuals from their own tortious acts.",
      ]}
      elements={[
        "The individual personally participated in or authorized the deceptive conduct.",
        "The conduct constitutes a DTPA violation.",
        "The claimant is a consumer under the DTPA.",
        "The individual's conduct was a producing cause of damages.",
      ]}
      defenses={[
        "The individual did not personally participate in the alleged conduct.",
        "The individual was merely an employee following company policy.",
        "The individual had no knowledge of the deceptive nature of the conduct.",
        "The alleged conduct does not constitute a DTPA violation.",
      ]}
      related={[
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "Does intent matter for DTPA liability?", to: "/texas-dtpa/intent-required" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
        { title: "Can a business bring a DTPA claim?", to: "/texas-dtpa/can-a-business-sue" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "Where can a DTPA lawsuit be filed?", to: "/texas-dtpa/where-to-file" },
      ]}
    />
  );
}
