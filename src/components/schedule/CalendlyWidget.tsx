import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="border border-gray-300 p-8 rounded-lg">
      <h3 className="text-2xl font-serif mb-6">Schedule Your Consultation</h3>
      <div 
        className="calendly-inline-widget" 
        data-url="https://calendly.com/d/cszv-ds2-tvv/new-client-15-minute-consultation-telephone" 
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
};

export default CalendlyWidget;