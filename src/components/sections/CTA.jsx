import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PhoneCallIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

export default function CTA() {
  const particles = Array.from({ length: 15 });

  return (
    <section className="relative overflow-hidden py-4 sm:py-6 md:py-8 bg-gradient-to-br from-emerald-500 to-[#009B6C] flex items-center justify-center">

      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.4, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-white rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2], x: [0, 100, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-300 rounded-full blur-[150px] pointer-events-none"
      />

      {particles.map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: ["0vh", "-100vh"],
            x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
            opacity: [0, 0.9, 0],
            scale: [0, Math.random() + 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute bottom-0 w-2 h-2 bg-white rounded-full pointer-events-none shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          style={{
            left: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
        />
      ))}

      <div className="absolute inset-0 flex items-center pointer-events-none overflow-hidden opacity-10">
        <motion.div
          animate={{ x: ["100vw", "-100%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[12vw] font-black text-white whitespace-nowrap"
        >
          WHITE GRAVITY WEB SOLUTIONS
        </motion.div>
      </div>

      <div className="container-x relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-widest text-sm mb-5 backdrop-blur-md shadow-2xl"
          >
            Start Your Project
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4"
          >
            Ready to Scale <br className="hidden sm:block" />
            <span className="text-emerald-100 inline-block relative mt-2">
              Your Business?
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -bottom-2 left-0 w-full h-2 bg-orange-400 rounded-full origin-left opacity-90"
              />
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-emerald-50 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8 font-medium"
          >
            Get a free 30-minute strategy call with our senior tech experts.
            Let's discuss your software, web, or marketing needs — no strings attached.
          </motion.p>

          {}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-3 bg-orange-500 text-white px-8 sm:px-10 py-4 rounded-full font-extrabold text-lg transition-all shadow-[0_0_30px_rgba(249,115,22,0.4)] hover:shadow-[0_0_50px_rgba(249,115,22,0.6)] hover:-translate-y-1 w-full sm:w-auto border border-orange-400"
            >
              <span className="relative z-10">Book Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>

            <a
              href="tel:+14694614710"
              className="group inline-flex items-center justify-center gap-3 bg-emerald-800/30 border-2 border-emerald-300/50 text-white px-8 sm:px-10 py-4 rounded-full font-extrabold text-lg transition-all hover:bg-emerald-800/60 hover:border-white shadow-[0_0_20px_rgba(0,0,0,0.1)] hover:-translate-y-1 backdrop-blur-md w-full sm:w-auto"
            >
              <PhoneCallIcon className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-transform" />
              <span>+1 (469) 461-4710</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
