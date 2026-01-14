import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function HiddenFeesPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="When do hidden fees violate the Texas DTPA?"
      directAnswer="Hidden fees can violate the Texas DTPA when a business fails to disclose mandatory charges that a consumer would reasonably expect to be included in the advertised price, or when fees are added in a manner designed to deceive. The DTPA prohibits representing that goods or services have characteristics they do not have, and failing to disclose material information that the consumer needs to make an informed decision. Undisclosed fees that materially increase the cost of a transaction may constitute a deceptive act."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(5) prohibits misrepresenting the characteristics or benefits of goods or services.",
        "Section 17.46(b)(24) prohibits failing to disclose information known at the time of the transaction with intent to induce the consumer to enter into the transaction.",
        "Advertising one price while charging materially different amounts through hidden fees may constitute bait-and-switch.",
        "Fees must be disclosed in a clear and conspicuous manner before the consumer commits to the transaction.",
      ]}
      elements={[
        "The consumer was not adequately informed of the fees before agreeing to the transaction.",
        "The undisclosed fees materially affected the consumer's decision to purchase.",
        "The business knew of the fees and failed to disclose them.",
        "The consumer suffered actual damages as a result (typically the undisclosed fee amount).",
      ]}
      defenses={[
        "The fees were clearly disclosed in writing before the transaction was completed.",
        "The consumer signed documents acknowledging the fees.",
        "The fees were optional and the consumer chose to accept them.",
        "Industry practice and regulations govern the disclosure, and those requirements were met.",
      ]}
      damages={[
        "Economic damages typically include the amount of the undisclosed fees.",
        "If the conduct was knowing, treble damages may be available.",
        "Attorney's fees are recoverable for prevailing consumers.",
        "If the fee scheme affected many consumers, class action may be possible (though difficult under DTPA).",
      ]}
      related={[
        { title: "Is bait-and-switch pricing illegal under the DTPA?", to: "/texas-dtpa/bait-and-switch" },
        { title: "Can misleading financing terms trigger DTPA claims?", to: "/texas-dtpa/financing-terms-apr" },
        { title: "Does charging undisclosed fees violate the DTPA?", to: "/texas-dtpa/undisclosed-fees" },
        { title: "Can failure to disclose violate the DTPA?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Can misleading advertising violate the DTPA?", to: "/texas-dtpa/misleading-advertising" },
        { title: "What damages are available under the DTPA?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
