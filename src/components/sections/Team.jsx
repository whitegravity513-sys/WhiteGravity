import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { TEAM } from '../../data/mock';

const Users2Icon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 19a6 6 0 0 0-12 0"/><circle cx="8" cy="9" r="4"/><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"/></svg>
);

export default function Team() {
  return (
    <section className="py-8 md:py-10 bg-[#f9f5f6]">
      <div className="container-x">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3 }} className="text-center max-w-2xl mx-auto">
          <SectionPill icon={Users2Icon}>Our Team</SectionPill>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-slate-900">Meet the People Behind White Gravity</h2>
          <p className="mt-4 text-slate-600">A team of 50+ passionate engineers, designers, and consultants dedicated to driving your digital success.</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {TEAM.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img src={m.img} loading="lazy" alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-3 text-white">
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center hover:bg-emerald-500 transition-colors cursor-pointer"><Phone className="w-4 h-4" /></div>
                    <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm grid place-items-center hover:bg-emerald-500 transition-colors cursor-pointer"><Mail className="w-4 h-4" /></div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="font-bold text-slate-900">{m.name}</div>
                <div className="text-xs text-emerald-700 font-medium mt-0.5">{m.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
