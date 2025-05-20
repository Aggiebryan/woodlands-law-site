
import React from "react";

const CivilLitigationProcess = () => {
  const processSteps = [
    {
      title: "Initial Case Evaluation",
      description: "We thoroughly review all case documents and evidence to determine strengths, weaknesses, and strategic approaches.",
      icon: "⚖️"
    },
    {
      title: "Case Strategy Development",
      description: "Our team creates a comprehensive litigation plan aligned with your specific goals and risk tolerance.",
      icon: "📝"
    },
    {
      title: "Pleadings & Initial Motions",
      description: "We draft and file precise legal documents that establish your position and may seek early favorable rulings.",
      icon: "📄"
    },
    {
      title: "Discovery Phase",
      description: "Through depositions, document requests, and interrogatories, we gather and analyze evidence crucial to your case.",
      icon: "🔍"
    },
    {
      title: "Pre-Trial Resolution Attempts",
      description: "When advantageous, we pursue mediation, settlement conferences, or dispositive motions to resolve your case efficiently.",
      icon: "🤝"
    },
    {
      title: "Trial Preparation & Representation",
      description: "If trial becomes necessary, we meticulously prepare exhibits, witnesses, and compelling arguments to present your strongest case.",
      icon: "👨‍⚖️"
    },
    {
      title: "Post-Trial & Appeals",
      description: "After verdict, we handle necessary post-trial motions and appeals to protect and enforce your rights.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            The Civil Litigation Process
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Understanding the litigation process helps you make informed decisions throughout your case. 
            Here's how we approach civil disputes to achieve the best possible outcomes for our clients:
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-law-gold opacity-50"></div>
            
            {/* Process steps */}
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="bg-law-gold text-white w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pr-16' : 'md:mr-auto md:pl-16'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center md:hidden mb-4">
                        <div className="bg-law-gold text-white w-10 h-10 rounded-full flex items-center justify-center text-xl mr-4">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-serif text-law-purple">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-xl font-serif text-law-purple mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilLitigationProcess;
