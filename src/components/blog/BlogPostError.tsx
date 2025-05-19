
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ServicesPageHeader from "@/components/ServicesPageHeader";

interface BlogPostErrorProps {
  error: string | null;
}

const BlogPostError = ({ error }: BlogPostErrorProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="pt-20">
      <ServicesPageHeader 
        title="Post Not Found" 
        description="Sorry, we couldn't find the blog post you're looking for."
      />
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-600 mb-6">{error || "Failed to load post"}</p>
        <Button
          onClick={() => navigate("/news-events")}
          className="bg-law-purple hover:bg-law-purple-light text-white"
        >
          Return to Blog
        </Button>
      </div>
    </div>
  );
};

export default BlogPostError;
