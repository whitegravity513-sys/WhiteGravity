import React, { useState } from "react";
import {
  CheckCircle2,
  Users,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  HeartHandshake,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import SectionPill from "../SectionPill";
import AnimatedText from "../AnimatedText";
import TypewriterText from "../TypewriterText";
import { WHY_US } from "../../data/mock";

const ICONS = [
  Zap,
  Shield,
  TrendingUp,
  Clock,
  HeartHandshake,
  CheckCircle2,
];

/* ── Single Flip Card Component ── */
function FlipCard({ item, i }) {
  const Icon = ICONS[i % ICONS.length];
  const [isFlipped, setIsFlipped] = useState(false);
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 36,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileTap={{
        scale: 0.98,
      }}
      viewport={{
        once: true,
        margin: "-30px",
      }}
      transition={{
        duration: 0.45,
        delay: i * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full"
      style={{
        perspective: 1200,
      }}
      onMouseEnter={() => {
        if (hasAnimated) {
          setIsFlipped(true);
          controls.start({ rotateY: 180 });
        }
      }}
      onMouseLeave={() => {
        if (hasAnimated) {
          setIsFlipped(false);
          controls.start({ rotateY: 0 });
        }
      }}
    >

      {/* 3D Flip Container */}
      <motion.div
        initial={{
          rotateY: 180,
        }}
        whileInView={{
          rotateY: 0,
        }}
        animate={controls}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: hasAnimated ? 0 : i * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        onAnimationComplete={() => {
          if (!hasAnimated) setHasAnimated(true);
        }}
        className="relative w-full min-h-[170px] sm:min-h-[180px] h-full cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
        }}
      >

        {/* ===== FRONT FACE ===== */}
        <div
          className="
            group
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50
            p-4
            text-center
            shadow-sm
            transition-all
            duration-300

            hover:border-emerald-300
            hover:bg-emerald-100
            hover:shadow-md

            sm:p-5
          "
          style={{
            backfaceVisibility: "hidden",
          }}
        >

          {/* ICON */}
          <div
            className="
              flex
              h-10
              w-10
              flex-shrink-0
              items-center
              justify-center
              rounded-xl
              bg-white
              shadow-sm
              transition-all
              duration-300

              group-hover:bg-[#009B6C]

              sm:h-11
              sm:w-11
            "
          >
            <Icon
              className="
                h-5
                w-5
                text-[#009B6C]
                transition-colors
                duration-300

                group-hover:text-white
              "
            />
          </div>

          {/* CARD TEXT */}
          <div className="flex flex-col items-center">
            <h4
              className="
                text-[13px]
                font-bold
                leading-snug
                text-slate-800
                transition-colors
                duration-300

                group-hover:text-[#007a55]

                sm:text-sm
              "
            >
              {item.title}
            </h4>

            <p
              className="
                mt-2
                max-w-[220px]
                text-[11px]
                leading-relaxed
                text-slate-500

                sm:text-xs
              "
            >
              {item.desc}
            </p>
          </div>

        </div>

        {/* ===== BACK FACE ===== */}
        <div
          className="
            absolute
            inset-0
            flex
            h-full
            w-full
            flex-col
            items-center
            justify-center
            gap-2
            rounded-2xl
            border
            border-emerald-200
            bg-gradient-to-br
            from-[#009B6C]
            to-emerald-600
            p-4
            shadow-lg

            sm:p-5
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-white/20
            "
          >
            <Icon className="h-7 w-7 text-white" />
          </div>
          <span className="mt-1 text-base font-bold text-white">
            {item.title}
          </span>
          <p className="mt-1 max-w-[200px] text-center text-[11px] leading-relaxed text-white/80 sm:text-xs">
            {item.desc}
          </p>
        </div>

      </motion.div>

    </motion.div>
  );
}

export default function WhyUs() {
  /* Split cards: first 3, then remaining 2 */
  const firstRow = WHY_US.slice(0, 3);
  const secondRow = WHY_US.slice(3);

  return (
    <section className="relative overflow-hidden bg-[#f8fdfb] py-12 sm:py-16 md:py-20 lg:py-24">

      {/* ================= BACKGROUND BLOBS ================= */}

      <div className="blob-2 pointer-events-none absolute -right-20 top-10 h-64 w-64 rounded-full bg-emerald-100/40 blur-3xl sm:h-80 sm:w-80" />

      <div className="blob-3 pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-teal-100/30 blur-3xl sm:h-64 sm:w-64" />

      <div className="container-x relative z-10">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:col-span-7"
          >

            {/* Section Pill */}

            <div className="flex justify-center lg:justify-start">
              <SectionPill icon={Users}>Why Us</SectionPill>
            </div>

            {/* ================= HEADING ================= */}

            <h2
              className="
                mt-4
                text-center
                text-3xl
                font-bold
                leading-[1.15]
                text-[#009B6C]

                sm:text-4xl
                md:text-5xl

                lg:text-left
                lg:text-[44px]

                xl:text-5xl
              "
            >
              <span className="inline">
                Why White Gravity
              </span>

              <br className="hidden sm:block" />

              <span className="inline">
                Stands Out{" "}
              </span>

              <span className="inline-block whitespace-nowrap">
                <TypewriterText
                  words={["in Noida"]}
                  typingSpeed={100}
                  deletingSpeed={50}
                  pauseTime={2000}
                />
              </span>
            </h2>

            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-center
                text-sm
                leading-7
                text-slate-600

                sm:text-base
                md:text-lg

                lg:mx-0
                lg:text-left
              "
            >
              <AnimatedText
                mode="words"
                text="White Gravity is your trusted partner in digital transformation. We combine high-end engineering, intelligent automation, and strategic digital marketing to build technology ecosystems that empower businesses to grow faster and smarter."
              />
            </p>

            {/* =====================================================
                WHY US CARDS — ROW 1 (3 cards)
            ====================================================== */}

            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
              {firstRow.map((item, i) => (
                <FlipCard key={item.title} item={item} i={i} />
              ))}
            </div>

            {/* =====================================================
                WHY US CARDS — ROW 2 (2 cards, centered)
            ====================================================== */}

            <div
              className="
                mt-4
                flex
                flex-col
                items-center
                gap-4

                sm:flex-row
                sm:justify-center
              "
            >
              {secondRow.map((item, i) => (
                <div key={item.title} className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
                  <FlipCard item={item} i={i + 3} />
                </div>
              ))}

            </div>
          </motion.div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[620px]

              lg:col-span-5
              lg:mx-0
              lg:max-w-none
            "
          >

            {/* Image area */}

            <div
              className="
                relative
                w-full

                px-4
                pb-10
                pt-8

                sm:px-8
                sm:pb-12
                sm:pt-10

                lg:px-6
                lg:pb-10
                lg:pt-10
              "
            >

              {/* ================= BACKGROUND TILT ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  inset-5
                  rounded-[2rem]
                  bg-gradient-to-tr
                  from-emerald-100
                  to-teal-50

                  sm:inset-6
                  sm:rounded-[2.5rem]
                "
                style={{
                  transform: "rotate(3deg) scale(1.02)",
                }}
              />

              {/* ================= IMAGE ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  rotateY: -90,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                transition={{
                  duration: 1.4,
                  delay: 0.1,
                  ease: "easeOut",
                }}
                style={{
                  transformOrigin: "left",
                  transformStyle: "preserve-3d",
                }}
                className="
                  group
                  relative
                  z-10
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  rounded-[1.5rem]
                  border-[5px]
                  border-white
                  bg-white
                  shadow-2xl

                  sm:aspect-[16/11]
                  sm:rounded-[2rem]
                  sm:border-[6px]

                  lg:aspect-[4/3]
                "
              >

                <img
                  src="/images/about-collaboration-new.jpg"
                  alt="White Gravity Team"
                  loading="lazy"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700

                    group-hover:scale-105
                  "
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent" />

              </motion.div>

              {/* =====================================================
                  CLIENT SATISFACTION
              ====================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 100,
                }}
                className="
                  absolute
                  bottom-1
                  left-1
                  z-20
                  rounded-2xl
                  bg-white
                  px-3
                  py-2.5
                  shadow-[0_15px_30px_-5px_rgba(0,0,0,0.12)]

                  sm:bottom-2
                  sm:left-2
                  sm:px-4
                  sm:py-3

                  md:px-5
                  md:py-4
                "
              >

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="flex items-center gap-2.5 sm:gap-3"
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <span className="text-lg sm:text-xl">
                      🏆
                    </span>
                  </div>

                  <div>

                    <div className="text-lg font-extrabold leading-none text-slate-900 sm:text-xl md:text-2xl">
                      98%
                    </div>

                    <div className="mt-1 whitespace-nowrap text-[7px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px] md:text-[10px]">
                      Client Satisfaction
                    </div>

                  </div>

                </motion.div>

              </motion.div>

              {/* =====================================================
                  EXPERIENCE
              ====================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.5,
                  y: -20,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  type: "spring",
                  stiffness: 100,
                }}
                className="
                  absolute
                  right-1
                  top-1
                  z-20
                  rounded-2xl
                  bg-white
                  px-3
                  py-2.5
                  shadow-[0_15px_30px_-5px_rgba(0,0,0,0.12)]

                  sm:right-2
                  sm:top-2
                  sm:px-4
                  sm:py-3

                  md:px-5
                  md:py-4
                "
              >

                <motion.div
                  animate={{
                    y: [0, 6, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="flex items-center gap-2.5 sm:gap-3"
                >

                  <div
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100

                      sm:h-11
                      sm:w-11
                    "
                  >
                    <span className="text-sm font-bold text-emerald-600 sm:text-lg">
                      5+
                    </span>
                  </div>

                  <div>

                    <div className="whitespace-nowrap text-sm font-extrabold leading-none text-slate-900 sm:text-lg md:text-xl">
                      Years Pro
                    </div>

                    <div className="mt-1 whitespace-nowrap text-[7px] font-bold uppercase tracking-wider text-slate-500 sm:text-[9px] md:text-[10px]">
                      Experience
                    </div>

                  </div>

                </motion.div>

              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}