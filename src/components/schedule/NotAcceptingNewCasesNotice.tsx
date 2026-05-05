import { Info, Phone, Mail } from "lucide-react";

interface NotAcceptingNewCasesNoticeProps {
  /** Optional override for the heading. */
  heading?: string;
  /** Render in a more compact form (used inside narrower dialogs). */
  compact?: boolean;
}

/**
 * Firm-wide notice rendered in place of every appointment / intake form
 * while The Woodlands Law Firm is at capacity and not accepting new client matters.
 *
 * To restore the original forms, revert the imports of this component in:
 *   - src/pages/SchedulePage.tsx
 *   - src/components/schedule/IntakeSchedulerDialog.tsx
 *   - src/components/schedule/ConsultationForm.tsx
 *   - src/components/business/BusinessConsultationForm.tsx
 *   - src/components/civil/CivilConsultationForm.tsx
 *   - src/components/dtpa/DTPAConsultationForm.tsx
 *   - src/components/estate/EstateConsultationForm.tsx
 *   - src/components/injury/CaseEvaluationForm.tsx
 *   - src/components/insurance/InsuranceClaimReviewForm.tsx
 */
const NotAcceptingNewCasesNotice = ({
  heading = "Currently Not Accepting New Client Matters",
  compact = false,
}: NotAcceptingNewCasesNoticeProps) => {
  return (
    <div
      className={`bg-background border border-law-gold/40 border-l-[4px] border-l-law-gold rounded-sm ${
        compact ? "p-6" : "p-8 md:p-10"
      } max-w-3xl mx-auto`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3 mb-5">
        <Info className="w-5 h-5 text-law-gold mt-1 flex-shrink-0" />
        <div>
          <h2
            className={`font-serif text-foreground ${
              compact ? "text-xl" : "text-2xl md:text-[26px]"
            } leading-tight mb-1`}
          >
            {heading}
          </h2>
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
            The Woodlands Law Firm, PLLC
          </p>
        </div>
      </div>

      <div className="space-y-4 text-sm md:text-[15px] text-foreground leading-relaxed font-light">
        <p>
          Thank you for considering The Woodlands Law Firm. Due to existing caseload demands,
          the firm is not accepting new client matters at this time. We have made this decision
          so that we may devote our full attention to the obligations we owe our current clients.
        </p>
        <p>
          We expect to reopen consultations and resume taking on new matters once our schedule
          permits. We appreciate your patience and your interest in our representation.
        </p>
        <p className="text-muted-foreground">
          <strong className="text-foreground font-medium">Existing clients:</strong> please
          continue to contact the firm directly using the information below for any questions
          regarding your active matter.
        </p>
      </div>

      <div className="mt-7 pt-6 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="tel:8326260116"
          className="flex items-center gap-3 px-4 py-3 border border-border rounded-sm hover:border-law-gold/60 transition-colors"
        >
          <Phone className="w-4 h-4 text-law-gold flex-shrink-0" />
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
              Direct Line
            </span>
            <strong className="block text-sm text-foreground font-medium">
              (832) 626-0116
            </strong>
          </div>
        </a>
        <a
          href="mailto:admin@woodlands.law"
          className="flex items-center gap-3 px-4 py-3 border border-border rounded-sm hover:border-law-gold/60 transition-colors"
        >
          <Mail className="w-4 h-4 text-law-gold flex-shrink-0" />
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
              Firm Email
            </span>
            <strong className="block text-sm text-foreground font-medium break-all">
              admin@woodlands.law
            </strong>
          </div>
        </a>
      </div>

      <p className="mt-5 text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
        This notice does not create an attorney-client relationship.
      </p>
    </div>
  );
};

export default NotAcceptingNewCasesNotice;
