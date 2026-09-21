export const CONSULTATION_FEES = "Our 15-minute telephone consultation costs $150. The 60-minute consultation costs $350. The $150 telephone consultation fee is credited toward your retainer if you hire the firm. Qualifying personal-injury matters are eligible for a free initial consultation; this does not extend to other insurance or consumer disputes.";

export const REPRESENTATION_TERMS = "Submitting an intake form is free. A consultation does not guarantee that we will accept your case. Representation and fee arrangements require a separate written agreement.";

const ConsultationFees = () => (
  <section aria-label="Consultation fees and representation" className="mb-8 rounded-lg border border-law-gold/40 bg-white p-6 text-left text-gray-700">
    <h2 className="mb-3 text-xl font-serif text-law-purple">Consultation Fees</h2>
    <p className="mb-3 leading-relaxed">{CONSULTATION_FEES}</p>
    <p className="leading-relaxed">{REPRESENTATION_TERMS}</p>
  </section>
);

export default ConsultationFees;
