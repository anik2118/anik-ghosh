
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-portfolio-primary mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-portfolio-secondary mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button asChild>
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
