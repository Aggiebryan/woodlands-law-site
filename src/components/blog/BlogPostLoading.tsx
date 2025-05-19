
import ServicesPageHeader from "@/components/ServicesPageHeader";

const BlogPostLoading = () => {
  return (
    <div className="pt-20">
      <ServicesPageHeader 
        title="Loading..." 
        description="Please wait while the blog post loads."
      />
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-80 bg-gray-200 rounded-lg mb-8"></div>
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostLoading;
