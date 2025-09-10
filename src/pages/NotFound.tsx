import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-charcoal">404 - Page Not Found</h1>
        <p className="mb-4 text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="text-primary hover:text-primary-hover underline focus-ring rounded px-1 py-1">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
