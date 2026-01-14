import AnswerFirstDtpaPageTemplate from "@/components/dtpa/AnswerFirstDtpaPageTemplate";

export default function FreeTrialAutoRenewalPage() {
  return (
    <AnswerFirstDtpaPageTemplate
      title="Can misleading 'free trial' or auto-renewal subscription terms violate the Texas DTPA?"
      directAnswer="Yes. Subscription services that advertise 'free trials' but fail to clearly disclose automatic billing, difficult cancellation procedures, or hidden charges may violate the Texas DTPA. Burying material terms in fine print, making cancellation unreasonably difficult, or charging consumers without clear consent can constitute deceptive trade practices. Texas law requires that material terms affecting consumer costs be clearly and conspicuously disclosed."
      rule={[
        "Tex. Bus. & Com. Code § 17.46(b)(9) prohibits advertising goods or services with intent not to supply them as advertised.",
        "§ 17.46(b)(24) prohibits failure to disclose information intended to induce the consumer to enter a transaction.",
        "Hidden or obscured auto-renewal terms may constitute deceptive conduct.",
        "Making cancellation unreasonably difficult can be an unconscionable practice under § 17.50(a)(3).",
      ]}
      elements={[
        "The consumer signed up for a 'free trial' or subscription service.",
        "The auto-renewal or billing terms were not clearly disclosed.",
        "The consumer was charged without adequate notice or consent.",
        "The cancellation process was unreasonably difficult or obscured.",
        "The consumer suffered damages from unauthorized or unexpected charges.",
      ]}
      defenses={[
        "The auto-renewal and billing terms were clearly and conspicuously disclosed.",
        "The consumer affirmatively agreed to the subscription terms.",
        "The consumer received adequate notice before each billing cycle.",
        "A simple, accessible cancellation process was provided.",
        "The consumer continued using the service after being charged.",
      ]}
      related={[
        { title: "Are hidden contract terms a DTPA violation?", to: "/texas-dtpa/hidden-contract-terms" },
        { title: "When do hidden fees violate the DTPA?", to: "/texas-dtpa/hidden-fees" },
        { title: "Is failure to disclose a DTPA violation?", to: "/texas-dtpa/failure-to-disclose" },
        { title: "Is bait-and-switch illegal under the DTPA?", to: "/texas-dtpa/bait-and-switch" },
        { title: "What qualifies as a deceptive act?", to: "/texas-dtpa/what-qualifies-as-deceptive" },
        { title: "What damages are available?", to: "/texas-dtpa/damages-available" },
      ]}
    />
  );
}
