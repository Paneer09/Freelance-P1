
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  FileText,
  Languages,
  ListChecks,
  PenLine,
  Search,
  Sparkles,
} from "lucide-react";

const writingSupport = [
  {
    title: "Thesis Structure",
    description:
      "Organize chapters, sections and research content into a clear academic structure.",
    icon: ListChecks,
  },
  {
    title: "Academic Writing",
    description:
      "Improve clarity, flow and academic presentation while preserving your research meaning.",
    icon: PenLine,
  },
  {
    title: "Literature Review",
    description:
      "Structure literature, connect previous studies and present research gaps clearly.",
    icon: BookOpen,
  },
  {
    title: "Technical Content",
    description:
      "Present methodologies, systems, algorithms and technical concepts in a structured way.",
    icon: FileText,
  },
  {
    title: "Editing & Proofreading",
    description:
      "Refine grammar, sentence structure, consistency and overall readability.",
    icon: FileCheck2,
  },
  {
    title: "Language Refinement",
    description:
      "Improve academic language and make technical explanations easier to follow.",
    icon: Languages,
  },
];

const thesisSections = [
  "Abstract & Keywords",
  "Introduction",
  "Literature Review",
  "Research Methodology",
  "System / Model Design",
  "Implementation",
  "Results & Analysis",
  "Conclusion & Future Work",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "Understand your research topic, existing content, university requirements and objectives.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Organize the thesis chapters and establish a logical flow between sections.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Develop and refine research content while maintaining consistency with your methodology.",
  },
  {
    number: "04",
    title: "Edit",
    description:
      "Review grammar, technical clarity, formatting and academic presentation.",
  },
  {
    number: "05",
    title: "Review",
    description:
      "Perform a final consistency and quality review across the document.",
  },
];

const benefits = [
  "Clear academic structure",
  "Improved readability",
  "Consistent terminology",
  "Technical content refinement",
  "Grammar and language review",
  "Chapter-level organization",
  "Formatting consistency",
  "Final document review",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ThesisWritingEditingPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[88vh] items-center px-6 py-24">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-1/3
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-violet-600/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-[-120px]
              h-[350px]
              w-[350px]
              rounded-full
              bg-blue-600/10
              blur-[120px]
            "
          />

        </div>

        {/* Rotating rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[570px]
            w-[570px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-violet-500/10
          "
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[410px]
            w-[410px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/10
          "
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl text-center">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="mx-auto max-w-4xl"
          >

            {/* Label */}
            <motion.div
              variants={fadeUp}
              className="
                mb-6
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
              Thesis Writing & Editing
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
                text-4xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Turn Research
              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-violet-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                Into a Clear Thesis
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-7
                text-neutral-400
                sm:text-lg
              "
            >
              Structured thesis writing and editing support to help transform
              research work into clear, organized and professionally presented
              academic documentation.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeUp}
              className="
                mt-9
                flex
                flex-col
                items-center
                justify-center
                gap-4
                sm:flex-row
              "
            >

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-blue-600
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-lg
                  hover:shadow-blue-600/25
                "
              >
                Discuss Your Thesis

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <a
                href="#support"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-neutral-300
                  transition-all
                  duration-300
                  hover:border-violet-400/30
                  hover:bg-violet-500/5
                  hover:text-white
                "
              >
                Explore Our Support
              </a>

            </motion.div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE SUPPORT
      ===================================================== */}
      <section
        id="support"
        className="
          border-t
          border-white/5
          px-6
          py-24
          sm:py-32
        "
      >

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="max-w-2xl"
          >

            <motion.p
              variants={fadeUp}
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-violet-400
              "
            >
              What We Support
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-3
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              Build a thesis that is
              <span className="text-violet-400">
                {" "}clear and structured.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                leading-7
                text-neutral-400
              "
            >
              From individual chapters to complete document refinement,
              our support focuses on structure, clarity, consistency and
              academic presentation.
            </motion.p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="
              mt-14
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {writingSupport.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-violet-500/[0.04]
                    hover:shadow-xl
                    hover:shadow-violet-950/20
                  "
                >

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-violet-500/20
                      bg-violet-500/10
                      text-violet-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-violet-400/40
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-neutral-400">
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          THESIS STRUCTURE
      ===================================================== */}
      <section
        className="
          border-t
          border-white/5
          bg-neutral-950/50
          px-6
          py-24
          sm:py-32
        "
      >

        <div className="mx-auto max-w-6xl">

          <div
            className="
              grid
              gap-14
              lg:grid-cols-2
              lg:items-center
            "
          >

            {/* Left */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >

              <motion.p
                variants={fadeUp}
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                "
              >
                Thesis Structure
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  mt-3
                  text-3xl
                  font-bold
                  sm:text-4xl
                "
              >
                Every chapter has
                <span className="text-blue-400">
                  {" "}a purpose.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  leading-7
                  text-neutral-400
                "
              >
                A well-structured thesis creates a logical connection
                between the research problem, methodology, implementation,
                results and conclusions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="
                  mt-8
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-5
                "
              >
                <div className="flex items-start gap-3">

                  <Search
                    size={20}
                    className="mt-1 shrink-0 text-blue-400"
                  />

                  <div>
                    <p className="font-medium text-white">
                      Focus on clarity
                    </p>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      Each section should connect naturally with the
                      research objectives and overall contribution.
                    </p>
                  </div>

                </div>
              </motion.div>

            </motion.div>


            {/* Right */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid gap-3 sm:grid-cols-2"
            >

              {thesisSections.map((section, index) => (
                <motion.div
                  key={section}
                  variants={fadeUp}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-black/40
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.04]
                  "
                >

                  <div
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      bg-blue-500/10
                      text-xs
                      font-semibold
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="text-sm text-neutral-300">
                    {section}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section
        className="
          border-t
          border-white/5
          px-6
          py-24
          sm:py-32
        "
      >

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center"
          >

            <motion.p
              variants={fadeUp}
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-violet-400
              "
            >
              Our Process
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="
                mt-3
                text-3xl
                font-bold
                sm:text-4xl
              "
            >
              From rough content
              <br />
              <span className="text-violet-400">
                to refined documentation.
              </span>
            </motion.h2>

          </motion.div>


          <div className="relative mt-16">

            {/* Desktop line */}
            <div
              className="
                absolute
                left-[10%]
                right-[10%]
                top-8
                hidden
                h-px
                bg-gradient-to-r
                from-blue-500/10
                via-violet-500/40
                to-blue-500/10
                lg:block
              "
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="
                grid
                gap-10
                lg:grid-cols-5
              "
            >

              {process.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="relative text-center"
                >

                  <div
                    className="
                      relative
                      z-10
                      mx-auto
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-violet-500/20
                      bg-black
                      text-sm
                      font-bold
                      text-violet-400
                      shadow-lg
                      shadow-violet-950/20
                    "
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-neutral-500
                    "
                  >
                    {item.description}
                  </p>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT YOU GET
      ===================================================== */}
      <section
        className="
          border-t
          border-white/5
          bg-neutral-950/50
          px-6
          py-24
          sm:py-32
        "
      >

        <div className="mx-auto max-w-6xl">

          <div
            className="
              grid
              gap-14
              lg:grid-cols-2
              lg:items-center
            "
          >

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >

              <motion.p
                variants={fadeUp}
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                "
              >
                What You Get
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="
                  mt-3
                  text-3xl
                  font-bold
                  sm:text-4xl
                "
              >
                A thesis that is
                <span className="text-blue-400">
                  {" "}ready to present.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="
                  mt-5
                  max-w-lg
                  leading-7
                  text-neutral-400
                "
              >
                We focus on making your research documentation structured,
                readable and consistent from beginning to end.
              </motion.p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid gap-3 sm:grid-cols-2"
            >

              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={fadeUp}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    px-4
                    py-4
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.04]
                  "
                >

                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="text-sm text-neutral-300">
                    {benefit}
                  </span>

                </motion.div>
              ))}

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative px-6 py-24 sm:py-32">

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-violet-600/10
            blur-[120px]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mx-auto
            max-w-4xl
            overflow-hidden
            rounded-3xl
            border
            border-violet-500/20
            bg-gradient-to-br
            from-violet-500/[0.08]
            via-white/[0.02]
            to-blue-500/[0.08]
            px-6
            py-16
            text-center
            shadow-2xl
            shadow-violet-950/20
            sm:px-12
          "
        >

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-violet-400
            "
          >
            Thesis Support
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              sm:text-5xl
            "
          >
            Ready to refine your thesis?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-xl
              leading-7
              text-neutral-400
            "
          >
            Share your current thesis stage, research topic or documentation
            requirements and let's discuss the right support for your work.
          </p>

          <Link
            href="/contact"
            className="
              group
              mt-8
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-blue-600
              px-7
              py-3.5
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-blue-500
              hover:shadow-xl
              hover:shadow-blue-600/25
            "
          >
            Start a Conversation

            <ArrowRight
              size={17}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </motion.div>

      </section>

    </main>
  );
}

