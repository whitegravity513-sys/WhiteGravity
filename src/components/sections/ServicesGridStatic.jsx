import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionPill from '../SectionPill';
import { SERVICES } from '../../data/mock';
import AnimatedText from '../AnimatedText';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const imageFold = {
  hidden: {
    opacity: 0,
    rotateX: -90,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
};

export default function ServicesGridStatic() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container-x px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <SectionPill icon={Zap}>
              What We Do
            </SectionPill>

            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Our <span className="text-[#009B6C]">IT Services</span>
            </h2>

            <p className="mt-4 text-slate-500 text-base leading-relaxed max-w-2xl">
              <AnimatedText
                mode="words"
                text="Comprehensive digital solutions tailored for growth-stage businesses. From custom software architecture to intelligent automation and data-driven marketing."
              />
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.slug}
              variants={fadeUp}
              whileHover={{
                y: -6,
                boxShadow:
                  '0 16px 40px -8px rgba(0,155,108,0.18)',
              }}
              className="
                bg-white
                rounded-2xl
                border border-slate-100
                shadow-sm
                overflow-hidden
                flex flex-col
                group
                transition-all
                duration-300
              "
            >

              <div
                className="
                  h-40
                  sm:h-44
                  md:h-48
                  lg:h-52
                  overflow-hidden
                  relative
                  bg-white
                  flex
                  items-center
                  justify-center
                  p-3
                  sm:p-4
                  rounded-t-2xl
                  border-b
                  border-slate-100
                "
              >
                <motion.img
                  variants={imageFold}
                  style={{ transformOrigin: 'top' }}
                  src={s.img}
                  alt={s.title}
                  className={`
                    w-full
                    h-full
                    object-contain
                    object-center
                    transition-transform
                    duration-500
                    rounded-xl
                    ${
                      s.slug === 'digital-marketing'
                        ? 'scale-[1.38] group-hover:scale-[1.44]'
                        : s.slug === 'crm-erp-development'
                        ? 'max-w-[96%] max-h-[96%] group-hover:scale-[1.04]'
                        : 'max-w-[94%] max-h-[94%] group-hover:scale-[1.04]'
                    }
                  `}
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-[#009B6C]/0
                    group-hover:bg-[#009B6C]/5
                    transition-colors
                    duration-400
                    pointer-events-none
                    rounded-xl
                  "
                />
              </div>

              <div
                className="
                  p-5
                  flex
                  flex-col
                  flex-grow
                  items-center
                  text-center
                "
              >

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-[#009B6C]
                    leading-snug
                    text-center
                    w-full
                    group-hover:text-[#007a55]
                    transition-colors
                  "
                >
                  {s.title}
                </h3>

                <p
                  className="
                    mt-2
                    text-slate-500
                    text-xs
                    leading-relaxed
                    text-center
                    w-full
                    flex-grow
                  "
                >
                  {s.desc}
                </p>

                <Link
                  to={`/${s.slug}`}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    justify-center
                    gap-1.5
                    text-[#009B6C]
                    font-semibold
                    text-xs
                    text-center
                    group-hover:text-[#007a55]
                    transition-colors
                  "
                >
                  Explore Service

                  <ArrowRight
                    className="
                      w-3.5
                      h-3.5
                      group-hover:translate-x-1
                      transition-transform
                    "
                  />
                </Link>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}