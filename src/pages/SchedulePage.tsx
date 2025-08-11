
import PageHeader from "@/components/schedule/PageHeader";
import ContactInfoSection from "@/components/schedule/ContactInfoSection";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const SchedulePage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "team-scheduler" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Page Header */}
      <PageHeader 
        title="Schedule a Consultation"
        description="Complete the form below to request a consultation with one of our experienced attorneys.
        We'll contact you promptly to confirm your appointment."
      />

      {/* Team Scheduler Embed */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="w-full h-[800px]">
            <Cal 
              namespace="team-scheduler"
              calLink="team/the-woodlands-law-firm"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {/* Contact Information */}
            <ContactInfoSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
