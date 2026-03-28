import { Helmet } from "react-helmet-async";

const lawFirmSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "The Woodlands Law Firm",
  "url": "https://woodlands.law",
  "logo": "https://woodlands.law/images/307c4d37-d87e-4a89-8107-73533778d172.png",
  "image": "https://woodlands.law/images/846098cf-1b95-4252-ad7d-ecf6b1180d90.png",
  "description": "The Woodlands Law Firm provides civil litigation, insurance disputes, DTPA claims, personal injury, and estate planning representation in Montgomery County and Harris County, Texas.",
  "telephone": "+1-832-510-2625",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2002 Timberloch Place, Suite 200",
    "addressLocality": "The Woodlands",
    "addressRegion": "TX",
    "postalCode": "77380",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.1588,
    "longitude": -95.4613
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Montgomery County, Texas"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Harris County, Texas"
    }
  ],
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:30",
    "closes": "17:00"
  },
  "sameAs": [],
  "knowsAbout": [
    "Civil Litigation",
    "Insurance Disputes",
    "Texas Deceptive Trade Practices Act",
    "Personal Injury",
    "Estate Planning",
    "Business Planning",
    "Bad Faith Insurance Claims",
    "Consumer Protection"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "The Woodlands Law Firm",
  "url": "https://woodlands.law",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://woodlands.law/sitemap?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function StructuredData() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(lawFirmSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  );
}
