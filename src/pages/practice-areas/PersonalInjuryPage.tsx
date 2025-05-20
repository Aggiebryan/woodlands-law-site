
import { useEffect, useState } from "react";
import PracticeAreaHero from "@/components/PracticeAreaHero";
import PracticeAreaContent from "@/components/PracticeAreaContent";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PersonalInjuryProcess from "@/components/PersonalInjuryProcess";
import InjuryCaseTimeline from "@/components/InjuryCaseTimeline";
import PersonalInjuryTestimonials from "@/components/PersonalInjuryTestimonials";
import TexasInjuryInfo from "@/components/TexasInjuryInfo";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import CaseEvaluationForm from "@/components/injury/CaseEvaluationForm";

const PersonalInjuryPage = () => {
  const [showCaseEvaluationForm, setShowCaseEvaluationForm] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const caseTypes = [
    { title: "Auto Accidents", description: "Representation for car, truck, and motorcycle collisions" },
    { title: "Truck Accidents", description: "Expert handling of complex commercial vehicle cases" },
    { title: "ATV, UTV Accidents", description: "Specialized advocacy for recreational vehicle incidents" },
    { title: "Pedestrian Accidents", description: "Protection for those injured as pedestrians" },
    { title: "Slip and Fall Accidents", description: "Premises liability and property owner negligence cases" },
    { title: "Wrongful Death", description: "Compassionate representation for bereaved families" }
  ];

  const whyChooseUs = [
    "Dedicated personal injury attorneys with proven results in Texas courts",
    "Personalized attention to your specific case needs and circumstances",
    "No fee unless we win your case - contingency fee representation",
    "Extensive experience with complex injury claims in Montgomery and Harris counties",
    "Direct access to your attorney throughout your case, not just paralegals",
    "Thorough investigation and strong case preparation from day one"
  ];

  const process = {
    title: "Our Personal Injury Process",
    steps: [
      "Free Initial Consultation & Case Evaluation",
      "Investigation and Evidence Collection",
      "Medical Treatment Coordination and Documentation",
      "Case Valuation and Demand Preparation",
      "Settlement Negotiation with Insurance Companies",
      "Litigation if Necessary to Maximize Recovery",
      "Case Resolution and Recovery Distribution"
    ]
  };

  const faq = [
    {
      question: "How much is my personal injury case worth in Texas?",
      answer: "The value of your case depends on several factors including the severity of your injuries, medical expenses, lost wages, pain and suffering, and impact on quality of life. Texas law allows for recovery of both economic damages (medical bills, lost income) and non-economic damages (pain, suffering, mental anguish). Unlike some states, Texas doesn't cap most personal injury damages except in medical malpractice cases. During our consultation, we'll evaluate these factors to give you a better understanding of what your case might be worth."
    },
    {
      question: "How long do I have to file a personal injury claim in Texas?",
      answer: "In Texas, the statute of limitations for most personal injury claims is two years from the date of the injury. This applies to auto accidents, slip and falls, and most other injury cases. However, there are exceptions to this rule for minors, cases against government entities (which may have shorter notice requirements), and certain types of injuries that might not be discovered immediately. It's important to consult with an attorney as soon as possible to ensure your rights are protected."
    },
    {
      question: "What if I was partially at fault for my accident in Texas?",
      answer: "Texas follows a 'modified comparative negligence' rule with a 51% bar. This means you can still recover damages even if you were partially at fault, as long as you were not more than 50% responsible for the accident. However, your recovery will be reduced by your percentage of fault. For example, if you're awarded $100,000 but found to be 30% at fault, you would receive $70,000. If you're found to be 51% or more at fault, you cannot recover damages."
    },
    {
      question: "Do I need a lawyer for a personal injury case in Texas?",
      answer: "While you can technically represent yourself, studies consistently show that injury victims who hire attorneys receive significantly higher settlements, even after legal fees. Insurance companies have teams of adjusters and lawyers working to minimize your compensation. Having an experienced personal injury attorney levels the playing field. We handle the investigation, evidence gathering, negotiations, and if necessary, litigation, allowing you to focus on your recovery."
    },
    {
      question: "How long does a personal injury case typically take in Texas?",
      answer: "The timeline varies significantly depending on the complexity of your case, the severity of injuries, and whether the case settles or goes to trial. Simple cases might resolve in 3-6 months, while complex cases or those involving serious injuries may take 1-2 years or longer. We work efficiently to resolve your case as quickly as possible while still ensuring you receive full compensation. We'll keep you informed about your case progress throughout the process."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Personal Injury Attorneys in The Woodlands, TX | The Woodlands Law Firm</title>
        <meta name="description" content="Experienced personal injury attorneys in The Woodlands and Houston area providing dedicated representation for auto accidents, slip and falls, and serious injury cases throughout Texas." />
        {/* Schema markup for attorney services */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "The Woodlands Law Firm - Personal Injury",
              "description": "Personal injury attorneys providing dedicated representation for accident victims in The Woodlands and Houston area.",
              "areaServed": ["The Woodlands", "Houston", "Montgomery County", "Harris County", "Texas"],
              "serviceType": "Personal Injury Law",
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
        title="Dedicated Personal Injury Representation in The Woodlands and Throughout Texas"
        subtitle="Fighting For Maximum Compensation For Injury Victims"
        description="When you've been injured due to someone else's negligence, you need an experienced legal team to fight for the compensation you deserve. Our personal injury attorneys have the knowledge, resources, and determination to hold responsible parties accountable."
        image="/lovable-uploads/c63dc061-b55b-4ecb-a111-23cc282089a8.png"
        ctaText="Free Case Evaluation"
        onCtaClick={() => setShowCaseEvaluationForm(true)}
      />
      
      <PracticeAreaContent
        overview="At The Woodlands Law Firm, our personal injury attorneys are committed to helping accident victims recover maximum compensation for injuries caused by negligence or wrongful acts. We understand the physical, emotional, and financial toll that serious injuries can take on victims and their families. Our team works tirelessly to ensure that our clients receive full and fair compensation for their injuries, medical expenses, lost wages, pain and suffering, and diminished quality of life. With decades of combined experience in Texas courtrooms, we have the knowledge and resources to take on even the most complex injury cases."
        whyChooseUs={whyChooseUs}
        caseTypes={caseTypes}
        process={process}
        faq={faq}
      />
      
      <PersonalInjuryProcess />
      
      <InjuryCaseTimeline />
      
      <TexasInjuryInfo />
      
      <PersonalInjuryTestimonials />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Common Types of Injuries We Handle</h2>
          <div className="gold-underline mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Traumatic Brain Injuries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We handle complex TBI cases, working with medical experts to document the full impact on your life and secure compensation for long-term care needs and diminished quality of life.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Spinal Cord Injuries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our team has extensive experience with catastrophic spinal cord injury cases, fighting for compensation that covers lifetime medical care, home modifications, and lost earning capacity.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Broken Bones & Fractures</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From simple breaks to complex fractures requiring surgery, we ensure your recovery includes all medical costs, rehabilitation, and compensation for any permanent limitations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Burn Injuries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Burn injuries often require extensive treatment and may cause permanent scarring. We fight for compensation that covers reconstructive surgery, physical therapy, and emotional trauma.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Soft Tissue Injuries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We understand how to properly document and present evidence of whiplash, sprains, and other soft tissue injuries that are often minimized by insurance companies.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Wrongful Death</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our compassionate attorneys help families seek justice and financial security after losing a loved one, pursuing compensation for lost support, funeral expenses, and loss of companionship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="bg-law-gray-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Understanding Texas Personal Injury Damages</h2>
          <div className="gold-underline mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-serif text-law-purple mb-4">Economic Damages</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Past and future medical expenses</li>
                <li>Lost wages and income</li>
                <li>Loss of earning capacity</li>
                <li>Property damage</li>
                <li>Rehabilitation costs</li>
                <li>Necessary home modifications</li>
                <li>In-home care expenses</li>
                <li>Transportation to medical appointments</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-law-purple mb-4">Non-Economic Damages</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Pain and suffering</li>
                <li>Mental anguish</li>
                <li>Emotional distress</li>
                <li>Physical impairment</li>
                <li>Disfigurement</li>
                <li>Loss of enjoyment of life</li>
                <li>Loss of consortium</li>
                <li>Diminished quality of life</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8">
            <Link to="/schedule" className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block">
              Calculate Your Potential Damages
            </Link>
          </div>
        </div>
      </section>
      
      <section className="bg-law-purple py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-white mb-6">Ready to Discuss Your Injury Case?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Our experienced Texas personal injury attorneys are ready to review your case and explain your legal options in a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => setShowCaseEvaluationForm(true)}
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Free Case Evaluation
            </Button>
            <a 
              href="tel:+18326260116" 
              className="bg-white hover:bg-gray-100 text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
            >
              Call (832) 626-0116
            </a>
          </div>
        </div>
      </section>
      
      {/* Case Evaluation Form */}
      <CaseEvaluationForm
        open={showCaseEvaluationForm}
        onOpenChange={setShowCaseEvaluationForm}
      />
    </>
  );
};

export default PersonalInjuryPage;
