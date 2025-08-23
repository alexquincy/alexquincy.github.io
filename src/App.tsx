import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// GitHub Pages SPA support
const GitHubPagesRouter = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Handle GitHub Pages SPA routing
    if (window.location.search.includes('/?/')) {
      const redirect = window.location.search.replace('/?/', '/').replace(/&/g, '&');
      window.history.replaceState(null, '', window.location.pathname + redirect + window.location.hash);
    }
  }, []);

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.PROD ? '/ornate-bonzai' : ''}>
        <GitHubPagesRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GitHubPagesRouter>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
