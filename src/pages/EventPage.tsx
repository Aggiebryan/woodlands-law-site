import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import ServicesPageHeader from "@/components/ServicesPageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { fetchEventBySlug, type WordPressEvent } from "@/services/wordPressService";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

const EventPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<WordPressEvent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadEvent();
  }, [slug]);

  const loadEvent = async () => {
    if (!slug) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const fetchedEvent = await fetchEventBySlug(slug);
      setEvent(fetchedEvent);
    } catch (err) {
      console.error("Error fetching event:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch event");
    } finally {
      setLoading(false);
    }
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Function to format event date with day of week
  const formatEventDate = (event: WordPressEvent) => {
    const eventDate = event.acf?.event_date || event.meta?.event_date;
    if (eventDate) {
      const date = new Date(eventDate);
      return date.toLocaleDateString('en-US', { 
        weekday: 'long',
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    return formatDate(event.date);
  };

  // Function to get event time
  const getEventTime = (event: WordPressEvent) => {
    const startTime = event.acf?.event_time || event.meta?.event_time;
    const endTime = event.acf?.event_end_time || event.meta?.event_end_time;
    
    if (startTime && endTime) {
      return `${startTime} - ${endTime}`;
    } else if (startTime) {
      return startTime;
    }
    return "Time TBA";
  };

  // Function to get event location
  const getEventLocation = (event: WordPressEvent) => {
    return event.acf?.event_location || event.meta?.event_location || "Location TBA";
  };

  // Function to get registration link
  const getRegistrationLink = (event: WordPressEvent) => {
    return event.acf?.registration_link || event.meta?.registration_link || "/schedule";
  };

  // Function to check if event is in the past
  const isEventPast = (event: WordPressEvent) => {
    const eventDate = event.acf?.event_date || event.meta?.event_date;
    if (eventDate) {
      const today = new Date();
      const eventDateObj = new Date(eventDate);
      return eventDateObj < today;
    }
    return false;
  };

  if (loading) {
    return (
      <div className="pt-20">
        <ServicesPageHeader 
          title="Loading..." 
          description="Please wait while the event loads."
        />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-80 bg-gray-200 rounded-lg mb-8"></div>
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="pt-20">
        <ServicesPageHeader 
          title="Event Not Found" 
          description="Sorry, we couldn't find the event you're looking for."
        />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600 mb-6">{error || "Failed to load event"}</p>
          <Button
            onClick={() => navigate("/news-events")}
            className="bg-law-purple hover:bg-law-purple-light text-white"
          >
            Return to News & Events
          </Button>
        </div>
      </div>
    );
  }

  const isPast = isEventPast(event);

  return (
    <div className="pt-20 font-serif">
      <ServicesPageHeader 
        title={event.title.rendered} 
        description="Event Details"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Featured Image */}
            {event._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <div className="mb-8">
                <img 
                  src={event._embedded["wp:featuredmedia"][0].source_url}
                  alt={event._embedded["wp:featuredmedia"][0].alt_text || event.title.rendered}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Event Status Badge */}
            {isPast && (
              <div className="mb-6">
                <span className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                  Past Event
                </span>
              </div>
            )}
            
            {/* Event Content */}
            <div 
              className="prose prose-lg max-w-none font-serif
                prose-headings:font-serif prose-headings:font-bold
                prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:text-law-purple prose-h1:mb-8 prose-h1:mt-10
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-law-purple prose-h2:mb-6 prose-h2:mt-10
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-law-purple prose-h3:mb-5 prose-h3:mt-8
                prose-h4:text-lg md:prose-h4:text-xl prose-h4:text-law-purple prose-h4:mb-4 prose-h4:mt-8
                prose-h5:text-base md:prose-h5:text-lg prose-h5:text-law-purple prose-h5:mb-4 prose-h5:mt-6
                prose-h6:text-sm md:prose-h6:text-base prose-h6:text-law-purple prose-h6:mb-4 prose-h6:mt-6
                prose-p:text-base md:prose-p:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-6
                prose-a:text-law-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-8
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-8
                prose-li:mb-3 prose-li:pl-2"
              dangerouslySetInnerHTML={{ 
                __html: event.content?.rendered || event.excerpt.rendered 
              }}
            />
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <Link 
                to="/news-events" 
                className="inline-flex items-center text-law-purple hover:text-law-gold transition-colors"
              >
                ← Back to News & Events
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Event Details Card */}
            <Card className="bg-law-gray-light mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-law-purple mb-6">Event Details</h3>
                
                <div className="space-y-4">
                  {/* Date */}
                  <div className="flex items-start">
                    <Calendar className="text-law-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-law-purple">Date</p>
                      <p className="text-gray-700">{formatEventDate(event)}</p>
                    </div>
                  </div>
                  
                  {/* Time */}
                  <div className="flex items-start">
                    <Clock className="text-law-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-law-purple">Time</p>
                      <p className="text-gray-700">{getEventTime(event)}</p>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start">
                    <MapPin className="text-law-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-law-purple">Location</p>
                      <p className="text-gray-700">{getEventLocation(event)}</p>
                    </div>
                  </div>
                </div>
                
                {/* Registration Button */}
                {!isPast && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link 
                      to={getRegistrationLink(event)}
                      className="w-full bg-law-purple hover:bg-law-purple-light text-white font-medium py-3 px-4 rounded transition-colors inline-block text-center"
                    >
                      <Users className="inline w-4 h-4 mr-2" />
                      Register for Event
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Contact Card */}
            <Card className="bg-law-purple text-white mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4">Questions?</h3>
                <p className="text-white/90 mb-4">
                  Have questions about this event? Contact us for more information.
                </p>
                <Link 
                  to="/schedule"
                  className="bg-law-gold text-law-purple font-medium py-2 px-4 rounded hover:bg-law-gold-light transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </CardContent>
            </Card>
            
            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
