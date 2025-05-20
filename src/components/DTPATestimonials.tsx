
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  caseType: string;
  result?: string;
}

const DTPATestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After being misled by a contractor who took my money but never completed the work, The Woodlands Law Firm helped me recover three times my damages under the DTPA. They were professional and knew exactly how to handle my case.",
      author: "David R.",
      caseType: "Construction Fraud",
      result: "$78,000 Recovery"
    },
    {
      quote: "When a car dealership sold me a vehicle with undisclosed accident damage, this firm helped me hold them accountable. They guided me through the DTPA process and secured compensation that covered everything I had lost and more.",
      author: "Teresa M.",
      caseType: "Auto Dealer Misrepresentation",
      result: "$45,000 Recovery"
    },
    {
      quote: "As a small business owner facing an unwarranted DTPA claim, I was worried about my reputation and finances. The attorneys at The Woodlands Law Firm mounted an effective defense that got the case dismissed. Their knowledge of the DTPA was impressive.",
      author: "Michael S.",
      caseType: "Business DTPA Defense",
      result: "Case Dismissed"
    },
    {
      quote: "After an insurance company denied my claim using deceptive practices, this firm helped me file a DTPA claim. They thoroughly understood the insurance code tie-ins and recovered not just my policy benefits but additional damages as well.",
      author: "Jennifer T.",
      caseType: "Insurance Code/DTPA Case",
      result: "$165,000 Recovery"
    }
  ];

  return (
    <section className="py-16 bg-law-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            DTPA <span className="text-law-gold">Client Results</span>
          </h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            See how our attorneys have helped clients with deceptive trade practices claims throughout Texas.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="bg-law-purple-light p-8 md:p-12 rounded-lg shadow-lg relative">
                    <span className="text-6xl font-serif text-law-gold absolute top-6 left-6 leading-none opacity-30">
                      "
                    </span>
                    
                    <div className="relative z-10">
                      <p className="text-lg md:text-xl italic mb-8">
                        {testimonial.quote}
                      </p>
                      
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <p className="text-law-gold font-medium font-serif text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-white/70">
                            {testimonial.caseType}
                          </p>
                        </div>
                        
                        {testimonial.result && (
                          <div className="mt-4 md:mt-0 bg-law-gold/20 px-4 py-2 rounded">
                            <p className="text-law-gold font-bold">{testimonial.result}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static translate-y-0 left-0 bg-white/10 text-white hover:bg-white/20" />
              <CarouselNext className="relative static translate-y-0 right-0 bg-white/10 text-white hover:bg-white/20" />
            </div>
          </Carousel>
        </div>
        
        <div className="mt-12 flex justify-center flex-wrap gap-6">
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="Texas Consumer Law Section" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="National Association of Consumer Advocates" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="Consumer Attorneys Association" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default DTPATestimonials;
