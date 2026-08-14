import React from 'react';
import { motion } from 'framer-motion';

export default function IndustryProcess() {
  const steps = [
    {
      num: "01",
      title: "Understand the sector",
      desc: "We study how your buyers search, compare, and decide before we design a single screen."
    },
    {
      num: "02",
      title: "Design for trust signals",
      desc: "Every industry has different proof points — reviews, credentials, pricing, case studies — we surface the right ones."
    },
    {
      num: "03",
      title: "Build and test",
      desc: "Responsive, fast, and tested across devices before anything goes live."
    },
    {
      num: "04",
      title: "Launch and support",
      desc: "We stay on after launch to tune performance as your business grows."
    }
  ];

  return (
    <section className="py-8 md:py-10 bg-[#e6f7f2]">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#00805c] mb-6 tracking-tight"
          >
            How we work with each industry
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-700 text-lg font-medium"
          >
            Same process, tuned differently depending on the sector and its buyers.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_15px_50px_-12px_rgba(0,155,108,0.15)] border-2 border-emerald-50 hover:border-emerald-200 transition-colors"
            >
              <div className="text-[#009B6C] text-2xl font-black mb-3 font-mono">
                {step.num}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#065b46] mb-4">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
