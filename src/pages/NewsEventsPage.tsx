import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import BlogPostsGrid from "@/components/BlogPostsGrid";

const NewsEventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder events (keeping these since they're not from WordPress)
  const events = [
    {
      id: 1,
      title: "Estate Planning Workshop",
      date: "June 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "The Woodlands Community Center"
    },
    {
      id: 2,
      title: "Business Owner Legal Summit",
      date: "July 22, 2023",
      time: "9:00 AM - 4:00 PM",
      location: "The Woodlands Waterway Marriott"
    },
    {
      id: 3,
      title: "Insurance Claims Q&A Session",
      date: "August 10, 2023",
      time: "12:00 PM - 1:30 PM",
      location: "Online Webinar"
    }
  ];

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
            </div>
            
            {/* Events Sidebar - 1 column wide */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-serif text-law-purple mb-8">Upcoming Events</h2>
              <div className="bg-law-gray-light p-6 rounded">
                {events.map(event => (
                  <div key={event.id} className="mb-6 pb-6 border-b border-gray-300 last:border-0 last:mb-0 last:pb-0">
                    <div className="flex items-start">
                      <Calendar className="text-law-gold w-5 h-5 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-serif text-law-purple font-medium text-lg mb-1">{event.title}</h3>
                        <p className="text-gray-700 text-sm mb-1"><strong>Date:</strong> {event.date}</p>
                        <p className="text-gray-700 text-sm mb-1"><strong>Time:</strong> {event.time}</p>
                        <p className="text-gray-700 text-sm mb-3"><strong>Location:</strong> {event.location}</p>
                        <Link 
                          to="#" 
                          className="text-law-gold hover:text-law-purple font-medium text-sm"
                        >
                          Event Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 text-center">
                  <Link 
                    to="#"
                    className="border border-law-purple text-law-purple hover:bg-law-purple hover:text-white px-4 py-2 rounded inline-block transition-colors text-sm font-medium"
                  >
                    View All Events
                  </Link>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-8 bg-law-purple p-6 rounded text-white">
                <h3 className="font-serif text-xl mb-3">Stay Updated</h3>
                <p className="text-white/80 mb-4 text-sm">Subscribe to our newsletter for the latest legal updates and event announcements.</p>
                <form>
                  <input 
                    type="email" 
                    placeholder="Your Email Address" 
                    className="w-full p-2 mb-3 rounded text-gray-800"
                  />
                  <button type="submit" className="w-full bg-law-gold text-law-purple font-medium py-2 rounded hover:bg-law-gold-light transition-colors">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;
