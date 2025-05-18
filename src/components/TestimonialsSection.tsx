
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "I really enjoyed working with Gwen and her team. They conducted themselves professionally, timely and with compassion. It was truly a pleasure!",
      author: "Johnnie W.",
      position: "Estate Planning Client",
    },
    {
      quote: "This is our family's second time using The Woodlands Law Firm. We are just as pleased this time as we were before. We will certainly call on them again if the need arises.",
      author: "Joe M.",
      position: "Repeat Client",
    },
    {
      quote: "Ms. Simpson is a true professional. Our wills and trust were completed to our satisfaction. She is knowledgeable, thorough and very helpful.",
      author: "Cindy C.",
      position: "Trust Client",
    },
    {
      quote: "The Woodlands Law Firm is professional, thorough, efficient, and friendly. Our many questions were answered patiently and clearly. Gwen and her team are a pleasure to work with.",
      author: "Kent D.",
      position: "Business Client",
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

  // Auto-rotate testimonials
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, nextTestimonial]);

  // Pause autoplay when user interacts with controls
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index);
    setAutoplay(false);
    
    // Resume autoplay after 10 seconds of inactivity
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
          <p className="text-white/80 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with The Woodlands Law Firm.
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
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
