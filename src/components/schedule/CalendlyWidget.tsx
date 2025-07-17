import { useEffect } from "react";

const CalendlyWidget = () => {
  useEffect(() => {
    // Load Calendly script and CSS
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Initialize widget once script loads
    script.onload = () => {
      const widgetContainer = document.getElementById("calendly-container");
      if (widgetContainer && (window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: "https://calendly.com/d/cszv-ds2-tvv/new-client-15-minute-consultation-telephone",
          parentElement: widgetContainer
        });
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, []);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md overflow-hidden">
      <div 
        id="calendly-container"
        style={{ 
          minWidth: "100%",
          height: "650px", 
          overflow: "hidden"
        }}
      />
    </div>
  );
};

export default CalendlyWidget;