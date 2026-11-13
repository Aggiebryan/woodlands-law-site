import React from "react";
import { Gavel, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const TexasInsuranceInfo = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Texas Insurance Law Expertise</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Our attorneys have deep knowledge of Texas-specific insurance laws and regulations that protect
            policyholders.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-law-gold">
            <h3 className="text-2xl font-serif text-law-purple mb-4">Texas Insurance Code</h3>
            <p className="text-gray-700 mb-4">
              Chapters 541 and 542 of the Texas Insurance Code provide powerful protections against unfair claim
              practices and delayed payments. These statutes enable recovery of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
              <li>Compensation for the original claim amount</li>
              <li>18% annual interest on delayed claims</li>
              <li>Attorney's fees and court costs</li>
              <li>Up to three times the actual damages in cases of willful violations</li>
            </ul>
            <p className="text-gray-700">
              Our attorneys leverage these laws to maximize your recovery when insurance companies act in bad faith.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-law-gold">
            <h3 className="text-2xl font-serif text-law-purple mb-4">Texas Supreme Court Decisions</h3>
            <p className="text-gray-700 mb-4">
              We stay current with evolving case law that affects insurance claims in Texas, including:
            </p>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Gavel className="h-5 w-5 text-law-gold mr-3" />
                  <h4 className="font-medium text-law-purple">USAA Tex. Lloyds Co. v. Menchaca, 545 S.W.3d 479, 489–500 (Tex. 2018)</h4>
                </div>
                <p className="text-gray-700 mt-2">
                  A statutory violation alone does not create coverage. Recovery generally requires a right to policy benefits or an injury independent of that right. The opinion explains the entitled-to-benefits, benefits-lost, and independent-injury rules; without benefits or an independent injury, the insured cannot recover damages for the violation.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <div className="flex items-center">
                  <Gavel className="h-5 w-5 text-law-gold mr-3" />
                  <h4 className="font-medium text-law-purple">Barbara Techs. Corp. v. State Farm Lloyds, 589 S.W.3d 806, 819–23 (Tex. 2019)</h4>
                </div>
                <p className="text-gray-700 mt-2">
                  Payment of an appraisal award neither establishes policy liability by itself nor automatically forecloses prompt-payment damages. The insured must establish the statutory requirements for recovery.
                </p>
              </div>
              <div>
                <div className="flex items-center">
                  <Gavel className="h-5 w-5 text-law-gold mr-3" />
                  <h4 className="font-medium text-law-purple">Ortiz v. State Farm Lloyds, 589 S.W.3d 127, 132–35 (Tex. 2019)</h4>
                </div>
                <p className="text-gray-700 mt-2">
                  Payment barred the contract claim and bad-faith claims insofar as the only actual damages sought were unpaid benefits. The prompt-payment claim could proceed; an independent injury requires separate proof.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-law-gold mr-3" />
                <Link
                  to="/insurance-glossary"
                  className="font-medium text-law-purple hover:text-law-gold transition-colors"
                >
                  View our Insurance Terms Glossary
                </Link>
              </div>
              <p className="text-gray-700 mt-2">
                Understanding policy language is critical to protecting your rights. Our comprehensive glossary explains
                common insurance terms in plain language.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TexasInsuranceInfo;
