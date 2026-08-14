import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Plus, Minus, Calendar } from 'lucide-react';
import { FaUsers, FaProjectDiagram, FaPlug, FaDatabase, FaGraduationCap, FaBuilding, FaBriefcase } from 'react-icons/fa';
import Testimonials from '../components/sections/Testimonials';

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

export default function ZohoConsultation() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Header Section */}
      <section className="bg-[#009B6C] pt-24 pb-16 md:pt-32 md:pb-24 text-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)' }} />
        <div className="container-x relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-5 py-2 bg-[#bcf5d6] text-slate-900 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] mx-auto mb-6">
            <Mail className="w-4 h-4" /> ZOHO SERVICES
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white mb-6 tracking-tight max-w-5xl mx-auto leading-tight">
            Zoho Solutions & Business Automation in Noida
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-emerald-50 text-base md:text-lg lg:text-[1.1rem] max-w-4xl mx-auto font-medium leading-relaxed">
            Streamline your business with expert Zoho CRM implementation, workflow automation, custom integrations, and user training tailored for growing businesses in Noida.
          </motion.p>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 leading-[1.2] mb-6">
              Why Choose White Gravity for Zoho Consultation in Noida?
            </h2>
            <div className="space-y-6 text-slate-600 text-[1.05rem] leading-relaxed">
              <p>
                White Gravity delivers tailored Zoho consultation and implementation services that help businesses automate operations, improve customer relationships, and boost productivity. Our experienced Zoho consultants work closely with organizations to understand their business processes and configure solutions that align with their growth objectives.
              </p>
              <p>
                From Zoho CRM implementation and workflow automation to custom integrations, data migration, and user training, we provide end-to-end Zoho services designed to streamline your daily operations. Every solution is customized to fit your unique business requirements, ensuring maximum efficiency and long-term scalability.
              </p>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative flex justify-center items-center">
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 max-w-md w-full">
              <img src="/images/zoho-logo-full.svg" alt="Zoho Partner" className="w-full h-auto object-contain drop-shadow-sm" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Services Section */}
      <section className="py-16 md:py-24 bg-[#eefaf4]">
        <div className="container-x">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#009B6C] mb-10 text-left"
          >
            Comprehensive Zoho Solutions in Noida
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((srv, i) => (
              <motion.div 
                key={srv.title} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-xl p-8 border border-slate-200 shadow-[-6px_6px_0px_0px_#009B6C] flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#d1f2eb] border-2 border-[#009B6C]/20 flex items-center justify-center mb-6 shadow-sm">
                  <srv.icon className="w-8 h-8" style={{ fill: '#009B6C' }} />
                </div>
                <h3 className="text-xl font-bold text-[#009B6C] mb-4">
                  {srv.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {srv.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 md:py-24 bg-[#eefaf4]">
        <div className="container-x">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-bold text-[#009B6C] mb-12 text-left sm:text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="bg-white p-6 sm:p-10 shadow-sm">
              <div className="divide-y divide-slate-100 border-t border-slate-100">
                {faqs.map((faq, idx) => (
                  <div key={faq.q} className="py-4">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between py-2 text-left font-bold text-slate-800 hover:text-[#009B6C] transition-colors gap-4"
                    >
                      <span className="text-base sm:text-lg font-bold text-slate-900">{faq.q}</span>
                      <div className="shrink-0 flex items-center justify-center">
                        {openFaq === idx ? <Minus className="w-5 h-5 text-slate-800" strokeWidth={2.5} /> : <Plus className="w-5 h-5 text-slate-800" strokeWidth={2.5} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }} 
                          transition={{ duration: 0.3 }} 
                          className="pt-3 pb-2 text-slate-600 text-sm md:text-base leading-relaxed font-medium"
                        >
                          {faq.a}
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

      {/* Testimonials */}
      <Testimonials />

      {/* Custom Zoho CTA - Premium Design */}
      <section className="relative py-20 md:py-28 text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009B6C] via-[#065b46] to-[#034232] pointer-events-none" />
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,1) 0, transparent 40%), radial-gradient(circle at 90% 80%, rgba(255,255,255,1) 0, transparent 40%)' }} />
        
        <div className="container-x relative z-10 max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white mb-6 leading-tight tracking-tight"
          >
            Ready to Transform Your Business with Zoho?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-emerald-50/90 text-base md:text-lg lg:text-xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto"
          >
            Optimize your workflows, automate routine tasks, and improve customer management with expert Zoho consultation from White Gravity. Our specialists will help you choose, implement, and customize the right Zoho solutions for your business.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF5A5F] hover:bg-[#ff4046] text-white font-extrabold text-sm tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(255,90,95,0.6)] hover:-translate-y-1 transition-all duration-300">
              <Calendar className="w-5 h-5" /> SCHEDULE YOUR FREE ZOHO CONSULTATION
            </a>
            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 text-[#009B6C] font-extrabold text-sm tracking-widest rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300">
              <FaBriefcase className="w-5 h-5" /> VIEW SERVICES
            </a>
          </motion.div>
        </div>
      </section>

    </>
  );
}
