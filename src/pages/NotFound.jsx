import React from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center py-20">
      <div className="text-center px-6">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.6, duration: 0.3 }}
          className="text-[120px] md:text-[180px] font-extrabold leading-none text-brand-gradient"
        >
          404
        </motion.div>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }} className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Page not found
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0 }} className="mt-3 text-slate-600 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0 }} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-transform active:scale-95">
            <HomeIcon className="w-4 h-4" /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 transition-all active:scale-95">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </motion.div>
      </div>
    </section>
  );
}
