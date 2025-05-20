
import React from "react";

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "We meet to discuss your case, injuries, and legal options at no cost to you."
  },
  {
    step: "2",
    title: "Investigation",
    description: "Our team collects evidence, interviews witnesses, and documents the accident scene."
  },
  {
    step: "3",
    title: "Medical Documentation",
    description: "We help coordinate your medical treatment and gather comprehensive records."
  },
  {
    step: "4",
    title: "Case Building",
    description: "We develop a strong legal strategy based on evidence and liability assessment."
  },
  {
    step: "5",
    title: "Demand & Negotiation",
    description: "We present a demand to the insurance company and negotiate for maximum compensation."
  },
  {
    step: "6",
    title: "Litigation If Necessary",
    description: "If a fair settlement isn't offered, we file a lawsuit and prepare for court."
  },
  {
    step: "7",
    title: "Resolution",
    description: "We finalize your case through settlement or verdict and disburse your compensation."
  }
];

const PersonalInjuryProcess = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Our Proven Personal Injury Process
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            We've developed a thorough, client-centered approach to handle your personal injury claim efficiently and effectively, designed to maximize your compensation while minimizing your stress.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-[calc(50%-1px)] h-[calc(100%-8rem)] w-0.5 bg-law-gold opacity-50 hidden md:block"></div>
          
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center md:items-start gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-16 h-16 rounded-full bg-law-gold text-law-purple flex items-center justify-center text-2xl font-bold shrink-0 relative z-10">
                  {step.step}
                </div>
                
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <h3 className="text-xl font-serif text-law-purple mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInjuryProcess;
