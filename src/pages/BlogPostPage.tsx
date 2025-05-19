
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ServicesPageHeader from "@/components/ServicesPageHeader";
import BlogPostLoading from "@/components/blog/BlogPostLoading";
import BlogPostError from "@/components/blog/BlogPostError";
import BlogPostContent from "@/components/blog/BlogPostContent";
import BlogPostSidebar from "@/components/blog/BlogPostSidebar";
import { fetchPostBySlug, fetchRelatedPosts, type WordPressPost } from "@/services/wordPressService";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
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
    return <BlogPostLoading />;
  }

  if (error || !post) {
    return <BlogPostError error={error} />;
  }

  return (
    <div className="pt-20 font-serif">
      <ServicesPageHeader 
        title={post.title.rendered} 
        description={post.category_names?.[0] || "Blog"}
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <BlogPostContent post={post} formatDate={formatDate} />
          <BlogPostSidebar relatedPosts={relatedPosts} formatDate={formatDate} />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
