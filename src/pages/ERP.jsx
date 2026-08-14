import React from "react";
import PageHeader from "../components/PageHeader";
import CTA from "../components/sections/CTA";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Zoho CRM Implementation",
    desc: "Design, configure and deploy Zoho CRM tuned to your sales pipeline.",
  },
  {
    title: "Zoho One Setup",
    desc: "End-to-end deployment of the Zoho One suite for finance, HR, ops and support.",
  },
  {
    title: "Zoho Books & Inventory",
    desc: "Automate invoicing, expenses, inventory and multi-branch accounting.",
  },
  {
    title: "Odoo Consultation",
    desc: "Enterprise Odoo ERP consultation, customization and deployment.",
  },
  {
    title: "Custom Integrations",
    desc: "Connect Zoho / Odoo with your website, apps and third-party platforms.",
  },
  {
    title: "Training & Support",
    desc: "Team onboarding, documentation and ongoing platform support.",
  },
];

export default function ERP() {
  return (
    <>
      <PageHeader
        title="ERP Consultation"
        crumbs={[{ label: "ERP Consultation" }]}
      />
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1]">
              Certified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">
                Zoho & Odoo
              </span>{" "}
              Consultants
            </h2>
            <p className="mt-6 text-slate-600 leading-relaxed text-lg max-w-xl">
              We help growth-stage businesses implement, customize and scale
              Zoho and Odoo ecosystems. From CRM to full ERP, we deliver
              measurable operational impact within weeks — not quarters.
            </p>
            <ul className="mt-8 space-y-4 text-left w-full">
              {[
                "Certified Zoho Partner & Implementation team",
                "Odoo module customization & deployment",
                "100+ workflows automated for clients",
                "Dedicated post-launch support",
              ].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 w-full"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-slate-700 font-medium">{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold bg-emerald-600 text-white overflow-hidden transition-transform hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(16,185,129,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Talk to a Consultant</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-6 relative"
          >
            <div className="absolute inset-0 bg-emerald-500 rounded-[2.5rem] transform translate-x-4 translate-y-4 opacity-20" />
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <img
                src="/images/erp-dashboard.jpg"
                alt="ERP dashboard"
                className="w-full h-auto sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="container-x mt-8 md:mt-20 relative z-10">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our <span className="text-emerald-600">ERP Solutions</span>
            </h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Comprehensive integration and consultation to supercharge your
              business operations.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((o, i) => {
              const isZoho = o.title.toLowerCase().includes("zoho");
              const CardWrapper = isZoho ? Link : "div";
              const linkProps = isZoho
                ? { to: "/erp-consultation/zoho-consultation" }
                : {};

              return (
                <motion.div
                  key={o.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                >
                  <CardWrapper {...linkProps} className="block w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 grid place-items-center font-extrabold text-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                        {isZoho ? "Z" : "O"}
                      </div>
                      <h3 className="mt-6 text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {o.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed group-hover:text-slate-700">
                        {o.desc}
                      </p>
                    </div>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
