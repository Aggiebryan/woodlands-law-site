import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Clock,
  AlertTriangle,
  FileText,
  Scale,
  Building2,
  Car,
  CreditCard,
  ShieldAlert,
  Gavel,
  CalendarDays,
} from "lucide-react";

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="h-6 w-6 text-law-gold flex-shrink-0" />
      <h2 className="text-2xl font-serif text-law-purple">{title}</h2>
    </div>
    <div className="gold-underline mb-5"></div>
    {children}
  </section>
);

const DeadlineCard = ({
  label,
  deadline,
  cite,
  note,
}: {
  label: string;
  deadline: string;
  cite?: string;
  note?: string;
}) => (
  <div className="border border-border rounded-lg p-4 hover:border-law-gold hover:shadow-sm transition-all">
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
      <div className="flex-1">
        <p className="font-medium text-law-purple">{label}</p>
        {cite && <p className="text-xs text-muted-foreground mt-1">{cite}</p>}
        {note && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{note}</p>}
      </div>
      <span className="inline-flex items-center gap-1.5 bg-law-gold/10 text-law-purple font-semibold text-sm px-3 py-1.5 rounded-md whitespace-nowrap flex-shrink-0">
        <Clock className="h-3.5 w-3.5" />
        {deadline}
      </span>
    </div>
  </div>
);

const TexasCivilTimeLimitsPage = () => {
  return (
    <>
      <Helmet>
        <title>Texas Civil Law Time Limits Cheat Sheet | The Woodlands Law Firm</title>
        <meta
          name="description"
          content="Comprehensive cheat sheet for Texas civil litigation deadlines including statutes of limitations, discovery cutoffs, summary judgment timelines, and government claim notice periods."
        />
      </Helmet>

      {/* Hero */}
      <div className="bg-law-purple text-white pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="text-sm text-white/60 mb-6" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link to="/" className="hover:text-law-gold hover:underline">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white">Texas Civil Law Time Limits</li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Texas Civil Law Time Limits</h1>
          <div className="gold-underline mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
            A practical calendaring guide for Texas civil litigators. This page collects common Texas civil deadlines
            that affect day-to-day calendaring.
          </p>
          <p className="text-sm text-white/60 mt-4">By Bryan C. Holman</p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Important Note */}
          <div className="bg-muted border border-border rounded-lg p-6 mb-12">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-law-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-law-purple mb-2">Important Practice Note</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Texas procedure is judge-driven. A docket control order can shorten or expand many dates. Always
                  calendar the rule-based deadline <strong>and</strong> any scheduling-order deadline that is earlier.
                  This page provides general information for calendaring — it is not legal advice and may not reflect
                  the latest rule amendments, local rules, or standing orders.
                </p>
              </div>
            </div>
          </div>

          {/* Table of Contents */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif text-law-purple mb-3">Quick Navigation</h2>
            <div className="gold-underline mb-5"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                { label: "Statutes of Limitations", href: "#statutes-of-limitations" },
                { label: "Service of Process & Answers", href: "#service-of-process" },
                { label: "Initial Disclosures", href: "#initial-disclosures" },
                { label: "Written Discovery Deadlines", href: "#written-discovery" },
                { label: "Discovery Period Cutoffs", href: "#discovery-cutoffs" },
                { label: "Depositions & Subpoenas", href: "#depositions" },
                { label: "Summary Judgment", href: "#summary-judgment" },
                { label: "Government Claims (TTCA)", href: "#government-claims" },
                { label: "UM/UIM Claims", href: "#um-uim" },
                { label: "Debt Collection", href: "#debt-collection" },
                { label: "Calendaring Tips", href: "#calendaring-tips" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border border-border rounded-lg p-3 hover:border-law-gold hover:shadow-sm transition-all text-law-purple font-medium hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </section>

          {/* Statutes of Limitations */}
          <div id="statutes-of-limitations">
            <Section icon={Scale} title="Statutes of Limitations (Tex. Civ. Prac. & Rem. Code Ch. 16)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Unlike some jurisdictions, Texas does not have a single fixed time for all civil cases. Chapter 16 sets
                specific limitations for particular causes of action.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Defamation (Libel / Slander)"
                  deadline="1 Year"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.002"
                />
                <DeadlineCard
                  label="Personal Injury / Property Damage / Wrongful Death"
                  deadline="2 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.003(a)"
                  note="Accrues on date of injury or death. Note tolling exceptions for minors and the discovery rule."
                />
                <DeadlineCard
                  label="Medical / Health-Care Liability"
                  deadline="2 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 74.251; Ch. 74"
                  note="Possible 10-year statute of repose under certain conditions."
                />
                <DeadlineCard
                  label="Breach of Written Contract"
                  deadline="4 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.004"
                />
                <DeadlineCard label="Fraud" deadline="4 Years" cite="Tex. Civ. Prac. & Rem. Code § 16.004" />
                <DeadlineCard
                  label="Breach of Fiduciary Duty"
                  deadline="4 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.004"
                />
                <DeadlineCard
                  label="Debt Collection / Suit on Account"
                  deadline="4 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.004"
                />
                <DeadlineCard
                  label="Trespass to Try Title (Real Property)"
                  deadline="3–25 Years"
                  cite="Tex. Civ. Prac. & Rem. Code §§ 16.024–16.028"
                  note="Varies by type of adverse-possession claim."
                />
                <DeadlineCard
                  label="Construction Defects (Statute of Repose)"
                  deadline="10 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.009"
                  note="From substantial completion of the improvement."
                />
                <DeadlineCard
                  label="Child Sexual Abuse"
                  deadline="15 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.0045"
                  note="Extended limitations period under current Texas law."
                />
                <DeadlineCard
                  label="DTPA Claims"
                  deadline="2 Years"
                  cite="Tex. Bus. & Com. Code § 17.565"
                  note="Accrues when consumer knew or should have known of the deceptive act."
                />
                <DeadlineCard
                  label="Insurance Code Violations (Unfair Settlement Practices)"
                  deadline="2 Years"
                  cite="Tex. Ins. Code § 541.162"
                />
                <DeadlineCard
                  label="UCC / Sale of Goods"
                  deadline="4 Years"
                  cite="Tex. Bus. & Com. Code § 2.725"
                  note="Parties may reduce by agreement to not less than one year."
                />
              </div>
            </Section>
          </div>

          {/* Service of Process */}
          <div id="service-of-process">
            <Section icon={FileText} title="Service of Process & Answers">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Texas does not use a "60 days after filing" service rule. The key practical rule is{" "}
                <strong>diligence in service</strong> — lack of diligence can defeat limitations even if you filed on
                time.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Answer Deadline (District / County Courts at Law)"
                  deadline="Monday after 20 days"
                  cite="Tex. R. Civ. P. 99(b)"
                  note="Defendant must answer by 10:00 a.m. on the Monday next after 20 days from service."
                />
                <DeadlineCard
                  label="Return / Proof of Service"
                  deadline="Promptly"
                  cite="Tex. R. Civ. P. 107"
                  note="Calendar immediately upon receipt. Defective returns can create default-judgment problems."
                />
                <DeadlineCard
                  label="Substituted Service (if personal service unsuccessful)"
                  deadline="By Court Order"
                  cite="Tex. R. Civ. P. 106"
                  note="Available when personal service has been unsuccessful."
                />
              </div>
            </Section>
          </div>

          {/* Initial Disclosures */}
          <div id="initial-disclosures">
            <Section icon={FileText} title="Initial Disclosures (Texas Rule 194)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Texas requires initial disclosures in most civil cases. This deadline drives discovery planning.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Initial Disclosures"
                  deadline="30 Days"
                  cite="Tex. R. Civ. P. 194.2(a)"
                  note="Due within 30 days after the filing of the first answer or general appearance, unless a different time is set by the court."
                />
              </div>
            </Section>
          </div>

          {/* Written Discovery */}
          <div id="written-discovery">
            <Section icon={FileText} title="Written Discovery Deadlines (Texas Rules 192–215)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Texas discovery timing is controlled by the discovery control plan (Level 1, 2, or 3) and rule-based
                response deadlines.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Responses to Interrogatories, RFPs, and RFAs"
                  deadline="30 Days"
                  cite="Tex. R. Civ. P. 193.2(a)"
                  note="Calendar separate deadlines for each set received. Also calendar for privilege logs and production timing."
                />
                <DeadlineCard
                  label="Objections to Written Discovery"
                  deadline="30 Days (same window)"
                  cite="Tex. R. Civ. P. 193.2(a), (e)"
                  note="Objections must be made within the response time or are commonly treated as waived, subject to limited exceptions."
                />
                <DeadlineCard
                  label="Motions to Compel / Discovery Sanctions"
                  deadline="Per Court Order"
                  cite="Tex. R. Civ. P. 215"
                  note="Motion-and-conference driven. Governed by Rule 215 and the court's scheduling order."
                />
              </div>
            </Section>
          </div>

          {/* Discovery Cutoffs */}
          <div id="discovery-cutoffs">
            <Section icon={CalendarDays} title="Discovery Period Cutoffs (Level 2 Cases)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Most Texas cases are under Level 2 discovery. The discovery "end date" is one of the most important
                dates to calendar early.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Level 2 Discovery Period Ends"
                  deadline="Earlier of 2 prongs"
                  cite="Tex. R. Civ. P. 190.3(b)(1)"
                  note="Ends at the earlier of: (1) 30 days before trial, or (2) nine months after initial disclosures are due. Re-calendar every time the trial date moves — a new setting can change which prong controls."
                />
              </div>
            </Section>
          </div>

          {/* Depositions */}
          <div id="depositions">
            <Section icon={FileText} title="Depositions & Subpoenas">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Texas deposition practice turns on "reasonable notice," subpoena compliance deadlines, and quick
                objections when needed.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Deposition Notice"
                  deadline="Reasonable Notice"
                  cite="Tex. R. Civ. P. 199"
                  note="No fixed minimum in the rules; local practice often dictates a practical standard. Calendar the notice date, production date, and compliance date."
                />
                <DeadlineCard
                  label="Subpoena Compliance / Production"
                  deadline="Per Subpoena"
                  cite="Tex. R. Civ. P. 176"
                  note="Must allow reasonable time for compliance."
                />
                <DeadlineCard
                  label="Objections / Motions to Quash Subpoenas"
                  deadline="Before compliance date"
                  cite="Tex. R. Civ. P. 176.6(d)"
                  note="Must be made in writing before the time specified for compliance."
                />
              </div>
            </Section>
          </div>

          {/* Summary Judgment */}
          <div id="summary-judgment">
            <Section icon={Gavel} title="Motions for Summary Judgment (Texas Rule 166a)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Texas summary judgment timing is rigid and frequently enforced.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Motion Filing & Service Before Hearing"
                  deadline="21 Days"
                  cite="Tex. R. Civ. P. 166a(c)"
                  note="A traditional motion must be filed and served at least 21 days before the hearing."
                />
                <DeadlineCard
                  label="Response / Opposing Evidence"
                  deadline="7 Days Before Hearing"
                  cite="Tex. R. Civ. P. 166a(c)"
                  note="Absent leave, the nonmovant must file and serve opposing affidavits or other written response materials no later than 7 days before the hearing."
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                <strong>Note:</strong> Texas rules have been updated in recent years. Confirm the current text of Rule
                166a and your court's standing order if using a modern briefing schedule.
              </p>
            </Section>
          </div>

          {/* Government Claims */}
          <div id="government-claims">
            <Section icon={Building2} title="Claims Against Government Entities (Texas Tort Claims Act)">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Government cases have early notice traps. Calendar governmental notice deadlines on day one of case
                intake.
              </p>
              <div className="space-y-3">
                <DeadlineCard
                  label="Notice of Claim (General TTCA Rule)"
                  deadline="6 Months"
                  cite="Tex. Civ. Prac. & Rem. Code § 101.101(a)"
                  note="Must reasonably describe the damage, time and place, and incident. Due no later than 6 months after the incident."
                />
                <DeadlineCard
                  label="City Charter Notice (May Be Shorter)"
                  deadline="60–90 Days (varies)"
                  cite="Tex. Civ. Prac. & Rem. Code § 101.101(b)"
                  note="City charter and ordinance provisions may impose shorter deadlines. Investigate the specific entity's notice rules immediately."
                />
              </div>
              <div className="bg-muted border border-border rounded-lg p-4 mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Best Practice:</strong> Treat governmental notice as an "immediate" deadline. Investigate the
                  specific entity's notice rules the day the file comes in. Failure to timely present a claim can bar
                  the cause of action entirely.
                </p>
              </div>
            </Section>
          </div>

          {/* UM/UIM */}
          <div id="um-uim">
            <Section icon={Car} title="UM/UIM Claims">
              <p className="text-muted-foreground mb-6 leading-relaxed">
                UM/UIM limitation and accrual can be fact-dependent. A common Texas framing is that UM/UIM suits often
                proceed under a contractual limitations analysis.
              </p>
              <div className="bg-muted border border-border rounded-lg p-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Calendar these dates:</strong> (1) the crash date, (2) any denial date, (3) policy notice
                  deadlines, and (4) any suit-limitation clauses in the policy.
                </p>
              </div>
            </Section>
          </div>

          {/* Debt Collection */}
          <div id="debt-collection">
            <Section icon={CreditCard} title="Debt Collection / Time-Barred Debts">
              <div className="space-y-3">
                <DeadlineCard
                  label="Suit on Account or Debt"
                  deadline="4 Years"
                  cite="Tex. Civ. Prac. & Rem. Code § 16.004"
                  note="Texas imposes a four-year statute of limitations on many debt collection actions."
                />
              </div>
            </Section>
          </div>

          {/* Calendaring Tips */}
          <div id="calendaring-tips">
            <Section icon={ShieldAlert} title="Calendaring Best Practices">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Statute of Limitations",
                    tip: "Start from the date the cause of action accrues. Note any tolling exceptions (e.g., minor plaintiffs, discovery rule).",
                  },
                  {
                    title: "Service Deadlines",
                    tip: "Texas requires diligence. Calendar service-related milestones to ensure service occurs within limitations.",
                  },
                  {
                    title: "Discovery Windows",
                    tip: "Calendar response windows for each set received. Later trial settings shift the discovery cutoff — re-calendar accordingly.",
                  },
                  {
                    title: "Summary Judgment",
                    tip: "Calendar both the motion deadline (21 days) and response deadline (7 days) based on the hearing date.",
                  },
                  {
                    title: "Government Claims",
                    tip: "Journal all notice deadlines immediately on intake. These are often the shortest and most unforgiving deadlines.",
                  },
                  {
                    title: "Docket Control Orders",
                    tip: "Always calendar the rule-based deadline AND any scheduling-order deadline that is earlier. The court's order controls when stricter.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="border border-border rounded-lg p-4">
                    <p className="font-medium text-law-purple mb-2">{item.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* Disclaimer */}
          <div className="bg-muted border border-border rounded-lg p-6 mb-12">
            <h3 className="text-lg font-serif text-law-purple mb-2">Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This page provides general information for calendaring and case management. It is not legal advice, and it
              may not reflect the latest rule amendments, local rules, standing orders, or your court's scheduling
              order. If you need advice for a specific case, you should consult counsel.
            </p>
          </div>

          {/* CTA */}
          <section className="bg-law-purple p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif text-white mb-3">Need Help With a Texas Civil Case?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              If you have questions about deadlines, limitations, or procedural requirements for your Texas civil
              matter, our attorneys can help.
            </p>
            <Link to="/schedule" className="btn-gold-metallic py-3 px-8 rounded inline-block">
              Schedule a Consultation
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default TexasCivilTimeLimitsPage;
