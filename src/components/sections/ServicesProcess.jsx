import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    title: "Discovery & Strategy",
    desc: "Deep-dive into your goals, requirements, and challenges.",
  },
  {
    num: "2",
    title: "Design & Architecture",
    desc: "Wireframes, UI/UX design, and technical architecture planning.",
  },
  {
    num: "3",
    title: "Build & Test",
    desc: "Agile development with iterative testing and quality assurance.",
  },
  {
    num: "4",
    title: "Strategy Call",
    desc: "We understand your goals, challenges, and requirements through a detailed discovery session.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-8 md:py-10 bg-[#def8ea]">
      <div className="container-x">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-6 py-2 bg-[#9ef1bc] text-slate-900 font-bold text-sm tracking-widest uppercase rounded-full shadow-[0_4px_14px_0_rgba(158,241,188,0.39)] mb-6">
              OUR PROCESS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              How Every Project Works
            </h2>
            <p className="text-lg text-slate-800 font-medium">
              A proven 4-step methodology that ensures on-time delivery and
              exceptional results.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 mt-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 pt-12 relative shadow-lg hover:shadow-xl transition-shadow text-center flex flex-col items-center mt-6"
            >
              <div className="absolute -top-6 w-16 h-14 bg-[#088365] rounded-xl text-white text-3xl font-extrabold flex items-center justify-center shadow-lg border-b-4 border-[#065b46]">
                {step.num}
              </div>

              <h3 className="text-xl font-bold text-[#088365] mb-4 mt-2">
                {step.title}
              </h3>
              <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
