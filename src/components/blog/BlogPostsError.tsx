
import React from "react";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface BlogPostsErrorProps {
  error: string;
  onRetry: () => void;
}

const BlogPostsError: React.FC<BlogPostsErrorProps> = ({ error, onRetry }) => {
  return (
    <Alert variant="destructive" className="bg-red-50 border border-red-200">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error loading posts</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-4">{error}</p>
        <p className="text-sm">Don't worry! We're showing you sample posts instead.</p>
        <button 
          className="mt-4 bg-law-purple text-white px-4 py-2 rounded hover:bg-law-purple-light transition-colors"
          onClick={onRetry}
        >
          Try Loading From WordPress Again
        </button>
      </AlertDescription>
    </Alert>
  );
};

export default BlogPostsError;
