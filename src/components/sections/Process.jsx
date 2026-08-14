import React from 'react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { Lightbulb, Layers, Code2, Hourglass, CloudUpload, RefreshCw, Workflow } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/mock';
import AnimatedText from '../AnimatedText';

const ICONS = { Lightbulb, Layers, Code2, Hourglass, CloudUpload, RefreshCw };

export default function Process() {
  return (
    <section className="py-8 md:py-10 bg-emerald-50/60">
      <div className="container-x">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="text-center max-w-2xl mx-auto">
          <SectionPill icon={Workflow}>Our Process</SectionPill>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900"><AnimatedText text="Our Custom Software Strategy" /></h2>
          <p className="mt-4 text-slate-600">We follow a structured software development lifecycle focused on planning, scalability, performance, and long-term support.</p>
        </motion.div>

        <div className="mt-8 relative">
          
          {/* Animated Wave Line (Centered Vertically - Desktop Only) */}
          <div className="hidden lg:block absolute left-4 right-4 top-1/2 -translate-y-1/2 h-[40px] overflow-hidden opacity-50 z-0 pointer-events-none">
            <motion.div
              animate={{ x: [-200, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="w-[calc(100%+400px)] h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 50 40, 100 20 T 200 20' fill='none' stroke='%2310b981' stroke-width='2.5' stroke-linecap='round' stroke-dasharray='8 8' /%3E%3C/svg%3E")`,
                backgroundSize: "200px 40px",
                backgroundRepeat: "repeat-x"
              }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {PROCESS_STEPS.map((p, i) => {
              const Icon = ICONS[p.icon];
              return (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative z-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + (i % 2), 
                      ease: "easeInOut",
                      delay: i * 0.3
                    }}
                    whileHover={{ scale: 1.05, y: -12, transition: { duration: 0.2 } }}
                    className="bg-white h-full rounded-2xl border border-emerald-100 p-6 text-center shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all"
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-emerald-100 grid place-items-center text-emerald-600 relative overflow-hidden">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: i * 0.2 }}
                      >
                        <Icon className="w-6 h-6" />
                      </motion.div>
                    </div>
                    <div className="mt-5 text-emerald-600 font-bold text-xs uppercase tracking-wider">{p.step}</div>
                    <h4 className="mt-2 font-extrabold text-slate-900 text-sm sm:text-base">{p.title}</h4>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
