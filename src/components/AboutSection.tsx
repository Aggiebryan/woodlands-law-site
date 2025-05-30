import { Shield, Scale, Users, Award, MapPin, Building } from "lucide-react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-law-purple mb-4">
              Dedicated Texas Civil Litigation Attorneys
            </h2>
            <div className="gold-underline mb-6"></div>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed text-justify">
              The Woodlands Law Firm represents plaintiffs in complex civil litigation matters throughout Montgomery County and Harris County. Our practice focuses exclusively on cases where individuals and businesses need aggressive advocacy against insurance companies, deceptive business practices, and personal injury claims.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-justify">
              We concentrate our practice in four core areas: Texas Deceptive Trade Practices Act violations, insurance coverage disputes under Texas Insurance Code Chapters 541 and 542, personal injury litigation, and comprehensive estate planning. This focused approach allows us to develop deep expertise in the specific laws, procedures, and strategies that benefit our clients.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-justify">
              Licensed to practice in Texas state courts and the U.S. District Court for the Southern District of Texas, we handle cases in Montgomery County District Courts, Harris County District Courts, and federal court when appropriate. Our litigation experience spans from initial demand letters through jury trials and post-judgment collection.
            </p>

            <Link 
              to="/our-team" 
              className="inline-flex items-center bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-6 rounded transition-colors"
            >
              Meet Our Team
              <Users className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="space-y-6">
            <div className="bg-law-gray-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Scale className="h-6 w-6 text-law-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif text-law-purple mb-2">Plaintiff-Focused Practice</h3>
                  <p className="text-gray-700">
                    We represent individuals and businesses in disputes against insurance companies, corporations, and other defendants who have caused harm through negligence or deceptive practices.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-law-gray-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Shield className="h-6 w-6 text-law-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif text-law-purple mb-2">Texas Law Expertise</h3>
                  <p className="text-gray-700">
                    Deep knowledge of Texas Insurance Code, Deceptive Trade Practices Act, Texas Rules of Civil Procedure, and local court practices in Montgomery and Harris Counties.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-law-gray-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <Award className="h-6 w-6 text-law-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-serif text-law-purple mb-2">Trial-Ready Advocacy</h3>
                  <p className="text-gray-700">
                    Every case is prepared for trial from day one. This preparation strengthens settlement negotiations and ensures readiness for courtroom advocacy when needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Statistics & Credentials */}
        <div className="bg-law-purple py-12 rounded-lg mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <Building className="h-8 w-8 text-law-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Two Counties</h3>
              <p className="text-white/90">Montgomery & Harris County District Court Practice</p>
            </div>
            <div>
              <Scale className="h-8 w-8 text-law-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Our Practice Areas</h3>
              <p className="text-white/90">DTPA, Insurance, Personal Injury, Civil Litigation, Business Planning & Estate Planning</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-law-gold mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">State & Federal</h3>
              <p className="text-white/90">Texas Courts & U.S. District Court Southern District</p>
            </div>
          </div>
        </div>

        {/* Geographic Service Area Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-law-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-law-purple mb-4">Montgomery County Practice</h3>
            <p className="text-gray-700 mb-4">
              Primary service area covering The Woodlands, Conroe, Spring, Magnolia, Tomball, and surrounding communities. Regular practice in Montgomery County District Courts with established relationships throughout the local legal community.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Montgomery County District Courts</li>
              <li>Local court procedure expertise</li>
              <li>Community-focused representation</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Building className="h-12 w-12 text-law-gold mx-auto mb-4" />
            <h3 className="text-xl font-serif text-law-purple mb-4">Harris County Extension</h3>
            <p className="text-gray-700 mb-4">
              Extended representation throughout Harris County District Courts for complex litigation matters. Federal court practice available in the U.S. District Court for the Southern District of Texas when federal jurisdiction applies.
            </p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Harris County District Courts</li>
              <li>Federal court representation</li>
              <li>Complex litigation experience</li>
            </ul>
          </div>
        </div>

        {/* Legal Philosophy & Approach */}
        <div className="bg-law-gray-light p-8 rounded-lg text-center">
          <h3 className="text-2xl font-serif text-law-purple mb-6">Our Legal Philosophy</h3>
          <p className="text-lg text-gray-700 mb-6 max-w-4xl mx-auto leading-relaxed">
            Effective civil litigation requires thorough preparation, aggressive advocacy, and deep understanding of applicable law. We believe in holding defendants accountable for their actions, whether through insurance bad faith, deceptive trade practices, negligence, or other wrongful conduct. Our approach combines meticulous case preparation with strategic negotiation and trial-ready advocacy.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every client receives personal attention from experienced attorneys who understand both the legal complexities and practical realities of civil litigation in Texas courts. We work on a contingency fee basis for most litigation matters, ensuring our interests align with achieving the best possible outcome for our clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;