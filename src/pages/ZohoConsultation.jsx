import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Plus, Minus, Calendar } from 'lucide-react';
import { FaUsers, FaProjectDiagram, FaPlug, FaDatabase, FaGraduationCap, FaBuilding, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    icon: FaUsers,
    title: 'Zoho CRM Implementation',
    desc: 'Build a CRM that matches your sales process with customized modules, lead pipelines, dashboards, and reports to improve customer management.'
  },
  {
    icon: FaProjectDiagram,
    title: 'Business Process Automation',
    desc: 'Eliminate repetitive work by automating approvals, follow-ups, email notifications, task assignments, and business workflows using Zoho.'
  },
  {
    icon: FaPlug,
    title: 'Custom Integrations',
    desc: 'Integrate Zoho with your website, ERP, accounting software, payment gateways, WhatsApp, and other third-party applications for seamless operations.'
  },
  {
    icon: FaDatabase,
    title: 'Secure Data Migration',
    desc: 'Transfer your customer records and business data from Excel, legacy software, or any CRM platform into Zoho with complete accuracy and security.'
  },
  {
    icon: FaGraduationCap,
    title: 'User Training & Ongoing Assistance',
    desc: 'Empower your team with practical Zoho training, onboarding sessions, documentation, and continuous technical support after implementation.'
  },
  {
    icon: FaBuilding,
    title: 'Complete Zoho Ecosystem Setup',
    desc: 'Deploy multiple Zoho applications—including CRM, Books, Desk, Projects, People, Analytics, and more—to create a connected business management system.'
  }
];

const faqs = [
  { q: 'Which Zoho applications do you implement?', a: 'We implement the entire Zoho suite including Zoho CRM, Zoho Books, Zoho Desk, Zoho People, Zoho Projects, and Zoho One.' },
  { q: 'How much time does Zoho implementation take?', a: 'The timeline depends on the complexity of your business processes. A standard CRM setup can take 2-4 weeks, while a full Zoho One implementation may take 6-12 weeks.' },
  { q: 'Can you customize Zoho CRM for our business?', a: 'Yes, we tailor Zoho CRM precisely to your workflows. This includes custom modules, fields, pipelines, blueprints, automation rules, and customized dashboards.' },
  { q: 'Do you provide migration from existing software?', a: 'Absolutely. We securely migrate your data from legacy systems, spreadsheets, or other CRMs (like Salesforce, HubSpot) into Zoho with zero data loss.' },
  { q: 'Do you offer post-implementation support?', a: 'Yes, we provide comprehensive training sessions for your team, detailed documentation, and ongoing technical support to ensure smooth adoption.' }
];

const PROCESS = [
  { step: "01", title: "Discovery", desc: "We understand your business processes and requirements." },
  { step: "02", title: "Strategy & Architecture", desc: "We define workflows, modules and system architecture." },
  { step: "03", title: "Configuration", desc: "We configure Zoho apps to match your workflows perfectly." },
  { step: "04", title: "Integration", desc: "We connect your existing business tools and platforms." },
  { step: "05", title: "Testing & Training", desc: "Your team gets training and the system goes through testing." },
  { step: "06", title: "Launch & Support", desc: "We deploy the system and provide ongoing support." }
];

const COMPARISON = [
  { feature: "Setup", zoho: "Faster", custom: "More involved" },
  { feature: "Customization", zoho: "High", custom: "Very high" },
  { feature: "Cost", zoho: "Generally lower", custom: "Depends on scope" },
  { feature: "Business Processes", zoho: "Standard + configurable", custom: "Fully tailored" },
  { feature: "Scalability", zoho: "High", custom: "Very high" },
  { feature: "Best For", zoho: "Growing businesses", custom: "Complex workflows" }
];

export default function ZohoConsultation() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section className="bg-[#009B6C] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)' }} />
        <div className="container-x relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-[#bcf5d6] text-slate-900 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] mx-auto"
          >
            <Mail className="w-4 h-4" /> ZOHO SERVICES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-8 text-[32px] xs:text-[36px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-full"
          >
            Zoho CRM Consultant in USA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-emerald-50 leading-relaxed font-light mx-auto max-w-2xl px-2 sm:px-4"
          >
            Streamline your business with expert Zoho CRM implementation, Business Software Development, and Custom Web Application Development. We specialize in tailoring custom integrations and CRM Software Development for growing businesses.
          </motion.p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] mb-6">
              Why Choose White Gravity for Zoho Consultation?
            </h2>
            <div className="space-y-6 text-slate-600 text-[1.05rem] leading-relaxed">
              <p>
                White Gravity delivers tailored Zoho consultation and implementation services that help businesses automate operations, improve customer relationships, and boost productivity. Our experienced consultants work closely with organizations to understand their business processes and configure solutions that align with their growth objectives.
              </p>

              <div className="block lg:hidden my-8 rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <img src="/images/zoho-logo-full.svg" alt="Zoho Consultant" className="w-full h-[250px] sm:h-[350px] object-contain p-8" />
              </div>

              <p>
                From Zoho CRM implementation and Custom ERP Development to custom integrations, data migration, and user training, we provide end-to-end Zoho services designed to streamline your daily operations. Every solution is customized to fit your unique business requirements, ensuring maximum efficiency and long-term scalability.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="hidden lg:flex relative justify-center items-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white max-w-md w-full flex items-center justify-center p-8"
            >
              <img src="/images/zoho-logo-full.svg" alt="Zoho Consultant" className="w-full h-[350px] object-contain hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#eefaf4]">
        <div className="container-x">
          <motion.h2
            initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#009B6C] mb-10 text-center sm:text-left"
          >
            Comprehensive Zoho Solutions
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((srv, i) => (
              <motion.div
                key={srv.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-8 border border-slate-200 shadow-[0_4px_12px_rgba(0,155,108,0.08)] flex flex-col h-full hover:shadow-[-6px_6px_0px_0px_#009B6C] transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-[#d1f2eb] border border-[#009B6C]/20 flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:bg-[#009B6C] transition-colors duration-300">
                  <srv.icon className="w-5 h-5 sm:w-8 sm:h-8 text-[#009B6C] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-slate-900 group-hover:text-[#009B6C] transition-colors duration-300 mb-2 sm:mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our <span className="text-[#009B6C]">Implementation Process</span></h2>
            <p className="text-slate-600 text-lg">A structured, proven approach to ensure your system goes live without friction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {PROCESS.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#f0fdf4] border border-slate-100 hover:shadow-lg transition-all group overflow-hidden"
              >
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-6xl sm:text-8xl font-black text-[#009B6C]/5 group-hover:text-[#009B6C]/10 transition-colors">{p.step}</div>
                <h3 className="relative text-base sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{p.title}</h3>
                <p className="relative text-xs sm:text-base text-slate-600 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#f0fdf4]">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Zoho or Custom ERP — <span className="text-[#009B6C]">Which Is Right for You?</span></h2>
            <p className="text-slate-600 text-lg">Compare options to choose the right foundation for your business operations.</p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-md border border-slate-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-[#f0fdf4] border-b border-slate-200">
              <div className="p-4 sm:p-6 font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wider">Feature</div>
              <div className="p-4 sm:p-6 font-bold text-slate-900 text-sm sm:text-lg text-center border-l border-slate-200">Zoho ERP</div>
              <div className="p-4 sm:p-6 font-bold text-[#009B6C] text-sm sm:text-lg text-center border-l border-slate-200">Custom ERP</div>
            </div>
            {COMPARISON.map((row, i) => (
              <div key={row.feature} className={`grid grid-cols-3 ${i !== COMPARISON.length - 1 ? 'border-b border-slate-100' : ''}`}>
                <div className="p-4 sm:p-6 font-semibold text-slate-700 text-xs sm:text-base bg-[#f0fdf4]/50 flex items-center">{row.feature}</div>
                <div className="p-4 sm:p-6 text-slate-600 text-xs sm:text-base text-center border-l border-slate-100 flex items-center justify-center">{row.zoho}</div>
                <div className="p-4 sm:p-6 text-slate-800 font-medium text-xs sm:text-base text-center border-l border-slate-100 bg-[#009B6C]/5 flex items-center justify-center">{row.custom}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#009B6C] mb-12 text-center sm:text-left">
              Frequently Asked Questions
            </h2>

            <div className="bg-white p-6 sm:p-10 shadow-sm border border-slate-100 rounded-3xl">
              <div className="divide-y divide-slate-100 border-t border-slate-100">
                {faqs.map((faq, idx) => (
                  <div key={faq.q} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-[#009B6C] transition-colors gap-4"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900">{faq.q}</span>
                      <div className="shrink-0 flex items-center justify-center">
                        {openFaq === idx ? <Minus className="w-5 h-5 text-[#009B6C]" strokeWidth={2.5} /> : <Plus className="w-5 h-5 text-slate-400" strokeWidth={2.5} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009B6C] via-[#065b46] to-[#034232] pointer-events-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,1) 0, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,1) 0, transparent 40%)' }} />

        <div className="container-x relative z-10 max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Ready to Transform Your Business with Zoho?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-emerald-50/90 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Optimize your workflows, automate routine tasks, and improve customer management with expert Zoho consultation from White Gravity. Our specialists will help you choose, implement, and customize the right Zoho solutions for your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, rotateX: 45, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A5F] hover:bg-[#ff4046] text-white font-extrabold text-sm tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(255,90,95,0.6)] hover:-translate-y-1 transition-all duration-300">
              <Calendar className="w-5 h-5" /> FREE CONSULTATION
            </a>
            <a href="/services" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-[#f0fdf4] text-[#009B6C] font-extrabold text-sm tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
              <FaBriefcase className="w-5 h-5" /> VIEW SERVICES
            </a>
          </motion.div>
        </div>
      </section>

    </>
  );
}
