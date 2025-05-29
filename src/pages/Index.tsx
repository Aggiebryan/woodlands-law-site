
import Hero from "../components/Hero";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CtaSection from "../components/CtaSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>The Woodlands Law Firm | Texas DTPA, Insurance & Personal Injury Attorneys | Montgomery County</title>
        <meta name="description" content="Experienced Texas civil litigation attorneys serving The Woodlands and Montgomery County. Specializing in DTPA violations, insurance disputes, personal injury, and estate planning. Proven results in Texas state and federal courts." />
        <meta name="keywords" content="DTPA attorney The Woodlands, insurance litigation Texas, personal injury lawyer Montgomery County, estate planning attorney Texas, civil litigation The Woodlands" />
        <meta property="og:title" content="The Woodlands Law Firm | Texas Civil Litigation Attorneys" />
        <meta property="og:description" content="Serving The Woodlands and Montgomery County with expert legal representation in DTPA, insurance disputes, personal injury, and estate planning matters." />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="The Woodlands, Texas" />
        <meta name="geo.position" content="30.1588;-95.4613" />
        <meta name="ICBM" content="30.1588, -95.4613" />
        <link rel="canonical" href="https://woodlands.law" />
      </Helmet>
      <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </>
  );
};

export default Index;