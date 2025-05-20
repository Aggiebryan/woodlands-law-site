
import React from "react";

interface BlogPostsErrorProps {
  error: string;
  onRetry: () => void;
}

const BlogPostsError: React.FC<BlogPostsErrorProps> = ({ error, onRetry }) => {
  return (
    <div className="bg-red-50 p-8 rounded border border-red-200 text-center">
      <p className="text-red-600 mb-4">Error loading posts: {error}</p>
      <button 
        className="mt-2 bg-law-purple text-white px-4 py-2 rounded hover:bg-law-purple-light"
        onClick={onRetry}
      >
        Try Again
      </button>
    </div>
  );
};

export default BlogPostsError;
