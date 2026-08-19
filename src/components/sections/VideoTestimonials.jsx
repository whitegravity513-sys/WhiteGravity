import React, { useRef, useState } from "react";
import { Play, Pause, Star, Volume2, VolumeX, Quote, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import SectionPill from "../SectionPill";

// ============================================================
// VIDEO TESTIMONIAL DATA
// ============================================================

const TESTIMONIAL = {
  id: 1,
  name: "Verified Client",
  role: "Founder",
  company: "Raff Beauty",
  rating: 5.0,
  src: "/videos/testimonial-1.mp4",
  poster: "",
  quote:
    "An amazing experience working with the team. They delivered outstanding results for Raff Beauty, transforming our digital presence completely.",
};

// ============================================================
// STAR RATING
// ============================================================

function StarRating({ rating = 5 }) {
  const fullStars = Math.floor(rating);

  return (
    <div className="flex flex-wrap items-center gap-1.5 mb-5">
      {[...Array(fullStars)].map((_, i) => (
        <Star
          key={`full-${i}`}
          className="
            w-4 h-4
            sm:w-5 sm:h-5
            fill-amber-400
            text-amber-400
          "
        />
      ))}

      <span
        className="
          ml-1 sm:ml-2
          text-xs sm:text-sm
          font-bold
          text-slate-600
        "
      >
        {rating.toFixed(1)} / 5.0
      </span>
    </div>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function VideoTestimonials() {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hasVideo, setHasVideo] = useState(true);

  // ==========================================================
  // PLAY / PAUSE
  // ==========================================================

  const togglePlay = async () => {
    if (!videoRef.current || !hasVideo) return;

    try {
      if (playing) {
        videoRef.current.pause();
        setPlaying(false);
      } else {
        await videoRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error("Video play error:", error);
      setHasVideo(false);
    }
  };

  // ==========================================================
  // MUTE / UNMUTE
  // ==========================================================

  const toggleMute = (e) => {
    e.stopPropagation();

    if (!videoRef.current) return;

    const newMutedState = !muted;

    videoRef.current.muted = newMutedState;

    setMuted(newMutedState);
  };

  return (
    <section
      className="
        relative
        overflow-hidden

        py-10
        sm:py-12
        md:py-16
        lg:py-20

        bg-[#eef5f2]
      "
    >
      {/* =====================================================
          BACKGROUND BLOBS
      ====================================================== */}

      <div
        className="
          absolute

          -top-20
          sm:-top-10

          left-1/4

          w-56
          sm:w-72
          md:w-96

          h-56
          sm:h-72
          md:h-96

          bg-emerald-200/40

          rounded-full

          blur-3xl

          pointer-events-none
        "
      />

      <div
        className="
          absolute

          -bottom-20

          right-1/4

          w-52
          sm:w-64
          md:w-80

          h-52
          sm:h-64
          md:h-80

          bg-teal-200/30

          rounded-full

          blur-3xl

          pointer-events-none
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

          max-w-6xl

          mx-auto
        "
      >
        {/* ===================================================
            HEADING
        ==================================================== */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            text-center

            w-full

            max-w-2xl

            mx-auto

            mb-8
            sm:mb-10
            md:mb-14
          "
        >
          <SectionPill>Client Success</SectionPill>

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
            Hear It From <span className="text-emerald-600">Our Clients</span>
          </h2>

          <p
            className="
              mt-3
              sm:mt-4

              text-sm
              sm:text-base

              text-slate-500

              leading-relaxed

              px-2
            "
          >
            Real experiences from businesses we've helped grow digitally.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN GRID
        ==================================================== */}

        <div
          className="
            grid

            grid-cols-1

            lg:grid-cols-2

            gap-8
            sm:gap-10
            md:gap-12
            lg:gap-16

            items-center
          "
        >
          {/* =================================================
              LEFT - VIDEO
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.6,
            }}
            className="
              relative

              w-full

              max-w-xl

              mx-auto

              group

              rounded-2xl
              sm:rounded-3xl

              overflow-hidden

              shadow-xl
              sm:shadow-2xl

              border-2
              sm:border-4

              border-white

              bg-black
            "
          >
            {/* =================================================
                VIDEO CONTAINER
            ================================================== */}

            <div
              className="
                relative

                w-full

                /*
                  Mobile:
                  Portrait video ke liye 9/16

                  Tablet:
                  Thoda balanced 4/5

                  Desktop:
                  Tall premium layout
                */

                aspect-square

                sm:aspect-square

                md:aspect-square

                lg:aspect-square

                max-h-[50vh]
                sm:max-h-[400px]
                lg:max-h-[450px]

                bg-black

                cursor-pointer

                overflow-hidden

                flex
                items-center
                justify-center
              "
              onClick={togglePlay}
            >
              {/* =============================================
                  VIDEO
              ============================================== */}

              <video
                ref={videoRef}
                src={TESTIMONIAL.src}
                poster={TESTIMONIAL.poster || undefined}
                className={`
                  absolute
                  inset-0

                  w-full
                  h-full

                  object-cover
                  object-[50%_15%]

                  bg-black

                  transition-opacity
                  duration-300

                  ${hasVideo ? "opacity-100" : "opacity-0"}
                `}
                playsInline
                muted={muted}
                loop
                preload="metadata"
                onError={() => setHasVideo(false)}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />

              {/* =============================================
                  PLAY OVERLAY
              ============================================== */}

              {!playing && hasVideo && (
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-slate-900/20
                    to-slate-900/60

                    flex
                    items-center
                    justify-center

                    z-10
                  "
                >
                  <div
                    className="
                      w-14
                      h-14

                      sm:w-16
                      sm:h-16

                      md:w-20
                      md:h-20

                      rounded-full

                      bg-white/20

                      backdrop-blur-md

                      flex
                      items-center
                      justify-center

                      border
                      border-white/30

                      group-hover:scale-110

                      transition-transform
                      duration-300
                    "
                  >
                    <Play
                      className="
                        w-6
                        h-6

                        sm:w-7
                        sm:h-7

                        md:w-8
                        md:h-8

                        text-white

                        ml-1
                      "
                    />
                  </div>
                </div>
              )}

              {/* =============================================
                  PAUSE OVERLAY
              ============================================== */}

              {playing && (
                <div
                  className="
                    absolute
                    inset-0

                    flex
                    items-center
                    justify-center

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity

                    z-10

                    bg-black/10
                  "
                >
                  <div
                    className="
                      w-12
                      h-12

                      sm:w-14
                      sm:h-14

                      md:w-16
                      md:h-16

                      rounded-full

                      bg-black/40

                      backdrop-blur-md

                      flex
                      items-center
                      justify-center

                      border
                      border-white/20
                    "
                  >
                    <Pause
                      className="
                        w-5
                        h-5

                        sm:w-6
                        sm:h-6

                        text-white
                      "
                    />
                  </div>
                </div>
              )}

              {/* =============================================
                  MUTE BUTTON
              ============================================== */}

              {playing && (
                <div
                  className="
                    absolute

                    top-3
                    right-3

                    sm:top-4
                    sm:right-4

                    z-30
                  "
                >
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute video" : "Mute video"}
                    className="
                      w-9
                      h-9

                      sm:w-10
                      sm:h-10

                      rounded-full

                      bg-black/50

                      backdrop-blur-md

                      flex
                      items-center
                      justify-center

                      border
                      border-white/20

                      hover:bg-black/70

                      transition-colors
                    "
                  >
                    {muted ? (
                      <VolumeX
                        className="
                          w-4
                          h-4

                          sm:w-5
                          sm:h-5

                          text-white
                        "
                      />
                    ) : (
                      <Volume2
                        className="
                          w-4
                          h-4

                          sm:w-5
                          sm:h-5

                          text-white
                        "
                      />
                    )}
                  </button>
                </div>
              )}

              {/* =============================================
                  VIDEO ERROR
              ============================================== */}

              {!hasVideo && (
                <div
                  className="
                    absolute
                    inset-0

                    bg-slate-800

                    flex
                    items-center
                    justify-center

                    text-center

                    p-5

                    z-20
                  "
                >
                  <div>
                    <p
                      className="
                        text-white

                        font-semibold

                        text-sm
                        sm:text-base
                      "
                    >
                      Video unavailable
                    </p>

                    <p
                      className="
                        text-white/60

                        text-xs

                        mt-1
                      "
                    >
                      Please try again later.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT - TESTIMONIAL CONTENT
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              flex
              flex-col

              w-full

              text-center

              lg:text-left

              items-center

              lg:items-start
            "
          >
            {/* Quote */}

            <Quote
              className="
                w-9
                h-9

                sm:w-10
                sm:h-10

                md:w-12
                md:h-12

                text-emerald-200

                mb-4
                sm:mb-5
                md:mb-6
              "
            />

            {/* Rating */}

            <StarRating rating={TESTIMONIAL.rating} />

            {/* Testimonial Text */}

            <h3
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl

                font-bold

                text-slate-800

                leading-[1.35]

                mb-6
                sm:mb-8

                max-w-xl
              "
            >
              "{TESTIMONIAL.quote}"
            </h3>

            {/* =================================================
                CLIENT INFO
            ================================================== */}

            <div
              className="
                flex

                items-center

                justify-center
                lg:justify-start

                gap-3
                sm:gap-4
              "
            >
              {/* Verified Tick Icon */}
              <BadgeCheck
                className="
                  w-8
                  h-8

                  sm:w-10
                  sm:h-10

                  text-[#009B6C]
                  flex-shrink-0
                "
                fill="currentColor"
                stroke="white"
              />

              {/* Client Details */}

              <div className="text-left">
                <div
                  className="
                    font-bold

                    text-slate-900

                    text-sm
                    sm:text-base
                  "
                >
                  {TESTIMONIAL.name}
                </div>

                <div
                  className="
                    text-xs
                    sm:text-sm

                    text-slate-500
                  "
                ></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
