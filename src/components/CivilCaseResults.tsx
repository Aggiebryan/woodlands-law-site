
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CivilCaseResults = () => {
  const caseResults = [
    {
      title: "Construction Contract Dispute",
      amount: "$1.2 Million",
      description: "Recovered for commercial property owner against contractor for significant construction defects and delays."
    },
    {
      title: "Partnership Dissolution",
      amount: "Favorable Settlement",
      description: "Negotiated equitable division of assets and liabilities in contentious business partnership dissolution."
    },
    {
      title: "Commercial Lease Dispute",
      amount: "$450,000",
      description: "Secured recovery for landlord against tenant who abandoned lease and damaged property."
    },
    {
      title: "Business Sale Litigation",
      amount: "$875,000",
      description: "Obtained judgment for seller when buyer breached asset purchase agreement terms."
    },
    {
      title: "Employment Contract Case",
      amount: "Defense Verdict",
      description: "Successfully defended business against wrongful termination and breach of contract claims."
    },
    {
      title: "Real Estate Transaction Dispute",
      amount: "$525,000",
      description: "Recovered for buyer when seller failed to disclose material property defects."
    }
  ];

  const testimonials = [
    {
      quote: "The litigation team's strategic approach to our complex business dispute saved us significant time and money. They focused on our commercial objectives rather than just legal victories.",
      author: "Manufacturing Company CEO"
    },
    {
      quote: "When our partnership fell apart, the attorneys at The Woodlands Law Firm helped navigate an incredibly difficult situation with professionalism and clarity. Their guidance was invaluable.",
      author: "Former Business Partner"
    },
    {
      quote: "I was impressed by how thoroughly they prepared our case. Their attention to detail during discovery uncovered critical evidence that ultimately led to a favorable settlement.",
      author: "Commercial Property Developer"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Civil Litigation Results
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            While past results don't guarantee future outcomes, our track record demonstrates our 
            commitment to achieving favorable resolutions for our clients in complex civil matters:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {caseResults.map((result, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-t-2 border-law-gold">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-law-purple mb-1">{result.title}</h3>
                <p className="text-law-gold font-bold text-lg mb-2">{result.amount}</p>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-serif text-law-purple mb-6 text-center">Client Testimonials</h3>
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

export default CivilCaseResults;
