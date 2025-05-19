
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ServicesPageHeader from "@/components/ServicesPageHeader";
import { fetchPosts, fetchCategories, WordPressPost } from "@/services/wordPressService";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const BlogCategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allCategories, setAllCategories] = useState<Record<number, string>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
    loadCategoryPosts();
    loadAllCategories();
  }, [categoryId, currentPage]);

  const loadCategoryPosts = async () => {
    if (!categoryId) return;
    
    const catId = parseInt(categoryId);
    if (isNaN(catId)) {
      navigate("/news-events", { replace: true });
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const categories = await fetchCategories([catId]);
      if (!categories[catId]) {
        throw new Error("Category not found");
      }
      
      setCategoryName(categories[catId]);
      
      const { posts, totalPages } = await fetchPosts(currentPage, 10, [catId]);
      setPosts(posts);
      setTotalPages(totalPages);
    } catch (err) {
      console.error("Error fetching category posts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch category posts");
    } finally {
      setLoading(false);
    }
  };

  const loadAllCategories = async () => {
    try {
      const categories = await fetchCategories();
      setAllCategories(categories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="pt-20 font-serif">
      <ServicesPageHeader 
        title={categoryName || "Category"}
        description="Blog Posts"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-2/3">
            {loading ? (
              // Loading state
              <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex flex-col md:flex-row gap-6 animate-pulse">
                    <div className="md:w-1/3 h-48 bg-gray-200 rounded-lg"></div>
                    <div className="md:w-2/3 space-y-4">
                      <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              // Error state
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex">
                  <div className="ml-3">
                    <h3 className="text-red-800 font-medium">Error</h3>
                    <p className="text-red-700">{error}</p>
                    <button 
                      onClick={loadCategoryPosts} 
                      className="mt-2 text-red-800 underline hover:text-red-600"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              </div>
            ) : posts.length === 0 ? (
              // No posts state
              <div className="text-center py-12">
                <h3 className="text-2xl font-serif text-law-purple mb-4">No posts found</h3>
                <p className="text-gray-600">There are no posts in this category yet.</p>
                <Link 
                  to="/news-events" 
                  className="inline-block mt-6 text-law-gold hover:text-law-purple transition-colors"
                >
                  Browse all posts
                </Link>
              </div>
            ) : (
              // Posts listing
              <div className="space-y-10">
                {posts.map(post => (
                  <div key={post.id} className="flex flex-col md:flex-row gap-6 pb-8 border-b border-gray-200 last:border-0">
                    {/* Thumbnail */}
                    <div className="md:w-1/3 flex-shrink-0">
                      <Link to={`/blog/${post.slug}`}>
                        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ? (
                          <img 
                            src={post._embedded["wp:featuredmedia"][0].source_url}
                            alt={post.title.rendered}
                            className="w-full h-48 object-cover rounded-lg shadow-md"
                          />
                        ) : (
                          <div className="w-full h-48 bg-law-gray-light rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-lg">No image</span>
                          </div>
                        )}
                      </Link>
                    </div>
                    
                    {/* Content */}
                    <div className="md:w-2/3">
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-law-purple hover:text-law-gold transition-colors"
                      >
                        <h2 
                          className="text-xl md:text-2xl font-bold mb-2" 
                          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                        />
                      </Link>
                      
                      <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
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
                        className="text-gray-600 line-clamp-3 mb-4"
                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                      />
                      
                      <Link 
                        to={`/blog/${post.slug}`}
                        className="text-law-gold hover:text-law-purple font-medium transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-12">
                    <div className="flex items-center gap-2">
                      {/* Previous page button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 rounded ${
                          currentPage === 1
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-law-purple hover:bg-law-purple hover:text-white'
                        }`}
                      >
                        ←
                      </button>
                      
                      {/* Page numbers */}
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          className={`px-3 py-1 rounded ${
                            currentPage === page
                              ? 'bg-law-purple text-white'
                              : 'text-law-purple hover:bg-law-gray-light'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                      
                      {/* Next page button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 rounded ${
                          currentPage === totalPages
                            ? 'text-gray-400 cursor-not-allowed'
                            : 'text-law-purple hover:bg-law-purple hover:text-white'
                        }`}
                      >
                        →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            {/* Categories Section */}
            <Card className="p-6 bg-law-gray-light mb-8">
              <h3 className="text-xl font-serif font-bold text-law-purple mb-4">Categories</h3>
              
              {Object.keys(allCategories).length === 0 ? (
                <div className="animate-pulse space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 bg-gray-200 rounded w-3/4"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {Object.entries(allCategories).map(([id, name]) => (
                    <div key={id} className="flex items-center">
                      <Link 
                        to={`/blog/category/${id}`}
                        className={`text-${parseInt(id) === parseInt(categoryId || '0') ? 'law-gold' : 'law-purple'} hover:text-law-gold transition-colors font-serif`}
                      >
                        {name}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </Card>
            
            {/* Newsletter Signup */}
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryPage;
