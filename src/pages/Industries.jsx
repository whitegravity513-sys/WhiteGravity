import React, { useState, useEffect, useRef } from 'react';
import CTA from '../components/sections/CTA';
import { INDUSTRIES } from '../data/mock';
import AnimatedText from '../components/AnimatedText';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import {
  Globe,
  Code,
  Smartphone,
  Database,
  TrendingUp,
  Zap,
  Plug,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DIGITAL_SOLUTIONS = [
  { title: "Website Design & Development", icon: Globe },
  { title: "Custom Web Applications", icon: Code },
  { title: "Mobile App Development", icon: Smartphone },
  { title: "CRM & ERP Solutions", icon: Database },
  { title: "E-commerce Development", icon: ShoppingCart },
  { title: "SEO & Digital Marketing", icon: TrendingUp },
  { title: "Business Automation", icon: Zap },
  { title: "Third-Party Integrations", icon: Plug }
];

const CHALLENGES = [
  { title: "Getting quality leads", desc: "Build landing pages and digital experiences designed to turn visitors into qualified enquiries." },
  { title: "Managing customer data", desc: "Connect websites with CRM and business systems to keep customer information organized." },
  { title: "Manual business processes", desc: "Automate repetitive tasks using CRM, ERP, APIs and custom workflows." },
  { title: "Low online visibility", desc: "Improve your search presence with technical SEO, content strategy and conversion-focused websites." },
  { title: "Poor user experience", desc: "Create fast, responsive and intuitive experiences across desktop and mobile." }
];

const INDUSTRY_SOLUTIONS = [
  { industry: "Healthcare", solutions: "Doctor/Clinic Website, Appointment System, CRM" },
  { industry: "Real Estate", solutions: "Property Portal, Lead Management, CRM" },
  { industry: "E-commerce", solutions: "Shopify, WooCommerce, Custom Store" },
  { industry: "Education", solutions: "School/Institute Website, LMS, Admission System" },
  { industry: "Hospitality", solutions: "Hotel Website, Booking System" },
  { industry: "Logistics", solutions: "Tracking System, CRM, Fleet Management" },
  { industry: "Manufacturing", solutions: "ERP, Inventory, Production Management" },
  { industry: "Restaurant", solutions: "Online Ordering, Restaurant Website" },
  { industry: "Travel", solutions: "Booking Website, Travel CRM" },
  { industry: "Fitness", solutions: "Gym Website, Membership System" }
];

const STATS = [
  { value: "15", suffix: "+", isCounter: true, label: "Industries Served" },
  { value: "100", suffix: "+", isCounter: true, label: "Projects Delivered" },
  { value: "50", suffix: "+", isCounter: true, label: "Businesses Supported" },
  { value: "5", suffix: "+", isCounter: true, label: "Years Experience" }
];

const CASE_STUDIES = [
  {
    name: "Kartavyam",
    industry: "NGO & Healthcare",
    challenge: "Client needed a robust digital platform to manage donations, track healthcare campaigns, and engage with volunteers effectively without relying on manual Excel sheets.",
    solution: "We designed and developed a custom responsive website integrated with a secure payment gateway and a backend CRM system for volunteer and donor management.",
    result: "Improved donation tracking by 100%, automated receipt generation, and increased overall user engagement on their digital campaigns.",
    link: "/kartavyam"
  }
];

const WHY_US = [
  { title: "Industry-focused approach", desc: "We don't use the same solution for every business. We understand your audience, workflow, and goals before development." },
  { title: "Business-first design", desc: "Every page and feature is designed around your business objective." },
  { title: "Scalable technology", desc: "Our solutions are built to support your business as it grows." },
  { title: "One team from strategy to support", desc: "From design and development to SEO, CRM, ERP and ongoing support, everything can be handled under one roof." }
];

const FAQS = [
  { q: "Which industries does White Gravity work with?", a: "We work across multiple industries including Healthcare, Real Estate, E-commerce, Education, Manufacturing, Logistics, and more." },
  { q: "Can you build a custom website for my industry?", a: "Absolutely. We design and develop custom websites perfectly tailored to the unique workflows and audience of your specific industry." },
  { q: "Do you provide CRM and ERP solutions?", a: "Yes, we specialize in implementing and customizing Zoho CRM, Zoho ERP, and building completely custom ERP software for growing businesses." },
  { q: "Can you integrate my website with existing software?", a: "Yes. We can seamlessly integrate your website with your existing CRM, accounting software, payment gateways, and third-party APIs." },
  { q: "Do you provide post-launch support?", a: "We offer comprehensive 24/7 post-launch support, maintenance, and regular updates to ensure your digital solutions run flawlessly." }
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

export default function Industries() {
  return (
    <>
      <section className="bg-[#009B6C] pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4">
        <div className="container-x">
          <span className="inline-block px-5 py-2 bg-[#bcf5d6] text-slate-900 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] mx-auto mb-6">
            DIGITAL SOLUTIONS, SECTOR BY SECTOR
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-white mb-6 tracking-tight">
            Industries We Serve
          </h1>
          <p className="text-emerald-50 text-base md:text-lg max-w-4xl mx-auto font-medium leading-relaxed">
            White Gravity delivers innovative digital solutions for businesses across multiple industries. From healthcare and real estate to e-commerce and finance, we create powerful websites that help brands grow, connect with customers, and achieve their business goals.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container-x max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 flex flex-col items-start text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#065b46] leading-tight mb-5">
                <AnimatedText text="Industries " />
                <motion.span
                  initial={{ opacity: 0, y: 40, rotateX: -60 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'inline-block', transformOrigin: 'top center' }}
                  className="text-[#009B6C]"
                >
                  We Serve
                </motion.span>
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                White Gravity delivers innovative digital solutions for businesses across multiple industries. From healthcare and real estate to e-commerce and finance, we create powerful websites that help brands grow, connect with customers, and achieve their business goals.
              </p>
            </motion.div>

            <div className="lg:col-span-9">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {INDUSTRIES.map((ind, i) => (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                    className="group relative rounded-xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg h-28 md:h-36 cursor-pointer"
                  >
                    <img src={ind.img} alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-x-2 bottom-3 text-center text-white">
                      <div className="font-extrabold text-[13px] md:text-[15px] tracking-wide">{ind.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Digital Solutions Built Around <span className="text-[#009B6C]">Your Industry</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Different industries have different customers, workflows, and business challenges. We create digital solutions that perfectly fit your unique operational needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
            {DIGITAL_SOLUTIONS.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col sm:flex-row items-center sm:justify-start justify-center text-center sm:text-left gap-2 sm:gap-3 px-3 py-4 sm:px-6 sm:py-4 bg-[#f0fdf4] border border-slate-200 rounded-2xl hover:border-[#009B6C]/50 hover:bg-[#009B6C]/5 transition-colors cursor-default"
              >
                <sol.icon className="w-6 h-6 sm:w-5 sm:h-5 text-[#009B6C] shrink-0" />
                <span className="font-semibold text-slate-700 text-xs sm:text-sm">{sol.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f0fdf4] relative overflow-hidden">
        <div className="container-x relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solving Digital Challenges <span className="text-[#009B6C]">Across Industries</span></h2>
            <p className="text-slate-600 text-lg">We turn your operational bottlenecks into competitive advantages.</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
            {CHALLENGES.map((challenge, i) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 shadow-sm p-4 sm:p-6 rounded-2xl hover:shadow-md transition-shadow"
              >
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-2 sm:mb-3 flex flex-col sm:flex-row items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#009B6C] shrink-0 mt-0.5" />
                  {challenge.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed sm:pl-8">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solutions Designed for <span className="text-[#009B6C]">Your Business</span></h2>
            <p className="text-slate-600 text-lg">A quick look at the specific platforms and tools we build for various sectors.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-12 bg-[#f0fdf4] border-b border-slate-200">
              <div className="col-span-4 sm:col-span-5 p-4 sm:p-6 font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Industry</div>
              <div className="col-span-8 sm:col-span-7 p-4 sm:p-6 font-bold text-[#009B6C] text-sm sm:text-base border-l border-slate-200">Possible Solutions</div>
            </div>
            {INDUSTRY_SOLUTIONS.map((row, i) => (
              <div key={row.industry} className={`grid grid-cols-12 ${i !== INDUSTRY_SOLUTIONS.length - 1 ? 'border-b border-slate-100' : ''} hover:bg-[#f0fdf4] transition-colors`}>
                <div className="col-span-4 sm:col-span-5 p-4 sm:p-6 font-bold text-slate-800 text-sm sm:text-base flex items-center">{row.industry}</div>
                <div className="col-span-8 sm:col-span-7 p-4 sm:p-6 text-slate-600 text-sm sm:text-base border-l border-slate-100 flex items-center leading-relaxed">{row.solutions}</div>
              </div>
            ))}
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

      <section className="py-16 md:py-24 bg-[#f0fdf4]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Projects & <span className="text-[#009B6C]">Case Studies</span></h2>
            <p className="text-slate-600 text-lg">See how we've helped businesses transform their digital presence.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {CASE_STUDIES.map((study) => (
              <motion.div
                key={study.name}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white shadow-xl p-8 sm:p-10 rounded-3xl border border-slate-100"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{study.name}</h3>
                    <p className="text-[#009B6C] font-semibold text-sm mt-1">Industry: {study.industry}</p>
                  </div>
                  <Link to={study.link} className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="space-y-6">
                  <div className="bg-red-50 p-5 rounded-2xl border border-red-100">
                    <div className="font-bold text-red-900 mb-1 flex items-center gap-2">Challenge</div>
                    <p className="text-red-800 text-sm leading-relaxed">{study.challenge}</p>
                  </div>
                  <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-100">
                    <div className="font-bold text-emerald-900 mb-1 flex items-center gap-2">Solution</div>
                    <p className="text-emerald-800 text-sm leading-relaxed">{study.solution}</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                    <div className="font-bold text-blue-900 mb-1 flex items-center gap-2">Result</div>
                    <p className="text-blue-800 text-sm leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Businesses Choose <span className="text-[#009B6C]">White Gravity</span></h2>
            <p className="text-slate-600 text-lg">We bring expertise, strategy, and execution under one roof.</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 bg-[#f0fdf4] rounded-2xl md:rounded-3xl border border-slate-100"
              >
                <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-white shadow-sm rounded-lg sm:rounded-xl flex items-center justify-center text-[#009B6C]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-slate-900 mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {}
      <section className="py-16 md:py-24 bg-[#f0fdf4] border-t border-slate-100">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked <span className="text-[#009B6C]">Questions</span></h2>
            <p className="text-slate-600 text-lg">Common queries about our industry-specific digital solutions.</p>
          </div>

          <div>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {}
      <CTA />
    </>
  );
}
