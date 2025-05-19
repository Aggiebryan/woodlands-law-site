
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import ServicesPageHeader from "@/components/ServicesPageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fetchPostBySlug, fetchRelatedPosts, type WordPressPost } from "@/services/wordPressService";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    if (!slug) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const post = await fetchPostBySlug(slug);
      setPost(post);
      
      // Fetch related posts if there are categories
      if (post.categories.length > 0) {
        const related = await fetchRelatedPosts(post.categories[0], post.id);
        setRelatedPosts(related);
      }
    } catch (err) {
      console.error("Error fetching post:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch post");
    } finally {
      setLoading(false);
    }
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="pt-20">
        <ServicesPageHeader 
          title="Loading..." 
          description="Please wait while the blog post loads."
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

  if (error || !post) {
    return (
      <div className="pt-20">
        <ServicesPageHeader 
          title="Post Not Found" 
          description="Sorry, we couldn't find the blog post you're looking for."
        />
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="text-red-600 mb-6">{error || "Failed to load post"}</p>
          <Button
            onClick={() => navigate("/news-events")}
            className="bg-law-purple hover:bg-law-purple-light text-white"
          >
            Return to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <ServicesPageHeader 
        title={post.title.rendered} 
        description={post.category_names?.[0] || "Blog"}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
              <div className="mb-8">
                <img 
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post._embedded["wp:featuredmedia"][0].alt_text || post.title.rendered}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            )}
            
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
              <Calendar size={16} className="text-law-gold" />
              <span>{formatDate(post.date)}</span>
              {post._embedded?.author?.[0] && (
                <>
                  <span className="mx-2">•</span>
                  <span>By {post._embedded.author[0].name}</span>
                </>
              )}
            </div>
            
            <div 
              className="prose prose-lg max-w-none 
                prose-headings:font-serif
                prose-h1:text-3xl md:prose-h1:text-4xl prose-h1:font-bold prose-h1:text-law-purple prose-h1:mb-6
                prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-semibold prose-h2:text-law-purple prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-medium prose-h3:text-law-purple prose-h3:mt-6 prose-h3:mb-3
                prose-h4:text-lg md:prose-h4:text-xl prose-h4:font-medium prose-h4:text-law-purple
                prose-p:text-base md:prose-p:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4
                prose-a:text-law-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-5
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-5
                prose-li:mb-2"
              dangerouslySetInnerHTML={{ __html: post.content?.rendered || '' }}
            />
            
            {/* Category tags */}
            {post.category_names && post.category_names.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {post.category_names.map((category, index) => (
                  <span key={index} className="bg-law-gray-light px-3 py-1 rounded-full text-sm text-gray-700">
                    {category}
                  </span>
                ))}
              </div>
            )}
            
            <div className="mt-8 border-t border-gray-200 pt-8">
              <Link 
                to="/news-events" 
                className="inline-flex items-center text-law-purple hover:text-law-gold transition-colors"
              >
                ← Back to All Posts
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <Card className="p-6 bg-law-gray-light mb-8">
              <h3 className="text-xl font-serif text-law-purple mb-4">Related Posts</h3>
              
              {relatedPosts.length > 0 ? (
                <div className="space-y-6">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.id} className="flex gap-4">
                      {relatedPost._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                        <div className="w-20 h-20 flex-shrink-0">
                          <img 
                            src={relatedPost._embedded["wp:featuredmedia"][0].source_url}
                            alt={relatedPost.title.rendered}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                      )}
                      <div>
                        <Link 
                          to={`/blog/${relatedPost.slug}`} 
                          className="font-medium text-law-purple hover:text-law-gold line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }}
                        />
                        <div className="text-xs text-gray-500 mt-1">
                          {formatDate(relatedPost.date)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">No related posts found</p>
              )}
            </Card>
            
            {/* Newsletter Signup (same as in NewsEventsPage) */}
            <div className="bg-law-purple p-6 rounded text-white">
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
    </div>
  );
};

export default BlogPostPage;
