import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import BlogPostsGrid from "@/components/BlogPostsGrid";
import { fetchCategories, fetchEvents, type WordPressEvent } from "@/services/wordPressService";
import NewsletterSignup from "@/components/blog/NewsletterSignup";

const NewsEventsPage = () => {
  const [categories, setCategories] = useState<Record<number, string>>({});
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [events, setEvents] = useState<WordPressEvent[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCategories();
    loadEvents();
  }, []);

  const loadCategories = async () => {
    try {
      setLoadingCategories(true);
      const cats = await fetchCategories();
      setCategories(cats);
    } catch (err) {
      console.error("Error loading categories:", err);
    } finally {
      setLoadingCategories(false);
    }
  };

  const loadEvents = async () => {
    try {
      setLoadingEvents(true);
      setEventsError(null);
      const { events: fetchedEvents } = await fetchEvents(1, 6, true); // Get first 6 upcoming events
      setEvents(fetchedEvents);
    } catch (err) {
      console.error("Error loading events:", err);
      setEventsError(err instanceof Error ? err.message : "Failed to load events");
    } finally {
      setLoadingEvents(false);
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

  // Function to format event date (from custom field or fallback to post date)
  const formatEventDate = (event: WordPressEvent) => {
    const eventDate = event.acf?.event_date || event.meta?.event_date;
    if (eventDate) {
      return formatDate(eventDate);
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

  return (
    <div className="pt-20">
      {/* Page Header */}
      <div className="relative bg-law-purple py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl text-white font-serif font-semibold mb-2">
            News & Events
          </h1>
          <div className="gold-underline"></div>
        </div>
      </div>

      {/* News & Events Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Blog Posts - 3 columns wide */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-serif text-law-purple mb-8">Latest News</h2>
              <BlogPostsGrid limit={6} />
              
              {/* Categories Section */}
              <div className="mt-12">
                <h3 className="text-xl font-serif text-law-purple mb-4">Browse by Category</h3>
                
                {loadingCategories ? (
                  <div className="flex flex-wrap gap-3 animate-pulse">
                    {[...Array(6)].map((_, index) => (
                      <div key={index} className="h-8 bg-gray-200 rounded-full w-24"></div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(categories).map(([id, name]) => (
                      <Link 
                        key={id} 
                        to={`/blog/category/${id}`} 
                        className="inline-block px-4 py-1 rounded-full bg-law-gray-light hover:bg-law-purple hover:text-white transition-colors text-law-purple font-medium"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Events Sidebar - 1 column wide */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif text-law-purple mb-8">Upcoming Events</h2>
              <div className="bg-law-gray-light p-6 rounded">
                {loadingEvents ? (
                  // Loading state for events
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <div key={index} className="animate-pulse pb-6 border-b border-gray-300 last:border-0">
                        <div className="flex items-start">
                          <div className="w-5 h-5 bg-gray-200 rounded mt-1 mr-3 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="h-6 bg-gray-200 rounded mb-2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6 mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : eventsError ? (
                  // Error state for events
                  <div className="text-center py-8">
                    <p className="text-red-600 mb-4">{eventsError}</p>
                    <button 
                      onClick={loadEvents}
                      className="text-law-purple hover:text-law-gold underline"
                    >
                      Try Again
                    </button>
                  </div>
                ) : events.length === 0 ? (
                  // No events state
                  <div className="text-center py-8">
                    <Calendar className="mx-auto text-gray-400 w-12 h-12 mb-4" />
                    <p className="text-gray-600 mb-2">No upcoming events scheduled.</p>
                    <p className="text-sm text-gray-500">Check back soon for new events!</p>
                  </div>
                ) : (
                  // Events listing
                  <>
                    {events.map(event => (
                      <div key={event.id} className="mb-6 pb-6 border-b border-gray-300 last:border-0 last:mb-0 last:pb-0">
                        <div className="flex items-start">
                          <Calendar className="text-law-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                          <div>
                            <h3 className="font-serif text-law-purple font-medium text-lg mb-1">
                              <span dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                            </h3>
                            <p className="text-gray-700 text-sm mb-1">
                              <strong>Date:</strong> {formatEventDate(event)}
                            </p>
                            <p className="text-gray-700 text-sm mb-1">
                              <strong>Time:</strong> {getEventTime(event)}
                            </p>
                            <p className="text-gray-700 text-sm mb-3">
                              <strong>Location:</strong> {getEventLocation(event)}
                            </p>
                            <div className="space-y-2">
                              <Link 
                                to={`/events/${event.slug}`}
                                className="text-law-gold hover:text-law-purple font-medium text-sm block"
                              >
                                Event Details
                              </Link>
                              {(event.acf?.registration_link || event.meta?.registration_link) && (
                                <Link 
                                  to={event.acf?.registration_link || event.meta?.registration_link || "/schedule"}
                                  className="text-law-purple hover:text-law-gold font-medium text-sm block"
                                >
                                  Register Now
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-6 text-center">
                      <Link 
                        to="/events"
                        className="border border-law-purple text-law-purple hover:bg-law-purple hover:text-white px-4 py-2 rounded inline-block transition-colors text-sm font-medium"
                      >
                        View All Events
                      </Link>
                    </div>
                  </>
                )}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8">
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;