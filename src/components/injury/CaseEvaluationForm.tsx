import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ArrowRight } from "lucide-react";
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

      setSubmittedFormData(data);
      setSubmissionComplete(true);
      toast({
        title: "Case Evaluation Submitted",
        description: "Now let's schedule your consultation appointment.",
      });

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

  const handleCloseDialog = () => {
    form.reset();
    setCurrentStep('evaluation');
    setSubmissionComplete(false);
    setSubmittedFormData(null);
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
        currentStep === 'booking' ? "max-w-4xl w-full h-[800px] p-0" : "max-w-md md:max-w-lg max-h-[90vh] overflow-y-auto"
      )}>
        {currentStep === 'evaluation' && (
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif text-law-purple">
              Free Case Evaluation
            </DialogTitle>
            <DialogDescription>
              Complete the form below for a free evaluation of your personal injury case.
            </DialogDescription>
          </DialogHeader>
        )}

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
          <div className="p-6 space-y-4">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif text-law-purple">Thank you</DialogTitle>
              <DialogDescription>
                We received your case details. Our office will contact you shortly to schedule your consultation.
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-3">
              <Button onClick={handleCloseDialog} className="bg-law-purple hover:bg-law-purple-light">Close</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseEvaluationForm;