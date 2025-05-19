
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
  categories: number[];
  category_names?: string[];
}

interface BlogPostsGridProps {
  categories?: number[];
  limit?: number;
}

const BlogPostsGrid = ({ categories, limit = 6 }: BlogPostsGridProps) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      let url = `/blog/wp-json/wp/v2/posts?_embed&per_page=${limit}&page=${currentPage}`;
      
      if (categories?.length) {
        url += `&categories=${categories.join(',')}`;
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
      }

      const totalPagesHeader = response.headers.get('X-WP-TotalPages');
      if (totalPagesHeader) {
        setTotalPages(parseInt(totalPagesHeader, 10));
      }
      
      const data = await response.json();
      
      // Fetch category names for each post
      const categoryIds = new Set<number>();
      data.forEach((post: WordPressPost) => {
        post.categories.forEach(catId => categoryIds.add(catId));
      });
      
      const categoryResponse = await fetch(`/blog/wp-json/wp/v2/categories?include=${Array.from(categoryIds).join(',')}`);
      if (!categoryResponse.ok) {
        throw new Error(`Failed to fetch categories: ${categoryResponse.status}`);
      }
      
      const categoryData = await categoryResponse.json();
      const categoryMap = categoryData.reduce((map: Record<number, string>, cat: { id: number, name: string }) => {
        map[cat.id] = cat.name;
        return map;
      }, {});
      
      // Enhance posts with category names
      const enhancedPosts = data.map((post: WordPressPost) => {
        return {
          ...post,
          category_names: post.categories.map(catId => categoryMap[catId] || 'Uncategorized')
        };
      });
      
      setPosts(enhancedPosts);
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage, categories, limit]);

  // Function to strip HTML tags from excerpt
  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading && posts.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(limit)].map((_, i) => (
          <Card key={i} className="bg-white rounded shadow-md overflow-hidden flex flex-col animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="h-4 w-1/4 bg-gray-200 mb-2 rounded"></div>
              <div className="h-6 bg-gray-200 mb-2 rounded"></div>
              <div className="h-20 bg-gray-200 mb-4 rounded"></div>
              <div className="flex justify-between mt-auto">
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (error && posts.length === 0) {
    return (
      <div className="bg-red-50 p-4 rounded border border-red-200 text-center">
        <p className="text-red-600">Error loading posts: {error}</p>
        <button 
          className="mt-2 bg-law-purple text-white px-4 py-2 rounded hover:bg-law-purple-light"
          onClick={() => fetchPosts()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <Card key={post.id} className="bg-white rounded shadow-md overflow-hidden flex flex-col h-full">
            <div className="h-48 overflow-hidden">
              <img 
                src={post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format"} 
                alt={post.title.rendered} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
              <span className="text-sm text-law-gold font-medium mb-1">
                {post.category_names?.[0] || 'Uncategorized'}
              </span>
              <h3 className="text-lg font-serif text-law-purple mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
              <div className="text-gray-600 text-sm mb-4 flex-grow" 
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 150) + "..." }} />
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-gray-500">{formatDate(post.date)}</span>
                <Link to={`/blog/${post.slug}`} className="text-law-purple hover:text-law-gold font-medium text-sm">
                  Read More
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          {currentPage > 1 && (
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-white text-gray-600 mx-1 rounded hover:bg-law-gray-light"
            >
              ← Previous
            </button>
          )}
          
          {[...Array(Math.min(5, totalPages))].map((_, i) => {
            // Show current page and up to 2 pages on each side
            let pageToShow;
            if (totalPages <= 5) {
              pageToShow = i + 1;
            } else if (currentPage <= 3) {
              pageToShow = i + 1;
            } else if (currentPage >= totalPages - 2) {
              pageToShow = totalPages - 4 + i;
            } else {
              pageToShow = currentPage - 2 + i;
            }
            
            return (
              <button 
                key={pageToShow}
                onClick={() => setCurrentPage(pageToShow)}
                className={`px-4 py-2 mx-1 rounded ${
                  pageToShow === currentPage ? 'bg-law-gray-light text-law-purple' : 'bg-white text-gray-600 hover:bg-law-gray-light'
                }`}
              >
                {pageToShow}
              </button>
            );
          })}
          
          {currentPage < totalPages && (
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              className="px-4 py-2 bg-white text-gray-600 mx-1 rounded hover:bg-law-gray-light"
            >
              Next →
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default BlogPostsGrid;
