import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../../data/mock";

const Building2Icon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export default function IndustriesSection() {
  const row1Industries = [
    ...INDUSTRIES.slice(0, 6),
    ...INDUSTRIES.slice(0, 6),
  ];

  const row2Industries = [
    ...INDUSTRIES.slice(6, 12),
    ...INDUSTRIES.slice(6, 12),
  ];

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 md:py-12 bg-emerald-50/60">
      <div className="container-x">
        {/* Header centered in middle like upper headers */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider bg-emerald-100 text-[#009B6C] border border-emerald-200/80 shadow-xs mb-3">
              <Building2Icon className="w-4 h-4 text-[#009B6C] shrink-0" />
              Industries
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Industries <span className="text-emerald-600">We Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            White Gravity delivers innovative digital solutions for businesses across multiple sectors. From healthcare and real estate to e-commerce and finance, we build custom tech that scales and transforms your operations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-4"
          >
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 bg-white px-5 py-2 rounded-full border border-emerald-200 shadow-xs hover:shadow transition-all"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Compact height Marquee Rows */}
        <div className="relative w-full overflow-hidden flex flex-col gap-3 sm:gap-4 pause-on-hover">
          <div className="w-full overflow-hidden relative">
            <div className="flex gap-3 sm:gap-4 md:gap-5 w-max animate-marquee-industries">
              {row1Industries.map((ind, i) => (
                <IndustryCard key={`row1-${i}`} industry={ind} />
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden relative">
            <div className="flex gap-3 sm:gap-4 md:gap-5 w-max animate-marquee-reverse-industries ml-4 sm:ml-8 md:ml-12">
              {row2Industries.map((ind, i) => (
                <IndustryCard key={`row2-${i}`} industry={ind} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }) {
  return (
    <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md shrink-0 w-[170px] xs:w-[190px] sm:w-[220px] md:w-[240px] aspect-[16/10] group cursor-pointer border border-emerald-100">
      <img
        src={industry.img}
        alt={industry.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-transparent opacity-85 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-x-2 bottom-2 sm:bottom-3 text-center text-white">
        <div className="font-extrabold text-xs sm:text-sm md:text-base tracking-wide leading-tight drop-shadow-sm">
          {industry.name}
        </div>
      </div>
    </div>
  );
}
