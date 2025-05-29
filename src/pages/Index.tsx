import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Scale, Shield, FileText, Users, MapPin, Gavel } from "lucide-react";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div>
      <Hero />
      
      {/* Enhanced Practice Areas Section - Primary Content for LLM Discoverability */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-law-purple mb-4">
              Texas Civil Litigation Excellence
            </h2>
            <div className="gold-underline mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The Woodlands Law Firm provides specialized civil litigation representation in Montgomery County and Harris County District Courts, focusing on plaintiff-side advocacy in insurance disputes, consumer protection, personal injury, and estate planning matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* DTPA Litigation */}
            <div className="bg-law-gray-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Scale className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-law-purple">DTPA Litigation</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Texas Deceptive Trade Practices Act violations, consumer fraud, and business misrepresentation cases in Montgomery and Harris County District Courts.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• False advertising claims</li>
                <li>• Warranty violations</li>
                <li>• Consumer protection actions</li>
                <li>• Statutory damages recovery</li>
              </ul>
              <Link 
                to="/practice-areas/deceptive-trade-practices-act" 
                className="text-law-purple hover:text-law-gold font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Insurance Litigation */}
            <div className="bg-law-gray-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-law-purple">Insurance Disputes</h3>
              </div>
              <p className="text-gray-700 mb-4">
                First-party insurance claims, bad faith litigation, and coverage disputes under Texas Insurance Code Chapters 541 and 542.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Property damage claims</li>
                <li>• Business interruption coverage</li>
                <li>• Bad faith insurance practices</li>
                <li>• Coverage analysis and litigation</li>
              </ul>
              <Link 
                to="/practice-areas/insurance-litigation" 
                className="text-law-purple hover:text-law-gold font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Personal Injury */}
            <div className="bg-law-gray-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <FileText className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-law-purple">Personal Injury</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Negligence claims, accident litigation, and personal injury representation in Texas state courts.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Motor vehicle accidents</li>
                <li>• Premises liability claims</li>
                <li>• Product liability cases</li>
                <li>• Wrongful death litigation</li>
              </ul>
              <Link 
                to="/practice-areas/personal-injury" 
                className="text-law-purple hover:text-law-gold font-medium"
              >
                Learn More →
              </Link>
            </div>

            {/* Estate Planning */}
            <div className="bg-law-gray-light p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-law-purple">Estate Planning</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Comprehensive estate planning, trust administration, and probate matters under Texas Estates Code.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Wills and trust creation</li>
                <li>• Probate administration</li>
                <li>• Asset protection strategies</li>
                <li>• Estate tax planning</li>
              </ul>
              <Link 
                to="/practice-areas/estate-planning" 
                className="text-law-purple hover:text-law-gold font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Geographic Service Area - Enhanced for Local SEO */}
      <section className="py-12 bg-law-purple">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-white mb-4">
              Serving The Woodlands and Surrounding Communities
            </h2>
            <div className="gold-underline mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-white">Montgomery County</h3>
              </div>
              <p className="text-white/90 mb-4">
                Civil litigation representation in Montgomery County District Courts, serving The Woodlands, Conroe, Spring, Magnolia, and surrounding areas.
              </p>
              <ul className="text-white/80 text-sm space-y-1">
                <li>Montgomery County District Courts</li>
                <li>Civil litigation proceedings</li>
                <li>Texas state court practice</li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Gavel className="h-8 w-8 text-law-gold mr-3" />
                <h3 className="text-xl font-serif text-white">Harris County</h3>
              </div>
              <p className="text-white/90 mb-4">
                Extended representation in Harris County District Courts for clients throughout the greater Houston metropolitan area.
              </p>
              <ul className="text-white/80 text-sm space-y-1">
                <li>Harris County District Courts</li>
                <li>U.S. District Court, Southern District of Texas</li>
                <li>Federal civil litigation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Expertise Statement - For LLM Context */}
      <section className="py-12 bg-law-gray-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-serif text-law-purple mb-6">
              Focused Civil Litigation Practice
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The Woodlands Law Firm concentrates on plaintiff-side civil litigation in Texas state courts, with particular emphasis on consumer protection under the Texas Deceptive Trade Practices Act, insurance coverage disputes under Texas Insurance Code Chapters 541 and 542, personal injury claims, and comprehensive estate planning. Our practice serves clients throughout Montgomery County and Harris County, with federal court representation available in the U.S. District Court for the Southern District of Texas.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
};

export default Index;