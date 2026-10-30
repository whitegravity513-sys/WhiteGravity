import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY, SERVICES } from "../../data/mock";
import AnimatedText from "../AnimatedText";
import TypewriterText from "../TypewriterText";

const COLUMN1_ITEMS = SERVICES.slice(0, 4);
const COLUMN2_ITEMS = SERVICES.slice(4, 8);

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden hero-animated-bg text-white min-h-0 lg:min-h-[65vh] flex items-center pt-24 sm:pt-28 lg:pt-20 pb-6 sm:pb-10 lg:pb-12">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)",
        }}
      />
      <div className="absolute top-0 right-0 -mt-16 -mr-16 sm:-mt-20 sm:-mr-20 w-48 h-48 sm:w-64 sm:h-64 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-16 sm:-mb-12 sm:-ml-20 w-60 h-60 sm:w-80 sm:h-80 bg-white opacity-10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />

      <div className="container-x relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-4 items-center py-2 sm:py-4 lg:py-0 px-4 sm:px-6 lg:px-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 col-span-full w-full flex flex-col items-center lg:items-start text-center lg:text-left pt-4 sm:pt-6 lg:pt-16 pb-0 sm:pb-2 lg:pb-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#009B6C] border sm:border-2 border-white text-white px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-sm font-bold shadow-lg max-w-full"
          >
            <span className="truncate">{COMPANY.tagline}</span>
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-4 sm:mt-5 text-[30px] xs:text-[32px] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.08] tracking-tight text-white max-w-full"
          >
            <AnimatedText text="Transform Your" />
            <br />
            <AnimatedText text="Business with" />
            <br />
            <span className="min-h-[1.2em] block break-words">
              <TypewriterText
                words={["Intelligent Technology"]}
                textClass="bg-clip-text text-transparent bg-gradient-to-r from-emerald-100 via-white to-teal-100"
                cursorClass="bg-emerald-300"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 sm:mt-5 text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-light pr-0 lg:pr-6 text-justify"
          >
            White Gravity Web Solutions delivers custom Website development & Mobile App development, custom CRM Development, E-Commerce, Zoho and business automation solutions for businesses across the United States.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="hidden lg:flex mt-6 sm:mt-8 flex-col xs:flex-row sm:flex-row items-stretch xs:items-center sm:items-center gap-3 sm:gap-4 w-full xs:w-auto"
          >
            <a
              href="https://wa.me/918796414339?text=Hello%20White%20Gravity%2C%20I%20would%20like%20to%20book%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              data-tracking="whatsapp"
              data-action="whatsapp_click"
              onClick={() => {
                if (window.dataLayer) {
                  window.dataLayer.push({
                    event: 'whatsapp_click',
                    click_location: 'hero_section',
                    whatsapp_number: '918796414339'
                  });
                }
              }}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 rounded-full font-extrabold bg-[#F97316] text-white overflow-hidden transition-all hover:scale-105 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.4)] text-xs sm:text-sm md:text-base w-full xs:w-auto"
            >
              <span className="relative z-10">Book Free Consultation</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            <Link
              to="/services"
              className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-full font-bold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm text-xs sm:text-sm md:text-base w-full xs:w-auto"
            >
              Explore Our Services
            </Link>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 sm:mt-8 hidden lg:flex flex-wrap lg:justify-start gap-1.5 sm:gap-2 md:gap-3 w-full"
          >
            {["Custom Web Dev", "CRM Solutions", "Web Development", "Digital Transformation"].map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border border-white/40 text-[9px] sm:text-[11px] md:text-xs font-bold text-white bg-white/10 backdrop-blur-md shadow-lg flex items-center gap-1.5 sm:gap-2 cursor-default max-w-full"
              >
                <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-100" />
                </div>
                <span className="break-words">{t}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative w-full self-stretch h-[340px] xs:h-[380px] sm:h-[460px] md:h-[500px] lg:h-auto min-h-0 lg:min-h-[480px] overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden flex gap-2 sm:gap-4 md:gap-5 px-0 sm:px-1">
            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-vertical-slow">
                {[...COLUMN1_ITEMS, ...COLUMN1_ITEMS].map((item, idx) => (
                  <div
                    key={`col1-${idx}`}
                    className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-md shrink-0 h-40 xs:h-44 sm:h-52 md:h-56 lg:h-64 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => navigate(`/${item.slug}`)}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 min-w-0 overflow-hidden">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 animate-marquee-vertical-reverse pt-6 sm:pt-10">
                {[...COLUMN2_ITEMS, ...COLUMN2_ITEMS].map((item, idx) => (
                  <div
                    key={`col2-${idx}`}
                    className="w-full rounded-xl sm:rounded-2xl overflow-hidden border border-slate-100 bg-white shadow-md shrink-0 h-44 xs:h-48 sm:h-56 md:h-64 lg:h-72 flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform"
                    onClick={() => navigate(`/${item.slug}`)}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="flex lg:hidden flex-wrap justify-center col-span-full gap-1.5 sm:gap-2 md:gap-3 w-full mt-2 sm:mt-4"
        >
          {["Custom Web Dev", "CRM Solutions", "Web Development", "Digital Transformation"].map((t, i) => (
            <motion.div
              key={`mob-${t}`}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: "spring", stiffness: 100 }}
              className="px-2.5 sm:px-3.5 md:px-4 py-1.5 sm:py-2 rounded-full border border-white/40 text-[9px] sm:text-[11px] md:text-xs font-bold text-white bg-white/10 backdrop-blur-md shadow-lg flex items-center gap-1.5 sm:gap-2 cursor-default max-w-full"
            >
              <div className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-100" />
              </div>
              <span className="break-words">{t}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="lg:hidden col-span-full w-full flex items-center justify-center -mt-2 sm:mt-0"
        >
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full font-bold text-white bg-[#F97316] border-2 border-[#F97316] hover:bg-[#ea580c] hover:border-[#ea580c] transition-all backdrop-blur-sm text-xs sm:text-sm w-full xs:w-auto"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
