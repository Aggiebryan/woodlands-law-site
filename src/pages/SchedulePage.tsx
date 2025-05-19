
import PageHeader from "@/components/schedule/PageHeader";
import ContactInfoSection from "@/components/schedule/ContactInfoSection";
import ConsultationForm from "@/components/schedule/ConsultationForm";

const SchedulePage = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Page Header */}
      <PageHeader 
        title="Schedule a Consultation"
        description="Complete the form below to request a consultation with one of our experienced attorneys.
        We'll contact you promptly to confirm your appointment."
      />
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <ContactInfoSection />
            
            {/* Right Column - Form */}
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
