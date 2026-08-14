import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "../../data/mock";
import AnimatedText from "../AnimatedText";
import TypewriterText from "../TypewriterText";

function AnimatedCounter({ value }) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const target = parseInt(numericPart, 10);

  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    hasAnimated.current = true;

    let start = 0;
    const duration = 1200;
    const fps = 60;
    const totalSteps = (duration / 1000) * fps;
    const stepIncrement = target / totalSteps;

    const timer = setInterval(() => {
      start += stepIncrement;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const COLUMN1_IMAGES = [
  "/images/service-website.jpg",
  "/images/service-webapp.jpg",
  "/images/service-marketing.jpg",
  "/images/service-custom-software.jpg",
];

const COLUMN2_IMAGES = [
  "/images/service-mobile.jpg",
  "/images/service-ecommerce.jpg",
  "/images/service-ads.jpg",
  "/images/service-crm.jpg",
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        hero-animated-bg
        text-white

        min-h-0
        lg:min-h-[65vh]

        flex
        items-center

        pt-20
        sm:pt-24
        lg:pt-24

        pb-8
        sm:pb-12
        lg:pb-16
      "
    >
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        className="
          absolute
          inset-0
          opacity-20
          pointer-events-none
        "
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,.3) 0, transparent 40%), radial-gradient(circle at 80% 60%, rgba(255,255,255,.2) 0, transparent 40%)",
        }}
      />

      {/* Top Right Blob */}
      <div
        className="
          absolute
          top-0
          right-0

          -mt-16
          -mr-16

          sm:-mt-20
          sm:-mr-20

          w-48
          h-48

          sm:w-64
          sm:h-64

          bg-white
          opacity-10
          rounded-full
          blur-3xl
        "
      />

      {/* Bottom Left Blob */}
      <div
        className="
          absolute
          bottom-0
          left-0

          -mb-10
          -ml-16

          sm:-mb-12
          sm:-ml-20

          w-60
          h-60

          sm:w-80
          sm:h-80

          bg-white
          opacity-10
          rounded-full
          blur-3xl
        "
      />

      {/* Noise */}
      <div
        className="
          absolute
          inset-0
          bg-[url('/images/noise.svg')]
          opacity-20
          pointer-events-none
          mix-blend-overlay
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          container-x
          relative
          z-10

          w-full

          grid
          grid-cols-1
          lg:grid-cols-12

          gap-8
          sm:gap-10
          lg:gap-4

          items-center

          py-6
          sm:py-8
          lg:py-0

          px-4
          sm:px-6
          lg:px-0
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="
            lg:col-span-7
            col-span-full

            w-full

            flex
            flex-col
            items-start

            text-left

            pt-4
            sm:pt-6
            lg:pt-16

            pb-2
            sm:pb-4
            lg:pb-10
          "
        >

          {/* Tagline */}

          <motion.span
            variants={fadeUp}
            className="
              inline-flex
              items-center
              gap-1.5
              sm:gap-2

              bg-[#009B6C]

              border
              sm:border-2
              border-white

              text-white

              px-3
              sm:px-5

              py-1.5
              sm:py-2

              rounded-full

              text-[11px]
              sm:text-sm

              font-bold

              shadow-lg

              max-w-full
            "
          >
            <Sparkles
              className="
                w-3.5
                h-3.5
                sm:w-4
                sm:h-4

                flex-shrink-0
              "
            />

            <span className="truncate">
              {COMPANY.tagline}
            </span>
          </motion.span>

          {/* =================================================
              HEADING
          ================================================== */}

          <motion.h1
            variants={fadeUp}
            className="
              mt-4
              sm:mt-5

              text-[30px]
              xs:text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-5xl
              xl:text-6xl

              font-extrabold

              leading-[1.08]

              tracking-tight

              text-white

              max-w-full
            "
          >
            <AnimatedText text="Transform Your" />

            <br />

            <AnimatedText text="Business with" />

            <br />

            <span
              className="
                text-transparent
                bg-clip-text

                bg-gradient-to-r
                from-emerald-100
                via-white
                to-teal-100

                min-h-[1.2em]

                block

                break-words
              "
            >
              <TypewriterText
                words={["Intelligent Technology"]}
              />
            </span>
          </motion.h1>

          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <motion.p
            variants={fadeUp}
            className="
              mt-4
              sm:mt-5

              text-white/90

              text-xs
              sm:text-sm
              md:text-base

              leading-relaxed

              max-w-2xl

              font-light

              pr-0
              lg:pr-6
            "
          >
            White Gravity Web Solutions delivers custom Website
            development & Mobile App development, custom CRM
            Development, E-Commerce, Zoho and AI-powered business
            automation solutions for businesses in Noida and across
            India.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-6
              sm:mt-8

              flex
              flex-col
              xs:flex-row
              sm:flex-row

              items-stretch
              xs:items-center
              sm:items-center

              gap-3
              sm:gap-4

              w-full
              xs:w-auto
            "
          >
            {/* WhatsApp */}

            <a
              href="https://wa.me/918796414339"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                relative

                inline-flex
                items-center
                justify-center

                gap-2
                sm:gap-3

                px-5
                sm:px-6

                py-3

                rounded-full

                font-extrabold

                bg-white
                text-[#009B6C]

                overflow-hidden

                transition-all

                hover:scale-105

                shadow-[0_10px_30px_-5px_rgba(0,0,0,0.3)]

                hover:shadow-[0_15px_40px_-5px_rgba(255,255,255,0.4)]

                text-xs
                sm:text-sm
                md:text-base

                w-full
                xs:w-auto
              "
            >
              <span className="relative z-10">
                Book Free Consultation
              </span>

              <ArrowRight
                className="
                  w-4
                  h-4

                  relative
                  z-10

                  group-hover:translate-x-1

                  transition-transform

                  flex-shrink-0
                "
              />
            </a>

            {/* Services */}

            <Link
              to="/services"
              className="
                group
                relative

                inline-flex
                items-center
                justify-center

                gap-2

                px-5
                sm:px-6

                py-3

                rounded-full

                font-bold

                text-white

                border-2
                border-white/30

                hover:border-white
                hover:bg-white/10

                transition-all

                backdrop-blur-sm

                text-xs
                sm:text-sm
                md:text-base

                w-full
                xs:w-auto
              "
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* =================================================
              SERVICE TAGS
          ================================================== */}

          <motion.div
            variants={fadeUp}
            className="
              mt-6
              sm:mt-8

              flex
              flex-wrap

              gap-2
              sm:gap-3

              w-full
            "
          >
            {[
              "Custom Web Development",
              "CRM Solutions",
              "Business Web Portals",
              "Digital Transformation",
            ].map((t, i) => (
              <motion.div
                key={t}
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.05,
                }}
                className="
                  px-3
                  sm:px-4
                  md:px-5

                  py-2
                  sm:py-2.5

                  rounded-full

                  border
                  border-white/40

                  text-[10px]
                  sm:text-xs
                  md:text-sm

                  font-bold

                  text-white

                  bg-white/10

                  backdrop-blur-md

                  shadow-lg

                  flex
                  items-center

                  gap-2
                  sm:gap-3

                  cursor-default

                  max-w-full
                "
              >
                {/* Status Dot */}

                <div
                  className="
                    relative
                    flex

                    h-2
                    w-2

                    sm:h-2.5
                    sm:w-2.5

                    flex-shrink-0
                  "
                >
                  <span
                    className="
                      animate-ping
                      absolute
                      inline-flex

                      h-full
                      w-full

                      rounded-full

                      bg-emerald-300

                      opacity-75
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex

                      rounded-full

                      h-2
                      w-2

                      sm:h-2.5
                      sm:w-2.5

                      bg-emerald-100
                    "
                  />
                </div>

                <span className="break-words">
                  {t}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* =====================================================
            RIGHT IMAGE MARQUEE
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            lg:col-span-5

            relative

            w-full

            self-stretch

            h-[300px]
            xs:h-[340px]
            sm:h-[400px]
            md:h-[440px]
            lg:h-auto

            min-h-0
            lg:min-h-[440px]

            overflow-hidden
          "
        >
          <div
            className="
              absolute
              inset-0

              overflow-hidden

              flex

              gap-2
              sm:gap-4
              md:gap-5

              px-0
              sm:px-1
            "
          >

            {/* =================================================
                COLUMN 1
            ================================================== */}

            <div className="flex-1 min-w-0 overflow-hidden">
              <div
                className="
                  flex
                  flex-col

                  gap-3
                  sm:gap-4
                  md:gap-5

                  animate-marquee-vertical-slow
                "
              >
                {[...COLUMN1_IMAGES, ...COLUMN1_IMAGES].map(
                  (src, idx) => (
                    <div
                      key={`col1-${idx}`}
                      className="
                        w-full

                        rounded-xl
                        sm:rounded-2xl

                        overflow-hidden

                        border
                        border-slate-100

                        bg-white

                        shadow-md

                        shrink-0

                        h-36
                        xs:h-40
                        sm:h-48
                        md:h-52
                        lg:h-60

                        flex
                        items-center
                        justify-center

                        p-1
                        sm:p-1.5
                      "
                    >
                      <img
                        src={src}
                        alt="Web Development Service"
                        fetchPriority="high"
                        decoding="async"
                        className="
                          w-full
                          h-full

                          object-contain

                          rounded-lg
                          sm:rounded-xl

                          hover:scale-105

                          transition-transform
                          duration-500
                        "
                      />
                    </div>
                  )
                )}
              </div>
            </div>

            {/* =================================================
                COLUMN 2
            ================================================== */}

            <div className="flex-1 min-w-0 overflow-hidden">
              <div
                className="
                  flex
                  flex-col

                  gap-3
                  sm:gap-4
                  md:gap-5

                  animate-marquee-vertical-reverse

                  pt-6
                  sm:pt-10
                "
              >
                {[...COLUMN2_IMAGES, ...COLUMN2_IMAGES].map(
                  (src, idx) => (
                    <div
                      key={`col2-${idx}`}
                      className="
                        w-full

                        rounded-xl
                        sm:rounded-2xl

                        overflow-hidden

                        border
                        border-slate-100

                        bg-white

                        shadow-md

                        shrink-0

                        h-36
                        xs:h-40
                        sm:h-48
                        md:h-52
                        lg:h-60

                        flex
                        items-center
                        justify-center

                        p-1
                        sm:p-1.5
                      "
                    >
                      <img
                        src={src}
                        alt="Digital SEO & Mobile Service"
                        fetchPriority="high"
                        decoding="async"
                        className="
                          w-full
                          h-full

                          object-contain

                          rounded-lg
                          sm:rounded-xl

                          hover:scale-105

                          transition-transform
                          duration-500
                        "
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}