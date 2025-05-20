
import React from "react";
import { CheckCircle, XCircle } from "lucide-react";

const EstatePlanningComparison = () => {
  const comparisonData = [
    {
      feature: "Avoids Probate",
      will: false,
      revocableTrust: true,
      irrevocableTrust: true
    },
    {
      feature: "Privacy Protection",
      will: false,
      revocableTrust: true,
      irrevocableTrust: true
    },
    {
      feature: "Asset Protection from Creditors",
      will: false,
      revocableTrust: false,
      irrevocableTrust: true
    },
    {
      feature: "Control During Lifetime",
      will: true,
      revocableTrust: true,
      irrevocableTrust: false
    },
    {
      feature: "Protection for Incapacity",
      will: false,
      revocableTrust: true,
      irrevocableTrust: true
    },
    {
      feature: "Estate Tax Reduction",
      will: false,
      revocableTrust: false,
      irrevocableTrust: true
    },
    {
      feature: "Medicaid Planning Benefits",
      will: false,
      revocableTrust: false,
      irrevocableTrust: true
    },
    {
      feature: "Ease of Setup",
      will: true,
      revocableTrust: false,
      irrevocableTrust: false
    }
  ];

  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Estate Planning Options Comparison
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Different estate planning tools serve different purposes. Understanding the advantages 
            and limitations of each option will help you make informed decisions about your legacy.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-law-purple text-white">
                <th className="py-4 px-6 text-left">Feature</th>
                <th className="py-4 px-6 text-center">Will</th>
                <th className="py-4 px-6 text-center">Revocable Trust</th>
                <th className="py-4 px-6 text-center">Irrevocable Trust</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-3 px-6 font-medium">{row.feature}</td>
                  <td className="py-3 px-6 text-center">
                    {row.will ? 
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    }
                  </td>
                  <td className="py-3 px-6 text-center">
                    {row.revocableTrust ? 
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    }
                  </td>
                  <td className="py-3 px-6 text-center">
                    {row.irrevocableTrust ? 
                      <CheckCircle className="h-5 w-5 text-green-600 mx-auto" /> : 
                      <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            The right combination of estate planning tools depends on your unique situation. 
            Our attorneys can help determine the optimal strategy for your specific needs and goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EstatePlanningComparison;
