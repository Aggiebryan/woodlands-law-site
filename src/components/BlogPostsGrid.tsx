
import { useState, useEffect } from "react";
import BlogPostCard from "./blog/BlogPostCard";
import BlogPostsLoading from "./blog/BlogPostsLoading";
import BlogPostsError from "./blog/BlogPostsError";
import BlogPostsPagination from "./blog/BlogPostsPagination";
import { fetchPosts, type WordPressPost } from "@/services/wordPressService";
import { useInitialPosts } from '@/components/blog/BlogDataContext';

interface BlogPostsGridProps {
  categories?: number[];
  limit?: number;
}

const BlogPostsGrid = ({ categories, limit = 6 }: BlogPostsGridProps) => {
  const initialPosts = useInitialPosts().filter(p => !categories?.length || p.categories.some(id => categories.includes(id)));
  const [posts, setPosts] = useState<WordPressPost[]>(initialPosts.slice(0, limit));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(Math.max(1, Math.ceil(initialPosts.length / limit)));

  const loadPosts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const { posts: fetchedPosts, totalPages } = await fetchPosts(currentPage, limit, categories);
      setPosts(fetchedPosts);
      setTotalPages(totalPages);
      
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPosts();
  }, [currentPage, categories, limit]);

  if (loading && posts.length === 0) {
    return <BlogPostsLoading count={limit} />;
  }

  if (error && posts.length === 0) {
    return <BlogPostsError error={error} onRetry={loadPosts} />;
  }

  return (
    <>
      {posts.length === 0 && !loading && !error ? (
        <div className="bg-gray-100 p-8 rounded text-center">
          <p className="text-gray-600 mb-4">No blog posts found.</p>
          <button 
            onClick={loadPosts}
            className="bg-law-purple text-white px-4 py-2 rounded hover:bg-law-purple-light"
          >
            Refresh Posts
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
      
      {posts.length > 0 && (
        <BlogPostsPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </>
  );
};

export default BlogPostsGrid;
