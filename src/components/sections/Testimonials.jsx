import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionPill from "../SectionPill";
import { TESTIMONIALS } from "../../data/mock";
import AnimatedText from "../AnimatedText";

function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center justify-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="
            w-3 h-3
            sm:w-3.5 sm:h-3.5
            md:w-4 md:h-4
            fill-amber-400
            text-amber-400
          "
        />
      ))}

      {hasHalf && (
        <div
          className="
            relative
            w-3 h-3
            sm:w-3.5 sm:h-3.5
            md:w-4 md:h-4
          "
        >
          <Star
            className="
              w-3 h-3
              sm:w-3.5 sm:h-3.5
              md:w-4 md:h-4
              fill-slate-200
              text-slate-300
              absolute
              inset-0
            "
          />

          <div className="overflow-hidden w-[50%] absolute inset-0">
            <Star
              className="
                w-3 h-3
                sm:w-3.5 sm:h-3.5
                md:w-4 md:h-4
                fill-amber-400
                text-amber-400
              "
            />
          </div>
        </div>
      )}

      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="
            w-3 h-3
            sm:w-3.5 sm:h-3.5
            md:w-4 md:h-4
            fill-slate-200
            text-slate-300
          "
        />
      ))}

      <span
        className="
          ml-1
          text-[10px]
          sm:text-[11px]
          md:text-xs
          font-extrabold
          text-slate-700
        "
      >
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div
      className="
        
        w-[220px]
        h-[230px]
        p-4

        
        sm:w-[250px]
        sm:h-[260px]
        sm:p-4.5

        
        md:w-[280px]
        md:h-[280px]
        md:p-5

        flex-shrink-0

        bg-white
        border
        border-emerald-100
        rounded-2xl

        shadow-sm
        hover:shadow-md
        hover:-translate-y-1

        transition-all
        duration-300

        flex
        flex-col
        gap-2.5
        sm:gap-3
      "
    >
      <div
        className="
          font-semibold
          text-xs
          sm:text-sm
          text-slate-900
          truncate
          text-center
          w-full
        "
      >
        {t.name}
      </div>

      <StarRating rating={t.rating || 5} />

      <p
        className="
          text-[10px]
          sm:text-[11px]
          md:text-xs

          text-slate-600
          leading-relaxed

          overflow-hidden
          flex-grow

          line-clamp-6

          mt-1
        "
      >
        {t.text}
      </p>
    </div>
  );
}

export default function Testimonials() {
  const middle = Math.ceil(TESTIMONIALS.length / 2);

  const set1 = TESTIMONIALS.slice(0, middle);
  const set2 = TESTIMONIALS.slice(middle);

  const row1 = [...set1, ...set1, ...set1, ...set1];
  const row2 = [...set2, ...set2, ...set2, ...set2];

  return (
    <section
      className="
        py-10
        sm:py-12
        md:py-16
        lg:py-20

        bg-[#eef5f2]

        overflow-hidden
      "
    >
      <div className="container-x px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="
            text-center
            max-w-2xl
            mx-auto

            mb-8
            sm:mb-10
            md:mb-12
          "
        >
          <SectionPill>Testimonials</SectionPill>

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
            "
          >
            <AnimatedText text="What Our Clients Say" />
          </h2>

          <p
            className="
              mt-3
              sm:mt-4

              text-sm
              sm:text-base

              text-slate-600

              px-2
            "
          >
            Real feedback from businesses we've helped transform digitally.
          </p>
        </motion.div>
      </div>

      {}
      <div
        className="
          relative
          w-full

          flex
          flex-col

          gap-4
          sm:gap-5
          md:gap-6

          overflow-hidden
          pause-on-hover

          py-3
          sm:py-4
        "
      >
        {}
        <div
          className="
            absolute
            left-0
            top-0
            bottom-0

            w-6
            sm:w-16
            md:w-32

            bg-gradient-to-r
            from-[#eef5f2]
            to-transparent

            z-10
            pointer-events-none
          "
        />

        {}
        <div
          className="
            absolute
            right-0
            top-0
            bottom-0

            w-6
            sm:w-16
            md:w-32

            bg-gradient-to-l
            from-[#eef5f2]
            to-transparent

            z-10
            pointer-events-none
          "
        />

        {}
        <div className="w-full overflow-hidden">
          <div
            className="
              flex

              gap-3
              sm:gap-4
              md:gap-6

              w-max

              animate-marquee-slow
            "
          >
            {row1.map((t, i) => (
              <TestimonialCard
                key={`row1-${i}`}
                t={t}
              />
            ))}
          </div>
        </div>

        {}
        <div className="w-full overflow-hidden">
          <div
            className="
              flex

              gap-3
              sm:gap-4
              md:gap-6

              w-max

              animate-marquee-reverse-slow
            "
          >
            {row2.map((t, i) => (
              <TestimonialCard
                key={`row2-${i}`}
                t={t}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}