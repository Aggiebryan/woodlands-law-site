import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type RelatedLink = { title: string; to: string };

interface AnswerFirstDtpaPageProps {
  title: string;
  directAnswer: string;
  rule: string[];
  elements: string[];
  defenses: string[];
  deadlines?: string[];
  damages?: string[];
  related: RelatedLink[];
  note?: string;
  metaTitle?: string;
  metaDescription?: string;
}

export default function AnswerFirstDtpaPageTemplate({
  title,
  directAnswer,
  rule,
  elements,
  defenses,
  deadlines,
  damages,
  related,
  note,
}: AnswerFirstDtpaPageProps) {
  return (
    <>
      <Helmet>
        <title>{title} | Texas DTPA | The Woodlands Law Firm</title>
        <meta
          name="description"
          content={directAnswer.slice(0, 155) + "..."}
        />
      </Helmet>

      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-law-purple hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link to="/practice-areas/deceptive-trade-practices-act" className="hover:text-law-purple hover:underline">
                  Texas DTPA
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">{title}</li>
            </ol>
          </nav>

          {/* H1 */}
          <header className="mb-10">
            <h1 className="text-4xl font-serif text-law-purple mb-4">{title}</h1>
            <div className="gold-underline mb-6"></div>
            {/* Direct Answer */}
            <section aria-label="Direct Answer" className="bg-muted border border-border rounded-lg p-6">
              <h2 className="text-xl font-serif text-law-purple mb-3">Direct Answer</h2>
              <p className="text-muted-foreground leading-relaxed">{directAnswer}</p>
            </section>

            {note && (
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {note}
              </p>
            )}
          </header>

          {/* Rule */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-law-purple mb-3">Rule Under Texas Law</h2>
            <div className="gold-underline mb-5"></div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {rule.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Elements */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-law-purple mb-3">What You Must Prove</h2>
            <div className="gold-underline mb-5"></div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {elements.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Defenses */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-law-purple mb-3">Common Defenses</h2>
            <div className="gold-underline mb-5"></div>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              {defenses.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Deadlines & Notice (optional) */}
          {deadlines && deadlines.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-law-purple mb-3">Deadlines and Notice</h2>
              <div className="gold-underline mb-5"></div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {deadlines.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Damages & Attorney's Fees (optional) */}
          {damages && damages.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-serif text-law-purple mb-3">Damages and Attorney's Fees</h2>
              <div className="gold-underline mb-5"></div>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                {damages.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Related Pages */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif text-law-purple mb-3">Related Texas DTPA Pages</h2>
            <div className="gold-underline mb-5"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {related.slice(0, 8).map((link, idx) => (
                <Link
                  key={idx}
                  to={link.to}
                  className="border border-border rounded-lg p-4 hover:border-law-gold hover:shadow-sm transition-all"
                >
                  <span className="text-law-purple font-medium hover:underline">{link.title}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Small CTA */}
          <section className="bg-law-purple p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif text-white mb-3">Talk to a Texas DTPA Attorney</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              If you need advice on a potential Texas DTPA claim or defense, an attorney can evaluate consumer status,
              notice compliance, damages, and available defenses based on your facts.
            </p>
            <Link
              to="/schedule"
              className="btn-gold-metallic py-3 px-8 rounded inline-block"
            >
              Schedule a Consultation
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}
