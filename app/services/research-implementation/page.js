
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GitBranch,
  LineChart,
  Rocket,
  Settings2,
  Sparkles,
} from "lucide-react";

const implementationAreas = [
  {
    title: "Research Prototypes",
    description:
      "Convert research concepts and proposed methodologies into functional technical prototypes.",
    icon: FlaskConical,
  },
  {
    title: "Software Development",
    description:
      "Develop research-oriented applications, algorithms and software components.",
    icon: Code2,
  },
  {
    title: "AI & Machine Learning",
    description:
      "Implement machine learning models and AI techniques required for research experimentation.",
    icon: Cpu,
  },
  {
    title: "Data Processing",
    description:
      "Build data preparation, processing and analysis workflows for research datasets.",
    icon: Database,
  },
  {
    title: "Experimentation",
    description:
      "Create controlled experiments to evaluate proposed approaches and technical methods.",
    icon: GitBranch,
  },
  {
    title: "Results & Visualization",
    description:
      "Generate meaningful results, metrics and visualizations for research evaluation.",
    icon: LineChart,
  },
];

const workflow = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the research problem and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Convert the methodology into a practical implementation plan.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build the required software, model or research prototype.",
  },
  {
    number: "04",
    title: "Test",
    description: "Run experiments and evaluate the implementation.",
  },
  {
    number: "05",
    title: "Analyze",
    description: "Interpret results and prepare research-ready outputs.",
  },
];

const technologies = [
  "Python",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Analysis",
  "Computer Vision",
  "Deep Learning",
  "Web Applications",
  "Research Prototypes",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
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

export default function ResearchImplementationPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[82vh] items-center px-6 py-24">

        {/* Glow */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/3
            h-[480px]
            w-[480px]
            -translate-x-1/2
            rounded-full
            bg-blue-600/10
            blur-[140px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[-120px]
            top-1/2
            h-[300px]
            w-[300px]
            rounded-full
            bg-violet-600/10
            blur-[120px]
          "
        />

        {/* Animated ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[520px]
            w-[520px]
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
                border-blue-500/20
                bg-blue-500/5
                px-4
                py-2
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              <Sparkles size={14} />
              Research Implementation
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              className="
                text-4xl
                font-bold
                leading-tight
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Turn Research Ideas
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
                Into Working Solutions
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
              Technical implementation support for research projects —
              from prototypes and algorithms to experiments, testing and
              research-ready results.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-9"
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
                Discuss Your Project

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

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          IMPLEMENTATION AREAS
      ===================================================== */}
      <section className="border-t border-white/5 px-6 py-24 sm:py-32">

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
                text-blue-400
              "
            >
              What We Implement
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
              From methodology
              <span className="text-blue-400">
                {" "}to implementation.
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
              We focus on the technical side of research — building,
              experimenting and evaluating the solution described by
              your research methodology.
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

            {implementationAreas.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -7 }}
                  className="
                    group
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.025]
                    p-6
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:bg-blue-500/[0.04]
                    hover:shadow-xl
                    hover:shadow-blue-950/20
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
                      border-blue-500/20
                      bg-blue-500/10
                      text-blue-400
                      transition-all
                      duration-300
                      group-hover:scale-110
                      group-hover:border-blue-400/40
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
          IMPLEMENTATION WORKFLOW
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
              Implementation Workflow
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
              From concept
              <span className="text-violet-400">
                {" "}to results.
              </span>
            </motion.h2>

          </motion.div>


          <div className="relative mt-16">

            {/* Desktop connecting line */}
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
                via-blue-500/40
                to-violet-500/10
                lg:block
              "
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="
                grid
                gap-10
                lg:grid-cols-5
              "
            >

              {workflow.map((item) => (
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
                      border-blue-500/20
                      bg-black
                      text-sm
                      font-bold
                      text-blue-400
                      shadow-lg
                      shadow-blue-950/20
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
          TECHNOLOGIES
      ===================================================== */}
      <section className="border-t border-white/5 px-6 py-20 sm:py-28">

        <div className="mx-auto max-w-5xl text-center">

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-400
            "
          >
            Technical Focus
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies for
            <span className="text-blue-400">
              {" "}research implementation.
            </span>
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            {technologies.map((technology) => (
              <motion.div
                key={technology}
                variants={fadeUp}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-5
                  py-2.5
                  text-sm
                  text-neutral-400
                  transition-all
                  duration-300
                  hover:border-blue-500/30
                  hover:bg-blue-500/5
                  hover:text-blue-400
                "
              >
                {technology}
              </motion.div>
            ))}

          </motion.div>

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
            h-[330px]
            w-[330px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-blue-600/10
            blur-[120px]
          "
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
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
            border-blue-500/20
            bg-gradient-to-br
            from-blue-500/[0.08]
            via-white/[0.02]
            to-violet-500/[0.08]
            px-6
            py-16
            text-center
            shadow-2xl
            shadow-blue-950/20
            sm:px-12
          "
        >

          <div className="relative z-10">

            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-400
              "
            >
              Have a Research Project?
            </p>

            <h2
              className="
                mt-4
                text-3xl
                font-bold
                sm:text-5xl
              "
            >
              Let's build it.
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
              Share your research methodology, technical requirements or
              implementation challenge and let's discuss the next step.
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

          </div>

        </motion.div>

      </section>

    </main>
  );
}

