
import React from "react";
import { FileText, Shield, ShieldX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const InsuranceResourcesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Insurance Claim Resources</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Free educational resources to help you understand and navigate the insurance claims process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resource 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-law-purple p-6 flex justify-center">
              <FileText className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-law-purple mb-3">Claim Denial Checklist</h3>
              <p className="text-gray-600 mb-6">
                Download our free checklist of essential steps to take when your insurance claim has been denied or underpaid.
              </p>
              <Button className="w-full bg-law-gold hover:bg-law-gold-light text-law-purple">
                Download PDF Guide
              </Button>
            </div>
          </div>

          {/* Resource 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-law-purple p-6 flex justify-center">
              <Shield className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-law-purple mb-3">Insurance Terms Glossary</h3>
              <p className="text-gray-600 mb-6">
                Understanding complex insurance policy language is crucial. Our glossary breaks down common terms that affect your coverage.
              </p>
              <Button className="w-full bg-law-gold hover:bg-law-gold-light text-law-purple" asChild>
                <Link to="/insurance-glossary">View Insurance Glossary</Link>
              </Button>
            </div>
          </div>

          {/* Resource 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-law-purple p-6 flex justify-center">
              <ShieldX className="h-12 w-12 text-white" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-serif text-law-purple mb-3">Bad Faith Tactics Video</h3>
              <p className="text-gray-600 mb-6">
                Watch our video explaining common insurance bad faith tactics and how our attorneys combat them in Texas courts.
              </p>
              <Button className="w-full bg-law-gold hover:bg-law-gold-light text-law-purple">
                Watch Video Explainer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceResourcesSection;
