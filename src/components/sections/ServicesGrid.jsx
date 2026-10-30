import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import SectionPill from "../SectionPill";
import { SERVICES } from "../../data/mock";
import AnimatedText from "../AnimatedText";

export default function ServicesGrid() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative
        overflow-hidden

        pt-8
        sm:pt-10
        md:pt-12
        lg:pt-14

        pb-10
        sm:pb-12
        md:pb-16
        lg:pb-20

        bg-[#e8f7f2]
      "
    >

      <div
        className="
          blob-1
          absolute
          -top-24
          -left-24

          w-48
          h-48

          sm:w-64
          sm:h-64

          md:w-72
          md:h-72

          bg-emerald-200/30
          rounded-full
          blur-3xl

          pointer-events-none
        "
      />

      <div
        className="
          blob-2
          absolute
          -bottom-24
          -right-20

          w-64
          h-64

          sm:w-80
          sm:h-80

          md:w-96
          md:h-96

          bg-teal-200/20
          rounded-full
          blur-3xl

          pointer-events-none
        "
      />

      <div className="container-x">

        <div
          className="
            text-center
            max-w-3xl
            mx-auto

            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              flex
              flex-col
              items-center
            "
          >

            <SectionPill icon={Zap}>What We Do</SectionPill>

            <h2
              className="
                mt-3
                sm:mt-4

                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl

                font-extrabold
                text-slate-900

                leading-tight

                px-2
              "
            >
              Our <span className="text-[#009B6C]">IT Services</span>
            </h2>

            <p
              className="
                mt-3
                sm:mt-4

                text-slate-500

                text-sm
                sm:text-base

                leading-relaxed

                max-w-2xl

                px-2
                sm:px-4
              "
            >
              <AnimatedText
                mode="words"
                text="Comprehensive digital solutions tailored for growth-stage businesses. From custom software architecture to intelligent automation and data-driven marketing."
              />
            </p>
          </motion.div>
        </div>

        <div
          className="
            grid

            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4

            gap-4
            sm:gap-5
            md:gap-6
          "
        >
          {SERVICES.map((s, index) => (
            <motion.div
              key={s.slug}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 16px 40px -8px rgba(0,155,108,0.18)",
              }}
              onClick={() => navigate(`/${s.slug}`)}
              className="
                w-full
                min-w-0

                bg-white

                rounded-xl
                sm:rounded-2xl

                border
                border-slate-100

                shadow-sm

                overflow-hidden

                flex
                flex-col
                group

                cursor-pointer

                transition-all
                duration-300
              "
            >

              <div
                className="
                  relative
                  overflow-hidden

                  w-full

                  h-40
                  sm:h-44
                  md:h-48
                  lg:h-52

                  bg-white

                  flex
                  items-center
                  justify-center

                  p-3
                  sm:p-4

                  rounded-t-xl
                  sm:rounded-t-2xl

                  border-b
                  border-slate-100
                "
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className={`
                    w-full
                    h-full

                    object-contain
                    object-center

                    transition-transform
                    duration-500

                    rounded-lg
                    sm:rounded-xl
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
                    duration-300

                    pointer-events-none

                    rounded-lg
                    sm:rounded-xl
                  "
                />
              </div>

              <div
                className="
                  p-4
                  sm:p-5

                  flex
                  flex-col
                  flex-grow

                  items-center
                  text-center
                "
              >

                <h3
                  className="
                    w-full

                    text-base
                    sm:text-lg
                    md:text-xl

                    font-extrabold

                    text-[#009B6C]

                    leading-tight

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
                    sm:text-sm

                    leading-relaxed

                    flex-grow

                    max-w-sm
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
                    sm:text-sm

                    group-hover:text-[#007a55]

                    transition-colors

                    whitespace-nowrap
                  "
                >
                  Explore Service
                  <ArrowRight
                    className="
                      w-3.5
                      h-3.5

                      sm:w-4
                      sm:h-4

                      group-hover:translate-x-1

                      transition-transform
                    "
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
