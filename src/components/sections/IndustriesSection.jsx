import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionPill from "../SectionPill";
import { INDUSTRIES } from "../../data/mock";

const Building2Icon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4" />
    <path d="M10 10h4" />
    <path d="M10 14h4" />
    <path d="M10 18h4" />
  </svg>
);

export default function IndustriesSection() {
  const row1Industries = [
    ...INDUSTRIES.slice(0, 6),
    ...INDUSTRIES.slice(0, 6),
  ];

  const row2Industries = [
    ...INDUSTRIES.slice(6, 12),
    ...INDUSTRIES.slice(6, 12),
  ];

  return (
    <section
      className="
        relative
        overflow-hidden

        py-10
        sm:py-12
        md:py-16
        lg:py-20

        bg-emerald-50/60
      "
    >
      <div className="container-x">
        <div
          className="
            grid

            grid-cols-1
            lg:grid-cols-12

            gap-8
            sm:gap-10
            lg:gap-12

            items-center
          "
        >

          <div
            className="
              lg:col-span-5

              w-full

              flex
              flex-col
              items-start

              text-left
            "
          >
            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-full"
            >

              <SectionPill icon={Building2Icon}>
                Industries
              </SectionPill>

              <h2
                className="
                  mt-3
                  sm:mt-4

                  text-3xl
                  sm:text-4xl
                  md:text-5xl

                  font-bold

                  leading-[1.15]

                  whitespace-normal
                "
              >
                <span className="text-slate-900">
                  Industries{" "}
                </span>

                <motion.span
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotateX: -60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    display: "inline-block",
                    transformOrigin: "top center",
                  }}
                  className="text-emerald-600"
                >
                  We Serve
                </motion.span>
              </h2>

              <p
                className="
                  mt-4
                  sm:mt-5
                  md:mt-6

                  text-slate-600

                  text-sm
                  sm:text-base
                  md:text-lg
                  lg:text-xl

                  leading-relaxed

                  max-w-xl
                "
              >
                White Gravity delivers innovative digital solutions
                for businesses across multiple sectors. From healthcare
                and real estate to e-commerce and finance, we build
                custom tech that scales and transforms your operations.
              </p>

              <div
                className="
                  mt-6
                  sm:mt-8
                  md:mt-10
                "
              >
                <Link
                  to="/industries"
                  className="
                    group

                    inline-flex

                    items-center
                    justify-center

                    gap-2
                    sm:gap-3

                    px-5
                    sm:px-6
                    md:px-8

                    py-3
                    sm:py-3.5
                    md:py-4

                    rounded-full

                    font-semibold

                    bg-white

                    border
                    border-slate-200

                    text-slate-800

                    transition-all

                    hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.2)]

                    hover:border-emerald-300

                    hover:text-emerald-700

                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  <span>
                    View All Industries
                  </span>

                  <ArrowRight
                    className="
                      w-4
                      h-4

                      sm:w-5
                      sm:h-5

                      group-hover:translate-x-1

                      transition-transform

                      flex-shrink-0
                    "
                  />
                </Link>
              </div>
            </motion.div>
          </div>

          <div
            className="
              lg:col-span-7

              relative

              w-full

              min-w-0
            "
          >
            <div
              className="
                relative

                w-full
                lg:w-[200%]

                h-[250px]
                xs:h-[280px]
                sm:h-[340px]
                md:h-[440px]
                lg:h-[500px]

                flex
                flex-col

                gap-3
                sm:gap-4
                md:gap-6

                justify-center

                overflow-hidden

                rounded-2xl
                sm:rounded-3xl

                lg:rounded-l-3xl
                lg:rounded-r-none

                pause-on-hover
              "
            >

              <div
                className="
                  w-full

                  overflow-hidden

                  relative
                "
              >
                <div
                  className="
                    flex

                    gap-3
                    sm:gap-4
                    md:gap-6

                    w-max

                    animate-marquee-industries
                  "
                >
                  {row1Industries.map((ind, i) => (
                    <IndustryCard
                      key={`row1-${i}`}
                      industry={ind}
                    />
                  ))}
                </div>
              </div>

              <div
                className="
                  w-full

                  overflow-hidden

                  relative
                "
              >
                <div
                  className="
                    flex

                    gap-3
                    sm:gap-4
                    md:gap-6

                    w-max

                    animate-marquee-reverse-industries

                    ml-4
                    sm:ml-8
                    md:ml-12
                  "
                >
                  {row2Industries.map((ind, i) => (
                    <IndustryCard
                      key={`row2-${i}`}
                      industry={ind}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }) {
  return (
    <div
      className="
        relative

        rounded-xl
        sm:rounded-2xl
        md:rounded-[24px]

        overflow-hidden

        shadow-md

        shrink-0

        w-[180px]
        xs:w-[200px]
        sm:w-[240px]
        md:w-[280px]
        lg:w-[300px]

        aspect-[16/9]

        group

        cursor-pointer
      "
    >

      <img
        src={industry.img}
        alt={industry.name}
        className="
          w-full
          h-full

          object-cover

          group-hover:scale-105

          transition-transform
          duration-700
        "
      />

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-slate-900/90
          via-slate-900/20
          to-transparent

          opacity-80

          group-hover:opacity-100

          transition-opacity
          duration-300
        "
      />

      <div
        className="
          absolute

          inset-x-1
          sm:inset-x-2

          bottom-2
          sm:bottom-3
          md:bottom-4

          text-center

          text-white

          px-1
          sm:px-2
        "
      >
        <div
          className="
            font-extrabold

            text-[11px]
            sm:text-sm
            md:text-lg

            tracking-wide

            leading-tight
          "
        >
          {industry.name}
        </div>
      </div>
    </div>
  );
}