
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { WordPressPost } from "@/services/wordPressService";
import NewsletterSignup from "./NewsletterSignup";

interface BlogPostSidebarProps {
  relatedPosts: WordPressPost[];
  formatDate: (dateString: string) => string;
}

const BlogPostSidebar = ({ relatedPosts, formatDate }: BlogPostSidebarProps) => {
  return (
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
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
};

export default BlogPostSidebar;
