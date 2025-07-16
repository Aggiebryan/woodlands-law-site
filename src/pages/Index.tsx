import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, startOfDay, addDays, isAfter, isBefore, parseISO } from "date-fns";
import { Calendar as CalendarIcon, ArrowLeft, ArrowRight, Clock, Loader2 } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";

// Form validation schema
const formSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  phone: z.string().min(10, { message: "Please enter a valid 10-digit phone number" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  dateOfAccident: z.date({ required_error: "Date of accident is required" }),
  injuryType: z.string({ required_error: "Please select how the injury occurred" }),
  description: z.string().min(10, { message: "Please provide some details about the accident" }),
  bestTimeToCall: z.string({ required_error: "Please select the best time to call" }),
  appointmentDate: z.date().optional(),
  appointmentTime: z.string().optional()
});

type FormValues = z.infer<typeof formSchema>;

// Types for Clio API responses
interface ClioTimeSlot {
  id: string;
  start_at: string;
  end_at: string;
  available: boolean;
  attorney_id?: string;
  attorney_name?: string;
}

interface ClioAvailability {
  date: string;
  slots: ClioTimeSlot[];
}

interface CaseEvaluationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  webhookUrl?: string;
  clioApiUrl?: string;
  clioApiKey?: string;
}

const CaseEvaluationForm = ({ 
  open, 
  onOpenChange,
  webhookUrl = "https://n8n.twlf.dev/webhook/PersonalInjury",
  clioApiUrl = "/api/clio", // Your backend endpoint that proxies to Clio
  clioApiKey // This should come from your backend for security
}: CaseEvaluationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<'evaluation' | 'booking' | 'confirmation'>('evaluation');
  const [submissionComplete, setSubmissionComplete] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState<FormValues | null>(null);
  
  // Clio integration state
  const [availabilityData, setAvailabilityData] = useState<ClioAvailability[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<ClioTimeSlot | null>(null);
  const [loadingAvailability, setLoadingAvailability] = useState(false);
  const [bookingAppointment, setBookingAppointment] = useState(false);
  
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

  // Fetch available time slots from Clio
  const fetchAvailability = async (startDate: Date, endDate: Date) => {
    setLoadingAvailability(true);
    try {
      const response = await fetch(`${clioApiUrl}/calendar/availability`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${clioApiKey}` // Handle securely
        },
        body: JSON.stringify({
          start_date: format(startDate, 'yyyy-MM-dd'),
          end_date: format(endDate, 'yyyy-MM-dd'),
          duration: 60, // 60-minute consultation
          calendar_id: 'your-consultation-calendar-id' // Your specific calendar
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch availability');
      }

      const data = await response.json();
      setAvailabilityData(data.availability || []);
    } catch (error) {
      console.error('Error fetching availability:', error);
      toast({
        title: "Error Loading Availability",
        description: "Unable to load available appointment times. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingAvailability(false);
    }
  };

  // Load availability when moving to booking step
  useEffect(() => {
    if (currentStep === 'booking') {
      const today = new Date();
      const twoWeeksOut = addDays(today, 14);
      fetchAvailability(today, twoWeeksOut);
    }
  }, [currentStep]);

  // Submit case evaluation
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

  // Book appointment with Clio
  const bookAppointment = async () => {
    if (!selectedTimeSlot || !submittedFormData) return;

    setBookingAppointment(true);
    
    try {
      // First, create/find the contact in Clio
      const contactResponse = await fetch(`${clioApiUrl}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${clioApiKey}`
        },
        body: JSON.stringify({
          data: {
            first_name: submittedFormData.firstName,
            last_name: submittedFormData.lastName,
            email_addresses: [{ name: 'work', address: submittedFormData.email }],
            phone_numbers: [{ name: 'mobile', number: submittedFormData.phone }]
          }
        })
      });

      const contactData = await contactResponse.json();
      const contactId = contactData.data.id;

      // Create the matter
      const matterResponse = await fetch(`${clioApiUrl}/matters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${clioApiKey}`
        },
        body: JSON.stringify({
          data: {
            client: { id: contactId },
            description: `${submittedFormData.injuryType} - Personal Injury Consultation`,
            matter_number: `PI-${Date.now()}`,
            practice_area: 'Personal Injury',
            status: 'Open',
            open_date: format(new Date(), 'yyyy-MM-dd')
          }
        })
      });

      const matterData = await matterResponse.json();

      // Create the calendar entry
      const appointmentResponse = await fetch(`${clioApiUrl}/calendar_entries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${clioApiKey}`
        },
        body: JSON.stringify({
          data: {
            summary: `Personal Injury Consultation - ${submittedFormData.firstName} ${submittedFormData.lastName}`,
            description: `Consultation for ${submittedFormData.injuryType}\n\nDetails: ${submittedFormData.description}\n\nAccident Date: ${format(submittedFormData.dateOfAccident, 'PPP')}`,
            start_at: selectedTimeSlot.start_at,
            end_at: selectedTimeSlot.end_at,
            matter: { id: matterData.data.id },
            attendees: [{ id: contactId }]
          }
        })
      });

      if (!appointmentResponse.ok) {
        throw new Error('Failed to book appointment');
      }

      toast({
        title: "Appointment Booked Successfully",
        description: `Your consultation is scheduled for ${format(parseISO(selectedTimeSlot.start_at), 'PPP')} at ${format(parseISO(selectedTimeSlot.start_at), 'p')}.`,
      });

      setCurrentStep('confirmation');
    } catch (error) {
      console.error('Error booking appointment:', error);
      toast({
        title: "Booking Failed",
        description: "There was an error booking your appointment. Please try again or call our office.",
        variant: "destructive",
      });
    } finally {
      setBookingAppointment(false);
    }
  };

  const handleBackToEvaluation = () => {
    setCurrentStep('evaluation');
  };

  const handleBackToBooking = () => {
    setCurrentStep('booking');
  };

  const handleCloseDialog = () => {
    form.reset();
    setCurrentStep('evaluation');
    setSubmissionComplete(false);
    setSubmittedFormData(null);
    setSelectedDate(undefined);
    setSelectedTimeSlot(null);
    setAvailabilityData([]);
    onOpenChange(false);
  };

  // Get available dates for calendar
  const availableDates = availabilityData
    .filter(day => day.slots.some(slot => slot.available))
    .map(day => parseISO(day.date));

  // Get time slots for selected date
  const getTimeSlotsForDate = (date: Date) => {
    const dateStr = format(date, 'yyyy-MM-dd');
    const dayData = availabilityData.find(day => day.date === dateStr);
    return dayData?.slots.filter(slot => slot.available) || [];
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
        currentStep === 'booking' ? "max-w-4xl" : "max-w-md md:max-w-lg"
      )}>
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-law-purple">
            {currentStep === 'evaluation' && 'Free Case Evaluation'}
            {currentStep === 'booking' && 'Schedule Your Consultation'}
            {currentStep === 'confirmation' && 'Appointment Confirmed'}
          </DialogTitle>
          <DialogDescription>
            {currentStep === 'evaluation' && 'Complete the form below for a free evaluation of your personal injury case.'}
            {currentStep === 'booking' && 'Select a convenient time for your consultation appointment.'}
            {currentStep === 'confirmation' && 'Your consultation has been successfully scheduled.'}
          </DialogDescription>
        </DialogHeader>

        {currentStep === 'evaluation' && (
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

              <FormField
                control={form.control}
                name="bestTimeToCall"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Best time to call</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {callTimeOptions.map((option) => (
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
        )}

        {currentStep === 'booking' && (
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-4">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleBackToEvaluation}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Form
              </Button>
              <span className="text-sm text-muted-foreground">
                Case evaluation submitted successfully
              </span>
            </div>

            {loadingAvailability ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Loading available appointments...</span>
              </div>
            ) : (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => {
                      return date < startOfDay(new Date()) || 
                             !availableDates.some(availableDate => 
                               format(availableDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                             );
                    }}
                    className="rounded-md border"
                  />
                </div>

                {selectedDate && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Available Times for {format(selectedDate, 'PPP')}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {getTimeSlotsForDate(selectedDate).map((slot) => (
                        <Button
                          key={slot.id}
                          variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className="flex items-center gap-2 h-auto p-3"
                        >
                          <Clock className="h-4 w-4" />
                          <div className="text-left">
                            <div className="font-medium">
                              {format(parseISO(slot.start_at), 'h:mm a')}
                            </div>
                            {slot.attorney_name && (
                              <div className="text-xs text-muted-foreground">
                                {slot.attorney_name}
                              </div>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {selectedTimeSlot && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Appointment Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div><strong>Date:</strong> {format(parseISO(selectedTimeSlot.start_at), 'PPP')}</div>
                      <div><strong>Time:</strong> {format(parseISO(selectedTimeSlot.start_at), 'p')} - {format(parseISO(selectedTimeSlot.end_at), 'p')}</div>
                      <div><strong>Duration:</strong> 60 minutes</div>
                      <div><strong>Type:</strong> Personal Injury Consultation</div>
                      {selectedTimeSlot.attorney_name && (
                        <div><strong>Attorney:</strong> {selectedTimeSlot.attorney_name}</div>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={bookAppointment}
                    disabled={!selectedTimeSlot || bookingAppointment}
                    className="flex-1 bg-law-purple hover:bg-law-purple-light"
                  >
                    {bookingAppointment ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Booking Appointment...
                      </>
                    ) : (
                      <>
                        Confirm Appointment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {currentStep === 'confirmation' && (
          <div className="space-y-6">
            <div className="text-center space-y-4 py-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900">
                Consultation Scheduled Successfully
              </h3>
              
              {selectedTimeSlot && (
                <div className="bg-law-purple-light p-6 rounded-lg text-white">
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">
                      {format(parseISO(selectedTimeSlot.start_at), 'EEEE, MMMM d, yyyy')}
                    </div>
                    <div className="text-lg">
                      {format(parseISO(selectedTimeSlot.start_at), 'h:mm a')} - {format(parseISO(selectedTimeSlot.end_at), 'h:mm a')}
                    </div>
                    <div className="text-sm opacity-90">
                      Personal Injury Consultation (60 minutes)
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-gray-600 max-w-md mx-auto">
                A confirmation email has been sent to your email address. We look forward to discussing your case.
              </p>
              
              <div className="flex gap-4 justify-center pt-4">
                <Button 
                  variant="outline" 
                  onClick={handleCloseDialog}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CaseEvaluationForm;