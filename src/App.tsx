
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrustsPage from "./pages/TrustsPage";
import OurTeamPage from "./pages/OurTeamPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AttorneyProfilePage from "./pages/AttorneyProfilePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AttorneyAdvertisingPage from "./pages/AttorneyAdvertisingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SchedulePage from "./pages/SchedulePage";

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
              <Route path="/our-team" element={<OurTeamPage />} />
              <Route path="/team/:id" element={<AttorneyProfilePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/service/:id" element={<ServiceDetailPage />} />
              <Route path="/news-events" element={<NewsEventsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/trusts" element={<TrustsPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/attorney-advertising" element={<AttorneyAdvertisingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
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
