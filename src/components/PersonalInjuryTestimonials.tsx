
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  caseType: string;
  result?: string;
}

const PersonalInjuryTestimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "After my car accident, I was overwhelmed with medical bills and unable to work. The Woodlands Law Firm handled everything while I focused on recovery. They secured a settlement that covered all my expenses and more.",
      author: "Michael T.",
      caseType: "Auto Accident",
      result: "$750,000 Recovery"
    },
    {
      quote: "When the insurance company denied my claim after a truck accident, I didn't know where to turn. This firm fought tirelessly for me and got the insurance company to pay what they owed—plus additional compensation for my injuries.",
      author: "Sarah L.",
      caseType: "Commercial Truck Collision",
      result: "$1.2 Million Recovery"
    },
    {
      quote: "I slipped and fell at a local business due to their negligence. The attorneys at The Woodlands Law Firm were professional, thorough, and genuinely cared about my well-being. They made sure I was fairly compensated.",
      author: "Robert J.",
      caseType: "Premises Liability",
      result: "$325,000 Recovery"
    },
    {
      quote: "After losing my husband in a workplace accident, I was devastated and unsure about our family's financial future. This firm handled our wrongful death claim with compassion and secured our family's financial stability.",
      author: "Jennifer M.",
      caseType: "Wrongful Death",
      result: "$2.1 Million Recovery"
    }
  ];

  return (
    <section className="py-16 bg-law-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Client <span className="text-law-gold">Success Stories</span>
          </h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Learn how we've helped personal injury victims throughout Texas recover the compensation they deserve.
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
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="Texas Trial Lawyers Association" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="Super Lawyers" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="American Association for Justice" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
          <img src="/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png" alt="Million Dollar Advocates Forum" className="h-16 opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default PersonalInjuryTestimonials;
