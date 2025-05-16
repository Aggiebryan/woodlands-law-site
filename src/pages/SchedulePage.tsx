
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const SchedulePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // In a real application, you would send this data to your backend
    console.log(data);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Consultation Requested",
        description: "We'll contact you shortly to confirm your consultation.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Page Header */}
      <div className="bg-law-purple py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">Schedule a Consultation</h1>
          <p className="text-white/80 max-w-2xl">
            Complete the form below to request a consultation with one of our experienced attorneys.
            We'll contact you promptly to confirm your appointment.
          </p>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="bg-law-gray-light p-8 rounded-lg">
              <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-law-gold p-2 rounded-full">
                    <Phone className="h-5 w-5 text-law-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-700">(281) 292-2522</p>
                    <p className="text-sm text-gray-600 mt-1">Call us to speak directly with our team</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-law-gold p-2 rounded-full">
                    <Mail className="h-5 w-5 text-law-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-700">info@woodlands.law</p>
                    <p className="text-sm text-gray-600 mt-1">We'll respond to your inquiry promptly</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-law-gold p-2 rounded-full">
                    <Clock className="h-5 w-5 text-law-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-700">Monday - Friday: 8:30 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-600 mt-1">Additional hours available by appointment</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-serif mb-4">Office Location</h4>
                <address className="not-italic text-gray-700 mb-4">
                  26545 Cheswood Drive<br />
                  The Woodlands, TX 77380
                </address>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div>
              <h3 className="text-2xl font-serif mb-6">Request Your Consultation</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Services Needed</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="business-planning">Business Planning</SelectItem>
                            <SelectItem value="personal-injury">Personal Injury</SelectItem>
                            <SelectItem value="insurance-dispute">Insurance Dispute</SelectItem>
                            <SelectItem value="dtpa-questions">DTPA Questions</SelectItem>
                            <SelectItem value="estate-planning">Estate Planning</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your legal matter" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-law-purple hover:bg-law-purple-light text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Request Consultation"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
