import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SEOKeywords from './components/sections/SEOKeywords';
import ScrollToTop from './components/ScrollToTop';
import ContactModal from './components/ContactModal';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const ERP = lazy(() => import('./pages/ERP'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ZohoConsultation = lazy(() => import('./pages/ZohoConsultation'));

// Smooth skeleton loader
const Loader = () => (
  <div className="min-h-[60vh] grid place-items-center">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-emerald-100" />
        <div className="absolute inset-0 rounded-full border-4 border-t-[#009B6C] animate-spin" />
      </div>
      <span className="text-sm font-semibold text-slate-400 tracking-wide animate-pulse">Loading…</span>
    </div>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/zoho-consultation" element={<ZohoConsultation />} />
      <Route path="/:slug" element={<ServiceDetail />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/erp-consultation" element={<ERP />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Suspense fallback={<Loader />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <SEOKeywords />
        <Footer />
        <ContactModal />
      </BrowserRouter>
    </div>
  );
}

export default App;

