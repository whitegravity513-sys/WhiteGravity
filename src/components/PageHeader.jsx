import React from 'react';
import { ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHeader({ title, crumbs = [] }) {
  return (
    <section className="relative bg-[#009B6C] text-white overflow-hidden">
      <div className="container-x pt-24 pb-8 md:pt-32 md:pb-12 relative z-10 flex flex-col items-center text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          {title}
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-5 flex flex-wrap justify-center items-center gap-2 text-emerald-50/90 text-sm md:text-base font-medium">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition-colors"><HomeIcon className="w-4 h-4" /> Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <ChevronRight className="w-4 h-4 opacity-60" />
              {c.to ? <Link to={c.to} className="hover:text-white transition-colors">{c.label}</Link> : <span className="text-white">{c.label}</span>}
            </span>
          ))}
        </motion.div>
      </div>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)' }} />
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-12 -ml-20 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
