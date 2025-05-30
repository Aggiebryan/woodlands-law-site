import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import ServicesPageHeader from "@/components/ServicesPageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { fetchEvents, type WordPressEvent } from "@/services/wordPressService";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

const EventsListPage = () => {
  const [events, setEvents] = useState<WordPressEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showPastEvents, setShowPastEvents] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadEvents();
  }, [currentPage, showPastEvents]);

  const loadEvents = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { events: fetchedEvents, totalPages } = await fetchEvents(
        currentPage, 
        12, 
        !showPastEvents // upcoming only if showPastEvents is false
      );
      setEvents(fetchedEvents);
      setTotalPages(totalPages);
    } catch (err) {
      console.error("Error loading events:", err);
      setError(err instanceof Error ? err.message : "Failed to load events");
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
        weekday: 'short',
        year: 'numeric', 
        month: 'short', 
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleEventType = () => {
    setShowPastEvents(!showPastEvents);
    setCurrentPage(1); // Reset to first page when switching
  };

  return (
    <div className="pt-20 font-serif">
      <ServicesPageHeader 
        title="Events" 
        description="Legal workshops, seminars, and community events"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Event Type Toggle */}
            <div className="mb-8 flex flex-wrap items-center justify-between">
              <h2 className="text-2xl font-serif text-law-purple">
                {showPastEvents ? "Past Events" : "Upcoming Events"}
              </h2>
              <button
                onClick={toggleEventType}
                className="text-law-gold hover:text-law-purple font-medium transition-colors"
              >
                View {showPastEvents ? "Upcoming" : "Past"} Events
              </button>
            </div>

            {loading ? (
              // Loading state
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="animate-pulse">
                    <CardContent className="p-6">
                      <div className="h-6 bg-gray-200 rounded mb-4"></div>
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="mt-4 h-8 bg-gray-200 rounded w-1/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : error ? (
              // Error state
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-red-800 font-medium">Error Loading Events</h3>
                    <p className="text-red-700 mt-2">{error}</p>
                    <button 
                      onClick={loadEvents} 
                      className="mt-4 text-red-800 underline hover:text-red-600"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              </div>
            ) : events.length === 0 ? (
              // No events state
              <div className="text-center py-12">
                <Calendar className="mx-auto text-gray-400 w-16 h-16 mb-6" />
                <h3 className="text-2xl font-serif text-law-purple mb-4">
                  {showPastEvents ? "No Past Events" : "No Upcoming Events"}
                </h3>
                <p className="text-gray-600 mb-6">
                  {showPastEvents 
                    ? "No past events to display." 
                    : "No upcoming events are currently scheduled."}
                </p>
                {!showPastEvents && (
                  <p className="text-sm text-gray-500">Check back soon for new events!</p>
                )}
              </div>
            ) : (
              // Events grid
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {events.map(event => {
                    const isPast = isEventPast(event);
                    return (
                      <Card key={event.id} className="bg-white hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          {/* Event Status Badge */}
                          {isPast && (
                            <div className="mb-4">
                              <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                                Past Event
                              </span>
                            </div>
                          )}

                          {/* Event Title */}
                          <h3 className="text-xl font-serif font-bold text-law-purple mb-4">
                            <Link 
                              to={`/events/${event.slug}`}
                              className="hover:text-law-gold transition-colors"
                              dangerouslySetInnerHTML={{ __html: event.title.rendered }}
                            />
                          </h3>
                          
                          {/* Event Details */}
                          <div className="space-y-3 mb-6">
                            <div className="flex items-center text-gray-600">
                              <Calendar className="w-4 h-4 mr-3 text-law-gold flex-shrink-0" />
                              <span className="text-sm">{formatEventDate(event)}</span>
                            </div>
                            
                            <div className="flex items-center text-gray-600">
                              <Clock className="w-4 h-4 mr-3 text-law-gold flex-shrink-0" />
                              <span className="text-sm">{getEventTime(event)}</span>
                            </div>
                            
                            <div className="flex items-start text-gray-600">
                              <MapPin className="w-4 h-4 mr-3 mt-0.5 text-law-gold flex-shrink-0" />
                              <span className="text-sm">{getEventLocation(event)}</span>
                            </div>
                          </div>
                          
                          {/* Event Excerpt */}
                          <div 
                            className="text-gray-700 text-sm mb-6 line-clamp-3"
                            dangerouslySetInnerHTML={{ __html: event.excerpt.rendered }}
                          />
                          
                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link 
                              to={`/events/${event.slug}`}
                              className="text-law-purple hover:text-law-gold font-medium text-sm transition-colors"
                            >
                              View Details →
                            </Link>
                            
                            {!isPast && (
                              <Link 
                                to={getRegistrationLink(event)}
                                className="bg-law-gold hover:bg-law-gold-light text-law-purple font-medium py-2 px-4 rounded text-sm transition-colors inline-flex items-center justify-center"
                              >
                                <Users className="w-4 h-4 mr-2" />
                                Register
                              </Link>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                      {/* Previous page button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded ${
                          currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-law-purple hover:bg-law-purple hover:text-white border border-law-purple'
                        }`}
                      >
                        Previous
                      </button>
                      
                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-4 py-2 rounded ${
                            currentPage === page
                              ? 'bg-law-purple text-white'
                              : 'text-law-purple hover:bg-law-gray-light border border-law-purple'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      {/* Next page button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${
                          currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-law-purple hover:bg-law-purple hover:text-white border border-law-purple'
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Quick Info Card */}
            <Card className="bg-law-purple text-white mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4">Stay Informed</h3>
                <p className="text-white/90 mb-4">
                  Join our events to stay current with legal developments and connect with our community.
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

export default EventsListPage;
