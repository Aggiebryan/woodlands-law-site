import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="py-20 bg-law-purple relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-law-purple to-law-purple-light opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-white mb-6">
            Experienced Texas Civil Litigation Attorneys
          </h2>
          
          <div className="gold-underline mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            When you need aggressive legal representation for DTPA violations, insurance disputes, personal injury claims, or comprehensive estate planning in Montgomery County, The Woodlands Law Firm provides the experience and dedication your case demands.
          </p>

          {/* Key Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Local Court Knowledge
              </h3>
              <p className="text-white/80 text-sm">
                Regular practice in Montgomery County District Courts with deep understanding of local procedures and judicial preferences
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Texas Law Focus
              </h3>
              <p className="text-white/80 text-sm">
                Concentrated practice in Texas DTPA, Insurance Code violations, and civil litigation with proven results
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-3">
                Plaintiff Advocacy
              </h3>
              <p className="text-white/80 text-sm">
                Dedicated representation for individuals and businesses seeking compensation and justice through civil litigation
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-10 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Schedule Your Consultation
                </h3>
                <p className="text-white/90 mb-4">
                  Contact our office to discuss your legal matter and learn how our experience in Texas civil litigation can help achieve your objectives.
                </p>
                <div className="text-white/80">
                  <p className="mb-2">
                    <strong>Phone:</strong> <a href="tel:8326260116" className="text-law-gold hover:text-law-gold-light transition-colors">(832) 626-0116</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:admin@woodlands.law" className="text-law-gold hover:text-law-gold-light transition-colors">admin@woodlands.law</a>
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Office Location
                </h3>
                <div className="text-white/90">
                  <p className="mb-2">
                    <strong>The Woodlands Law Firm</strong>
                  </p>
                  <p className="mb-2">
                    2219 Sawdust Rd., Suite 803<br />
                    The Woodlands, TX 77380
                  </p>
                  <p className="text-white/80 text-sm">
                    Convenient location serving Montgomery County and surrounding Texas communities
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              to="/schedule"
              className="bg-law-gold hover:bg-law-gold-light text-law-purple font-semibold py-4 px-8 rounded-lg transition-colors text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services"
              className="border-2 border-white text-white hover:bg-white hover:text-law-purple font-semibold py-4 px-8 rounded-lg transition-all text-lg"
            >
              View Practice Areas
            </Link>
          </div>

          {/* Service Area */}
          <div className="border-t border-white/20 pt-8">
            <h4 className="text-lg font-semibold text-white mb-4">
              Serving Montgomery and Harris County Communities
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-white/80 text-sm">
              <div>The Woodlands</div>
              <div>Conroe</div>
              <div>Magnolia</div>
              <div>Spring</div>
              <div>Tomball</div>
              <div>Cypress</div>
              <div>Houston</div>
              <div>Kingwood</div>
              <div>Shenandoah</div>
              <div>New Caney</div>
              <div>Porter</div>
              <div>Humble</div>
            </div>
            <p className="text-white/70 text-sm mt-4">
              Licensed to practice in Texas state courts and the United States District Courts for the Southern and Eastern Districts of Texas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;