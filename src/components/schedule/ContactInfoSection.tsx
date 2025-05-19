
import { Phone, Mail, Clock } from "lucide-react";

const ContactInfoSection = () => {
  return (
    <div className="bg-law-gray-light p-8 rounded-lg border border-gray-300">
      <h3 className="text-2xl font-serif mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-law-gold p-2 rounded-full">
            <Phone className="h-5 w-5 text-law-purple" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Phone</h4>
            <p className="text-gray-700">(832) 626-0116</p>
            <p className="text-sm text-gray-600 mt-1">Call us to speak directly with our team</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="bg-law-gold p-2 rounded-full">
            <Mail className="h-5 w-5 text-law-purple" />
          </div>
          <div>
            <h4 className="font-medium mb-1">Email</h4>
            <p className="text-gray-700">admin@woodlands.law</p>
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
          2219 Sawdust Rd. Suite 803<br />
          The Woodlands, TX 77380
        </address>
      </div>
    </div>
  );
};

export default ContactInfoSection;
