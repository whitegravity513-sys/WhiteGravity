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
    <footer className="relative bg-slate-950 text-slate-400 pt-12 sm:pt-16 pb-6 sm:pb-8 border-t border-slate-900 overflow-hidden">

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      {/* Background Glow */}
      <div className="absolute -top-32 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="container-x relative z-10 px-4 sm:px-6 lg:px-8">

        {/* ================= TOP FOOTER ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">

          {/* ================= BRAND ================= */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex flex-col items-start gap-4">

              {/* Logo — already contains company name + icon */}
              <div className="bg-white rounded-xl p-3 shadow-md shrink-0">
                <img
                  src={COMPANY.logo}
                  alt="White Gravity Web Solutions"
                  className="h-20 sm:h-24 w-auto object-contain"
                />
              </div>
            </div>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-md">
              Your trusted technology partner for digital transformation,
              custom software development, cloud solutions, and business
              automation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href={COMPANY.socials.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1877F2]/40 hover:bg-[#1877F2] hover:text-white grid place-items-center transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href={COMPANY.socials.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#E1306C]/40 hover:bg-gradient-to-tr hover:from-[#FCAF45] hover:via-[#FD1D1D] hover:to-[#E1306C] hover:text-white grid place-items-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={COMPANY.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2] hover:text-white grid place-items-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 relative inline-block">
              Company
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-3.5 text-sm sm:text-base">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-emerald-400 shrink-0" />

                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 relative inline-block">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-3.5 text-sm sm:text-base">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group flex items-start gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300"
                  >
                    <ArrowRight className="w-3.5 h-3.5 mt-0.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-emerald-400 shrink-0" />

                    <span className="leading-relaxed">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="text-white font-bold text-base tracking-wider uppercase mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-emerald-500" />
            </h4>

            <ul className="space-y-5 text-sm sm:text-base">

              {/* Phone */}
              {COMPANY.phones.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3"
                >
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">
                      Call Us
                    </span>

                    <a
                      href={`tel:${p}`}
                      className="block text-slate-300 hover:text-emerald-400 transition-colors font-medium mt-1 break-all"
                    >
                      {p}
                    </a>
                  </div>
                </li>
              ))}

              {/* Email */}
              {COMPANY.emails.map((e) => (
                <li
                  key={e}
                  className="flex items-start gap-3"
                >
                  <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>

                  <div className="min-w-0">
                    <span className="block text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">
                      Email Us
                    </span>

                    <a
                      href={`mailto:${e}`}
                      className="block text-slate-300 hover:text-emerald-400 transition-colors font-medium mt-1 break-all"
                    >
                      {e}
                    </a>
                  </div>
                </li>
              ))}

              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-2 text-emerald-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>

                <div className="min-w-0">
                  <span className="block text-xs sm:text-sm text-slate-500 font-bold uppercase tracking-wider">
                    Office Address
                  </span>

                  <span className="block text-slate-300 leading-relaxed mt-1">
                    {COMPANY.address}
                  </span>
                </div>
              </li>

            </ul>
          </div>
        </div>

        {/* ================= BADGES ================= */}
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
          className="
            mt-14 sm:mt-16 lg:mt-20
            pt-8
            border-t border-slate-800
            flex flex-wrap justify-center items-center
            gap-8 sm:gap-10 lg:gap-12
            max-w-6xl mx-auto
          "
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
              location: "INDIA",
              year: "2023",
            },
          ].map((badge, index) => (
            <motion.div
              key={badge.alt || badge.title}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                  scale: 0.8,
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
                y: [0, -6, 0],
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
              }}
              className="
                h-20 w-20
                sm:h-24 sm:w-24
                md:h-28 md:w-28
                flex items-center justify-center
                hover:scale-110
                transition-transform duration-300
              "
            >
              {badge.type === "image" ? (
                <img
                  src={badge.src}
                  alt={badge.alt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <svg
                  viewBox="0 0 100 115"
                  className="w-full h-full"
                >
                  <polygon
                    points="50,2 98,28 98,82 50,108 2,82 2,28"
                    fill="#1e293b"
                    stroke="#cbd5e1"
                    strokeWidth="3"
                  />

                  <polygon
                    points="50,8 92,30 92,42 8,42 8,30"
                    fill="#ffffff"
                  />

                  <polygon
                    points="8,68 92,68 92,80 50,102 8,80"
                    fill="#ffffff"
                  />

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

                  <circle
                    cx="77"
                    cy="59"
                    r="2.5"
                    fill="#ef4444"
                  />

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

          {/* ================= 5+ YEARS BADGE ================= */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 30,
                scale: 0.8,
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
              y: [0, -6, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
            className="
              relative
              h-20 w-20
              sm:h-24 sm:w-24
              md:h-28 md:w-28
              flex flex-col
              items-center justify-center
              hover:scale-110
              transition-transform duration-300
            "
          >
            <svg
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
            >
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

              <path
                d="M15 85 L30 75 L20 60 Z"
                fill="#f59e0b"
              />

              <path
                d="M85 85 L70 75 L80 60 Z"
                fill="#f59e0b"
              />

              <path
                d="M22 82 L50 94 L78 82 L72 73 L50 83 L28 73 Z"
                fill="#fbbf24"
              />
            </svg>

            <div className="relative z-10 flex flex-col items-center text-center -mt-2 px-2">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-none">
                5<span className="text-amber-500 text-base sm:text-lg md:text-xl">+</span>
              </div>

              <div className="text-[5px] sm:text-[6px] md:text-[7px] font-extrabold text-slate-800 uppercase tracking-wider mt-1 leading-tight">
                Years Of
                <br />
                Industry
                <br />
                Experience
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= BOTTOM BAR ================= */}
        <div
          className="
            mt-10 sm:mt-12
            pt-6 sm:pt-7
            border-t border-slate-800
            flex flex-col
            sm:flex-row
            justify-between
            items-center
            gap-4
            text-sm sm:text-base
            text-slate-400
          "
        >
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} White Gravity.
            <span className="hidden sm:inline"> </span>
            All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />

            <p>
              Made with care in Noida, India.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}