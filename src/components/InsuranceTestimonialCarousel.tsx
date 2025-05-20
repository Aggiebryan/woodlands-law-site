
import React, { useEffect, useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "After my hurricane claim was denied, The Woodlands Law Firm helped me recover $325,000 for my home repairs. They fought the insurance company every step of the way.",
    author: "Michael R.",
    caseType: "Hurricane Damage Claim"
  },
  {
    quote: "My business interruption claim was initially denied completely. The attorneys secured a $750,000 settlement that saved my company during the pandemic.",
    author: "Jennifer T.",
    caseType: "Business Interruption Claim"
  },
  {
    quote: "When my health insurance refused to cover a necessary surgery, I didn't know where to turn. They took my case and got the procedure covered plus additional compensation.",
    author: "Robert K.",
    caseType: "Health Insurance Dispute"
  },
  {
    quote: "The insurance company offered only $15,000 for extensive water damage to my home. With The Woodlands Law Firm's help, we received $185,000 to properly repair everything.",
    author: "Sarah M.",
    caseType: "Property Damage Claim"
  }
];

const InsuranceTestimonialCarousel = () => {
  return (
    <section className="py-16 bg-law-purple/100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-gold mb-4">Client Success Stories</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-white-600 max-w-3xl mx-auto">
            Read what our clients have to say about their experience fighting against insurance companies with our help.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card className="border-0 shadow-md bg-white">
                    <CardContent className="p-8">
                      <div className="flex justify-center mb-6">
                        <div className="text-5xl text-law-gold">"</div>
                      </div>
                      <p className="text-lg text-center italic text-gray-700 mb-6">
                        {testimonial.quote}
                      </p>
                      <div className="text-center">
                        <p className="font-bold text-law-purple">{testimonial.author}</p>
                        <p className="text-sm text-law-gold">{testimonial.caseType}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="relative -left-4" />
              <CarouselNext className="relative -right-4" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default InsuranceTestimonialCarousel;
