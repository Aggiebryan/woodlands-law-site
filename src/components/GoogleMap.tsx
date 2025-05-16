
const GoogleMap = () => {
  return (
    <div className="h-80 w-full rounded-lg overflow-hidden shadow-md">
      <iframe 
        title="The Woodlands Law Firm Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2475228586723!2d-95.46340408493856!3d29.978120981910845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8647311ce9679e33%3A0x14c9b5f324dccf06!2s2219%20Sawdust%20Rd%20Suite%20803%2C%20Spring%2C%20TX%2077380!5e0!3m2!1sen!2sus!4v1652813506691!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
