import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Globe,
  Building2,
  Layout,
  Code2,
  FileCode2,
  ShieldCheck,
  Palette,
  Smartphone,
  Target,
  Layers,
  CheckCircle2,
  Search,
  BarChart3,
  Share2,
  TrendingUp,
  FileText,
  MapPin,
  Cloud,
  Workflow,
  Zap,
  RefreshCw,
  Users,
  CreditCard,
  Truck,
  Boxes,
  ShoppingBag,
  Settings,
  Minus,
  Plus,
  ArrowRight,
  ChevronRight,
  Phone,
  HelpCircle,
  Award,
  Briefcase,
  Check,
} from 'lucide-react';

import { getSeoPageData, ALL_SEO_PAGES } from '../data/seoPages';
import { COMPANY } from '../data/mock';
import SEOMeta from '../components/SEOMeta';
import SectionPill from '../components/SectionPill';
import HeroVisualMockup from '../components/seo/HeroVisualMockup';
import QuickContactSection from '../components/sections/QuickContactSection';
import NotFound from './NotFound';

const ICON_MAP = {
  Globe,
  Building2,
  Layout,
  Code2,
  FileCode2,
  ShieldCheck,
  Palette,
  Smartphone,
  Target,
  Layers,
  CheckCircle2,
  Search,
  BarChart3,
  Share2,
  TrendingUp,
  FileText,
  MapPin,
  Cloud,
  Workflow,
  Zap,
  RefreshCw,
  Users,
  CreditCard,
  Truck,
  Boxes,
  ShoppingBag,
  Settings,
};

export default function SEOPage() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  if (!slug) {
    return <Navigate to="/website-development-company-noida" replace />;
  }

  const page = getSeoPageData(slug);

  if (!page) {
    return (
      <>
        <SEOMeta isNotFound={true} />
        <NotFound />
      </>
    );
  }

  const handleOpenContactModal = (serviceName) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-contact-modal', {
          detail: { service: serviceName || page.title },
        })
      );
    }
  };

  const contextualPages = page.contextualLinks
    ? page.contextualLinks
        .map((link) => ({
          ...link,
          pageData: ALL_SEO_PAGES.find((p) => p.slug === link.slug),
        }))
        .filter((item) => item.pageData)
    : [];

  return (
    <div className="seo-landing-page bg-white min-h-screen text-slate-800">
      <SEOMeta page={page} />

      <section className="relative overflow-hidden bg-[#009B6C] text-white pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0, transparent 40%), radial-gradient(circle at 90% 70%, rgba(255,255,255,0.2) 0, transparent 50%)',
          }}
        />

        <div className="container-x relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol
              itemScope
              itemType="https://schema.org/BreadcrumbList"
              className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-emerald-100 font-medium"
            >
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center gap-2"
              >
                <Link to="/" itemProp="item" className="hover:text-white transition-colors">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
                <ChevronRight className="w-3.5 h-3.5 text-emerald-200/70" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="flex items-center gap-2"
              >
                <Link to="/services" itemProp="item" className="hover:text-white transition-colors">
                  <span itemProp="name">Services in Noida</span>
                </Link>
                <meta itemProp="position" content="2" />
                <ChevronRight className="w-3.5 h-3.5 text-emerald-200/70" />
              </li>
              <li
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                className="text-white font-semibold truncate max-w-[200px] sm:max-w-none"
              >
                <span itemProp="name">{page.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-5">
              <div>
                <span className="inline-flex items-center gap-2 bg-white text-[#009B6C] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {page.hero.badge}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15]">
                {page.hero.heading}
              </h1>

              <p className="text-base sm:text-lg text-emerald-50 leading-relaxed max-w-2xl">
                {page.hero.subheading}
              </p>

              <div className="block lg:hidden my-6">
                <HeroVisualMockup page={page} />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href="#contact-form-section"
                  className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 sm:py-4 rounded-full text-base sm:text-lg shadow-lg hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span>{page.hero.primaryCta}</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="tel:+919217135322"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 sm:py-4 rounded-full text-base backdrop-blur-sm transition-all"
                >
                  <Phone className="w-4 h-4 text-emerald-200" />
                  <span>+91 92171 35322</span>
                </a>
              </div>

              <div className="pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-white">100+</div>
                  <div className="text-xs text-emerald-100 font-medium">Projects Delivered</div>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-white">Sec 63</div>
                  <div className="text-xs text-emerald-100 font-medium">Noida Office</div>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-white">100%</div>
                  <div className="text-xs text-emerald-100 font-medium">Code Ownership</div>
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="text-xl sm:text-2xl font-black text-white">5.0 ★</div>
                  <div className="text-xs text-emerald-100 font-medium">Client Rating</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-5 w-full mt-4 lg:mt-0">
              <HeroVisualMockup page={page} />
            </div>
          </div>
        </div>
      </section>

      <QuickContactSection
        defaultService={page.title}
        title={`Get a Free Proposal for ${page.title}`}
        subtitle={`Tell us about your project requirements. Our senior Noida developers will analyze your goals and share a custom scope, architecture plan, and transparent quote within 24 hours.`}
      />

      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="container-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className={`${page.showcaseImg ? 'lg:col-span-6' : 'lg:col-span-8'} space-y-5 text-left`}>
              <SectionPill icon={Briefcase}>Service Overview</SectionPill>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Tailored {page.title} Designed For Real Growth
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {page.intro.whatIs}
              </p>

              <div className="space-y-2.5 pt-2">
                {page.intro.problemsSolved.slice(0, 4).map((prob, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#009B6C] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-700 font-medium">{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {page.showcaseImg && (
              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-slate-100 bg-slate-50">
                  <img
                    src={page.showcaseImg}
                    alt={page.showcaseImgAlt || `${page.title} deliverable by White Gravity`}
                    className="w-full h-auto max-h-[380px] object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <SectionPill icon={Layers}>Our Offerings</SectionPill>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core {page.title} Offerings
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              High-impact capabilities built to meet your exact business specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {page.services.map((svc) => {
              const IconComp = ICON_MAP[svc.iconName] || Globe;
              return (
                <div
                  key={svc.title}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#009B6C]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#e6f7f2] border border-[#009B6C]/20 flex items-center justify-center text-[#009B6C] mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {svc.title}
                    </h3>
                    <p className="mt-2.5 text-slate-600 text-sm leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenContactModal(`${page.title} - ${svc.title}`)}
                      className="text-xs font-bold text-[#009B6C] hover:text-[#007a55] inline-flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[11px] font-semibold text-slate-400">
                      Noida & NCR
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-emerald-50/50 border-y border-emerald-100/70">
        <div className="container-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <SectionPill icon={Award}>Why Partner With Us</SectionPill>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose White Gravity in Noida
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Accountable technology and growth partnerships backed by senior in-house developers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-3xl border border-emerald-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#009B6C] flex items-center justify-center font-bold mb-4">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-lg mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-x max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionPill icon={HelpCircle}>Clear Answers</SectionPill>
            <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Everything you need to know about our {page.title.toLowerCase()} in Noida.
            </p>
          </div>

          <div className="space-y-3.5">
            {page.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#009B6C] transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-[#009B6C]">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-white">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {contextualPages.length > 0 && (
        <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-x max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                Related Services in Noida
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Complementary digital services frequently paired with {page.title}.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {contextualPages.map((c) => (
                <Link
                  key={c.slug}
                  to={`/${c.slug}`}
                  className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-[#009B6C] hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#009B6C] transition-colors">
                      {c.anchor}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                      {c.pageData.tagline}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#009B6C]">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-br from-[#009B6C] via-[#00875e] to-[#006e4c] text-white">
        <div className="container-x max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Ready to Start Your Project with White Gravity?
          </h2>
          <p className="mt-3 text-emerald-50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Discuss your requirements with our Noida team. We provide free consultations with full architecture roadmaps.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact-form-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-8 py-3.5 rounded-full text-base shadow-xl hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              <span>Get Free Quote Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={COMPANY.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              data-tracking="whatsapp"
              data-action="whatsapp_click"
              onClick={() => {
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'whatsapp_click',
                    click_location: 'seo_page_bottom',
                    destination: 'whatsapp'
                  });
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-full text-base backdrop-blur-sm transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
