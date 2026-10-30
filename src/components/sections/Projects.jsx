import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Briefcase,
  Users,
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  LayoutGrid
} from 'lucide-react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { PROJECTS } from '../../data/mock';

const ICON_MAP = {
  crm: Users,
  web: Globe,
  ecommerce: ShoppingCart,
  software: Code2,
  mobile: Smartphone,
  dashboard: LayoutGrid
};

export default function Projects() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-[#fafaf9]">
      <div className="container-x px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <SectionPill icon={Briefcase}>Our Work</SectionPill>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            A showcase of websites, apps, and digital solutions we've delivered for clients across industries.
          </p>
        </motion.div>

        <div className="mt-12 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROJECTS.map((project, index) => {
            const Icon = ICON_MAP[project.iconType] || LayoutGrid;

            return (
              <motion.div
                key={project.id || project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
                className="bg-white rounded-3xl p-3.5 sm:p-4 border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-50 border border-slate-100/80 flex items-center justify-center">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 px-2 pb-1 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${project.iconBg} ${project.iconColor}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="min-w-0">
                      <span className="block text-xs font-medium text-slate-500 truncate leading-tight">
                        {project.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate leading-snug group-hover:text-[#009B6C] transition-colors mt-0.5">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={`/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#009B6C] hover:text-[#007a55] transition-colors whitespace-nowrap shrink-0 group/link"
                  >
                    View Project
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
