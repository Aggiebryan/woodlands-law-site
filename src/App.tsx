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
import BlogPostPage from "./pages/BlogPostPage";
import BlogCategoryPage from "./pages/BlogCategoryPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AttorneyProfilePage from "./pages/AttorneyProfilePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import AttorneyAdvertisingPage from "./pages/AttorneyAdvertisingPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import SchedulePage from "./pages/SchedulePage";
import InsuranceTermsGlossary from "./components/InsuranceTermsGlossary";
import SitemapPage from "./pages/SitemapPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";

// Import practice area pages
import PersonalInjuryPage from "./pages/practice-areas/PersonalInjuryPage";
import InsuranceLitigationPage from "./pages/practice-areas/InsuranceLitigationPage";
import CivilLitigationPage from "./pages/practice-areas/CivilLitigationPage";
import DTPAPage from "./pages/practice-areas/DTPAPage";
import BusinessPlanningPage from "./pages/practice-areas/BusinessPlanningPage";
import EstatePlanningPage from "./pages/practice-areas/EstatePlanningPage";

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
              <Route path="/wp/:slug" element={<BlogPostPage />} />
              <Route path="/wp/category/:categoryId" element={<BlogCategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/trusts" element={<TrustsPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/attorney-advertising" element={<AttorneyAdvertisingPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/insurance-glossary" element={<InsuranceTermsGlossary />} />
              <Route path="/sitemap" element={<SitemapPage />} />
              <Route path="/events" element={<EventsListPage />} />
              <Route path="/events/:slug" element={<EventPage />} />
              
              {/* Practice Area Routes */}
              <Route path="/practice-areas/personal-injury" element={<PersonalInjuryPage />} />
              <Route path="/practice-areas/insurance-litigation" element={<InsuranceLitigationPage />} />
              <Route path="/practice-areas/civil-litigation" element={<CivilLitigationPage />} />
              <Route path="/practice-areas/deceptive-trade-practices-act" element={<DTPAPage />} />
              <Route path="/practice-areas/business-planning" element={<BusinessPlanningPage />} />
              <Route path="/practice-areas/estate-planning" element={<EstatePlanningPage />} />
              
              {/* Catch-all route */}
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
