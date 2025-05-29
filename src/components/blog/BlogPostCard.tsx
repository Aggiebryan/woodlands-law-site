import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPostCardProps {
  post: {
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
    category_names?: string[];
  };
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  // Function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
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
          <Link to={`/wp/${post.slug}`} className="text-law-purple hover:text-law-gold font-medium text-sm">
            Read More
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard;