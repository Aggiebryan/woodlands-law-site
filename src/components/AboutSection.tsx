const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-law-purple mb-6">
              Experienced Texas Civil Litigation Practice
            </h2>
            <div className="gold-underline mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The Woodlands Law Firm provides focused legal representation for individuals and businesses throughout Montgomery County, Texas. Our practice concentrates on plaintiff-side civil litigation with particular emphasis on consumer protection, insurance disputes, and comprehensive legal planning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-law-purple mb-6">
                Specialized Legal Expertise in Texas Law
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our legal practice focuses on complex civil litigation matters that require deep understanding of Texas statutes, procedural requirements, and local court practices. We represent clients in Montgomery County District Courts, Texas state appellate courts, and federal district courts throughout Texas.
                </p>
                <p>
                  The firm's approach emphasizes thorough case preparation, strategic litigation planning, and aggressive advocacy for our clients' rights under Texas law. Our experience includes significant matters involving the Texas Deceptive Trade Practices Act, Texas Insurance Code violations, and comprehensive estate planning under the Texas Estates Code.
                </p>
                <p>
                  We understand that effective legal representation requires not only knowledge of applicable law but also familiarity with local procedures, judicial preferences, and the unique characteristics of Montgomery County legal practice.
                </p>
              </div>
            </div>
            
            <div className="bg-law-gray-light p-8 rounded-lg">
              <h4 className="text-xl font-serif font-semibold text-law-purple mb-6">
                Core Practice Areas
              </h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-law-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-law-purple rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-law-purple mb-1">Texas DTPA Litigation</h5>
                    <p className="text-gray-600 text-sm">Consumer protection claims, unfair business practices, and statutory damages under Chapter 17 of the Texas Business & Commerce Code</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-law-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-law-purple rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-law-purple mb-1">Insurance Disputes</h5>
                    <p className="text-gray-600 text-sm">Bad faith claims, coverage disputes, and violations of Texas Insurance Code Chapters 541 and 542</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-law-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-law-purple rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-law-purple mb-1">Personal Injury Claims</h5>
                    <p className="text-gray-600 text-sm">Motor vehicle accidents, premises liability, and negligence matters throughout Montgomery County</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-law-gold rounded-full p-2 mr-4 mt-1">
                    <div className="w-2 h-2 bg-law-purple rounded-full"></div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-law-purple mb-1">Estate Planning</h5>
                    <p className="text-gray-600 text-sm">Wills, trusts, probate administration, and asset protection under Texas law</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographic Service Area and Local Court Knowledge */}
          <div className="bg-law-purple text-white rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-serif font-semibold mb-4">
                  Montgomery County Legal Practice
                </h4>
                <p className="text-white/90 mb-4">
                  Our firm maintains active practice before the Montgomery County District Courts, including the 9th, 221st, 284th, 359th, 410th, 435th, and 457th Judicial Districts. We regularly appear in Montgomery County Courts at Law and Justice of the Peace Courts throughout the county.
                </p>
                <p className="text-white/90">
                  This local court experience provides valuable insight into judicial preferences, local procedural practices, and the unique characteristics of Montgomery County legal proceedings.
                </p>
              </div>
              
              <div>
                <h4 className="text-xl font-serif font-semibold mb-4">
                  Communities Served
                </h4>
                <div className="grid grid-cols-2 gap-2 text-white/90">
                  <div>• The Woodlands</div>
                  <div>• Conroe</div>
                  <div>• Spring</div>
                  <div>• Magnolia</div>
                  <div>• Tomball</div>
                  <div>• Cypress</div>
                  <div>• Cut and Shoot</div>
                  <div>• Pinehurst</div>
                  <div>• Splendora</div>
                  <div>• New Caney</div>
                  <div>• Porter</div>
                  <div>• Humble</div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Philosophy and Approach */}
          <div className="text-center">
            <h3 className="text-2xl font-serif font-semibold text-law-purple mb-6">
              Client-Focused Legal Representation
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              Effective legal representation requires clear communication, thorough preparation, and unwavering advocacy for our clients' interests. We believe that successful litigation outcomes result from meticulous attention to legal detail, comprehensive understanding of applicable Texas law, and strategic case development tailored to each client's specific circumstances.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our approach emphasizes practical solutions, realistic case assessments, and aggressive pursuit of favorable resolutions through negotiation, mediation, or trial advocacy as circumstances require.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;