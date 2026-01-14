import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function WhereToFilePage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Where can a Texas DTPA lawsuit be filed?"
      directAnswer="A Texas DTPA lawsuit can be filed in a Texas district court or county court at law with jurisdiction over the amount in controversy. Venue is generally proper in the county where all or a substantial part of the events giving rise to the claim occurred, where the defendant resides, or where the defendant has its principal office. Justice courts may have jurisdiction for smaller claims."
      rule={[
        "District courts have general jurisdiction over DTPA claims regardless of amount.",
        "County courts at law may have jurisdiction depending on the amount in controversy.",
        "Justice courts may have jurisdiction for claims within their monetary limits.",
        "Venue rules under the Texas Civil Practice and Remedies Code apply.",
      ]}
      elements={[
        "The court must have subject matter jurisdiction over the claim.",
        "The amount in controversy determines which court level is appropriate.",
        "Venue must be proper under Texas venue statutes.",
        "The defendant must be subject to personal jurisdiction in Texas.",
      ]}
      defenses={[
        "The court lacks subject matter jurisdiction.",
        "Venue is improper in the chosen county.",
        "The defendant is not subject to personal jurisdiction in Texas.",
        "A mandatory forum selection clause requires filing elsewhere.",
      ]}
      related={[
        { title: "What is the statute of limitations?", to: "/texas-dtpa/statute-of-limitations" },
        { title: "Is pre-suit notice required?", to: "/texas-dtpa/pre-suit-notice" },
        { title: "What steps should a consumer take before filing?", to: "/texas-dtpa/steps-before-filing" },
        { title: "Can DTPA claims be brought as a class action?", to: "/texas-dtpa/class-actions" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
        { title: "What are common defenses?", to: "/texas-dtpa/common-defenses" },
      ]}
    />
  );
}
