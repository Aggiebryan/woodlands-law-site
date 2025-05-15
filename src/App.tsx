
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrustsPage from "./pages/TrustsPage";
import AttorneysPage from "./pages/AttorneysPage";
import GwendolynSimpsonPage from "./pages/GwendolynSimpsonPage";
import BryanHolmanPage from "./pages/BryanHolmanPage";
import CourtneyFieldPage from "./pages/CourtneyFieldPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/attorneys" element={<AttorneysPage />} />
              <Route path="/team/gwendolyn-simpson" element={<GwendolynSimpsonPage />} />
              <Route path="/team/bryan-holman" element={<BryanHolmanPage />} />
              <Route path="/team/courtney-field" element={<CourtneyFieldPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/trusts" element={<TrustsPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
