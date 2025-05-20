
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const BusinessLifecycle = () => {
  const stages = [
    {
      title: "Formation Phase",
      description: "Laying the proper legal foundation for your new business.",
      services: [
        "Entity selection and formation",
        "Initial governance documents",
        "Founder agreements",
        "Intellectual property protection",
        "Initial contracts and policies"
      ]
    },
    {
      title: "Growth Phase",
      description: "Supporting your expansion with sound legal structures.",
      services: [
        "Employment agreements and policies",
        "Contract review and negotiation",
        "Regulatory compliance",
        "Commercial leases",
        "Capital raising guidance"
      ]
    },
    {
      title: "Maturity Phase",
      description: "Optimizing operations and protecting established success.",
      services: [
        "Risk management strategies",
        "Contract portfolio review",
        "Corporate restructuring",
        "Dispute prevention mechanisms",
        "Governance refinement"
      ]
    },
    {
      title: "Transition Phase",
      description: "Preparing for ownership changes or business sale.",
      services: [
        "Succession planning",
        "Buy-sell agreements",
        "Business valuation coordination",
        "Exit strategy development",
        "Transaction preparation"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Their business planning team helped us form our technology startup with structures that made our Series A funding round much smoother. They anticipated legal issues we never would have considered.",
      author: "Software Company Founder"
    },
    {
      quote: "When planning the transition of our family business to the next generation, their attorneys created a succession plan that balanced our complex family dynamics with sound business principles.",
      author: "Second-Generation Business Owner"
    },
    {
      quote: "Their proactive approach to contract review saved us from a potentially catastrophic liability issue. They don't just handle problems—they prevent them.",
      author: "Construction Company President"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Business Lifecycle Legal Support
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Your business's legal needs evolve as it grows. Our attorneys provide tailored 
            guidance at each stage of your company's development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stages.map((stage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-2 border-law-gold h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-serif text-law-purple mb-2">{stage.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                <div className="mt-auto">
                  <h4 className="text-sm font-medium text-law-purple mb-2">Key Services:</h4>
                  <ul className="text-sm space-y-1">
                    {stage.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-law-gold mr-2">•</span>
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-law-purple mb-6 text-center">Business Client Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <blockquote className="italic text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-medium text-law-purple">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessLifecycle;
