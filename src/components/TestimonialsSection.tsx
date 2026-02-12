
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "I cannot recommend The Woodlands Law Firm enough, especially attorney Bryan Holman. From our very first consultation, Bryan was attentive, knowledgeable, and genuinely invested in achieving the best outcome for my case.",
      author: "Lauren",
      position: "Google Review",
    },
    {
      quote: "A Lawyer Who Restores Your Faith in the Justice System. Bryan didn't just represent me — he fought for me. His deep knowledge of insurance law and the DTPA gave me confidence from day one.",
      author: "Luiz R.",
      position: "Google Review",
    },
    {
      quote: "If you're looking for representation that is committed, Transparent, Effective, and efficient, The Woodlands Law Firm is your answer. Bryan Holman handled our case with precision and professionalism.",
      author: "Jose A.",
      position: "Google Review",
    },
    {
      quote: "The Woodlands Law Firm resolved my legal matter quickly and efficiently. Their team was professional, responsive, and kept me informed throughout the entire process.",
      author: "Leopold G.",
      position: "Google Review",
    },
    {
      quote: "I had an insurance claim filed on my roof, they denied it although 6 houses on my street had their claims approved. Bryan took my case and got me a fantastic result.",
      author: "Jeramiah J.",
      position: "Google Review",
    },
    {
      quote: "Gwendolyn at The Woodlands Law Firm has been a rock for us. She handled our estate planning with care and made sure every detail was covered. We feel secure knowing our family is protected.",
      author: "Billy S.",
      position: "Google Review",
    },
    {
      quote: "This law firm is hands down the best. We were treated like family from the moment we walked in. They handled everything with professionalism and compassion.",
      author: "Madison G.",
      position: "Google Review",
    },
    {
      quote: "This law firm is Outstanding. When I had questions or concerns they responded in less than 24 hours. They truly care about their clients and it shows in every interaction.",
      author: "Kimberly P.",
      position: "Google Review",
    },
    {
      quote: "Gwen and Bryan are fantastic! They are knowledgeable, thorough, and truly care about their clients. Highly recommend The Woodlands Law Firm.",
      author: "Michael G.",
      position: "Google Review",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextTestimonial = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, nextTestimonial]);

  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    setTimeout(() => {
      setAutoplay(true);
    }, 10000);
  };

  return (
    <section className="py-20 bg-law-purple text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium mb-4">
            Client <span className="text-law-gold">Testimonials</span>
          </h2>
          <div className="gold-underline mx-auto mb-5"></div>
          <div className="flex items-center justify-center gap-2 mb-3">
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-label="Google">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-white/80 text-sm font-medium">5-Star Google Reviews</span>
          </div>
          <p className="text-white/80 max-w-3xl mx-auto">
            See what our clients say about their experience with The Woodlands Law Firm.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-law-purple-light p-8 md:p-12 rounded-lg shadow-lg relative min-h-[300px] flex items-center">
            <button
              onClick={() => {
                prevTestimonial();
                handleManualNavigation(activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-law-purple/50 hover:bg-law-purple text-white rounded-full p-1 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <span className="text-6xl font-serif text-law-gold absolute top-6 left-6 leading-none opacity-30">
              "
            </span>

            <div className="relative z-10 w-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 absolute w-full ${
                    index === activeIndex
                      ? "opacity-100 translate-x-0"
                      : index < activeIndex
                        ? "opacity-0 -translate-x-full"
                        : "opacity-0 translate-x-full"
                  }`}
                  style={{
                    display: Math.abs(index - activeIndex) > 1 ? 'none' : 'block'
                  }}
                >
                  <div className="flex justify-center mb-4 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="text-law-gold fill-law-gold" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl italic mb-8">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="text-law-gold font-medium font-serif text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-white/70">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}

              {/* Current testimonial (for layout purposes) */}
              <div className="invisible">
                <div className="flex justify-center mb-4 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-law-gold fill-law-gold" />
                  ))}
                </div>
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

            <button
              onClick={() => {
                nextTestimonial();
                handleManualNavigation(activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-law-purple/50 hover:bg-law-purple text-white rounded-full p-1 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-law-gold" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}
          </div>

          {/* Review us on Google link */}
          <div className="text-center mt-6">
            <a
              href="https://g.page/r/thewoodlandslawfirm/review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-law-gold hover:text-white transition-colors text-sm font-medium underline underline-offset-4"
            >
              Review us on Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
