import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PhoneInput } from "@/components/ui/phone-input";

// --- CONFIGURATION ---
const CAL_URL = "https://cal.com/woodlandslaw/consultation";
const WEBHOOK_URL = "https://n8n.twlf.dev/webhook-test/intake-web";
// ---------------------

const formSchema = z.object({
  // Contact Info (Step 1)
  firstName: z.string().min(2, "First name is required."),
  lastName: z.string().min(2, "Last name is required."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  preferredContact: z.enum(["phone", "email", "text"]),
  language: z.string().default("English"),
  referral: z.string().optional(),

  // Matter Details (Step 2)
  service: z.string({ required_error: "Please select a service." }),
  county: z.string().optional(),
  opposingParty: z.string().optional(),
  message: z.string().min(10, "Please provide more detail about your matter."),
  urgency: z.enum(["low", "normal", "high", "urgent"]).default("normal"),
});

type FormValues = z.infer<typeof formSchema>;

const ConsultationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      preferredContact: "phone",
      language: "English",
      message: "",
      urgency: "normal",
    },
  });

  const nextStep = async () => {
    const fields = step === 1 ? ["firstName", "lastName", "email", "phone"] : ["service", "message"];
    const isValid = await form.trigger(fields as any);
    if (isValid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source_platform: "website_react_intake",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setShowConfirmation(true);
      } else {
        throw new Error();
      }
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "We couldn't log your intake. Please call 832-626-0116.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRedirectToCal = () => {
    const data = form.getValues();

    // Mapping Intake fields to Cal.com prefill parameters
    const params = new URLSearchParams({
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      // Concatenating matter details into the notes field for the attorney
      notes: `Service: ${data.service}\nUrgency: ${data.urgency}\nOpposing Party: ${data.opposingParty || "N/A"}\n\nSummary: ${data.message}`,
    });

    window.location.href = `${CAL_URL}?${params.toString()}`;
  };

  return (
    <div className="max-w-3xl mx-auto border border-gray-200 p-6 md:p-10 rounded-xl bg-white shadow-sm">
      <div className="mb-8">
        <h3 className="text-3xl font-serif text-law-purple mb-2">New Client Intake</h3>
        <p className="text-muted-foreground italic">Confidential Evaluation — Step {step} of 3</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
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
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number *</FormLabel>
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
                      <FormLabel>Email Address *</FormLabel>
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
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred Contact Method</FormLabel>
                    <FormControl>
                      <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                        {["phone", "email", "text"].map((m) => (
                          <FormItem key={m} className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value={m} />
                            </FormControl>
                            <FormLabel className="font-normal capitalize">{m}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of Matter *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="dtpa">DTPA / Consumer Protection</SelectItem>
                        <SelectItem value="insurance">Insurance Dispute</SelectItem>
                        <SelectItem value="personal_injury">Personal Injury</SelectItem>
                        <SelectItem value="estate_planning">Estate Planning</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="opposingParty"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Opposing Party / Defendant</FormLabel>
                    <FormControl>
                      <Input placeholder="Person or Business Name" {...field} />
                    </FormControl>
                    <FormDescription>Required for conflict checking.</FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Summary of Issue *</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-[120px]" placeholder="Describe what happened..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-law-purple/5 border border-law-purple/20 p-5 rounded-lg text-sm leading-relaxed">
                <h4 className="font-semibold text-law-purple mb-2 uppercase tracking-wider text-xs">
                  Review Submission
                </h4>
                <p>
                  <strong>Client:</strong> {form.getValues("firstName")} {form.getValues("lastName")}
                </p>
                <p>
                  <strong>Matter:</strong> {form.getValues("service")}
                </p>
                <p className="mt-4 text-muted-foreground italic">
                  By clicking below, your intake will be sent to the firm and we will open the scheduling page for you.
                </p>
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t">
            {step > 1 && (
              <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" className="ml-auto bg-law-purple" onClick={nextStep}>
                Continue &rarr;
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting} className="ml-auto bg-law-purple">
                {isSubmitting ? "Processing..." : "Submit & Schedule"}
              </Button>
            )}
          </div>
        </form>
      </Form>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-law-purple font-serif">Intake Received</DialogTitle>
            <DialogDescription>
              Your case details have been securely transmitted. Please click below to select a time for your
              consultation. Your info has been pre-filled.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={handleRedirectToCal} className="bg-law-purple w-full py-6 text-lg">
            Final Step: Select Time &rarr;
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ConsultationForm;
