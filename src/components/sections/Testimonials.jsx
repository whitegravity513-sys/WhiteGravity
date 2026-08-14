import React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import SectionPill from "../SectionPill";
import { TESTIMONIALS } from "../../data/mock";
import AnimatedText from "../AnimatedText";

// Quote Icon
const QuoteIcon = ({ className }) => (
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
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 1-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 1-2 2s-1 .008-1 1.031V21z" />
  </svg>
);

// Star Rating
function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center justify-center gap-1">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
        />
      ))}

      {/* Half Star */}
      {hasHalf && (
        <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4">
          <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-200 text-slate-300 absolute inset-0" />

          <div className="overflow-hidden w-[50%] absolute inset-0">
            <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
          </div>
        </div>
      )}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <Star
          key={`empty-${i}`}
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-slate-200 text-slate-300"
        />
      ))}

      {/* Rating Number */}
      <span className="ml-1 text-[11px] sm:text-xs font-extrabold text-slate-700">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

// Testimonial Card
function TestimonialCard({ t }) {
  return (
    <div
      className="
        w-[calc(100vw-32px)]
        sm:w-[320px]
        md:w-[380px]
        lg:w-[400px]
        max-w-[400px]
        min-w-0
        flex-shrink-0

        bg-gradient-to-br
        from-emerald-50/80
        to-white

        border
        border-emerald-100

        rounded-2xl

        p-4
        sm:p-5
        md:p-6

        shadow-sm
        hover:shadow-xl

        transition-all
        duration-300
      "
    >
      {/* Quote + User Info */}
      <div className="flex flex-col items-center justify-center">
        <QuoteIcon
          className="
            w-7 h-7
            sm:w-8 sm:h-8
            text-emerald-300
            opacity-60
            mb-2
            sm:mb-3
          "
        />

        <div className="text-center min-w-0 w-full">
          <div
            className="
              font-bold
              text-sm
              sm:text-base
              text-slate-900
              truncate
              px-2
            "
          >
            {t.name}
          </div>

          <div
            className="
              text-[11px]
              sm:text-xs
              text-slate-500
              font-medium
              break-words
              px-2
            "
          >
            {t.role} of {t.company}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-2 sm:mt-3 flex items-center justify-center">
        <StarRating rating={t.rating || 5} />
      </div>

      {/* Testimonial Text */}
      <p
        className="
          mt-3
          sm:mt-4
          text-xs
          sm:text-sm
          text-slate-700
          leading-relaxed
          italic
          text-center
          break-words
        "
      >
        "{t.text}"
      </p>
    </div>
  );
}

export default function Testimonials() {
  // Split testimonials into two rows
  const middle = Math.ceil(TESTIMONIALS.length / 2);

  const set1 = TESTIMONIALS.slice(0, middle);
  const set2 = TESTIMONIALS.slice(middle);

  // Duplicate testimonials for seamless marquee
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
      {/* Section Heading */}
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

      {/* Marquee Area */}
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
        {/* Left Fade */}
        <div
          className="
            absolute
            left-0
            top-0
            bottom-0

            w-8
            sm:w-16
            md:w-32

            bg-gradient-to-r
            from-[#eef5f2]
            to-transparent

            z-10
            pointer-events-none
          "
        />

        {/* Right Fade */}
        <div
          className="
            absolute
            right-0
            top-0
            bottom-0

            w-8
            sm:w-16
            md:w-32

            bg-gradient-to-l
            from-[#eef5f2]
            to-transparent

            z-10
            pointer-events-none
          "
        />

        {/* ================= ROW 1 ================= */}
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

        {/* ================= ROW 2 ================= */}
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