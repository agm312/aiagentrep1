import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import FeaturesPage from './pages/FeaturesPage';

import ReadyToTransform from './components/ReadyToTransform';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import FeatureDetail from './pages/FeatureDetail';
import StrategyCall from './pages/StrategyCall';
import ScheduleDemo from './pages/ScheduleDemo';
import { auth } from './firebase';
import BenefitsSection from './components/BenefitsSection';
import HowItWorksSection from './components/HowItWorksSection';
import { WhyProcessWorksSection } from './components/HowItWorksSection';
import GuaranteeSection from './components/GuaranteeSection';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Success from './pages/Success';
import ChicagoAIAutomation from './pages/ChicagoAIAutomation';
import WhatAreAIAutomationAgencies from './pages/WhatAreAIAutomationAgencies';
import ROIOfAIAutomation from './pages/ROIOfAIAutomation';
import AIDemoLanding from './pages/AIDemoLanding';
import DemoForm from './pages/DemoForm';
import QuickStartChecklist from './pages/QuickStartChecklist';
import LeadDashboard from './components/LeadDashboard';
import AdminLogin from './components/AdminLogin';
import ProtectedRoute from './components/ProtectedRoute';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorksSection />
      {WhyProcessWorksSection}
      <GuaranteeSection />
      <BenefitsSection />
      <ReadyToTransform />
    </>
  );
}

function PrivateRoute({ children }) {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);
  if (user === undefined) return null; // or loading spinner
  if (!user) {
    window.location.href = '/signin';
    return null;
  }
  return children;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        {/* Skip to main content link for screen readers */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <Header />
        <main id="main-content" className="flex-1" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ai" element={<FeaturesPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
                                    <Route path="/demo" element={<DemoForm />} />
                        <Route path="/ai-demo" element={<AIDemoLanding />} />
                        <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/feature/:id" element={<FeatureDetail />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/strategy-call" element={<StrategyCall />} />
            <Route path="/schedule-demo" element={<ScheduleDemo />} />
            <Route path="/success" element={<Success />} />
            <Route path="/chicago-ai-automation" element={<ChicagoAIAutomation />} />
            <Route path="/what-are-ai-automation-agencies" element={<WhatAreAIAutomationAgencies />} />
                                    <Route path="/roi-of-ai-automation" element={<ROIOfAIAutomation />} />
                        <Route path="/checklist" element={<QuickStartChecklist />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/leads" element={
              <ProtectedRoute>
                <LeadDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 