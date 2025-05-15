
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const NewsEventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Texas Insurance Law Changes in 2023",
      excerpt: "Recent changes to Texas insurance laws are affecting how claims are processed. Learn what these changes mean for policyholders and claimants.",
      date: "May 10, 2023",
      category: "Insurance Litigation",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format"
    },
    {
      id: 2,
      title: "Estate Planning Strategies for Business Owners",
      excerpt: "Business owners face unique challenges when planning their estates. This post explores effective strategies to protect both your business and family interests.",
      date: "April 25, 2023",
      category: "Estate Planning",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format"
    },
    {
      id: 3,
      title: "What Constitutes Bad Faith in Insurance Claims?",
      excerpt: "Insurance companies have a duty to handle claims fairly and promptly. Learn the warning signs of bad faith practices and what you can do about them.",
      date: "March 18, 2023",
      category: "Insurance Litigation",
      image: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=2070&auto=format"
    },
    {
      id: 4,
      title: "Personal Injury Claims: What to Expect from Start to Finish",
      excerpt: "The personal injury claim process can be complex and intimidating. This guide walks you through each step, from initial consultation to settlement or trial.",
      date: "February 5, 2023",
      category: "Personal Injury",
      image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format"
    },
    {
      id: 5,
      title: "Business Succession Planning: Preparing for the Next Generation",
      excerpt: "Transitioning business leadership requires careful planning. Learn how to create a succession plan that ensures your business thrives for generations to come.",
      date: "January 22, 2023",
      category: "Business Planning",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=2070&auto=format"
    },
    {
      id: 6,
      title: "Texas DTPA: Your Rights as a Consumer",
      excerpt: "The Deceptive Trade Practices Act protects Texans from unfair business practices. Find out what rights you have and how to enforce them.",
      date: "December 14, 2022",
      category: "DTPA",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2069&auto=format"
    }
  ];

  // Placeholder events
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map(post => (
                  <div key={post.id} className="bg-white rounded shadow-md overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <span className="text-sm text-law-gold font-medium mb-1">{post.category}</span>
                      <h3 className="text-lg font-serif text-law-purple mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{post.excerpt}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <Link to="#" className="text-law-purple hover:text-law-gold font-medium text-sm">Read More</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <button className="px-4 py-2 bg-law-gray-light text-law-purple mx-1 rounded">1</button>
                <button className="px-4 py-2 bg-white text-gray-600 mx-1 rounded hover:bg-law-gray-light">2</button>
                <button className="px-4 py-2 bg-white text-gray-600 mx-1 rounded hover:bg-law-gray-light">Next →</button>
              </div>
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
