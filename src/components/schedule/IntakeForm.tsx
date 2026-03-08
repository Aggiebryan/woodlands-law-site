import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/ui/phone-input";
import { toast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Check, Loader2, Shield } from "lucide-react";

const WEBHOOK_URL = "https://n8n.twlf.dev/webhook/intake-web";

const formSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  lastName: z.string().min(1, "Please enter your last name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email.").or(z.literal("")),
  preferredContact: z.enum(["phone", "email", "text"]).default("phone"),
  language: z.string().default("English"),
  referralSource: z.string().optional(),
  matterType: z.string().min(1, "Please select a matter type."),
  county: z.string().optional(),
  incidentDate: z.string().optional(),
  companyName: z.string().optional(),
  opposingParties: z.string().optional(),
  summaryOfIssue: z.string().min(10, "Please describe your matter."),
  damagesDescription: z.string().optional(),
  urgencyLevel: z.enum(["low", "normal", "high", "urgent"]).default("normal"),
});

type FormValues = z.infer<typeof formSchema>;

interface IntakeFormProps {
  onSubmitSuccess: (data: FormValues) => void;
}

const steps = [
  { num: 1, label: "Your Info" },
  { num: 2, label: "Your Matter" },
  { num: 3, label: "Review" },
];

const urgencyOptions = [
  { value: "low", label: "Low — No Deadline", color: "border-green-600 text-green-700 bg-green-50" },
  { value: "normal", label: "Normal", color: "border-blue-500 text-blue-600 bg-blue-50" },
  { value: "high", label: "High — Deadline Soon", color: "border-orange-500 text-orange-600 bg-orange-50" },
  { value: "urgent", label: "Urgent — Imminent", color: "border-red-600 text-red-700 bg-red-50" },
];

const matterTypeLabels: Record<string, string> = {
  dtpa: "DTPA / Consumer Protection",
  insurance: "Insurance Dispute",
  personal_injury: "Personal Injury",
  estate_planning: "Estate Planning",
  probate: "Probate",
  business_litigation: "Business Litigation",
  other: "Other",
};

const IntakeForm = ({ onSubmitSuccess }: IntakeFormProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      preferredContact: "phone",
      language: "English",
      referralSource: "",
      matterType: "",
      county: "",
      incidentDate: "",
      companyName: "",
      opposingParties: "",
      summaryOfIssue: "",
      damagesDescription: "",
      urgencyLevel: "normal",
    },
  });

  const validateAndNext = async (nextStep: number) => {
    const fieldsPerStep: Record<number, (keyof FormValues)[]> = {
      1: ["firstName", "lastName", "phone"],
      2: ["matterType", "summaryOfIssue"],
    };
    const fields = fieldsPerStep[step];
    if (fields) {
      const valid = await form.trigger(fields);
      if (!valid) return;
    }
    setStep(nextStep);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const payload = {
        source_platform: "website_react_intake",
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        email: data.email,
        preferred_contact_method: data.preferredContact,
        language_preference: data.language,
        referral_source: data.referralSource,
        matter_type: data.matterType,
        county: data.county,
        incident_date: data.incidentDate,
        company_name: data.companyName,
        opposing_parties: data.opposingParties,
        summary_of_issue: data.summaryOfIssue,
        damages_description: data.damagesDescription,
        urgency_level: data.urgencyLevel,
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Server error");
      onSubmitSuccess(data);
    } catch {
      toast({
        title: "Submission Error",
        description: "We couldn't submit your intake. Please call 832-626-0116.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const values = form.getValues();

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-10 px-4">
        {steps.map((s, i) => (
          <div key={s.num} className="flex items-center">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium border-[1.5px] transition-all ${
                  step === s.num
                    ? "border-law-gold bg-law-gold text-white"
                    : step > s.num
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-muted-foreground/30 text-muted-foreground bg-background"
                }`}
              >
                {step > s.num ? <Check className="w-3.5 h-3.5" /> : s.num}
              </div>
              <span
                className={`text-[11px] font-medium uppercase tracking-wider whitespace-nowrap ${
                  step === s.num ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && <div className="w-12 h-px bg-muted-foreground/20 mx-3" />}
          </div>
        ))}
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* STEP 1: Contact Info */}
          {step === 1 && (
            <div className="bg-background border border-border rounded p-8 md:p-10 animate-in fade-in slide-in-from-bottom-2">
              <h2 className="font-serif text-[22px] text-foreground mb-1">Contact Information</h2>
              <p className="text-sm text-muted-foreground font-light mb-8 leading-relaxed">
                We need a few details to identify you and follow up about your matter.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        First Name <span className="text-law-gold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Jane" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Last Name <span className="text-law-gold">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Phone Number <span className="text-law-gold">*</span>
                      </FormLabel>
                      <FormControl>
                        <PhoneInput value={field.value} onChange={field.onChange} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="jane@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="preferredContact"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Preferred Contact Method
                    </FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-2 mt-1">
                        {["phone", "email", "text"].map((m) => (
                          <label
                            key={m}
                            className={`inline-flex items-center px-4 py-2 border rounded-sm text-xs uppercase tracking-wider font-medium cursor-pointer transition-all ${
                              field.value === m
                                ? "border-law-gold text-law-gold bg-law-gold/5"
                                : "border-border text-muted-foreground hover:border-foreground/30"
                            }`}
                          >
                            <RadioGroupItem value={m} className="sr-only" />
                            {m}
                          </label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="language"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Language Preference
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Spanish">Spanish / Español</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        How Did You Hear About Us?
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="— Select —" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral_attorney">Attorney Referral</SelectItem>
                          <SelectItem value="referral_client">Client Referral</SelectItem>
                          <SelectItem value="facebook">Facebook</SelectItem>
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="website">Website / Blog</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              {/* Nav */}
              <div className="flex justify-end mt-9 pt-7 border-t border-border">
                <Button type="button" className="btn-gold-metallic px-8" onClick={() => validateAndNext(2)}>
                  Continue →
                </Button>
              </div>
            </div>
          )}

          {/* STEP 2: Matter Details */}
          {step === 2 && (
            <div className="bg-background border border-border rounded p-8 md:p-10 animate-in fade-in slide-in-from-bottom-2">
              <h2 className="font-serif text-[22px] text-foreground mb-1">Matter Details</h2>
              <p className="text-sm text-muted-foreground font-light mb-8 leading-relaxed">
                Tell us about your legal matter. More detail helps us evaluate your case faster.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name="matterType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Type of Matter <span className="text-law-gold">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="— Select —" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="dtpa">DTPA / Consumer Protection</SelectItem>
                          <SelectItem value="insurance">Insurance Dispute</SelectItem>
                          <SelectItem value="personal_injury">Personal Injury</SelectItem>
                          <SelectItem value="estate_planning">Estate Planning</SelectItem>
                          <SelectItem value="probate">Probate</SelectItem>
                          <SelectItem value="business_litigation">Business Litigation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="county"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        County
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="— Select —" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Montgomery">Montgomery County</SelectItem>
                          <SelectItem value="Harris">Harris County</SelectItem>
                          <SelectItem value="Fort Bend">Fort Bend County</SelectItem>
                          <SelectItem value="Walker">Walker County</SelectItem>
                          <SelectItem value="Other">Other Texas County</SelectItem>
                          <SelectItem value="Federal">Federal / Southern District of Texas</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                <FormField
                  control={form.control}
                  name="incidentDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Date of Incident / Issue
                      </FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                        Business / Company Involved
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ABC Insurance Co." {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="opposingParties"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Opposing Party / Defendant
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Name of person, business, or insurer" {...field} />
                    </FormControl>
                    <FormDescription className="text-[11px]">Used for preliminary conflict checking.</FormDescription>
                  </FormItem>
                )}
              />

              <div className="border-t border-border my-7" />

              <FormField
                control={form.control}
                name="summaryOfIssue"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Summary of Your Matter <span className="text-law-gold">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[110px]"
                        placeholder="Describe what happened, what the other party did or failed to do, and what outcome you are seeking…"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="damagesDescription"
                render={({ field }) => (
                  <FormItem className="mb-5">
                    <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Damages / Losses
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[88px]"
                        placeholder="Describe any financial losses, property damage, personal injuries, or other harm…"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="border-t border-border my-7" />

              <FormField
                control={form.control}
                name="urgencyLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
                      Urgency Level <span className="text-law-gold">*</span>
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap gap-2 mt-1"
                      >
                        {urgencyOptions.map((opt) => (
                          <label
                            key={opt.value}
                            className={`inline-flex items-center px-4 py-2 border rounded-sm text-xs uppercase tracking-wider font-medium cursor-pointer transition-all ${
                              field.value === opt.value
                                ? opt.color
                                : "border-border text-muted-foreground hover:border-foreground/30"
                            }`}
                          >
                            <RadioGroupItem value={opt.value} className="sr-only" />
                            {opt.label}
                          </label>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <div className="flex justify-between mt-9 pt-7 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setStep(1)}>
                  ← Back
                </Button>
                <Button type="button" className="btn-gold-metallic px-8" onClick={() => validateAndNext(3)}>
                  Review →
                </Button>
              </div>
            </div>
          )}

          {/* STEP 3: Review */}
          {step === 3 && (
            <div className="bg-background border border-border rounded p-8 md:p-10 animate-in fade-in slide-in-from-bottom-2">
              <h2 className="font-serif text-[22px] text-foreground mb-1">Review &amp; Submit</h2>
              <p className="text-sm text-muted-foreground font-light mb-6 leading-relaxed">
                Please confirm the information below before submitting.
              </p>

              {/* Confidentiality Notice */}
              <div className="bg-law-gold/5 border border-law-gold/25 border-l-[3px] border-l-law-gold rounded-sm p-4 mb-7 text-xs text-muted-foreground leading-relaxed">
                <div className="flex items-start gap-2">
                  <Shield className="w-4 h-4 text-law-gold mt-0.5 flex-shrink-0" />
                  <p>
                    <strong className="text-foreground font-medium">Confidentiality Notice.</strong> The information you
                    submit is protected by attorney-client privilege to the extent permitted by Texas law. Submission
                    does not create an attorney-client relationship, but all information will be treated as
                    confidential.
                  </p>
                </div>
              </div>

              {/* Review Grid */}
              <div className="text-sm mb-7">
                {[
                  ["Name", `${values.firstName} ${values.lastName}`],
                  ["Phone", values.phone],
                  ["Email", values.email || "—"],
                  ["Contact Method", values.preferredContact],
                  ["Language", values.language],
                  ["Referral", values.referralSource || "—"],
                  ["Matter Type", matterTypeLabels[values.matterType] || values.matterType],
                  ["County", values.county || "—"],
                  ["Incident Date", values.incidentDate || "—"],
                  ["Business", values.companyName || "—"],
                  ["Opposing Party", values.opposingParties || "—"],
                  ["Urgency", values.urgencyLevel],
                  ["Summary", values.summaryOfIssue],
                  ["Damages", values.damagesDescription || "—"],
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[160px_1fr] gap-2 py-2 border-b border-border">
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium pt-0.5">
                      {label}
                    </span>
                    <span className="text-foreground break-words">{value}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-9 pt-7 border-t border-border">
                <Button type="button" variant="outline" onClick={() => setStep(2)}>
                  ← Edit
                </Button>
                <Button type="submit" disabled={isSubmitting} className="btn-gold-metallic px-10 py-3 text-sm">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> Submitting…
                    </span>
                  ) : (
                    "Schedule Appointment"
                  )}
                </Button>
              </div>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default IntakeForm;
