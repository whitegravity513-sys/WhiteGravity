import React from 'react';
import CTA from '../components/sections/CTA';
import IndustryProcess from '../components/sections/IndustryProcess';
import Projects from '../components/sections/Projects';
import { INDUSTRIES } from '../data/mock';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

export default function Industries() {
  return (
    <>
      {/* Custom Industries Header (Green Banner) */}
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

      {/* Industries Page Top Section - Side by Side Layout */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container-x max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Content */}
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
                  className="text-emerald-500"
                >
                  We Serve
                </motion.span>
              </h1>
              <p className="text-slate-600 text-[15px] leading-relaxed">
                White Gravity delivers innovative digital solutions for businesses across multiple industries. From healthcare and real estate to e-commerce and finance, we create powerful websites that help brands grow, connect with customers, and achieve their business goals.
              </p>
            </motion.div>

            {/* Right Content - 4x Grid */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {INDUSTRIES.map((ind, i) => (
                  <motion.div
                    key={ind.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                    className="group relative rounded-xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-lg h-36 md:h-44 cursor-pointer"
                  >
                    <img src={ind.img} loading="lazy" alt={ind.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s]" />
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

      <Projects />
      <IndustryProcess />
      <CTA />
    </>
  );
}
