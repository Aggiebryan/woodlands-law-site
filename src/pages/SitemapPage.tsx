
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";

interface SitemapCategory {
  title: string;
  links: { name: string; url: string }[];
}

const SitemapPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sitemapData: SitemapCategory[] = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Our Team", url: "/our-team" },
        { name: "Services", url: "/services" },
        { name: "News & Events", url: "/news-events" },
        { name: "About Us", url: "/about" },
        { name: "Schedule a Consultation", url: "/schedule" },
      ]
    },
    {
      title: "Practice Areas",
      links: [
        { name: "Insurance Litigation", url: "/practice-areas/insurance-litigation" },
        { name: "Personal Injury", url: "/practice-areas/personal-injury" },
        { name: "Civil Litigation", url: "/practice-areas/civil-litigation" },
        { name: "Deceptive Trade Practices Act", url: "/practice-areas/deceptive-trade-practices-act" },
        { name: "Business Planning", url: "/practice-areas/business-planning" },
        { name: "Estate Planning", url: "/practice-areas/estate-planning" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Insurance Glossary", url: "/insurance-glossary" },
        { name: "Trusts", url: "/trusts" },
      ]
    },
    {
      title: "Legal Information",
      links: [
        { name: "Attorney Advertising", url: "/attorney-advertising" },
        { name: "Privacy Policy", url: "/privacy-policy" },
      ]
    },
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl text-white font-serif font-semibold mb-2 flex items-center">
            <FileText className="mr-3" size={32} />
            Sitemap
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="mb-8 text-gray-700">
              Welcome to our sitemap page. This page provides an overview of all sections and pages available on our website.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sitemapData.map((category, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-xl font-serif font-medium text-law-purple mb-4">
                    {category.title}
                  </h2>
                  <div className="gold-underline mb-4"></div>
                  <ul className="space-y-2">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.url}
                          className="text-gray-700 hover:text-law-gold transition-colors flex items-center"
                        >
                          <span className="mr-2">•</span> {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-serif font-medium text-law-purple mb-4">
                XML Sitemap
              </h3>
              <p className="text-gray-700 mb-4">
                If you're looking for our XML sitemap for search engines, you can access it here:
              </p>
              <a 
                href="/sitemap.xml"
                className="bg-law-purple hover:bg-law-purple-light text-white font-medium py-2 px-4 rounded transition-colors inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2" size={16} />
                View XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
