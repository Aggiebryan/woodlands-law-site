
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-law-gray-light pt-20">
      <div className="text-center px-4">
        <h1 className="text-8xl font-serif font-bold text-law-navy mb-6">404</h1>
        <div className="gold-underline mx-auto mb-6"></div>
        <p className="text-2xl text-gray-700 mb-8">We couldn't find the page you're looking for.</p>
        <Link to="/" className="bg-law-navy hover:bg-law-navy-light text-white font-medium py-3 px-8 rounded transition-colors inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
