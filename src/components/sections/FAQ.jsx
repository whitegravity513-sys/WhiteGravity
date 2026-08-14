import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionPill from "../SectionPill";
import AnimatedText from "../AnimatedText";

const FAQS = [
  {
    question: "What services do you offer?",
    answer:
      "We provide a full suite of digital solutions, including Custom Software Development, Website & App Development, eCommerce Solutions, CRM/ERP Integration (Zoho/Odoo), and Performance Marketing (Google/Meta Ads).",
  },
  {
    question: "How much time does it take to build a website or app?",
    answer:
      "A standard website typically takes about 2 to 4 weeks, while complex web or mobile applications can take 2 to 3 months depending on the features and technical requirements.",
  },
  {
    question: "Do you provide maintenance and support after launch?",
    answer:
      "Yes! We offer comprehensive maintenance and support plans to ensure your website or software stays secure, updated, and running smoothly without any downtime.",
  },
  {
    question: "What makes White Gravity different from other agencies?",
    answer:
      "We combine high-quality engineering, agile sprint-based delivery, and strategic digital marketing under one roof. Our focus is on building scalable technology that drives real ROI for your business.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20 lg:py-24">
      
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-teal-100/30 blur-3xl" />

      <div className="container-x relative z-10 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col items-center text-center sm:mb-10 md:mb-12"
        >
          <SectionPill icon={HelpCircle}>FAQs</SectionPill>

          <h2
            className="
              mt-4
              text-2xl
              font-extrabold
              leading-tight
              text-slate-900
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
            "
          >
            <AnimatedText text="Frequently Asked " />

            <span className="text-emerald-600">
              <AnimatedText text="Questions" />
            </span>
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              px-2
              text-sm
              leading-relaxed
              text-slate-600
              sm:mt-4
              sm:text-base
              md:text-lg
            "
          >
            Find answers to common questions about our services, process, and
            how we can help your business grow.
          </p>
        </motion.div>

        {/* ================= FAQ LIST ================= */}
        <div className="space-y-3 sm:space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className={`
                  overflow-hidden
                  rounded-xl
                  border
                  transition-all
                  duration-300
                  sm:rounded-2xl
                  ${
                    isOpen
                      ? "border-emerald-300 bg-emerald-50/60 shadow-md"
                      : "border-slate-200 bg-white hover:border-emerald-200 hover:shadow-sm"
                  }
                `}
              >
                {/* ================= QUESTION ================= */}
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? -1 : index)
                  }
                  aria-expanded={isOpen}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-4
                    text-left
                    focus:outline-none
                    sm:gap-4
                    sm:px-5
                    sm:py-5
                    md:px-6
                  "
                >
                  {/* Question */}
                  <span
                    className={`
                      min-w-0
                      flex-1
                      text-sm
                      font-bold
                      leading-snug
                      transition-colors
                      duration-300
                      sm:text-base
                      md:text-lg
                      ${
                        isOpen
                          ? "text-emerald-700"
                          : "text-slate-800"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Arrow */}
                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300
                      sm:h-9
                      sm:w-9
                      md:h-10
                      md:w-10
                      ${
                        isOpen
                          ? "rotate-180 bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-500 group-hover:bg-emerald-100 group-hover:text-emerald-600"
                      }
                    `}
                  >
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </button>

                {/* ================= ANSWER ================= */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className="
                          border-t
                          border-emerald-100/70
                          px-4
                          pb-5
                          pt-4
                          text-sm
                          leading-7
                          text-slate-600
                          sm:px-5
                          sm:pb-6
                          sm:pt-4
                          sm:text-base
                          md:px-6
                        "
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}