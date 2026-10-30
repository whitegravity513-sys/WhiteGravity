import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "../data/mock";

const Facebook = ({ className }) => (
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
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ className }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ className }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const footerLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "ERP Consultation", to: "/erp-consultation" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  {
    label: "Custom Software Development",
    to: "/custom-software-development",
  },
  {
    label: "Website Development",
    to: "/website-development",
  },
  {
    label: "Ecommerce Development",
    to: "/ecommerce-development",
  },
  {
    label: "Mobile App Development",
    to: "/mobile-app-development",
  },
  {
    label: "Web App Development",
    to: "/web-app-development",
  },
  {
    label: "CRM & ERP Development",
    to: "/crm-erp-development",
  },
  {
    label: "Digital Marketing",
    to: "/digital-marketing",
  },
  {
    label: "Meta Ads & Google Ads",
    to: "/meta-google-ads",
  },
  {
    label: "Zoho Consultation",
    to: "/zoho-consultation",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-400 pt-10 sm:pt-12 pb-6 sm:pb-8 border-t border-slate-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-x relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-start gap-3">
              <div className="bg-white rounded-xl px-3.5 py-2 shadow-sm shrink-0">
                <img
                  src={COMPANY.logo}
                  alt="White Gravity Web Solutions"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300 max-w-sm">
              Your trusted technology partner for digital transformation,
              custom software development, cloud solutions, and business
              automation.
            </p>

            <div className="flex items-center gap-3 mt-5">
              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white grid place-items-center transition-all duration-300 text-slate-300"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#E1306C]/40 hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:via-[#FD1D1D] hover:to-[#E1306C] hover:text-white grid place-items-center transition-all duration-300 text-slate-300"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2] hover:text-white grid place-items-center transition-all duration-300 text-slate-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-4 relative inline-block">
              Company
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-1.5 text-slate-300 font-medium hover:text-emerald-400 transition-all duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-emerald-400 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-4 relative inline-block">
              Services
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-2.5 text-sm sm:text-[15px]">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-start gap-1.5 text-slate-300 font-medium hover:text-emerald-400 transition-all duration-200"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 text-emerald-400 shrink-0" />
                    <span className="leading-snug">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold text-sm sm:text-base tracking-wider uppercase mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1.5 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-3.5 text-sm sm:text-[15px]">
              {COMPANY.phones.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Call Us
                    </span>
                    <a
                      href={`tel:${p}`}
                      className="block text-slate-200 font-semibold hover:text-emerald-400 transition-colors break-all mt-0.5"
                    >
                      {p}
                    </a>
                  </div>
                </li>
              ))}

              {COMPANY.emails.map((e) => (
                <li key={e} className="flex items-start gap-3">
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${e}`}
                      className="block text-slate-200 font-semibold hover:text-emerald-400 transition-colors break-all mt-0.5"
                    >
                      {e}
                    </a>
                  </div>
                </li>
              ))}

              <li className="flex items-start gap-3">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-slate-400 font-bold uppercase tracking-wider">
                    Office Address
                  </span>
                  <span className="block text-slate-200 font-medium leading-snug mt-0.5">
                    {COMPANY.address}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges Section with generous gap as requested */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 max-w-6xl mx-auto"
        >
          {[
            {
              type: "image",
              src: "/images/badge-designrush.webp",
              alt: "DesignRush",
            },
            {
              type: "clutch",
              title: "B2B COMPANIES",
              location: "CANADA",
              year: "2023",
            },
            {
              type: "image",
              src: "/images/badge-goodfirms.webp",
              alt: "GoodFirms",
            },
            {
              type: "clutch",
              title: "ECOMMERCE AGENCIES",
              location: "UNITED STATES",
              year: "2023",
            },
          ].map((badge, index) => (
            <motion.div
              key={badge.alt || badge.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                  scale: 0.85,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                  },
                },
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              {badge.type === "image" ? (
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <svg viewBox="0 0 100 115" className="w-full h-full">
                  <polygon
                    points="50,2 98,28 98,82 50,108 2,82 2,28"
                    fill="#1e293b"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                  />
                  <polygon points="50,8 92,30 92,42 8,42 8,30" fill="#ffffff" />
                  <polygon points="8,68 92,68 92,80 50,102 8,80" fill="#ffffff" />
                  <text
                    x="50"
                    y="23"
                    fontFamily="sans-serif"
                    fontSize="5.5"
                    fontWeight="bold"
                    fill="#64748b"
                    textAnchor="middle"
                    letterSpacing="1"
                  >
                    TOP
                  </text>
                  <text
                    x="50"
                    y="34"
                    fontFamily="sans-serif"
                    fontSize="6.5"
                    fontWeight="bold"
                    fill="#334155"
                    textAnchor="middle"
                  >
                    {badge.title}
                  </text>
                  <text
                    x="46"
                    y="60"
                    fontFamily="sans-serif"
                    fontSize="18"
                    fontWeight="bold"
                    fill="#ffffff"
                    textAnchor="middle"
                  >
                    Clutch
                  </text>
                  <circle cx="77" cy="59" r="2.5" fill="#ef4444" />
                  <text
                    x="50"
                    y="78"
                    fontFamily="sans-serif"
                    fontSize="6.5"
                    fontWeight="bold"
                    fill="#334155"
                    textAnchor="middle"
                  >
                    {badge.location}
                  </text>
                  <text
                    x="50"
                    y="90"
                    fontFamily="sans-serif"
                    fontSize="7.5"
                    fontWeight="bold"
                    fill="#64748b"
                    textAnchor="middle"
                  >
                    {badge.year}
                  </text>
                </svg>
              )}
            </motion.div>
          ))}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
                scale: 0.85,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                },
              },
            }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
            className="relative h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex flex-col items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="46"
                fill="#fff"
                stroke="#f59e0b"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3.5"
              />
              <path d="M15 85 L30 75 L20 60 Z" fill="#f59e0b" />
              <path d="M85 85 L70 75 L80 60 Z" fill="#f59e0b" />
              <path
                d="M22 82 L50 94 L78 82 L72 73 L50 83 L28 73 Z"
                fill="#fbbf24"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center -mt-1 px-1">
              <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-slate-900 leading-none">
                5<span className="text-amber-500 text-sm sm:text-base md:text-lg">+</span>
              </div>
              <div className="text-[5px] sm:text-[6px] md:text-[7px] font-extrabold text-slate-800 uppercase tracking-wider mt-0.5 leading-tight">
                Years Of
                <br />
                Industry
                <br />
                Experience
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm font-medium text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} White Gravity. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <p>Made with care in the United States.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
