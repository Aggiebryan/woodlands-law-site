import { useState, useEffect } from "react";
import PageHeader from "@/components/schedule/PageHeader";
import ContactInfoSection from "@/components/schedule/ContactInfoSection";
import IntakeForm from "@/components/schedule/IntakeForm";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Helmet } from "react-helmet";
import { Check } from "lucide-react";

const SchedulePage = () => {
  const [intakeComplete, setIntakeComplete] = useState(false);
  const [intakeData, setIntakeData] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "team-scheduler" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  const handleIntakeSuccess = (data: any) => {
    setIntakeData(data);
    setIntakeComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Build Cal.com prefill config from intake data
  const calConfig: Record<string, string> = { layout: "month_view" };
  if (intakeData) {
    calConfig.name = `${intakeData.firstName} ${intakeData.lastName}`;
    if (intakeData.email) calConfig.email = intakeData.email;
    calConfig.notes = `Matter: ${intakeData.matterType}\nUrgency: ${intakeData.urgencyLevel}\nCounty: ${intakeData.county || "N/A"}\nOpposing Party: ${intakeData.opposingParties || "N/A"}\n\nSummary: ${intakeData.summaryOfIssue}`;
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <Helmet>
        <title>Schedule a Consultation | The Woodlands Law Firm</title>
        <meta name="description" content="Ready to discuss your legal matter? Schedule a consultation with our Texas attorneys today. We serve clients in The Woodlands, Conroe, Houston, and surrounding areas." />
      </Helmet>

      {/* Page Header */}
      <PageHeader
        title={intakeComplete ? "Schedule Your Appointment" : "New Client Intake"}
        description={
          intakeComplete
            ? "Your intake has been received. Please select a time below to complete your appointment."
            : "Complete the form below to begin your confidential case evaluation. All submissions are reviewed by our attorneys within one business day."
        }
      />

      {!intakeComplete ? (
        /* Intake Form */
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <IntakeForm onSubmitSuccess={handleIntakeSuccess} />
          </div>
        </section>
      ) : (
        /* Success + Cal Scheduler */
        <section className="py-8 bg-background">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Success Banner */}
            <div className="bg-background border border-border rounded p-8 md:p-10 text-center mb-8 animate-in fade-in">
              <div className="w-[60px] h-[60px] border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="font-serif text-3xl text-foreground mb-3">Intake Received</h2>
              <p className="text-sm text-muted-foreground font-light max-w-lg mx-auto leading-relaxed mb-6">
                Thank you for contacting The Woodlands Law Firm. Your intake has been logged.
                Please select a consultation time below to complete the process.
              </p>
              <div className="inline-flex gap-8 border border-border rounded px-8 py-4">
                <div className="text-center">
                  <strong className="block text-sm text-foreground font-medium">832-626-0116</strong>
                  <span className="text-xs text-muted-foreground">Direct Line</span>
                </div>
                <div className="text-center">
                  <strong className="block text-sm text-foreground font-medium">bryan@woodlands.law</strong>
                  <span className="text-xs text-muted-foreground">Attorney Email</span>
                </div>
              </div>
            </div>

            {/* Cal.com Scheduler */}
            <div className="w-full h-[800px]">
              <Cal
                namespace="team-scheduler"
                calLink="team/the-woodlands-law-firm"
                style={{ width: "100%", height: "100%", overflow: "scroll" }}
                config={calConfig}
              />
            </div>
          </div>
        </section>
      )}

      {/* Contact Form Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            <ContactInfoSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
