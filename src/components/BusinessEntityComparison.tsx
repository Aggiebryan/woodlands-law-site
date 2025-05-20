
import React from "react";
import { CheckCircle, XCircle, MinusCircle } from "lucide-react";

const BusinessEntityComparison = () => {
  const comparisonData = [
    {
      feature: "Personal Asset Protection",
      soleProprietor: "none",
      partnership: "none",
      llc: "yes",
      scorp: "yes",
      ccorp: "yes"
    },
    {
      feature: "Pass-Through Taxation",
      soleProprietor: "yes",
      partnership: "yes",
      llc: "yes",
      scorp: "yes",
      ccorp: "no"
    },
    {
      feature: "Operational Flexibility",
      soleProprietor: "yes",
      partnership: "partial",
      llc: "yes",
      scorp: "partial",
      ccorp: "partial"
    },
    {
      feature: "Ease of Formation",
      soleProprietor: "yes",
      partnership: "yes",
      llc: "partial",
      scorp: "no",
      ccorp: "no"
    },
    {
      feature: "Ongoing Compliance",
      soleProprietor: "minimal",
      partnership: "minimal",
      llc: "moderate",
      scorp: "significant",
      ccorp: "significant"
    },
    {
      feature: "Ability to Raise Capital",
      soleProprietor: "limited",
      partnership: "moderate",
      llc: "moderate",
      scorp: "moderate",
      ccorp: "extensive"
    },
    {
      feature: "Ownership Restrictions",
      soleProprietor: "n/a",
      partnership: "none",
      llc: "none",
      scorp: "significant",
      ccorp: "none"
    }
  ];

  const renderStatus = (status) => {
    switch(status) {
      case "yes":
        return <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />;
      case "no":
        return <XCircle className="h-5 w-5 text-red-500 mx-auto" />;
      case "partial":
      case "moderate":
        return <MinusCircle className="h-5 w-5 text-amber-500 mx-auto" />;
      case "minimal":
        return <CheckCircle className="h-5 w-5 text-green-600 mx-auto opacity-70" />;
      case "limited":
        return <XCircle className="h-5 w-5 text-red-500 mx-auto opacity-70" />;
      case "significant":
        return <XCircle className="h-5 w-5 text-red-500 mx-auto" />;
      case "extensive":
        return <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />;
      case "n/a":
      case "none":
      default:
        return <span className="text-sm text-gray-500">N/A</span>;
    }
  };

  return (
    <section className="py-16 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-law-purple mb-4">
            Business Entity Comparison
          </h2>
          <div className="gold-underline mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            Selecting the right business structure is one of the most important decisions 
            you'll make. Each entity type offers different advantages and considerations.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-law-purple text-white">
                <th className="py-4 px-4 text-left">Feature</th>
                <th className="py-4 px-4 text-center">Sole Proprietor</th>
                <th className="py-4 px-4 text-center">Partnership</th>
                <th className="py-4 px-4 text-center">LLC</th>
                <th className="py-4 px-4 text-center">S-Corporation</th>
                <th className="py-4 px-4 text-center">C-Corporation</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                  <td className="py-3 px-4 font-medium">{row.feature}</td>
                  <td className="py-3 px-4 text-center">{renderStatus(row.soleProprietor)}</td>
                  <td className="py-3 px-4 text-center">{renderStatus(row.partnership)}</td>
                  <td className="py-3 px-4 text-center">{renderStatus(row.llc)}</td>
                  <td className="py-3 px-4 text-center">{renderStatus(row.scorp)}</td>
                  <td className="py-3 px-4 text-center">{renderStatus(row.ccorp)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 max-w-3xl mx-auto">
            The optimal business structure depends on your specific goals, industry, growth plans, and tax considerations.
            Our attorneys can help you evaluate these factors and select the most advantageous structure for your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessEntityComparison;
