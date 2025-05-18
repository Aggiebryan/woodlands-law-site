
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CaseType {
  title: string;
  description?: string;
}

interface PracticeAreaContentProps {
  overview: string;
  whyChooseUs: string[];
  caseTypes: CaseType[];
  process?: { title: string; steps: string[] };
  faq?: { question: string; answer: string }[];
}

const PracticeAreaContent = ({
  overview,
  whyChooseUs,
  caseTypes,
  process,
  faq
}: PracticeAreaContentProps) => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif text-law-purple mb-6">Overview</h2>
          <div className="gold-underline mb-8"></div>
          <p className="text-gray-600">{overview}</p>
        </section>
        
        {/* Cases We Handle */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-law-purple mb-4">Cases We Handle</h2>
            <div className="gold-underline mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseTypes.map((caseType, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-t-2 border-law-gold">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif text-law-purple mb-3">{caseType.title}</h3>
                  {caseType.description && (
                    <p className="text-gray-600 text-sm">{caseType.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-serif text-law-purple mb-6">Why Choose The Woodlands Law Firm</h2>
          <div className="gold-underline mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-law-gold mr-3 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Our Process */}
        {process && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-law-purple mb-4">{process.title}</h2>
              <div className="gold-underline mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.steps.map((step, index) => (
                <div key={index} className="text-center p-6 border rounded-lg relative">
                  <div className="bg-law-gold text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif text-law-purple mb-4">Frequently Asked Questions</h2>
              <div className="gold-underline mx-auto mb-6"></div>
            </div>
            
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-xl font-serif text-law-purple mb-3">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
        
        {/* Call to Action */}
        <section className="bg-law-purple p-8 rounded-lg text-center">
          <h2 className="text-3xl font-serif text-white mb-4">Ready to Discuss Your Case?</h2>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Schedule a consultation with one of our experienced attorneys to discuss your specific legal needs 
            and how we can help protect your interests.
          </p>
          <Link 
            to="/schedule" 
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Schedule a Free Consultation
          </Link>
        </section>
      </div>
    </div>
  );
};

export default PracticeAreaContent;
