
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const EstatePlanningLifeStages = () => {
  const lifeStages = [
    {
      title: "Young Families",
      image: "/lovable-uploads/307c4d37-d87e-4a89-8107-73533778d172.png",
      priorities: [
        "Naming guardians for minor children",
        "Creating trusts for children's education",
        "Establishing life insurance strategies",
        "Protecting growing assets",
        "Ensuring healthcare directives are in place"
      ]
    },
    {
      title: "Mid-Life Planning",
      image: "/lovable-uploads/846098cf-1b95-4252-ad7d-ecf6b1180d90.png",
      priorities: [
        "Reviewing and updating existing estate plans",
        "Incorporating business succession planning",
        "Maximizing retirement account strategies",
        "Implementing college funding plans",
        "Considering long-term care insurance"
      ]
    },
    {
      title: "Retirement & Beyond",
      image: "/lovable-uploads/d2d3dd5c-4df2-4af8-8fd5-95612381080d.png",
      priorities: [
        "Asset protection and preservation",
        "Advanced healthcare planning",
        "Medicaid and long-term care planning",
        "Legacy and charitable giving strategies",
        "Minimizing estate taxes and probate costs"
      ]
    },
    {
      title: "Blended Families",
      image: "/lovable-uploads/577d394a-a6e5-4fa4-bb3f-92f9ab114264.png",
      priorities: [
        "Balancing care for current spouse and children from previous marriages",
        "Creating clear inheritance divisions",
        "Addressing family heirlooms and sentimental assets",
        "Preventing unintended disinheritance",
        "Maintaining family harmony through clear documentation"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Estate Planning for Every Life Stage
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Your estate planning needs evolve throughout your life. We provide tailored guidance 
            for each stage of your journey to ensure your plan grows and adapts with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {lifeStages.map((stage, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={stage.image} 
                  alt={stage.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-law-purple/60 flex items-center justify-center">
                  <h3 className="text-2xl font-serif text-white">{stage.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-medium text-law-purple mb-3">Planning Priorities:</h4>
                <ul className="space-y-2">
                  {stage.priorities.map((priority, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-law-gold mr-2">•</span>
                      <span className="text-gray-600">{priority}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            No matter where you are in life's journey, having the right estate plan 
            gives you and your loved ones security and peace of mind.
          </p>
          <a 
            href="https://woodlandslaw.cliogrow.com/book"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-8 rounded transition-colors inline-block"
          >
            Schedule Your Personalized Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default EstatePlanningLifeStages;
