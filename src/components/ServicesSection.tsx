import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Texas DTPA Litigation",
      icon: "⚖️",
      shortDescription: "Consumer protection claims under the Texas Deceptive Trade Practices Act",
      detailedDescription: "Representation in complex DTPA violations including false advertising, warranty breaches, and unfair business practices. Our experience includes statutory damages, attorney's fees recovery, and treble damages under Chapter 17 of the Texas Business & Commerce Code.",
      keyServices: [
        "Consumer fraud and deceptive practices",
        "Warranty violation claims",
        "False advertising litigation",
        "Unfair business practice disputes",
        "DTPA statutory damages recovery",
        "Attorney's fees under Texas Civil Practice & Remedies Code"
      ],
      link: "/practice-areas/deceptive-trade-practices-act",
      caseTypes: "DTPA violations, consumer protection, unfair competition, warranty disputes"
    },
    {
      title: "Insurance Litigation",
      icon: "🏢",
      shortDescription: "Bad faith insurance claims and coverage disputes under Texas Insurance Code",
      detailedDescription: "Comprehensive representation in insurance disputes including bad faith claims, coverage denials, and violations of Texas Insurance Code Chapters 541 and 542. We handle first-party and third-party insurance disputes across all coverage types.",
      keyServices: [
        "Bad faith insurance claims",
        "Coverage dispute litigation",
        "Texas Insurance Code violations",
        "Prompt payment act claims",
        "Property damage claim disputes",
        "Underinsured/uninsured motorist claims"
      ],
      link: "/practice-areas/insurance-litigation",
      caseTypes: "Insurance bad faith, coverage disputes, claim denials, prompt payment violations"
    },
    {
      title: "Personal Injury Law",
      icon: "🚗",
      shortDescription: "Motor vehicle accidents, premises liability, and negligence claims",
      detailedDescription: "Aggressive representation for injury victims throughout Montgomery County. Our practice includes motor vehicle accidents, premises liability, product liability, and wrongful death claims with focus on maximum compensation recovery.",
      keyServices: [
        "Motor vehicle accident litigation",
        "Premises liability claims",
        "Product liability disputes",
        "Wrongful death litigation",
        "Catastrophic injury cases",
        "Medical malpractice claims"
      ],
      link: "/practice-areas/personal-injury",
      caseTypes: "Auto accidents, slip and fall, product defects, medical negligence, wrongful death"
    },
    {
      title: "Estate Planning & Probate",
      icon: "📝",
      shortDescription: "Comprehensive estate planning and probate administration under Texas law",
      detailedDescription: "Full-service estate planning including wills, trusts, probate administration, and asset protection strategies. Our practice emphasizes tax-efficient planning and family wealth preservation under the Texas Estates Code and Texas Property Code.",
      keyServices: [
        "Will and trust preparation",
        "Probate administration",
        "Estate tax planning",
        "Asset protection strategies",
        "Business succession planning",
        "Guardianship proceedings"
      ],
      link: "/practice-areas/estate-planning",
      caseTypes: "Wills, trusts, probate, estate administration, guardianship, asset protection"
    }
  ];

  return (
    <section className="py-20 bg-law-gray-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-law-purple mb-6">
              Comprehensive Legal Services in Texas
            </h2>
            <div className="gold-underline mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Woodlands Law Firm provides focused legal representation across four core practice areas, with extensive experience in Texas state and federal courts throughout Montgomery County and surrounding jurisdictions.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">{service.icon}</span>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold text-law-purple mb-2">
                        {service.title}
                      </h3>
                      <p className="text-law-gold font-medium text-sm uppercase tracking-wide">
                        {service.caseTypes}
                      </p>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-gray-700 mb-4 font-medium">
                    {service.shortDescription}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.detailedDescription}
                  </p>

                  {/* Key Services */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-law-purple mb-3">Key Services Include:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.keyServices.map((keyService, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-law-gold rounded-full mr-3 flex-shrink-0"></div>
                          {keyService}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link 
                    to={service.link}
                    className="inline-flex items-center bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Jurisdictional Information */}
          <div className="bg-law-purple text-white rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif font-semibold mb-4">
                Texas Court Experience & Jurisdictional Coverage
              </h3>
              <p className="text-white/90 max-w-3xl mx-auto">
                Licensed to practice in Texas state courts and federal district courts, with regular appearances throughout Montgomery County and surrounding jurisdictions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-3">Montgomery County District Courts</h4>
                <div className="text-white/80 text-sm space-y-1">
                  <div>• 9th Judicial District</div>
                  <div>• 221st Judicial District</div>
                  <div>• 284th Judicial District</div>
                  <div>• 359th Judicial District</div>
                  <div>• 410th Judicial District</div>
                  <div>• 435th Judicial District</div>
                  <div>• 457th Judicial District</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Federal Court Experience</h4>
                <div className="text-white/80 text-sm space-y-1">
                  <div>• U.S. District Court, Southern District of Texas</div>
                  <div>• U.S. District Court, Eastern District of Texas</div>
                  <div>• Fifth Circuit Court of Appeals</div>
                  <div>• Bankruptcy Courts</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Appellate Experience</h4>
                <div className="text-white/80 text-sm space-y-1">
                  <div>• Texas Court of Appeals</div>
                  <div>• Texas Supreme Court</div>
                  <div>• Fifth Circuit Appeals</div>
                  <div>• Federal Circuit Appeals</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold text-law-purple mb-4">
              Ready to Discuss Your Legal Matter?
            </h3>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact The Woodlands Law Firm to schedule a consultation and discuss how our experience in Texas civil litigation can help protect your interests and achieve your legal objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/schedule"
                className="bg-law-gold hover:bg-law-gold-light text-law-purple font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                Schedule Consultation
              </Link>
              <Link 
                to="/services"
                className="border-2 border-law-purple text-law-purple hover:bg-law-purple hover:text-white font-semibold py-4 px-8 rounded-lg transition-all text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;