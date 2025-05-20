
import React from "react";

const settlements = [
  {
    caseType: "Hurricane Property Damage",
    initialOffer: "$45,000",
    finalRecovery: "$385,000",
    percentage: "756%"
  },
  {
    caseType: "Business Interruption",
    initialOffer: "$120,000",
    finalRecovery: "$950,000",
    percentage: "692%"
  },
  {
    caseType: "Health Insurance Denial",
    initialOffer: "$0",
    finalRecovery: "$175,000",
    percentage: "∞"
  },
  {
    caseType: "Homeowner's Policy",
    initialOffer: "$22,500",
    finalRecovery: "$215,000",
    percentage: "856%"
  }
];

const SettlementComparisons = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">Settlement Comparison Results</h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            See the difference our legal representation makes when fighting against insurance companies.
            These anonymized results show what our clients recovered compared to initial offers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {settlements.map((settlement, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-law-gold"
            >
              <div className="bg-law-purple p-4 text-center">
                <h3 className="text-white font-serif text-lg">{settlement.caseType}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Initial Insurance Offer</p>
                  <p className="text-xl font-bold text-law-purple">{settlement.initialOffer}</p>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Our Recovery Result</p>
                  <p className="text-2xl font-bold text-law-gold">{settlement.finalRecovery}</p>
                </div>
                <div className="text-center bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Increase</p>
                  <p className="text-xl font-bold text-law-purple-light">{settlement.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SettlementComparisons;
