import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { PROJECTS } from '../../data/mock';
import AnimatedText from '../AnimatedText';

const BriefcaseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
);

export default function Projects() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-[#fbf9f6]">
      <div className="container-x px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="text-center max-w-2xl mx-auto">
          <SectionPill icon={BriefcaseIcon}>Our Work</SectionPill>
          <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900"><AnimatedText text="Recent Projects & Case Studies" /></h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 px-2">A showcase of websites, apps, and digital solutions we've delivered for clients across industries.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img src={p.img} loading="lazy" alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/85 via-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <div className="text-xl font-bold">{p.name}</div>
                  <div className="mt-2 inline-flex items-center gap-1 text-sm text-emerald-100">View Case Study <ExternalLink className="w-3.5 h-3.5" /></div>
                </div>
              </div>
              <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                <div className="font-semibold text-slate-900">{p.name}</div>
                <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium">Case Study</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
