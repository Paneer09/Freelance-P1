"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  FileText,
  FlaskConical,
  Lightbulb,
  LineChart,
  Microscope,
  Presentation,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const supportItems = [
  {
    title: "Research Idea",
    description:
      "Shape your research direction and identify a clear, meaningful problem.",
    icon: Lightbulb,
  },
  {
    title: "Research Methodology",
    description:
      "Develop a structured methodology aligned with your research objectives.",
    icon: FlaskConical,
  },
  {
    title: "Literature Review",
    description:
      "Organize relevant research and identify meaningful gaps in the literature.",
    icon: Search,
  },
  {
    title: "Technical Implementation",
    description:
      "Turn your research methodology into practical technical implementations.",
    icon: Settings,
  },
  {
    title: "Data Analysis",
    description:
      "Analyze research data and communicate findings through meaningful visualizations.",
    icon: LineChart,
  },
  {
    title: "Research Documentation",
    description:
      "Create clear and structured technical and research documentation.",
    icon: FileText,
  },
];

const researchAreas = [
  {
    title: "Artificial Intelligence",
    icon: Brain,
  },
  {
    title: "Machine Learning",
    icon: Sparkles,
  },
  {
    title: "Data Science",
    icon: Database,
  },
  {
    title: "Computer Science",
    icon: Microscope,
  },
  {
    title: "IoT & Networking",
    icon: Settings,
  },
  {
    title: "Image Processing",
    icon: LineChart,
  },
  {
    title: "Engineering Research",
    icon: FlaskConical,
  },
  {
    title: "Technical Research",
    icon: ShieldCheck,
  },
];

const deliverables = [
  "Research proposal support",
  "Literature review support",
  "Research methodology",
  "Technical implementation",
  "Data analysis & visualization",
  "Thesis documentation",
  "Research manuscript preparation",
  "Research presentation support",
];

const journey = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your research idea, objectives and problem statement.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Structure the methodology, research framework and implementation plan.",
  },
  {
    number: "03",
    title: "Research",
    description:
      "Explore literature, identify gaps and establish the research direction.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Develop the technical implementation required for your research.",
  },
  {
    number: "05",
    title: "Analyze",
    description:
      "Evaluate results, analyze data and create meaningful visualizations.",
  },
  {
    number: "06",
    title: "Document",
    description:
      "Organize findings, methodology and technical work into clear documentation.",
  },
  {
    number: "07",
    title: "Publish",
    description:
      "Prepare research manuscripts, presentations and publication materials.",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function PhDResearchSupportPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[90vh] flex items-center">

        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">

          <div
            className="
              absolute
              left-1/2
              top-1/4
              h-[500px]
              w-[500px]
              -translate-x-1/2
              rounded-full
              bg-blue-600/10
              blur-[140px]
            "
          />

          <div
            className="
              absolute
              right-[-150px]
              top-[20%]
              h-[350px]
              w-[350px]
              rounded-full
              bg-violet-600/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_45%)]
            "
          />
        </div>

        {/* Decorative Lines */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
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
            h-[600px]
            w-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-blue-500/10
          "
        />

        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 55,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            h-[420px]
            w-[420px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-violet-500/10
          "
        />

        {/* Hero Content */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-6xl
            px-6
            py-24
            text-center
          "
        >

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
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
              PhD Research Support
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
              From Research Idea
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
                to Research Impact
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
              Comprehensive research support for PhD scholars — from
              research planning and methodology to technical implementation,
              analysis, documentation and publication.
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
                  text-white
                  transition-all
                  duration-300
                  hover:bg-blue-500
                  hover:shadow-lg
                  hover:shadow-blue-600/25
                "
              >
                Discuss Your Research

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
                  hover:border-blue-400/30
                  hover:bg-blue-500/5
                  hover:text-white
                "
              >
                Explore Our Support
              </a>
            </motion.div>

          </motion.div>

          {/* Floating Bottom Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.8,
            }}
            className="
              mx-auto
              mt-20
              flex
              max-w-2xl
              flex-wrap
              justify-center
              gap-3
            "
          >
            {[
              "Research",
              "Methodology",
              "Implementation",
              "Analysis",
              "Publication",
            ].map((item, index) => (
              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-4
                  py-2
                  text-xs
                  text-neutral-500
                "
              >
                {item}
              </span>
            ))}
          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHAT WE SUPPORT
      ===================================================== */}
      <section
        id="support"
        className="
          relative
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
            variants={staggerContainer}
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
              Support across your
              <span className="text-blue-400"> research journey.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mt-5
                leading-7
                text-neutral-400
              "
            >
              Research becomes easier when every stage is structured,
              connected and supported by the right technical approach.
            </motion.p>

          </motion.div>


          {/* Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="
              mt-14
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >

            {supportItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
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
                      group-hover:bg-blue-500/15
                    "
                  >
                    <Icon size={21} />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-lg
                      font-semibold
                      text-white
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-neutral-400
                    "
                  >
                    {item.description}
                  </p>

                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          RESEARCH JOURNEY
      ===================================================== */}
      <section
        className="
          relative
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
            variants={staggerContainer}
            className="text-center"
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
              Your Research Journey
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="
                mx-auto
                mt-5
                max-w-2xl
                leading-7
                text-neutral-400
              "
            >
              A structured journey that takes your research from the first
              idea toward meaningful results and publication.
            </motion.p>

          </motion.div>


          {/* Journey */}
          <div className="relative mt-16">

            {/* Desktop Line */}
            <div
              className="
                absolute
                left-[7%]
                right-[7%]
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
              viewport={{ once: true }}
              variants={staggerContainer}
              className="
                grid
                gap-10
                lg:grid-cols-7
              "
            >

              {journey.map((item) => (
                <motion.div
                  key={item.number}
                  variants={fadeUp}
                  className="
                    relative
                    text-center
                  "
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

                  <h3
                    className="
                      mt-5
                      font-semibold
                      text-white
                    "
                  >
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
          AREAS OF SUPPORT
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
            variants={staggerContainer}
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
              Areas of Support
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
              Technical research,
              <br />
              <span className="text-blue-400">
                across multiple domains.
              </span>
            </motion.h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="
              mt-14
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >

            {researchAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  variants={fadeUp}
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                    hover:bg-violet-500/[0.04]
                  "
                >

                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-blue-500/10
                      text-blue-400
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon size={19} />
                  </div>

                  <span
                    className="
                      text-sm
                      font-medium
                      text-neutral-200
                    "
                  >
                    {area.title}
                  </span>

                </motion.div>
              );
            })}

          </motion.div>

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

        <div
          className="
            mx-auto
            grid
            max-w-6xl
            gap-14
            lg:grid-cols-2
            lg:items-center
          "
        >

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
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
              Deliverables
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
              What you get
              <br />
              <span className="text-blue-400">
                from our support.
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
              Practical research support designed around your objectives,
              technical requirements and research direction.
            </motion.p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-3 sm:grid-cols-2"
          >

            {deliverables.map((item) => (
              <motion.div
                key={item}
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

                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-blue-500/10
                    text-blue-400
                  "
                >
                  ✓
                </div>

                <span
                  className="
                    text-sm
                    text-neutral-300
                  "
                >
                  {item}
                </span>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          WHY CHOOSE US
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
            variants={staggerContainer}
            className="text-center"
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
              Why Choose Us
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
              Research support with
              <span className="text-blue-400">
                {" "}purpose.
              </span>
            </motion.h2>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="
              mt-14
              grid
              gap-5
              md:grid-cols-3
            "
          >

            {[
              {
                title: "Research-Focused",
                text: "Support structured around your research objectives, questions and expected outcomes.",
              },
              {
                title: "Technical Expertise",
                text: "Technical implementation and analytical support for research-driven projects.",
              },
              {
                title: "End-to-End Support",
                text: "Connected support from research planning through documentation and publication preparation.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{
                  y: -8,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.025]
                  p-7
                  transition-all
                  duration-300
                  hover:border-blue-500/30
                  hover:shadow-xl
                  hover:shadow-blue-950/20
                "
              >

                <div
                  className="
                    mb-6
                    h-1
                    w-12
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500
                    to-violet-500
                  "
                />

                <h3
                  className="
                    text-xl
                    font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-neutral-400
                  "
                >
                  {item.text}
                </p>

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
            absolute
            left-1/2
            top-1/2
            h-[350px]
            w-[350px]
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

          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-blue-400
            "
          >
            Start Your Research Journey
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              sm:text-5xl
            "
          >
            Have a research idea?
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
            Let's turn your research direction into a structured,
            technically supported journey.
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
              text-white
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