import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "@/components/ui/phone-input";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  dateOfAccident: z.date({ required_error: "Date of accident is required" }),
  injuryType: z.string({ required_error: "Please select how the injury occurred" }),
  description: z.string().min(10, { message: "Please provide some details about the accident" }),
  bestTimeToCall: z.string({ required_error: "Please select the best time to call" })
});

type FormValues = z.infer<typeof formSchema>;

interface CaseEvaluationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  webhookUrl?: string;
}

const CaseEvaluationForm = ({ 
  open, 
  onOpenChange,
  webhookUrl = "https://n8n.twlf.dev/webhook/PersonalInjury"
}: CaseEvaluationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<'evaluation' | 'booking'>('evaluation');
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState<FormValues | null>(null);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      description: ""
    }
  });

  // Load Calendly script when booking step is active
  useEffect(() => {
    if (currentStep === 'booking' && !calendlyLoaded) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setCalendlyLoaded(true);
      document.head.appendChild(script);

      // Cleanup function to remove script when component unmounts
      return () => {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [currentStep, calendlyLoaded]);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const formattedData = {
        ...data,
        dateOfAccident: format(data.dateOfAccident, "yyyy-MM-dd")
      };

      console.log("Submitting case evaluation:", formattedData);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Store the form data for potential future use
      setSubmittedFormData(data);
      setSubmissionComplete(true);
      toast({
        title: "Case Evaluation Submitted",
        description: "Now let's schedule your consultation appointment.",
      });

      // Move to booking step
      setCurrentStep('booking');
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your case evaluation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackToEvaluation = () => {
    setCurrentStep('evaluation');
  };

  const handleCloseDialog = () => {
    // Reset everything when closing
    form.reset();
    setCurrentStep('evaluation');
    setSubmissionComplete(false);
    setSubmittedFormData(null);
    setCalendlyLoaded(false);
    onOpenChange(false);
  };

  const injuryOptions = [
    "Aircraft accident",
    "Animal bite or attack",
    "Assault and battery",
    "Defective premises",
    "Defective product",
    "Police negligence or abuse",
    "Medical malpractice",
    "Motor vehicle accident",
    "Slip or trip and fall",
    "Water-related accident",
    "Other"
  ];

  const callTimeOptions = ["Morning", "Lunch", "Afternoon"];

  return (
    <Dialog open={open} onOpenChange={handleCloseDialog}>
      <DialogContent className={cn(
        "overflow-y-auto max-h-[90vh]",
        currentStep === 'booking' ? "max-w-4xl w-full" : "max-w-md md:max-w-lg"
      )}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-law-purple">
            {currentStep === 'evaluation' ? 'Free Case Evaluation' : 'Schedule Your Consultation'}
          </DialogTitle>
          <DialogDescription>
            {currentStep === 'evaluation' 
              ? 'Complete the form below for a free evaluation of your personal injury case.'
              : 'Select a convenient time for your consultation appointment.'
            }
          </DialogDescription>
        </DialogHeader>

        {currentStep === 'evaluation' ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
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
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john.doe@example.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dateOfAccident"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Accident</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="injuryType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>How did injury occur?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of incident" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {injuryOptions.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Describe how injury occurred</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please provide details about your accident..." 
                        className="h-24"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-law-purple hover:bg-law-purple-light"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Continue to Schedule Appointment"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </Form>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBackToEvaluation}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Form
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleCloseDialog}
              >
                Close
              </Button>
            </div>
            
            {submissionComplete && (
              <div className="text-center py-4 mb-4 bg-green-50 rounded-lg border border-green-200">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Case Evaluation Submitted Successfully
                </h3>
                <p className="text-gray-600 text-sm">
                  Your case evaluation has been submitted. Please schedule your consultation below.
                </p>
              </div>
            )}
            
            {/* Calendly Embedded Widget */}
            <div className="w-full">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/bryan-woodlands" 
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
              {!calendlyLoaded && (
                <div className="flex items-center justify-center h-[700px] bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-law-purple mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading calendar...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseEvaluationForm;