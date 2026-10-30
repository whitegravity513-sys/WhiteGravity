import React, { useState, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";
import CTA from "../components/sections/CTA";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView, animate } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  Target,
  Layers,
  FileText,
  Box,
  Code,
  BarChart,
  Headphones,
  DollarSign,
  Users,
  Package,
  UserCheck,
  ShoppingCart,
  Activity,
  Globe,
  MessageCircle,
  Mail,
  ChevronDown,
  Building2,
  Truck,
  HeartPulse,
  Briefcase
} from "lucide-react";

const STATS = [
  { value: "100", suffix: "+", isCounter: true, label: "Workflows Automated" },
  { value: "50", suffix: "+", isCounter: true, label: "Processes Optimized" },
  { value: "15", suffix: "+", isCounter: true, label: "ERP Projects Delivered" },
  { value: "24/7", suffix: "", isCounter: false, label: "Post-Launch Support" },
];

const ZOHO_SERVICES = [
  { icon: Target, title: "Zoho CRM Implementation", desc: "Lead management, sales pipeline, automation and reporting." },
  { icon: Layers, title: "Zoho One Setup", desc: "Complete business ecosystem for sales, finance, HR, operations and support." },
  { icon: FileText, title: "Zoho Books", desc: "Accounting, invoicing, expenses and financial reporting." },
  { icon: Box, title: "Zoho Inventory", desc: "Inventory, orders, warehouses and stock management." },
  { icon: Code, title: "Zoho Creator", desc: "Custom business applications and workflow automation." },
  { icon: BarChart, title: "Zoho Analytics", desc: "Business intelligence, dashboards and reporting." },
  { icon: Headphones, title: "Zoho Desk", desc: "Customer support and ticket management." },
];

const CUSTOM_ERP_MODULES = [
  { icon: DollarSign, title: "Finance & Accounting", desc: "Invoices, expenses, payments and financial reports." },
  { icon: Users, title: "Sales & CRM", desc: "Leads, customers, quotations, orders and sales tracking." },
  { icon: Package, title: "Inventory Management", desc: "Stock, warehouses, purchase and inventory movements." },
  { icon: UserCheck, title: "HR & Payroll", desc: "Employee management, attendance, leave and payroll." },
  { icon: ShoppingCart, title: "Purchase Management", desc: "Suppliers, purchase orders and procurement workflows." },
  { icon: Activity, title: "Operations", desc: "Internal workflows, approvals and task management." },
];

const INTEGRATIONS = [
  { name: "Website", icon: Globe },
  { name: "Shopify", icon: ShoppingCart },
  { name: "WooCommerce", icon: Package },
  { name: "Payment Gateways", icon: DollarSign },
  { name: "WhatsApp", icon: MessageCircle },
  { name: "Email", icon: Mail },
  { name: "Accounting Software", icon: FileText },
  { name: "Third-party APIs", icon: Code },
  { name: "CRM Systems", icon: Users },
  { name: "Inventory Systems", icon: Box },
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We understand your business processes and requirements." },
  { step: "02", title: "Strategy & Architecture", desc: "We define workflows, modules and system architecture." },
  { step: "03", title: "Config & Development", desc: "We configure Zoho or build custom ERP modules." },
  { step: "04", title: "Integration", desc: "We connect your existing business tools and platforms." },
  { step: "05", title: "Testing & Training", desc: "Your team gets training and the system goes through testing." },
  { step: "06", title: "Launch & Support", desc: "We deploy the system and provide ongoing support." },
];

const INDUSTRIES = [
  { icon: Building2, title: "Manufacturing", desc: "Optimize production planning, bill of materials, and supply chain." },
  { icon: ShoppingCart, title: "Retail & Ecommerce", desc: "Omnichannel sales, inventory syncing, and customer retention." },
  { icon: Truck, title: "Logistics", desc: "Fleet management, route tracking, and warehouse operations." },
  { icon: Building2, title: "Real Estate", desc: "Property management, lead tracking, and agent performance." },
  { icon: HeartPulse, title: "Healthcare", desc: "Patient records, appointment scheduling, and billing." },
  { icon: Briefcase, title: "Professional Services", desc: "Project management, timesheets, and client portals." },
];

const WHY_US = [
  { title: "Certified Expertise", desc: "Zoho implementation expertise backed by practical business understanding." },
  { title: "Business-First Approach", desc: "We design systems around your processes instead of forcing your business into rigid software." },
  { title: "Scalable Architecture", desc: "Solutions are built to support your business as it grows." },
  { title: "Dedicated Support", desc: "Post-launch assistance, optimization and training whenever your team needs it." },
];

const CASE_STUDIES = [
  {
    title: "Manufacturing Company",
    problem: "Manual production & inventory tracking.",
    solution: "Custom ERP + inventory automation.",
    result: "Faster reporting and reduced manual work.",
  },
  {
    title: "Distribution Business",
    problem: "Multiple Excel sheets and disconnected systems.",
    solution: "CRM + Inventory + Accounting integration.",
    result: "Centralized operations and real-time visibility.",
  },
];

const COMPARISON = [
  { feature: "Setup", zoho: "Faster", custom: "More involved" },
  { feature: "Customization", zoho: "High", custom: "Very high" },
  { feature: "Cost", zoho: "Generally lower", custom: "Depends on scope" },
  { feature: "Business Processes", zoho: "Standard + configurable", custom: "Fully tailored" },
  { feature: "Scalability", zoho: "High", custom: "Very high" },
  { feature: "Best For", zoho: "Growing businesses", custom: "Complex workflows" },
];

const FAQS = [
  { q: "What is Zoho ERP implementation?", a: "It is the process of setting up, configuring, and customizing Zoho applications (like Zoho One or Zoho Books) to manage your business operations effectively." },
  { q: "How long does implementation take?", a: "A standard implementation takes 2-4 weeks. Complex deployments with custom workflows and third-party integrations may take 6-8 weeks." },
  { q: "Can you migrate our existing data?", a: "Yes. We securely migrate your legacy data—including customers, leads, inventory, and financial records—with zero data loss." },
  { q: "Can you develop a completely custom ERP?", a: "Yes. For highly unique workflows where standard software falls short, we build robust, scalable custom ERP solutions tailored perfectly to your needs." },
  { q: "Do you provide post-launch support?", a: "We offer dedicated 24/7 post-launch support, continuous optimization, and troubleshooting to keep your operations running smoothly." },
];

function CountUpAnimation({ endValue, suffix = "", duration = 2.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (isInView) {
      let startValue = 0;
      const parsedEnd = parseInt(endValue);
      if (isNaN(parsedEnd)) {
        setDisplayValue(endValue);
        return;
      }
      const controls = animate(startValue, parsedEnd, {
        duration: duration,
        ease: "easeOut",
        onUpdate: (value) => {
          setDisplayValue(Math.floor(value).toString());
        }
      });
      return () => controls.stop();
    }
  }, [isInView, endValue, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

function FAQItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden mb-4 bg-white transition-all hover:border-[#009B6C]/30 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
      >
        <span className="font-semibold text-slate-900 group-hover:text-[#009B6C] transition-colors pr-4">
          {faq.q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#009B6C]" : "group-hover:text-[#009B6C]"}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-5 sm:p-6 pt-0 text-slate-600 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ERP() {
  return (
    <>
      <PageHeader title="ERP & Zoho Solutions" crumbs={[{ label: "ERP Consultation" }]} />

      <section className="py-12 md:py-16 relative overflow-hidden bg-[#f0fdf4]">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#009B6C]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left w-full"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
                Certified <span className="text-[#009B6C]">Zoho & Custom ERP</span> Consultants
              </h1>

              <p className="mt-6 text-slate-600 leading-relaxed text-lg max-w-xl text-justify lg:text-left">
                We help growth-stage businesses implement, customize and scale Zoho ecosystems and build robust custom ERP software. As a leading software development company, we deliver measurable operational impact within weeks — not quarters.
              </p>

              <div className="block lg:hidden w-full max-w-lg mx-auto my-8 relative">
                <div className="absolute inset-0 bg-[#009B6C] rounded-[2.5rem] translate-x-4 translate-y-4 opacity-20" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white bg-white aspect-square sm:aspect-video flex items-center justify-center p-8"
                >
                  <img src="/images/zoho-logo-full.svg" alt="Zoho Consultant" className="w-full h-full object-contain" />
                </motion.div>
              </div>

              <div className="mt-2 lg:mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold bg-[#009B6C] text-white hover:bg-[#007f58] transition-colors shadow-lg hover:shadow-[#009B6C]/30">
                  Talk to an ERP Consultant <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block lg:col-span-6 relative w-full lg:max-w-none"
            >
              <div className="absolute inset-0 bg-[#009B6C] rounded-[2.5rem] translate-x-4 translate-y-4 opacity-20" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white bg-white lg:aspect-square flex items-center justify-center p-8"
              >
                <img src="/images/zoho-logo-full.svg" alt="Zoho Consultant" className="w-full h-full object-contain" />
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-y border-slate-100 relative overflow-hidden shadow-sm">
        <div className="container-x relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-x divide-slate-100">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-[#009B6C] mb-2">
                  {stat.isCounter ? (
                    <CountUpAnimation endValue={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span>{stat.value}{stat.suffix}</span>
                  )}
                </div>
                <div className="text-slate-600 text-sm md:text-base font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Why Businesses Choose <span className="text-[#009B6C]">Zoho & Custom ERP</span></h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg text-justify lg:text-left">
                As a premier business software development agency, we replace chaos with clarity. Upgrading to a unified ERP system resolves major bottlenecks and scales with your business natively.
              </p>

              <div className="block lg:hidden mb-8 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src="/images/service-custom-software.jpg"
                  alt="Business Team Collaborating"
                  className="w-full h-[250px] sm:h-[350px] object-cover"
                />
              </div>

              <ul className="space-y-4">
                {[
                  "Automate manual, time-consuming processes",
                  "Centralize sales and customer data",
                  "Better manage inventory and finances",
                  "Keep multiple departments connected",
                  "Real-time reporting & analytics",
                  "Scale seamlessly as your business grows"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#009B6C] shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:block relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group"
            >
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                src="/images/service-custom-software.jpg"
                alt="Business Team Collaborating"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#009B6C]/80 to-transparent mix-blend-multiply opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f0fdf4]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-[#009B6C]">Zoho Services</span></h2>
            <p className="text-slate-600 text-lg">As a dedicated Zoho CRM Consultant in the US, we unlock the full potential of the Zoho suite for your business.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {ZOHO_SERVICES.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#009B6C]/30 transition-all group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#009B6C]/10 text-[#009B6C] rounded-xl flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#009B6C] group-hover:text-white transition-colors">
                  <srv.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Custom <span className="text-[#009B6C]">ERP Development</span></h2>
            <p className="text-slate-600 text-lg">
              Every business has different processes. We build robust custom software and ERP systems around the way your business actually works, rather than changing your workflow to fit an app.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {CUSTOM_ERP_MODULES.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-[#f0fdf4] border border-slate-100 hover:bg-[#009B6C]/5 transition-colors"
              >
                <div className="shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-sm border border-slate-100 text-[#009B6C] rounded-xl flex items-center justify-center">
                    <mod.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{mod.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{mod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#009B6C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.svg')] mix-blend-overlay" />
        <div className="container-x relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect Your Entire <span className="text-emerald-100">Business Ecosystem</span></h2>
            <p className="text-emerald-50 text-lg">We ensure your CRM and ERP communicate flawlessly with your existing tech stack.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-12">
            {INTEGRATIONS.map((int, i) => (
              <motion.div
                key={int.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-white/10 rounded-full hover:bg-black/30 transition-colors backdrop-blur-md"
              >
                <int.icon className="w-4 h-4 text-emerald-200" />
                <span className="text-sm font-medium">{int.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex justify-center items-center gap-3 text-emerald-100 font-bold text-sm tracking-wider uppercase">
            <span>Website</span> <ArrowRight className="w-4 h-4 opacity-50"/> <span>CRM</span> <ArrowRight className="w-4 h-4 opacity-50"/> <span>ERP</span> <ArrowRight className="w-4 h-4 opacity-50"/> <span>Accounting</span> <ArrowRight className="w-4 h-4 opacity-50"/> <span>Inventory</span> <ArrowRight className="w-4 h-4 opacity-50"/> <span>Reports</span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f0fdf4]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our ERP <span className="text-[#009B6C]">Implementation Process</span></h2>
            <p className="text-slate-600 text-lg">A structured, proven approach to ensure your system goes live without friction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-100 hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-6xl sm:text-8xl font-black text-[#009B6C]/5 group-hover:text-[#009B6C]/10 transition-colors">{p.step}</div>
                <h3 className="relative text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{p.title}</h3>
                <p className="relative text-xs sm:text-base text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ERP Solutions for <span className="text-[#009B6C]">Growing Businesses</span></h2>
            <p className="text-slate-600 text-lg">We deliver custom tailored business software development across various verticals.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {INDUSTRIES.map((ind, i) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#f0fdf4] p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-3 sm:gap-4 hover:border-[#009B6C]/30 transition-colors"
              >
                <ind.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#009B6C] shrink-0" />
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f0fdf4] border-t border-slate-100">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Businesses Trust Our <span className="text-[#009B6C]">ERP Team</span></h2>
            <p className="text-slate-600 text-lg">We aren't just developers; we are business consultants who understand your bottom line.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 bg-white shadow-sm border border-slate-100 rounded-2xl hover:shadow-md transition-shadow ${i === WHY_US.length - 1 && WHY_US.length % 2 !== 0 ? 'col-span-2 lg:col-span-1' : ''}`}
              >
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#009B6C] shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 md:py-24 bg-[#009B6C] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/noise.svg')] mix-blend-overlay" />
        <div className="container-x relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">ERP Transformation <span className="text-emerald-200">Stories</span></h2>
            <p className="text-emerald-50 text-lg">Real impact we've driven for businesses through custom software solutions.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {CASE_STUDIES.map((study, i) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white shadow-xl p-8 rounded-3xl border border-emerald-100 hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Activity className="w-6 h-6 text-[#009B6C]" /> {study.title}
                </h3>
                <div className="space-y-4 text-sm sm:text-base">
                  <div><span className="text-slate-500 font-semibold">Problem:</span> <span className="text-slate-700">{study.problem}</span></div>
                  <div><span className="text-slate-500 font-semibold">Solution:</span> <span className="text-slate-700">{study.solution}</span></div>
                  <div className="pt-4 mt-4 border-t border-slate-100"><span className="text-[#009B6C] font-bold">Result:</span> <span className="text-slate-900 font-bold">{study.result}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Zoho or Custom ERP — <span className="text-[#009B6C]">Which Is Right for You?</span></h2>
            <p className="text-slate-600 text-lg">Compare options to choose the right foundation for your business operations.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#f0fdf4] border-b border-slate-200">
              <div className="p-4 sm:p-6 font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Feature</div>
              <div className="p-4 sm:p-6 font-bold text-slate-900 text-sm sm:text-lg text-center border-l border-slate-200">Zoho ERP</div>
              <div className="p-4 sm:p-6 font-bold text-[#009B6C] text-sm sm:text-lg text-center border-l border-slate-200">Custom ERP</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i !== COMPARISON.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="p-4 sm:p-6 font-semibold text-slate-700 text-xs sm:text-base bg-[#f0fdf4]/50 flex items-center">{row.feature}</div>
                <div className="p-4 sm:p-6 text-slate-600 text-xs sm:text-base text-center border-l border-slate-100 flex items-center justify-center">{row.zoho}</div>
                <div className="p-4 sm:p-6 text-slate-800 font-medium text-xs sm:text-base text-center border-l border-slate-100 bg-[#009B6C]/5 flex items-center justify-center">{row.custom}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-600 mb-6">Not sure which option is right for your business? Talk to an ERP consultant.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold bg-[#009B6C] text-white hover:bg-[#007f58] transition-colors">
              Get Expert Advice <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked <span className="text-[#009B6C]">Questions</span></h2>
            <p className="text-slate-600 text-lg">Everything you need to know about our custom web application development and ERP integration services.</p>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}