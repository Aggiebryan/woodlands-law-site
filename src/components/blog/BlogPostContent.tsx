
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { WordPressPost } from "@/services/wordPressService";

interface BlogPostContentProps {
  post: WordPressPost;
  formatDate: (dateString: string) => string;
}

const BlogPostContent = ({ post, formatDate }: BlogPostContentProps) => {
  return (
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
  );
};

export default BlogPostContent;
