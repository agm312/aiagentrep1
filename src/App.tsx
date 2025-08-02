import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";
import AIDemoLanding from "./pages/AIDemoLanding.jsx";
import SetupCostForAIAutomation from "./pages/SetupCostForAIAutomation.jsx";
import QuickStartChecklist from "./pages/QuickStartChecklist.jsx";
import Pricing from "./pages/Pricing.jsx";
import ROIOfAIAutomation from "./pages/ROIOfAIAutomation.jsx";
import WhatAreAIAutomationAgencies from "./pages/WhatAreAIAutomationAgencies.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import ChicagoAIAutomation from "./pages/ChicagoAIAutomation.jsx";
import Success from "./pages/Success.jsx";
import SignUp from "./pages/SignUp.jsx";
import FeaturesPage from "./pages/FeaturesPage.jsx";
import About from "./pages/About.jsx";
import ScheduleDemo from "./pages/ScheduleDemo.jsx";
import FeatureDetail from "./pages/FeatureDetail.jsx";
import StrategyCall from "./pages/StrategyCall.jsx";
import SignIn from "./pages/SignIn.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import DemoForm from "./pages/DemoForm.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/demo" element={<AIDemoLanding />} />
          <Route path="/setup-cost-for-ai-automation" element={<SetupCostForAIAutomation />} />
          <Route path="/checklist" element={<QuickStartChecklist />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/roi-of-ai-automation" element={<ROIOfAIAutomation />} />
          <Route path="/what-are-ai-automation-agencies" element={<WhatAreAIAutomationAgencies />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chicago-ai-automation" element={<ChicagoAIAutomation />} />
          <Route path="/success" element={<Success />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule-demo" element={<ScheduleDemo />} />
          <Route path="/feature/:id" element={<FeatureDetail />} />
          <Route path="/strategy-call" element={<StrategyCall />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/demo-form" element={<DemoForm />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App; 