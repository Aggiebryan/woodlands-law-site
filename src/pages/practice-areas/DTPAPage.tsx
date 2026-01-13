import { useEffect, useState } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import DTPAViolationList from "@/components/DTPAViolationList";
import DTPATestimonials from "@/components/DTPATestimonials";
import TexasDTPAInfo from "@/components/TexasDTPAInfo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DTPAConsultationForm from "@/components/dtpa/DTPAConsultationForm";

const DTPAPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const caseTypes = [
    {
      title: "False Advertising Claims",
      description: "Misrepresentations about product or service characteristics",
    },
    {
      title: "Misleading Business Practices",
      description: "Deceptive tactics that influence consumer decisions",
    },
    {
      title: "Unfair Competition",
      description: "Business practices that harm consumers and competitors",
    },
    {
      title: "DTPA Violations",
      description: "Actions prohibited under the statutory 'laundry list'",
    },
    {
      title: "Warranty Violations",
      description: "Breach of express or implied product/service warranties",
    },
    {
      title: "Consumer Protection",
      description: "General rights enforcement under Texas consumer laws",
    },
    {
      title: "Misrepresentation Cases",
      description: "False statements about goods, services, or transactions",
    },
    {
      title: "Statutory Damages Recovery",
      description: "Pursuing treble damages and attorney's fees",
    },
  ];

  const whyChooseUs = [
    "Specialized knowledge of Texas DTPA laws and regulations",
    "Experience representing both consumers and businesses",
    "Ability to recover statutory damages and attorney fees",
    "Track record of successful DTPA claims and defenses",
    "Focus on efficient resolution while maximizing recovery",
    "Clear communication throughout complex legal processes",
    "Deep understanding of DTPA tie-in statutes and related laws",
    "Strategic approach to pre-suit notices and negotiations",
  ];

  const process = {
    title: "Our DTPA Case Process",
    steps: [
      "Initial Case Evaluation & Merit Assessment",
      "Evidence Collection & Documentation",
      "Pre-suit Demand Letter Preparation",
      "Strategic Negotiation with Opposing Parties",
      "Filing of Formal DTPA Claims if Necessary",
      "Litigation & Comprehensive Discovery",
      "Resolution through Settlement or Trial",
    ],
  };

  const faq = [
    {
      question: "What deceptive practices are covered under the Texas DTPA?",
      answer:
        "The Texas DTPA covers a wide range of deceptive practices, including false, misleading, or deceptive acts; unconscionable actions; breaches of warranty; insurance code violations; and certain tie-in statutes. Common examples include false advertising, bait-and-switch tactics, misrepresentations about products or services, and failing to disclose material information. The statute contains a 'laundry list' of specifically prohibited acts, but also includes broader provisions to address other deceptive practices.",
    },
    {
      question: "What damages can I recover in a DTPA case?",
      answer:
        "Under the DTPA, consumers may recover economic damages (actual losses), and in cases involving knowing or intentional conduct, up to three times those damages (treble damages). The statute also allows for recovery of court costs and reasonable attorney's fees for prevailing consumers. In cases involving mental anguish, those damages may be recoverable if the conduct was committed knowingly. Additionally, the court may issue injunctions to stop the deceptive practices.",
    },
    {
      question: "How long do I have to file a DTPA claim in Texas?",
      answer:
        "The statute of limitations for most DTPA claims in Texas is two years from the date you discovered or should have discovered the deceptive act or practice. There is also a separate provision requiring that the action be brought within two years after the consumer discovered or should have discovered the occurrence of the false, misleading, or deceptive act or practice. Additionally, the DTPA has a specific notice requirement - you must provide written notice to the defendant at least 60 days before filing suit, giving them an opportunity to settle.",
    },
    {
      question: "Can businesses sue under the Texas DTPA?",
      answer:
        "While the DTPA was primarily designed to protect individual consumers, certain businesses can qualify as 'consumers' under the statute if they meet specific criteria. Generally, a business can be a consumer if it has assets of less than $25 million and sought or acquired goods or services by purchase or lease. There are exceptions and limitations to business claims, making it important to consult with an attorney experienced in DTPA matters to determine eligibility.",
    },
    {
      question: "What is the pre-suit notice requirement for DTPA claims?",
      answer:
        "The DTPA requires that at least 60 days before filing a lawsuit, the consumer must provide written notice to the potential defendant. This notice must describe the specific complaint in reasonable detail and the amount of economic damages, damages for mental anguish, and attorney's fees being sought. The defendant then has an opportunity to settle by making a written settlement offer. This requirement is designed to encourage pre-suit settlements, and failure to comply can limit the damages recoverable.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Texas Deceptive Trade Practices Act Attorneys | The Woodlands Law Firm</title>
        <meta
          name="description"
          content="Experienced DTPA attorneys protecting consumers and businesses against deceptive, misleading, and fraudulent business practices in The Woodlands and throughout Texas."
        />
        {/* Schema markup for attorney services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "The Woodlands Law Firm - DTPA",
              "description": "Texas Deceptive Trade Practices Act attorneys protecting consumers and businesses against deceptive and fraudulent practices.",
              "areaServed": ["The Woodlands", "Houston", "Montgomery County", "Harris County", "Texas"],
              "serviceType": "Consumer Protection Law",
              "telephone": "+1-281-771-0611",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "21 Waterway Avenue, Suite 300",
                "addressLocality": "The Woodlands",
                "addressRegion": "TX",
                "postalCode": "77380",
                "addressCountry": "US"
              }
            }
          `}
        </script>
      </Helmet>

      <PracticeAreaHero
        title="Texas Deceptive Trade Practices Act Attorneys"
        subtitle="Protecting Consumers & Businesses in The Woodlands"
        description={
          <>
            <p>
              The Texas Deceptive Trade Practices–Consumer Protection Act allows consumers to recover damages for false,
              misleading, or deceptive business practices. The statute applies to a wide range of transactions,
              including insurance claims, construction services, automobile sales, and consumer purchases. In cases
              involving knowing or intentional conduct, Texas law allows enhanced damages and recovery of attorney’s
              fees.
            </p>
            <p>
              We help consumers and businesses fight back against deceptive, misleading, and fraudulent business
              practices. Our attorneys have extensive experience with Texas DTPA cases and know how to effectively
              pursue or defend these specialized claims.
            </p>
          </>
        }
        image="/lawlibrary.webp"
        ctaText="Discuss Your DTPA Claim With Us"
        onCtaClick={handleOpenForm}
      />

      <PracticeAreaContent
        overview={`The Texas Deceptive Trade Practices–Consumer Protection Act (DTPA) is a consumer protection statute that allows qualifying consumers to recover damages for false, misleading, or deceptive business practices committed in the course of trade or commerce. The statute applies to a wide range of transactions, including consumer purchases, service contracts, insurance claims, construction projects, and automobile sales. A DTPA claim may arise from affirmative misrepresentations, misleading advertising, failures to disclose material information, breaches of warranty, or other deceptive conduct identified by Texas law. To bring a DTPA claim, a claimant must generally qualify as a "consumer" under the statute and show that a deceptive act was a producing cause of economic damages. Intent to deceive is not required to establish liability, although a defendant's knowledge or intent may affect the damages available. In cases involving knowing or intentional conduct, Texas law permits enhanced damages and recovery of reasonable attorney's fees, making the DTPA a powerful enforcement tool for consumer rights. The DTPA also imposes specific procedural requirements, including mandatory pre-suit notice and strict limitations periods. Businesses accused of DTPA violations may raise statutory defenses, exemptions, or settlement offers that can limit or eliminate liability. Because DTPA claims are technical and fact-dependent, proper evaluation of eligibility, notice compliance, damages, and defenses is critical. The sections below provide Texas-specific answers to common questions about how the DTPA works, who can bring a claim, what conduct is prohibited, what damages may be recovered, and how these cases are prosecuted and defended under Texas law.`}
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
        afterOverview={
          <section className="mb-16">
            <h2 className="text-3xl font-serif text-law-purple mb-4">Texas DTPA Resource Center</h2>
            <div className="gold-underline mb-6"></div>
            <p className="text-gray-600 max-w-4xl mb-10">
              The Texas DTPA contains detailed rules governing deceptive conduct, who qualifies as a consumer, available damages, deadlines, and defenses. The following resources provide Texas-specific answers to common DTPA questions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Deceptive Conduct */}
              <div>
                <h3 className="text-xl font-serif text-law-purple mb-4 border-b border-law-gold pb-2">Deceptive Conduct</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/texas-dtpa/deceptive-acts" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      What qualifies as a deceptive act under the Texas DTPA
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/false-verbal-statements" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Can false verbal statements support a DTPA claim?
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/failure-to-disclose" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Can failure to disclose information violate the Texas DTPA?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Who Can Sue */}
              <div>
                <h3 className="text-xl font-serif text-law-purple mb-4 border-b border-law-gold pb-2">Who Can Sue</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/texas-dtpa/consumer-definition" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Who qualifies as a consumer under the Texas DTPA?
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/business-claims" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Can a business bring a Texas DTPA claim?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Damages & Deadlines */}
              <div>
                <h3 className="text-xl font-serif text-law-purple mb-4 border-b border-law-gold pb-2">Damages & Deadlines</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to="/texas-dtpa/damages" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      What damages are available under the Texas DTPA?
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/treble-damages" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      When are treble damages available?
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/statute-of-limitations" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      What is the statute of limitations for a DTPA claim?
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/pre-suit-notice" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Is pre-suit notice required?
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Industry-Specific Claims */}
              <div className="lg:col-span-3 md:col-span-2">
                <h3 className="text-xl font-serif text-law-purple mb-4 border-b border-law-gold pb-2">Industry-Specific Claims</h3>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <li>
                    <Link to="/texas-dtpa/insurance-misrepresentations" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Insurance misrepresentations and the Texas DTPA
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/contractor-misconduct" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Contractor misconduct and poor workmanship
                    </Link>
                  </li>
                  <li>
                    <Link to="/texas-dtpa/car-dealer-misrepresentations" className="text-gray-700 hover:text-law-purple hover:underline transition-colors">
                      Car dealer misrepresentations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        }
      />

      <DTPAViolationList />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Industry-Specific DTPA Applications</h2>
          <div className="gold-underline mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Home Construction & Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We handle cases involving construction defects, contractor fraud, material misrepresentations,
                  warranty breaches, and failure to perform services as promised in home building and renovation
                  projects.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automobile Sales & Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our DTPA practice covers odometer fraud, undisclosed accident damage, mechanical issues,
                  misrepresented vehicle history, unnecessary repairs, and warranty violations in vehicle transactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Insurance Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We pursue DTPA claims related to misrepresentation of policy terms, failure to disclose limitations,
                  unfair claim denials, and other deceptive practices in the insurance industry.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Retail & Online Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our firm handles bait-and-switch advertising, false product descriptions, undisclosed fees, misleading
                  pricing, and failure to honor advertised promotions in retail and e-commerce transactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Financial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We represent clients in cases involving hidden fees, misrepresented loan terms, deceptive debt
                  collection practices, and unauthorized charges by financial service providers.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Professional Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our DTPA practice covers misrepresentation of qualifications, failure to deliver promised services,
                  overbilling, and unauthorized work by various professionals and service providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TexasDTPAInfo />

      <DTPATestimonials />

      <section className="py-16 bg-law-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-law-purple mb-4">DTPA Damages & Recovery</h2>
            <div className="gold-underline mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              The Texas Deceptive Trade Practices Act provides powerful remedies for consumers, potentially allowing for
              recovery far beyond actual damages in cases of knowing or intentional violations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-law-gold">
              <div className="bg-law-purple p-4 text-center">
                <h3 className="text-white font-serif text-lg">Economic Damages</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Out-of-pocket losses</li>
                  <li>Cost to repair/replace</li>
                  <li>Difference in value</li>
                  <li>Lost profits (business)</li>
                  <li>Actual financial harm</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-law-gold">
              <div className="bg-law-purple p-4 text-center">
                <h3 className="text-white font-serif text-lg">Multiple Damages</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Up to 3x economic damages for knowing violations</li>
                  <li>Up to 3x economic damages for intentional violations</li>
                  <li>Applies to first $250,000 of damages</li>
                  <li>Powerful deterrent</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-law-gold">
              <div className="bg-law-purple p-4 text-center">
                <h3 className="text-white font-serif text-lg">Mental Anguish</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Available for knowing violations</li>
                  <li>Compensates for emotional distress</li>
                  <li>Must show substantial disruption</li>
                  <li>No statutory cap</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-law-gold">
              <div className="bg-law-purple p-4 text-center">
                <h3 className="text-white font-serif text-lg">Attorney's Fees</h3>
              </div>
              <div className="p-6">
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Available to prevailing consumers</li>
                  <li>Makes pursuing claims economically feasible</li>
                  <li>Based on reasonable hours</li>
                  <li>Encourages businesses to settle valid claims</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-law-purple py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-6">
            Have You Been a Victim of Deceptive Business Practices?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our experienced Texas DTPA attorneys will review your potential claim and provide clear guidance on your
            legal options during a comprehensive, confidential consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={handleOpenForm}
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors"
            >
              Book a Comprehensive DTPA Claim Review
            </Button>
            <Link
              to="/practice-areas/deceptive-trade-practices-act/guide"
              className="bg-white hover:bg-gray-100 text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Download Consumer Rights Guide
            </Link>
          </div>
        </div>
      </section>

      <DTPAConsultationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </>
  );
};

export default DTPAPage;
