import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const PhoneCallIcon = ({ className }) => (
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
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTA() {
  return (
    <section
      className="
        py-10
        sm:py-12
        md:py-16
        lg:py-20

        relative
        overflow-hidden

        bg-[#009B6C]
        text-white
      "
    >
      {/* =====================================================
          BACKGROUND BLOBS
      ====================================================== */}

      <div
        className="
          absolute

          top-0
          left-1/4

          w-64
          sm:w-96
          md:w-[500px]

          h-64
          sm:h-96
          md:h-[500px]

          bg-white/10

          rounded-full

          blur-[100px]
          md:blur-[120px]

          pointer-events-none

          animate-float
        "
      />

      <div
        className="
          absolute

          bottom-0
          right-1/4

          w-72
          sm:w-[450px]
          md:w-[600px]

          h-72
          sm:h-[450px]
          md:h-[600px]

          bg-emerald-300/10

          rounded-full

          blur-[110px]
          md:blur-[140px]

          pointer-events-none

          animate-float-delayed
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div
        className="
          container-x

          relative
          z-10

          w-full

          px-4
          sm:px-6
          md:px-8
          lg:px-0
        "
      >
        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-12

            gap-10
            sm:gap-12
            lg:gap-10

            items-center
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="
              lg:col-span-7

              flex
              flex-col

              items-start

              w-full
            "
          >
            {/* Badge */}

            <motion.div
              variants={itemVariants}
              className="
                inline-flex
                items-center
                gap-2

                bg-white/20

                border
                border-white/30

                text-white

                px-3
                sm:px-4

                py-1.5

                rounded-full

                text-xs
                sm:text-sm

                font-bold

                mb-5
                sm:mb-6
              "
            >
              <span
                className="
                  w-2
                  h-2
                  sm:w-2.5
                  sm:h-2.5

                  rounded-full

                  bg-white

                  animate-pulse
                "
              />

              Start Your Project
            </motion.div>

            {/* Heading */}

            <motion.h2
              variants={itemVariants}
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl

                font-extrabold

                text-white

                leading-[1.1]

                tracking-tight
              "
            >
              Ready to Scale
              <br />

              <span className="text-emerald-100">
                Your Business?
              </span>
            </motion.h2>

            {/* Description */}

            <motion.p
              variants={itemVariants}
              className="
                mt-5
                sm:mt-6

                text-white/85

                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl

                leading-relaxed

                max-w-2xl
              "
            >
              Get a free 30-minute strategy call with our Noida-based
              tech experts. Let's discuss your software, web, or
              marketing needs — no strings attached.
            </motion.p>

            {/* =================================================
                MOBILE + TABLET IMAGE
                IMAGE FIRST, BUTTONS AFTER IMAGE
            ================================================== */}

            <motion.div
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                lg:hidden

                relative

                w-full

                mt-8
                sm:mt-10

                rounded-2xl
                sm:rounded-3xl

                overflow-hidden

                shadow-2xl

                border
                border-white/20

                bg-white/10
              "
            >
              <div
                className="
                  relative

                  w-full

                  h-[220px]
                  sm:h-[300px]
                  md:h-[350px]

                  overflow-hidden

                  rounded-2xl
                  sm:rounded-3xl
                "
              >
                <img
                  src="/images/cta-strategy.jpg"
                  alt="Strategy call"
                  loading="lazy"
                  className="
                    w-full
                    h-full

                    object-cover

                    object-center

                    opacity-95

                    transition-transform
                    duration-700

                    hover:scale-105
                  "
                />

                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/60
                    via-black/10
                    to-transparent

                    pointer-events-none
                  "
                />

                {/* Mobile Badge */}

                <div
                  className="
                    absolute

                    bottom-4
                    right-4

                    sm:bottom-6
                    sm:right-6

                    bg-slate-900/90

                    backdrop-blur-xl

                    border
                    border-white/30

                    p-2.5
                    sm:p-3.5

                    rounded-xl
                    sm:rounded-2xl

                    shadow-2xl

                    flex
                    items-center

                    gap-2
                    sm:gap-3
                  "
                >
                  <div
                    className="
                      w-9
                      h-9
                      sm:w-10
                      sm:h-10

                      bg-[#009B6C]

                      rounded-lg
                      sm:rounded-xl

                      flex
                      items-center
                      justify-center

                      text-white

                      font-bold

                      text-sm
                      sm:text-lg
                    "
                  >
                    24h
                  </div>

                  <div>
                    <div
                      className="
                        text-white

                        font-bold

                        text-[10px]
                        sm:text-xs
                      "
                    >
                      Free Proposal
                    </div>

                    <div
                      className="
                        text-emerald-300

                        text-[9px]
                        sm:text-[10px]

                        font-bold
                      "
                    >
                      Turnaround Time
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              variants={itemVariants}
              className="
                mt-7
                sm:mt-8
                md:mt-10

                flex

                flex-col
                sm:flex-row

                items-stretch
                sm:items-center

                gap-3
                sm:gap-4
                md:gap-5

                w-full
                sm:w-auto
              "
            >
              {/* Book Call */}

              <Link
                to="/contact"
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

                  font-extrabold

                  bg-[#F97316]

                  text-white

                  hover:-translate-y-1

                  transition-transform

                  shadow-[0_10px_30px_-5px_rgba(0,0,0,0.25)]

                  text-sm
                  sm:text-base

                  w-full
                  sm:w-auto
                "
              >
                Book Free Strategy Call

                <ArrowRight
                  className="
                    w-4
                    h-4
                    sm:w-5
                    sm:h-5

                    group-hover:translate-x-1

                    transition-transform
                  "
                />
              </Link>

              {/* Phone */}

              <a
                href="tel:+919217135322"
                className="
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

                  font-extrabold

                  bg-white/15

                  border-2
                  border-white/40

                  text-white

                  hover:bg-white/25
                  hover:-translate-y-1

                  transition-all

                  text-sm
                  sm:text-base

                  w-full
                  sm:w-auto
                "
              >
                <div
                  className="
                    w-8
                    h-8
                    sm:w-9
                    sm:h-9

                    rounded-full

                    bg-white/20

                    flex
                    items-center
                    justify-center

                    flex-shrink-0
                  "
                >
                  <PhoneCallIcon
                    className="
                      w-4
                      h-4

                      text-white
                    "
                  />
                </div>

                +91 92171 35322
              </a>
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT IMAGE - DESKTOP
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="
              hidden

              lg:block

              lg:col-span-5

              relative

              w-full

              h-full

              min-h-[420px]
            "
          >
            <div
              className="
                absolute
                inset-y-0
                right-0

                w-[120%]

                transform

                -skew-x-12

                translate-x-10

                overflow-hidden

                rounded-3xl

                group

                shadow-2xl

                border-2
                border-white/20
              "
            >
              {/* Reveal Overlay */}

              <motion.div
                initial={{
                  scaleX: 1,
                }}
                whileInView={{
                  scaleX: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.35,
                  ease: [0.76, 0, 0.24, 1],
                }}
                style={{
                  originX: 1,
                }}
                className="
                  absolute
                  inset-0

                  bg-slate-100

                  z-20

                  rounded-3xl
                "
              />

              {/* Desktop Image */}

              <img
                src="/images/cta-strategy.jpg"
                alt="Strategy call"
                loading="lazy"
                className="
                  w-full
                  h-full

                  object-cover

                  opacity-90

                  group-hover:opacity-100

                  transition-opacity
                  duration-700

                  transform

                  skew-x-12

                  scale-125
                "
              />

              {/* Gradient */}

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/40
                  via-transparent
                  to-transparent

                  pointer-events-none
                "
              />

              {/* =================================================
                  DESKTOP 24H BADGE
              ================================================== */}

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
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.1,
                }}
                animate={{
                  y: [0, -8, 0],
                }}
                className="
                  absolute

                  bottom-6
                  right-12

                  transform
                  skew-x-12

                  bg-slate-900/90

                  backdrop-blur-xl

                  border
                  border-white/30

                  p-3.5

                  rounded-2xl

                  shadow-2xl

                  flex
                  items-center

                  gap-3

                  z-10
                "
              >
                <div
                  className="
                    w-10
                    h-10

                    bg-[#009B6C]

                    rounded-xl

                    flex
                    items-center
                    justify-center

                    text-white

                    font-bold

                    text-lg
                  "
                >
                  24h
                </div>

                <div>
                  <div
                    className="
                      text-white

                      font-bold

                      text-xs
                    "
                  >
                    Free Proposal
                  </div>

                  <div
                    className="
                      text-emerald-300

                      text-[10px]

                      font-bold
                    "
                  >
                    Turnaround Time
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}