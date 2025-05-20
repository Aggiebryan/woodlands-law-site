
import { useEffect } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import InsuranceClaimProcess from "@/components/InsuranceClaimProcess";
import SettlementComparisons from "@/components/SettlementComparisons";
import InsuranceTestimonialCarousel from "@/components/InsuranceTestimonialCarousel";
import TexasInsuranceInfo from "@/components/TexasInsuranceInfo";
import InsuranceFAQSection from "@/components/InsuranceFAQSection";
import InsuranceResourcesSection from "@/components/InsuranceResourcesSection";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const InsuranceLitigationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { 
      title: "First-Party Insurance Disputes",
      description: "Claims against your own insurance company for coverage denials or underpayments"
    },
    { 
      title: "Coverage Analysis",
      description: "Detailed review of policy language to identify potential coverage arguments"
    },
    { 
      title: "Property Damage Claims",
      description: "Representation for hurricane, fire, water, and other property damage claim disputes"
    },
    { 
      title: "Health Insurance Disputes",
      description: "Fighting denied medical claims and securing coverage for necessary treatments"
    },
    { 
      title: "Bad Faith Claims",
      description: "Legal action when insurers unreasonably deny, delay, or underpay valid claims"
    },
    { 
      title: "Business Interruption Claims",
      description: "Recovering lost income when operations are disrupted by covered events"
    },
    { 
      title: "Negotiation and Litigation",
      description: "Aggressive advocacy from initial demand through trial if necessary"
    }
  ];

  const whyChooseUs = [
    "Specialized experience with Texas insurance law and regulations",
    "Track record of successful claims against major insurance companies",
    "Understanding of complex policy language and coverage issues",
    "Skilled negotiators with insurance adjusters and legal teams",
    "Trial-ready approach that incentivizes fair settlement offers",
    "Experience with Texas Insurance Code Chapters 541 and 542 claims",
    "Personalized strategy for each client's unique situation"
  ];

  const process = {
    title: "Our Insurance Litigation Process",
    steps: [
      "Policy Review & Case Evaluation",
      "Claim Documentation",
      "Strategic Demand Preparation",
      "Settlement Negotiations",
      "Litigation if Necessary",
      "Resolution & Recovery"
    ]
  };

  const faq = [
    {
      question: "My insurance claim was denied. What should I do?",
      answer: "If your claim has been denied, it's important to request a written explanation for the denial, review your policy carefully, and gather supporting documentation. Our attorneys can review your case, identify potential legal grounds for challenging the denial, and help you pursue all available remedies."
    },
    {
      question: "What is insurance bad faith?",
      answer: "Insurance bad faith occurs when an insurance company unreasonably denies, delays, or underpays a valid claim. This can include failing to properly investigate claims, misrepresenting policy provisions, or making unreasonably low settlement offers. If proven, bad faith claims can result in additional damages beyond the policy limits."
    },
    {
      question: "How long does an insurance company have to settle a claim in Texas?",
      answer: "Under Texas law, insurance companies must acknowledge receipt of a claim within 15 days, begin investigation within 15 days, and accept or reject a claim within 45 days (though this period can be extended in certain circumstances). Failing to meet these deadlines may constitute a violation of the Texas Insurance Code."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Texas Insurance Litigation Attorneys | The Woodlands Law Firm</title>
        <meta name="description" content="Experienced Texas insurance litigation attorneys fighting for policyholders' rights against denied, delayed, and underpaid insurance claims in The Woodlands and Houston area." />
        {/* Schema markup for attorney services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "The Woodlands Law Firm - Insurance Litigation",
              "description": "Texas insurance litigation attorneys fighting for policyholders' rights against insurance companies in The Woodlands and Houston area.",
              "areaServed": ["The Woodlands", "Houston", "Montgomery County", "Harris County", "Texas"],
              "serviceType": "Insurance Litigation",
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
        title="Texas Insurance Litigation Attorneys"
        subtitle="Fighting for Policyholders' Rights in The Woodlands"
        description="When insurance companies deny, delay, or underpay legitimate claims, our litigation team steps in to fight for the coverage you're entitled to receive. We have the expertise to level the playing field against powerful insurance companies."
        image="/lovable-uploads/307c4d37-d87e-4a89-8107-73533778d172.png"
        ctaText="Get a Free Insurance Claim Review"
      />
      
      <PracticeAreaContent
        overview="The Woodlands Law Firm specializes in representing policyholders in disputes with insurance companies throughout Texas. Our insurance litigation attorneys have extensive experience helping clients recover what they're owed under their policies when insurance companies act in bad faith or wrongfully deny claims. We understand the complex language of insurance policies and the tactics insurers use to minimize payments, and we use this knowledge to advocate effectively for our clients."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
      
      <InsuranceClaimProcess />
      
      <SettlementComparisons />
      
      <InsuranceTestimonialCarousel />
      
      <TexasInsuranceInfo />
      
      <InsuranceFAQSection />
      
      <InsuranceResourcesSection />
      
      <section className="bg-law-purple py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-6">Ready to Fight Your Insurance Claim Denial?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let insurance companies deny you the coverage you paid for. Our experienced Texas insurance litigation attorneys are ready to review your case.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://woodlandslaw.cliogrow.com/book" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Schedule a Free Consultation
            </a>
            <a 
              href="tel:+18326260116" 
              className="bg-white hover:bg-gray-100 text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Call (832) 626-0116
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuranceLitigationPage;
