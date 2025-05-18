
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
interface AttorneyInfo {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string | JSX.Element;
  education?: string[];
  admissions?: string[];
  awards?: string[];
}
const AttorneyProfilePage = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const attorneys: Record<string, AttorneyInfo> = {
    "gwendolyn-simpson": {
      id: "gwendolyn-simpson",
      name: "Gwendolyn Simpson",
      title: "Managing Attorney",
      image: "/gwen600800flag.webp",
      bio: <>
          <p className="mb-4 text-justify">
            Gwendolyn Simpson is a native Houstonian and a graduate of Baylor Law School. Experienced in the legal field since 1998, and licensed in 2007, Ms. Simpson founded a general practice civil firm and has been assisting clients with legal matters involving civil litigation, transactions, probate, and personal injury ever since. In addition to her private practice, Ms. Simpson was the staff attorney to the Honorable Kathleen Hamilton in the 359th Judicial District Court in Montgomery County, Texas.
          </p>
          <p className="mb-4 text-justify">
            In 2012, she was voted in by the Board of Judges to sit as a Master/Referee for the 359th District Court. In 2015, Ms. Simpson was tapped by Montgomery County to assist in the development and administration of Montgomery County's Veterans' Treatment Court. Additionally, Ms. Simpson developed curriculum that was approved by the American Bar Association. She taught legal courses in both traditional and virtual formats to students nationwide as an adjunct professor for the Center for Advanced Legal Studies.
          </p>
          <p className="mb-4 text-justify">
            Ms. Simpson has been a member of the prestigious College of the State Bar and is a certified mediator. For several years, she has been honored for her outstanding contributions by the Pro Bono College of the State Bar for her contributions to low-income Texans.
          </p>
          <p className="mb-4 text-justify">
            She currently practices in Montgomery, Harris, and the surrounding counties and is licensed to practice in the State of Texas and the U.S. Southern District of Texas.
          </p>
          <p className="mb-4">
            In her downtime, Ms. Simpson enjoys time with her family, reading historical fiction, and traveling.
          </p>
        </>,
      education: ["J.D., Baylor Law School", "B.A., University of Houston"],
      admissions: ["State Bar of Texas", "U.S. District Court, Southern District of Texas"],
      awards: ["Pro Bono College of the State Bar", "College of the State Bar of Texas"]
    },
    "bryan-holman": {
      id: "bryan-holman",
      name: "Bryan C. Holman",
      title: "Associate Attorney",
      image: "/bryanflag600800.webp",
      bio: <>
          <p className="mb-4 text-justify">
            Born and raised in Texas, Bryan Holman has dedicated his life to professional excellence and unwavering service. A proud graduate of Texas A&M University, Bryan earned a Bachelor of Science degree, laying a solid foundation for his future academic endeavors. He continued his education by earning a Juris Doctor from the South Texas College of Law.
          </p>
          <p className="mb-4 text-justify">
            Bryan's professional career began in 1999 as an insurance adjuster, where, for nearly 14 years, he represented some of the largest insurance companies in administering claims resulting from a wide range of natural disasters, including hurricanes, floods, blizzards, and firestorms. Bryan's work instilled in him a deep appreciation and passion for the nuances of the law, particularly regarding the legal issues associated with those claims.
          </p>
          <p className="mb-4 text-justify">
            Ever the entrepreneur, Bryan owned and operated a furniture store in Mesquite, Texas, for several years with his wife. Simultaneously, he established a construction and home inspection company in Houston, highlighting his abilities to develop and manage multifaceted businesses.
          </p>
          <p className="mb-4 text-justify">
            Bryan was instrumental at Reynolds & Reynolds in consulting and facilitating the sale and use of software and computer systems for automotive dealerships across the United States. His precision and attention to detail were particularly evident as he prepared contracts for some of the most prestigious automotive groups throughout the country.
          </p>
          <p className="mb-4 text-justify">
            Away from the professional sphere, Bryan is a devoted family man. He treasures the time he spends with his wife and family. He enjoys spending time working with computers, cars, and technology. An outdoor enthusiast, Bryan and his family love to camp, fish, and explore the beauty of nature.
          </p>
        </>,
      education: ["J.D., South Texas College of Law", "B.S., Texas A&M University", "A.S., Blinn College"],
      admissions: ["State Bar of Texas", "U.S. District Court, Southern District of Texas"]
    },
    "courtney-fields": {
      id: "courtney-fields",
      name: "Courtney Fields",
      title: "Legal Assistant",
      image: "/Courtneyblack background.webp",
      bio: <>
          <p className="mb-4 text-justify">
            Courtney Fields is a dedicated legal assistant with several years of experience in the legal field. Her meticulous attention to detail and exceptional organizational skills are vital to the smooth operation of our firm. She manages client communications, document preparation, and case file organization with remarkable efficiency.
          </p>
          <p className="mb-4 text-justify">
            As the first point of contact for many clients, Courtney excels at making people feel comfortable and understood during what can often be stressful legal situations. Her warm demeanor and professional approach help build strong client relationships from the very first interaction.
          </p>
          <p className="mb-4 text-justify">
            Courtney's background includes specialized training in legal document preparation, client intake procedures, and office administration. Her technical proficiency with legal software systems and electronic filing processes ensures that all case documentation is properly managed and readily accessible.
          </p>
          <p className="mb-4 text-justify">
            Working closely with our attorneys, Courtney provides crucial support by coordinating schedules, preparing correspondence, and assisting with research. Her ability to anticipate needs and solve problems proactively makes her an indispensable member of our legal team.
          </p>
          <p className="mb-4">
            Outside of work, Courtney enjoys hiking, photography, and spending time with her family. Her community involvement includes volunteer work with local youth organizations.
          </p>
        </>,
      education: ["Paralegal Certificate, Houston Community College", "B.A. in Communication Studies, University of Houston"]
    }
  };
  const attorney = attorneys[id as string];
  if (!attorney) {
    return <div className="pt-20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-serif text-law-purple mb-4">Attorney Not Found</h1>
          <p className="mb-6">The attorney profile you are looking for does not exist.</p>
          <Link to="/our-team" className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-8 rounded transition-colors inline-block">
            Back to Our Team
          </Link>
        </div>
      </div>;
  }
  return <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            {attorney.name}
          </h1>
          <div className="gold-underline"></div>
          <p className="text-white/80 mt-4 text-xl">{attorney.title}</p>
        </div>
      </div>

      {/* Attorney Profile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="rounded-lg overflow-hidden mb-6">
                <img src={attorney.image} alt={attorney.name} className="w-full h-auto object-cover" />
              </div>
              
              {attorney.education && <div className="mb-8">
                  <h3 className="text-xl font-serif text-law-purple mb-3">Education</h3>
                  <ul className="space-y-2">
                    {attorney.education.map((item, index) => <li key={index} className="text-gray-600">{item}</li>)}
                  </ul>
                </div>}
              
              {attorney.admissions && <div className="mb-8">
                  <h3 className="text-xl font-serif text-law-purple mb-3">Bar Admissions</h3>
                  <ul className="space-y-2">
                    {attorney.admissions.map((item, index) => <li key={index} className="text-gray-600">{item}</li>)}
                  </ul>
                </div>}
              
              {attorney.awards && <div className="mb-8">
                  <h3 className="text-xl font-serif text-law-purple mb-3">Honors & Awards</h3>
                  <ul className="space-y-2">
                    {attorney.awards.map((item, index) => <li key={index} className="text-gray-600">{item}</li>)}
                  </ul>
                </div>}
              
              <Link to="/contact" className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-3 px-6 rounded transition-colors inline-block w-full text-center">
                Schedule a Consultation
              </Link>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-law-purple mb-6">Biography</h2>
              <div className="prose max-w-none text-gray-600">
                {attorney.bio}
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/our-team" className="border border-law-purple text-law-purple hover:bg-law-purple hover:text-white font-medium py-3 px-6 rounded transition-colors inline-block text-center">
                  Back to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AttorneyProfilePage;
