import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-law-purple py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-law-purple to-law-purple-light opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Texas Civil Litigation Attorneys Serving The Woodlands & Montgomery County
          </h1>
          
          <div className="gold-underline mx-auto mb-8"></div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experienced legal representation in Texas state and federal courts for DTPA violations, insurance disputes, personal injury claims, and comprehensive estate planning throughout Montgomery County.
          </p>
          
          {/* Core Practice Areas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">⚖️</div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                DTPA Litigation
              </h3>
              <p className="text-white/80 text-sm">
                Texas Deceptive Trade Practices Act violations, consumer protection, and unfair business practices under Chapter 17 of the Texas Business & Commerce Code
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Insurance Disputes
              </h3>
              <p className="text-white/80 text-sm">
                Bad faith insurance claims, coverage disputes, and Texas Insurance Code violations including Chapters 541 and 542 statutory violations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🚗</div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Personal Injury
              </h3>
              <p className="text-white/80 text-sm">
                Motor vehicle accidents, premises liability, and negligence claims throughout Montgomery County and surrounding Texas jurisdictions
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">
                Estate Planning
              </h3>
              <p className="text-white/80 text-sm">
                Wills, trusts, probate administration, and asset protection strategies under the Texas Estates Code and Texas Property Code
              </p>
            </div>
          </div>
          
          {/* Geographic Service Area */}
          <div className="mb-10">
            <p className="text-lg text-white/90 mb-4">
              <strong>Serving Montgomery County Communities:</strong> The Woodlands, Conroe, Spring, Magnolia, Tomball, Cypress, and surrounding Texas areas
            </p>
            <p className="text-white/80">
              Licensed to practice in Texas state courts and the United States District Courts for the Southern and Eastern Districts of Texas
            </p>
          </div>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          
          {/* Key Differentiators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-law-gold mb-2">Texas-Focused</div>
                <p className="text-white/80 text-sm">Extensive knowledge of Texas civil procedure, statutory requirements, and local court practices in Montgomery County</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-law-gold mb-2">Plaintiff-Side</div>
                <p className="text-white/80 text-sm">Dedicated to representing individuals and businesses seeking compensation and justice through civil litigation</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-law-gold mb-2">Results-Driven</div>
                <p className="text-white/80 text-sm">Proven track record in DTPA, insurance bad faith, and personal injury cases throughout The Woodlands area</p>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="mt-8 text-white/80">
            <p className="mb-2">
              <strong>Office:</strong> 2219 Sawdust Rd., Suite 803, The Woodlands, TX 77380
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:8326260116" className="text-law-gold hover:text-law-gold-light">(832) 626-0116</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
