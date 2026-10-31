"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  LayoutTemplate,
  MonitorPlay,
  Presentation,
  Sparkles,
} from "lucide-react";

const slides = [
  {
    number: "01",
    title: "Research Problem",
    text: "Define the problem and establish the motivation behind the research.",
  },
  {
    number: "02",
    title: "Literature Review",
    text: "Present existing research, identify gaps and establish the research direction.",
  },
  {
    number: "03",
    title: "Methodology",
    text: "Explain the proposed research approach using a clear visual structure.",
  },
  {
    number: "04",
    title: "Implementation",
    text: "Present the technical architecture, system and experimental setup.",
  },
  {
    number: "05",
    title: "Results",
    text: "Show important findings using meaningful charts and comparisons.",
  },
  {
    number: "06",
    title: "Conclusion",
    text: "Summarize the research contribution and future direction.",
  },
];

const support = [
  "Research presentation design",
  "PPT structure",
  "Technical diagrams",
  "Architecture diagrams",
  "Charts & visualizations",
  "Viva / defense preparation",
];

export default function PresentationSupportPage() {
  const [currentSlide, setCurrentSlide] = useState(2);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);

    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setDirection(-1);

    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const slide = slides[currentSlide];

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative px-6 py-24">

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[500px]
            w-[500px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/10
            blur-[150px]
          "
        />

        <div className="relative mx-auto max-w-6xl">

          {/* TITLE */}

          <div className="text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-violet-500/20
                bg-violet-500/5
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-violet-400
              "
            >
              <Sparkles size={14} />
              Research Presentation Support
            </div>

            <h1
              className="
                mx-auto
                mt-7
                max-w-5xl
                text-5xl
                font-bold
                leading-tight
                sm:text-6xl
                lg:text-7xl
              "
            >
              Present Your Research

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-violet-400
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                With Clarity.
              </span>
            </h1>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-neutral-400
              "
            >
              Transform complex research into a clear visual story
              for presentations, conferences, viva and research defense.
            </p>

          </div>


          {/* =================================================
              MOVING PPT
          ================================================= */}

          <div className="relative mx-auto mt-16 max-w-5xl">

            {/* BACK SLIDES */}

            <div
              className="
                absolute
                left-5
                right-5
                top-5
                h-full
                rounded-2xl
                border
                border-white/5
                bg-neutral-900
              "
            />

            <div
              className="
                absolute
                left-10
                right-10
                top-10
                h-full
                rounded-2xl
                border
                border-white/5
                bg-neutral-900
              "
            />


            {/* MAIN SLIDE */}

            <div
              className="
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-neutral-950
                shadow-2xl
              "
            >

              {/* TOP BAR */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  px-5
                  py-4
                "
              >

                <div className="flex items-center gap-2">

                  <Presentation
                    size={18}
                    className="text-violet-400"
                  />

                  <span className="text-sm font-medium">
                    Research Defense
                  </span>

                </div>

                <span className="text-xs text-neutral-600">
                  SLIDE{" "}
                  {String(currentSlide + 1).padStart(2, "0")}
                  {" / "}
                  {String(slides.length).padStart(2, "0")}
                </span>

              </div>


              {/* SLIDE CONTENT */}

              <div className="relative min-h-[360px] overflow-hidden">

                <AnimatePresence
                  mode="wait"
                  initial={false}
                  custom={direction}
                >

                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    initial={{
                      opacity: 0,
                      x: direction > 0 ? 80 : -80,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      x: direction > 0 ? -80 : 80,
                    }}
                    transition={{
                      duration: 0.35,
                      ease: "easeOut",
                    }}
                    className="
                      grid
                      min-h-[360px]
                      items-center
                      gap-10
                      p-8
                      md:grid-cols-[1fr_0.8fr]
                      md:p-12
                    "
                  >

                    {/* TEXT */}

                    <div>

                      <span
                        className="
                          text-xs
                          font-semibold
                          uppercase
                          tracking-widest
                          text-violet-400
                        "
                      >
                        {slide.number} — {slide.title}
                      </span>

                      <h2
                        className="
                          mt-5
                          text-3xl
                          font-bold
                          sm:text-4xl
                        "
                      >
                        {slide.title}

                        <span className="block text-violet-400">
                          Research Presentation
                        </span>
                      </h2>

                      <p
                        className="
                          mt-5
                          max-w-md
                          text-sm
                          leading-7
                          text-neutral-500
                        "
                      >
                        {slide.text}
                      </p>

                    </div>


                    {/* VISUAL */}

                    <div
                      className="
                        relative
                        flex
                        h-60
                        items-center
                        justify-center
                      "
                    >

                      <div
                        className="
                          absolute
                          h-40
                          w-40
                          rounded-full
                          border
                          border-violet-500/20
                        "
                      />

                      <div
                        className="
                          absolute
                          h-28
                          w-28
                          rounded-full
                          border
                          border-blue-500/30
                        "
                      />

                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 15,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="
                          absolute
                          h-48
                          w-48
                          rounded-full
                          border
                          border-dashed
                          border-violet-500/20
                        "
                      />

                      <div
                        className="
                          relative
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-xl
                          bg-gradient-to-br
                          from-violet-600
                          to-blue-600
                          shadow-xl
                          shadow-violet-950/50
                        "
                      >
                        <LayoutTemplate size={25} />
                      </div>

                    </div>

                  </motion.div>

                </AnimatePresence>

              </div>


              {/* CONTROLS */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  px-5
                  py-4
                "
              >

                {/* PREVIOUS */}

                <button
                  type="button"
                  onClick={previousSlide}
                  aria-label="Previous slide"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-neutral-500
                    transition-all
                    duration-200
                    hover:border-violet-500/40
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <ChevronLeft size={19} />
                </button>


                {/* INDICATORS */}

                <div className="flex items-center gap-2">

                  {slides.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => {
                        setDirection(
                          index > currentSlide ? 1 : -1
                        );

                        setCurrentSlide(index);
                      }}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`
                        h-1.5
                        rounded-full
                        transition-all
                        duration-300
                        ${
                          index === currentSlide
                            ? "w-6 bg-violet-500"
                            : "w-1.5 bg-neutral-700 hover:bg-neutral-500"
                        }
                      `}
                    />
                  ))}

                </div>


                {/* NEXT */}

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-neutral-500
                    transition-all
                    duration-200
                    hover:border-violet-500/40
                    hover:bg-violet-500/10
                    hover:text-white
                  "
                >
                  <ChevronRight size={19} />
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PRESENTATION STORY
      ===================================================== */}

      <section className="border-t border-white/5 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-violet-400
              "
            >
              Presentation Structure
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Tell the research story.
            </h2>

          </div>


          <div
            className="
              scrollbar-hide
              mt-14
              flex
              gap-4
              overflow-x-auto
              pb-5
            "
          >

            {slides.map((item, index) => (
              <button
                key={item.number}
                type="button"
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className={`
                  min-w-[280px]
                  rounded-2xl
                  border
                  p-6
                  text-left
                  transition-all
                  duration-300
                  sm:min-w-[320px]
                  ${
                    index === currentSlide
                      ? "border-violet-500/40 bg-violet-500/[0.06]"
                      : "border-white/10 bg-neutral-950 hover:border-white/20"
                  }
                `}
              >

                <div className="flex justify-between">

                  <span className="text-xs text-violet-400">
                    {item.number}
                  </span>

                  <MonitorPlay
                    size={18}
                    className="text-neutral-700"
                  />

                </div>

                <h3 className="mt-10 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-500">
                  {item.text}
                </p>

              </button>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          SUPPORT
      ===================================================== */}

      <section className="bg-neutral-950/50 px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 md:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                What We Support
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                More than making slides.
              </h2>

              <p className="mt-5 leading-7 text-neutral-500">
                A strong research presentation should make technical
                information easier to understand and communicate.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              {support.map((item) => (
                <div
                  key={item}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-black
                    p-4
                    text-sm
                    text-neutral-300
                  "
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-28 text-center">

        <Presentation
          size={30}
          className="mx-auto text-violet-400"
        />

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Your research deserves a clear presentation.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-neutral-400">
          Let&apos;s turn your research into a presentation that is
          structured, visual and easy to communicate.
        </p>

        <Link
          href="/contact"
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-violet-600
            px-7
            py-3.5
            text-sm
            font-semibold
            transition
            hover:bg-violet-500
          "
        >
          Build Your Presentation
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}