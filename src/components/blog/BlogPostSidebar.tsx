
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { WordPressPost } from "@/services/wordPressService";
import NewsletterSignup from "./NewsletterSignup";
import { fetchCategories } from "@/services/wordPressService";

interface Category {
  id: number;
  name: string;
  count: number;
  slug: string;
}

interface BlogPostSidebarProps {
  relatedPosts: WordPressPost[];
  formatDate: (dateString: string) => string;
}

const BlogPostSidebar = ({ relatedPosts, formatDate }: BlogPostSidebarProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const allCategories = await fetchCategories();
        // Only show categories that have posts
        const categoriesWithPosts = Object.entries(allCategories)
          .map(([id, name]) => ({ 
            id: parseInt(id), 
            name, 
            count: 0, 
            slug: name.toLowerCase().replace(/\s+/g, '-') 
          }))
          .filter(cat => cat.name !== 'Uncategorized');
          
        setCategories(categoriesWithPosts);
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoading(false);
      }
    };
    
    loadCategories();
  }, []);

  return (
    <div className="lg:w-1/3">
      <Card className="p-6 bg-law-gray-light mb-8">
        <h3 className="text-xl font-serif font-bold text-law-purple mb-4">Related Posts</h3>
        
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
                    className="font-medium text-law-purple hover:text-law-gold line-clamp-2 font-serif"
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
      
      {/* Categories Section */}
      <Card className="p-6 bg-law-gray-light mb-8">
        <h3 className="text-xl font-serif font-bold text-law-purple mb-4">Categories</h3>
        
        {loading ? (
          <div className="animate-pulse space-y-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 bg-gray-200 rounded w-3/4"></div>
            ))}
          </div>
        ) : categories.length > 0 ? (
          <div className="space-y-3">
            {categories.map(category => (
              <div key={category.id} className="flex items-center">
                <Link 
                  to={`/news-events?category=${category.id}`}
                  className="text-law-purple hover:text-law-gold transition-colors font-serif"
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No categories found</p>
        )}
      </Card>
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default BlogPostSidebar;
