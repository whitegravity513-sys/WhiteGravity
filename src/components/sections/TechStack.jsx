import React from 'react';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { TECH_STACK, PARTNERS } from '../../data/mock';
import AnimatedText from '../AnimatedText';

export default function TechStack({ isMarquee = false }) {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-slate-50 relative overflow-hidden">
      <div className="container-x relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-8 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col items-center">
            <SectionPill icon={Cpu}>Tech Stack</SectionPill>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              <AnimatedText text="Powered by " /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400"><AnimatedText text="Enterprise Tech" /></span>
            </h2>
            <p className="mt-4 text-slate-600 text-base leading-relaxed max-w-2xl">
              Modern, scalable, and secure technology stacks engineered for performance and growth.
            </p>
          </motion.div>
        </div>

        {isMarquee ? (
          /* Animated Tech Stack - Two Marquee Rows with undulating wave motion (About Page) */
          <div className="relative w-full overflow-hidden mb-12 py-6">
            {/* Left fade */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            {/* Right fade */}
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

            {/* Row 1 — moves left */}
            <div className="mb-6 overflow-hidden">
              <div className="flex gap-4 w-max animate-marquee-slow">
                {[...Array(3)].flatMap(() => [
                  { name: 'React', icon: 'react' },
                  { name: 'PHP / Laravel', icon: 'laravel' },
                  { name: 'WordPress', icon: 'wordpress' },
                  { name: 'Shopify', icon: 'shopify' },
                  { name: 'Node.js', icon: 'nodedotjs' },
                  { name: 'Next.js', icon: 'nextdotjs' },
                  { name: 'Microsoft .NET', icon: 'dotnet' },
                  { name: 'WooCommerce', icon: 'woocommerce' },
                ]).map((t, i) => (
                  <motion.div
                    key={`r1-${i}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: (i % 8) * 0.22, // Cycle delay to create wave pattern
                    }}
                    whileHover={{ scale: 1.08, y: -12, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-full px-6 py-3.5 border border-slate-200/80 shadow-sm hover:shadow-[0_10px_25px_-4px_rgba(16,185,129,0.25)] hover:border-emerald-400 transition-all duration-300 cursor-default flex items-center gap-3 shrink-0"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center p-1 group-hover:bg-[#e6f7f2] transition-colors overflow-hidden">
                      <img src={`/images/tech/${t.icon}.svg`} alt={t.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-[#009B6C] transition-colors whitespace-nowrap">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Row 2 — moves right */}
            <div className="overflow-hidden">
              <div className="flex gap-4 w-max animate-marquee-reverse-slow">
                {[...Array(3)].flatMap(() => [
                  { name: 'Flutter', icon: 'flutter' },
                  { name: 'React Native', icon: 'react' },
                  { name: 'AWS', icon: 'aws' },
                  { name: 'Google Cloud', icon: 'googlecloud' },
                  { name: 'MySQL', icon: 'mysql' },
                  { name: 'MongoDB', icon: 'mongodb' },
                  { name: 'Zoho CRM', icon: 'zoho' },
                  { name: 'Shopify', icon: 'shopify' },
                ]).map((t, i) => (
                  <motion.div
                    key={`r2-${i}`}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3.5,
                      ease: "easeInOut",
                      delay: (i % 8) * 0.22, // Cycle delay to create wave pattern
                    }}
                    whileHover={{ scale: 1.08, y: -12, transition: { duration: 0.2 } }}
                    className="group bg-white rounded-full px-6 py-3.5 border border-slate-200/80 shadow-sm hover:shadow-[0_10px_25px_-4px_rgba(16,185,129,0.25)] hover:border-emerald-400 transition-all duration-300 cursor-default flex items-center gap-3 shrink-0"
                  >
                    <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center p-1 group-hover:bg-[#e6f7f2] transition-colors overflow-hidden">
                      <img src={`/images/tech/${t.icon}.svg`} alt={t.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-[#009B6C] transition-colors whitespace-nowrap">{t.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Tech Stack Pills - Static wrapped grid (Home Page and other pages) */
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 max-w-5xl mx-auto">
            {[
              { name: 'React', icon: 'react' },
              { name: 'PHP / Laravel', icon: 'laravel' },
              { name: 'WordPress', icon: 'wordpress' },
              { name: 'Shopify', icon: 'shopify' },
              { name: 'Node.js', icon: 'nodedotjs' },
              { name: 'Next.js', icon: 'nextdotjs' },
              { name: 'Microsoft .NET', icon: 'dotnet' },
              { name: 'WooCommerce', icon: 'woocommerce' },
              { name: 'Flutter', icon: 'flutter' },
              { name: 'React Native', icon: 'react' },
              { name: 'AWS', icon: 'aws' },
              { name: 'Google Cloud', icon: 'googlecloud' },
              { name: 'MySQL', icon: 'mysql' },
              { name: 'MongoDB', icon: 'mongodb' },
              { name: 'Zoho CRM', icon: 'zoho' },
            ].map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="group bg-white rounded-full px-6 py-3.5 border border-slate-200/80 shadow-[0_4px_15px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_25px_-4px_rgba(16,185,129,0.2)] hover:border-emerald-400 transition-all duration-300 cursor-default flex items-center gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center p-1 group-hover:bg-[#e6f7f2] transition-colors overflow-hidden">
                  <img src={`/images/tech/${t.icon}.svg`} alt={t.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="text-sm md:text-base font-bold text-slate-800 group-hover:text-[#009B6C] transition-colors">{t.name}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Technology Partners Header */}
        <div className="pt-14 md:pt-16 border-t border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
                Strategic Alliance
              </span>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Official <span className="text-emerald-600">Technology Partners</span>
              </h3>
              <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl">
                Certified partnerships with world-class platforms to deliver enterprise-grade execution.
              </p>
            </motion.div>
          </div>

          {/* Partners Categories */}
          <div className="flex flex-col gap-12 md:gap-16 mt-8">
            {Array.from(new Set(PARTNERS.map(p => p.category))).filter(Boolean).map((category) => (
              <div key={category} className="w-full">
                <h4 className="text-xs md:text-sm font-extrabold text-slate-400 uppercase tracking-[0.2em] mb-8 text-center flex items-center justify-center gap-6 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:to-slate-300 before:flex-1 after:h-[1px] after:bg-gradient-to-l after:from-transparent after:to-slate-300 after:flex-1 max-w-4xl mx-auto px-4">
                  {category}
                </h4>
                <div className="flex flex-wrap md:flex-nowrap justify-center items-center gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto px-4 py-6 overflow-x-auto">
                  {PARTNERS.filter(p => p.category === category).map((p, i) => (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, y: 24, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6, scale: 1.05, transition: { duration: 0.25 } }}
                      className="group relative bg-white rounded-2xl p-4 sm:p-5 h-34 sm:h-38 md:h-40 w-[135px] sm:w-[155px] md:w-[175px] lg:w-[185px] flex flex-col items-center justify-center border-2 border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.25)] hover:border-emerald-400 hover:z-20 transition-all duration-300 cursor-default overflow-hidden shrink-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-100/0 group-hover:from-emerald-50/70 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
                      <div className="h-12 md:h-14 w-full flex items-center justify-center relative z-10 mb-2">
                        <img
                          src={p.img}
                          alt={p.name}
                          loading="lazy"
                          className="max-h-10 md:max-h-12 max-w-[110px] md:max-w-[135px] w-auto object-contain transition-all duration-500 group-hover:scale-105 filter drop-shadow-sm"
                        />
                      </div>
                      <div className="text-center relative z-10">
                        <span className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-emerald-600 transition-colors block leading-tight">{p.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
