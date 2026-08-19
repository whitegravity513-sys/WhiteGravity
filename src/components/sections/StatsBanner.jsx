import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { COUNTER_STATS } from "../../data/mock";

function AnimatedCounter({ value, inView }) {
  const numericPart = value.replace(/[^0-9]/g, "");
  const suffix = value.replace(/[0-9]/g, "");
  const target = parseInt(numericPart, 10);

  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;

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
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function StatsBanner() {
  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section
      className="
        relative
        z-10

        /* Mobile - thoda niche */
        -mt-4

        /* Small devices */
        sm:-mt-6

        /* Tablet - aur thoda niche */
        md:-mt-8

        /* Desktop - SAME AS BEFORE */
        lg:-mt-20

        pb-2
        sm:pb-4
        md:pb-6
      "
    >
      <div
        className="
          container-x
          mx-auto
          w-full
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="
            w-full
            rounded-2xl
            bg-white
            border
            border-slate-100
            shadow-xl

            /* Mobile - height chhoti */
            px-4
            py-3

            sm:rounded-3xl
            sm:px-5
            sm:py-4

            md:px-6
            md:py-5

            /* Desktop - SAME AS BEFORE */
            lg:px-10
            lg:py-7

            grid
            grid-cols-2

            /* Mobile gaps reduced */
            gap-y-4
            gap-x-3

            sm:gap-y-5
            sm:gap-x-5

            md:grid-cols-4
            md:gap-6
          "
        >
          {COUNTER_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      scale: 1,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: i * 0.1,
              }}
              className="
                relative
                flex
                flex-col
                items-center
                justify-center
                text-center
                min-w-0
              "
            >
              {/* Counter */}
              <div
                className="
                  whitespace-nowrap
                  text-[28px]
                  font-extrabold
                  tracking-tight
                  text-[#009B6C]
                  leading-none

                  xs:text-[34px]
                  sm:text-[42px]
                  md:text-[42px]
                  lg:text-[54px]
                "
              >
                <AnimatedCounter
                  value={s.value}
                  inView={inView}
                />
              </div>

              {/* Label */}
              <div
                className="
                  mt-1.5
                  max-w-[130px]
                  text-xs
                  font-semibold
                  leading-snug
                  text-slate-600

                  sm:mt-2
                  sm:max-w-none
                  sm:text-sm

                  md:text-base
                "
              >
                {s.label}
              </div>

              {/* Divider for mobile 2x2 layout */}
              {i < COUNTER_STATS.length - 1 && (
                <div
                  className="
                    absolute
                    -right-2
                    top-1/2
                    hidden
                    h-12
                    -translate-y-1/2
                    border-r
                    border-slate-200

                    sm:-right-3

                    md:hidden
                  "
                />
              )}

              {/* Bottom divider for mobile */}
              {i < 2 && (
                <div
                  className="
                    absolute
                    -bottom-3
                    left-1/2
                    w-[80%]
                    -translate-x-1/2
                    border-b
                    border-slate-100

                    sm:-bottom-4

                    md:hidden
                  "
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}