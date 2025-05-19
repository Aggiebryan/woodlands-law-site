
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPostsLoadingProps {
  count: number;
}

const BlogPostsLoading: React.FC<BlogPostsLoadingProps> = ({ count }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(count)].map((_, i) => (
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
};

export default BlogPostsLoading;
