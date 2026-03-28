
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Routes, Route } from "react-router-dom";
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
import EventsListPage from "./pages/EventsListPage";
import EventPage from "./pages/EventPage";
import TexasCivilTimeLimitsPage from "./pages/TexasCivilTimeLimitsPage";

// Import practice area pages
import PersonalInjuryPage from "./pages/practice-areas/PersonalInjuryPage";
import InsuranceLitigationPage from "./pages/practice-areas/InsuranceLitigationPage";
import CivilLitigationPage from "./pages/practice-areas/CivilLitigationPage";
import DTPAPage from "./pages/practice-areas/DTPAPage";
import BusinessPlanningPage from "./pages/practice-areas/BusinessPlanningPage";
import EstatePlanningPage from "./pages/practice-areas/EstatePlanningPage";

// Import Texas DTPA resource pages
import WhatQualifiesAsDeceptivePage from "./pages/texas-dtpa/WhatQualifiesAsDeceptivePage";
import FalseVerbalStatementsPage from "./pages/texas-dtpa/FalseVerbalStatementsPage";
import IntentRequiredPage from "./pages/texas-dtpa/IntentRequiredPage";
import MisleadingAdvertisingPage from "./pages/texas-dtpa/MisleadingAdvertisingPage";
import FailureToDisclosePage from "./pages/texas-dtpa/FailureToDisclosePage";
import HiddenContractTermsPage from "./pages/texas-dtpa/HiddenContractTermsPage";
import BreachOfContractPage from "./pages/texas-dtpa/BreachOfContractPage";
import RelianceRequiredPage from "./pages/texas-dtpa/RelianceRequiredPage";
import UndisclosedFeesPage from "./pages/texas-dtpa/UndisclosedFeesPage";
import WhoIsAConsumerPage from "./pages/texas-dtpa/WhoIsAConsumerPage";
import CanABusinessSuePage from "./pages/texas-dtpa/CanABusinessSuePage";
import InsuranceMisrepresentationsPage from "./pages/texas-dtpa/InsuranceMisrepresentationsPage";
import ContractorPoorWorkmanshipPage from "./pages/texas-dtpa/ContractorPoorWorkmanshipPage";
import CarDealerMisrepresentationsPage from "./pages/texas-dtpa/CarDealerMisrepresentationsPage";
import StatuteOfLimitationsPage from "./pages/texas-dtpa/StatuteOfLimitationsPage";
import PreSuitNoticePage from "./pages/texas-dtpa/PreSuitNoticePage";
import DamagesAvailablePage from "./pages/texas-dtpa/DamagesAvailablePage";
import TrebleDamagesPage from "./pages/texas-dtpa/TrebleDamagesPage";
import AttorneysFeesPage from "./pages/texas-dtpa/AttorneysFeesPage";
import SettlementOfferEffectPage from "./pages/texas-dtpa/SettlementOfferEffectPage";
import CommonDefensesPage from "./pages/texas-dtpa/CommonDefensesPage";
import PersonalLiabilityPage from "./pages/texas-dtpa/PersonalLiabilityPage";
import WhereToFilePage from "./pages/texas-dtpa/WhereToFilePage";
import ClassActionsPage from "./pages/texas-dtpa/ClassActionsPage";
import StepsBeforeFilingPage from "./pages/texas-dtpa/StepsBeforeFilingPage";
import MergerIntegrationClausePage from "./pages/texas-dtpa/MergerIntegrationClausePage";
import AsIsClausePage from "./pages/texas-dtpa/AsIsClausePage";
import NonRelianceDisclaimerPage from "./pages/texas-dtpa/NonRelianceDisclaimerPage";
import HiddenFeesPage from "./pages/texas-dtpa/HiddenFeesPage";
import BaitAndSwitchPage from "./pages/texas-dtpa/BaitAndSwitchPage";
import FinancingTermsAprPage from "./pages/texas-dtpa/FinancingTermsAprPage";
import PartialBusinessUsePage from "./pages/texas-dtpa/PartialBusinessUsePage";
import HomeownerContractorPage from "./pages/texas-dtpa/HomeownerContractorPage";
import FamilyMemberClaimPage from "./pages/texas-dtpa/FamilyMemberClaimPage";
import CarBuyerUndisclosedDamagePage from "./pages/texas-dtpa/CarBuyerUndisclosedDamagePage";
import OverchargingUnperformedWorkPage from "./pages/texas-dtpa/OverchargingUnperformedWorkPage";
import FreeTrialAutoRenewalPage from "./pages/texas-dtpa/FreeTrialAutoRenewalPage";
import StructuredData from "./components/StructuredData";

const AppShell = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <StructuredData />
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
          <Route path="/legal-tools/texas-civil-time-limits" element={<TexasCivilTimeLimitsPage />} />

          {/* Practice Area Routes */}
          <Route path="/practice-areas/personal-injury" element={<PersonalInjuryPage />} />
          <Route path="/practice-areas/insurance-litigation" element={<InsuranceLitigationPage />} />
          <Route path="/practice-areas/civil-litigation" element={<CivilLitigationPage />} />
          <Route path="/practice-areas/deceptive-trade-practices-act" element={<DTPAPage />} />
          <Route path="/practice-areas/business-planning" element={<BusinessPlanningPage />} />
          <Route path="/practice-areas/estate-planning" element={<EstatePlanningPage />} />

          {/* Texas DTPA Resource Pages */}
          <Route path="/texas-dtpa/what-qualifies-as-deceptive" element={<WhatQualifiesAsDeceptivePage />} />
          <Route path="/texas-dtpa/false-verbal-statements" element={<FalseVerbalStatementsPage />} />
          <Route path="/texas-dtpa/intent-required" element={<IntentRequiredPage />} />
          <Route path="/texas-dtpa/misleading-advertising" element={<MisleadingAdvertisingPage />} />
          <Route path="/texas-dtpa/failure-to-disclose" element={<FailureToDisclosePage />} />
          <Route path="/texas-dtpa/hidden-contract-terms" element={<HiddenContractTermsPage />} />
          <Route path="/texas-dtpa/breach-of-contract" element={<BreachOfContractPage />} />
          <Route path="/texas-dtpa/reliance-required" element={<RelianceRequiredPage />} />
          <Route path="/texas-dtpa/undisclosed-fees" element={<UndisclosedFeesPage />} />
          <Route path="/texas-dtpa/who-is-a-consumer" element={<WhoIsAConsumerPage />} />
          <Route path="/texas-dtpa/can-a-business-sue" element={<CanABusinessSuePage />} />
          <Route path="/texas-dtpa/insurance-misrepresentations" element={<InsuranceMisrepresentationsPage />} />
          <Route path="/texas-dtpa/contractor-poor-workmanship" element={<ContractorPoorWorkmanshipPage />} />
          <Route path="/texas-dtpa/car-dealer-misrepresentations" element={<CarDealerMisrepresentationsPage />} />
          <Route path="/texas-dtpa/statute-of-limitations" element={<StatuteOfLimitationsPage />} />
          <Route path="/texas-dtpa/pre-suit-notice" element={<PreSuitNoticePage />} />
          <Route path="/texas-dtpa/damages-available" element={<DamagesAvailablePage />} />
          <Route path="/texas-dtpa/treble-damages" element={<TrebleDamagesPage />} />
          <Route path="/texas-dtpa/attorneys-fees" element={<AttorneysFeesPage />} />
          <Route path="/texas-dtpa/settlement-offer-effect" element={<SettlementOfferEffectPage />} />
          <Route path="/texas-dtpa/common-defenses" element={<CommonDefensesPage />} />
          <Route path="/texas-dtpa/personal-liability" element={<PersonalLiabilityPage />} />
          <Route path="/texas-dtpa/where-to-file" element={<WhereToFilePage />} />
          <Route path="/texas-dtpa/class-actions" element={<ClassActionsPage />} />
          <Route path="/texas-dtpa/steps-before-filing" element={<StepsBeforeFilingPage />} />
          <Route path="/texas-dtpa/merger-integration-clause" element={<MergerIntegrationClausePage />} />
          <Route path="/texas-dtpa/as-is-clause" element={<AsIsClausePage />} />
          <Route path="/texas-dtpa/non-reliance-disclaimer" element={<NonRelianceDisclaimerPage />} />
          <Route path="/texas-dtpa/hidden-fees" element={<HiddenFeesPage />} />
          <Route path="/texas-dtpa/bait-and-switch" element={<BaitAndSwitchPage />} />
          <Route path="/texas-dtpa/financing-terms-apr" element={<FinancingTermsAprPage />} />
          <Route path="/texas-dtpa/partial-business-use" element={<PartialBusinessUsePage />} />
          <Route path="/texas-dtpa/homeowner-contractor" element={<HomeownerContractorPage />} />
          <Route path="/texas-dtpa/family-member-claim" element={<FamilyMemberClaimPage />} />
          <Route path="/texas-dtpa/car-buyer-undisclosed-damage" element={<CarBuyerUndisclosedDamagePage />} />
          <Route path="/texas-dtpa/overcharging-unperformed-work" element={<OverchargingUnperformedWorkPage />} />
          <Route path="/texas-dtpa/free-trial-auto-renewal" element={<FreeTrialAutoRenewalPage />} />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </TooltipProvider>
);

export default AppShell;
