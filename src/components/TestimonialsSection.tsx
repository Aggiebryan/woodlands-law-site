
import { useState, useCallback } from "react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Woodlands Law provided exceptional guidance through the complex process of setting up my family trust. Their attention to detail and personalized approach made all the difference.",
      author: "Michael Thompson",
      position: "Business Owner",
    },
    {
      quote: "The team at Woodlands Law handled my estate planning with professionalism and care. They took the time to understand my unique situation and crafted solutions that gave me peace of mind.",
      author: "Sarah Johnson",
      position: "Retired Educator",
    },
    {
      quote: "I've worked with several law firms over the years, but none have provided the level of service and expertise that Woodlands Law offers. They truly go above and beyond for their clients.",
      author: "Robert Chen",
      position: "Real Estate Investor",
    },
    {
      quote: "During a difficult time following the loss of a family member, Woodlands Law guided us through probate with compassion and efficiency. I cannot recommend them highly enough.",
      author: "Jennifer Martinez",
      position: "Healthcare Professional",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-law-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Client <span className="text-law-gold">Testimonials</span>
          </h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <p className="text-white/80 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with Woodlands Law.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-law-navy-light p-8 md:p-12 rounded-lg shadow-lg relative">
            <span className="text-6xl font-serif text-law-gold absolute top-6 left-6 leading-none opacity-30">
              "
            </span>

            <div className="relative z-10">
              <p className="text-lg md:text-xl italic mb-8">
                {testimonials[activeIndex].quote}
              </p>
              
              <div>
                <p className="text-law-gold font-medium font-serif text-lg">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-white/70">
                  {testimonials[activeIndex].position}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-law-gold" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
