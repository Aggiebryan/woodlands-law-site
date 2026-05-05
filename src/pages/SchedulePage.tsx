import PageHeader from "@/components/schedule/PageHeader";
import ContactInfoSection from "@/components/schedule/ContactInfoSection";
import NotAcceptingNewCasesNotice from "@/components/schedule/NotAcceptingNewCasesNotice";
import { Helmet } from "react-helmet-async";

const SchedulePage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <Helmet>
        <title>Currently Not Accepting New Matters | The Woodlands Law Firm</title>
        <meta
          name="description"
          content="The Woodlands Law Firm is temporarily not accepting new client matters due to current caseload demands. Existing clients may continue to contact the firm directly."
        />
      </Helmet>

      {/* Page Header */}
      <PageHeader
        title="Not Accepting New Matters at This Time"
        description="Due to existing caseload demands, The Woodlands Law Firm is temporarily not accepting new client matters. We will reopen consultations once our schedule permits."
      />

      {/* Notice (replaces former intake form & Cal.com scheduler) */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <NotAcceptingNewCasesNotice />
        </div>
      </section>

      {/* Contact Info — preserved for existing clients */}
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
