import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Maple Tree & Gardens</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Maple Tree & Gardens homepage for professional tree surgery and garden services in Troon & Ayrshire." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://mapletreeandgardens.netlify.app/404" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-[hsl(var(--grass-green))] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[hsl(var(--asphalt-grey))] mb-4">Page Not Found</h2>
          <p className="text-lg text-[hsl(var(--asphalt-grey))] mb-8 leading-relaxed">
            Sorry, the page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          <div className="space-y-4">
            <a 
              href="/" 
              className="inline-block bg-[hsl(var(--grass-green))] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Return to Homepage
            </a>
            
            <div className="text-sm text-[hsl(var(--asphalt-grey))]">
              <p className="mb-2">Or try these popular pages:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/tree-surgery" className="text-[hsl(var(--grass-green))] hover:underline">Tree Surgery</a>
                <a href="/lawn-mowing" className="text-[hsl(var(--grass-green))] hover:underline">Lawn Care</a>
                <a href="/troon" className="text-[hsl(var(--grass-green))] hover:underline">Troon Services</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
