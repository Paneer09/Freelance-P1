"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Database,
  LineChart,
  PieChart,
  TrendingUp,
  Table2,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const analysisStages = [
  {
    number: "01",
    title: "Data Collection",
    description:
      "Gather and organize the datasets required for the research problem.",
    icon: Database,
  },
  {
    number: "02",
    title: "Data Cleaning",
    description:
      "Handle missing values, duplicates, inconsistencies and unwanted data.",
    icon: Table2,
  },
  {
    number: "03",
    title: "Exploratory Analysis",
    description:
      "Explore patterns, distributions, relationships and important variables.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Statistical Analysis",
    description:
      "Apply suitable statistical techniques to support research findings.",
    icon: Brain,
  },
  {
    number: "05",
    title: "Visualization",
    description:
      "Convert analytical results into meaningful charts and visual insights.",
    icon: PieChart,
  },
  {
    number: "06",
    title: "Interpretation",
    description:
      "Translate analytical results into clear research conclusions.",
    icon: TrendingUp,
  },
];

const charts = [
  {
    title: "Research Metrics",
    value: "87.4%",
    change: "+12.8%",
    type: "bar",
  },
  {
    title: "Model Performance",
    value: "94.2%",
    change: "+8.4%",
    type: "line",
  },
  {
    title: "Data Distribution",
    value: "68 / 32",
    change: "Balanced",
    type: "pie",
  },
];

const technologies = [
  "Python",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "SQL",
  "Excel",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function DataAnalysisPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[88vh] px-6 py-24">

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
            bg-blue-600/10
            blur-[150px]
          "
        />

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center">

          <div className="grid w-full items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >

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
                Data Analysis
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="
                  text-5xl
                  font-bold
                  leading-[1.05]
                  sm:text-6xl
                  lg:text-7xl
                "
              >
                Turn Data Into

                <span
                  className="
                    mt-2
                    block
                    bg-gradient-to-r
                    from-blue-400
                    via-cyan-400
                    to-violet-500
                    bg-clip-text
                    text-transparent
                  "
                >
                  Research Insights.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-neutral-400
                  sm:text-lg
                "
              >
                Transform raw research data into structured analysis,
                meaningful visualizations and evidence-based insights
                that support your research findings.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-9 flex flex-wrap gap-4"
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
                    hover:shadow-xl
                    hover:shadow-blue-600/20
                  "
                >
                  Analyze Your Data

                  <ArrowRight
                    size={17}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>

                <Link
                  href="/services"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/10
                    px-6
                    py-3
                    text-sm
                    font-medium
                    text-neutral-300
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    hover:text-white
                  "
                >
                  View Services
                </Link>
              </motion.div>

            </motion.div>


            {/* RIGHT — DATA VISUAL */}

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
                duration: 0.8,
              }}
              className="relative"
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-neutral-950
                  p-5
                  shadow-2xl
                  shadow-blue-950/30
                "
              >

                {/* Dashboard header */}

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-xs text-neutral-500">
                      Research Dashboard
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      Analysis Overview
                    </p>
                  </div>

                  <div
                    className="
                      rounded-lg
                      border
                      border-blue-500/20
                      bg-blue-500/10
                      px-3
                      py-1.5
                      text-xs
                      text-blue-400
                    "
                  >
                    Live Analysis
                  </div>

                </div>


                {/* Metric cards */}

                <div className="mt-6 grid grid-cols-3 gap-3">

                  {charts.map((item, index) => (
                    <div
                      key={item.title}
                      className="
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.025]
                        p-3
                      "
                    >
                      <p className="text-[10px] text-neutral-500">
                        {item.title}
                      </p>

                      <p className="mt-2 text-lg font-bold">
                        {item.value}
                      </p>

                      <p className="mt-1 text-[10px] text-blue-400">
                        {item.change}
                      </p>
                    </div>
                  ))}

                </div>


                {/* Chart */}

                <div
                  className="
                    relative
                    mt-4
                    h-64
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.015]
                    p-5
                  "
                >

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-xs text-neutral-500">
                        Research Performance
                      </p>

                      <p className="mt-1 text-sm font-semibold">
                        Analytical Results
                      </p>
                    </div>

                    <LineChart
                      size={18}
                      className="text-blue-400"
                    />

                  </div>


                  {/* Grid */}

                  <div
                    className="
                      absolute
                      bottom-8
                      left-5
                      right-5
                      top-16
                      opacity-30
                    "
                  >

                    <div className="h-full border-l border-b border-white/10">

                      <div className="h-1/4 border-t border-white/5" />
                      <div className="h-1/4 border-t border-white/5" />
                      <div className="h-1/4 border-t border-white/5" />
                      <div className="h-1/4 border-t border-white/5" />

                    </div>

                  </div>


                  {/* Animated bars */}

                  <div
                    className="
                      absolute
                      bottom-8
                      left-10
                      right-10
                      flex
                      h-36
                      items-end
                      justify-between
                      gap-3
                    "
                  >

                    {[45, 70, 55, 82, 64, 92, 76, 100].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 0.8,
                            delay: index * 0.08,
                            ease: "easeOut",
                          }}
                          className="
                            w-full
                            rounded-t-md
                            bg-gradient-to-t
                            from-blue-600/30
                            to-blue-400
                          "
                        />
                      )
                    )}

                  </div>

                </div>


                {/* Bottom */}

                <div className="mt-4 flex items-center justify-between">

                  <div className="flex items-center gap-2">

                    <div className="h-2 w-2 rounded-full bg-blue-400" />

                    <span className="text-[11px] text-neutral-500">
                      Dataset analyzed
                    </span>

                  </div>

                  <span className="text-xs text-neutral-400">
                    12,480 records
                  </span>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ANALYSIS CAROUSEL
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

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

            <div className="max-w-2xl">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                "
              >
                Analysis Pipeline
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  sm:text-4xl
                "
              >
                From raw data
                <span className="text-blue-400">
                  {" "}to insight.
                </span>
              </h2>

              <p className="mt-4 text-neutral-400">
                Every dataset goes through a structured analytical
                process before becoming a research insight.
              </p>

            </div>

            <div className="hidden items-center gap-2 text-xs text-neutral-500 sm:flex">
              <span>Scroll to explore</span>
              <ChevronRight size={15} />
            </div>

          </div>


          {/* Horizontal carousel */}

          <div
            className="
              mt-12
              flex
              snap-x
              snap-mandatory
              gap-5
              overflow-x-auto
              pb-6
              scrollbar-hide
            "
          >

            {analysisStages.map((stage) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  whileHover={{ y: -8 }}
                  className="
                    min-w-[280px]
                    snap-start
                    rounded-2xl
                    border
                    border-white/10
                    bg-neutral-950
                    p-6
                    transition-all
                    duration-300
                    hover:border-blue-500/30
                    sm:min-w-[320px]
                  "
                >

                  <div className="flex items-center justify-between">

                    <span
                      className="
                        text-xs
                        font-semibold
                        tracking-widest
                        text-blue-400
                      "
                    >
                      {stage.number}
                    </span>

                    <Icon
                      size={20}
                      className="text-neutral-600"
                    />

                  </div>

                  <h3 className="mt-10 text-xl font-semibold">
                    {stage.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-neutral-400
                    "
                  >
                    {stage.description}
                  </p>

                  <div
                    className="
                      mt-8
                      h-px
                      w-full
                      bg-gradient-to-r
                      from-blue-500/40
                      to-transparent
                    "
                  />

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          BEFORE / AFTER
      ===================================================== */}

      <section
        className="
          border-t
          border-white/5
          bg-neutral-950/40
          px-6
          py-24
          sm:py-32
        "
      >

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
              Data Transformation
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Raw data is only the beginning.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              The real value comes from cleaning, analyzing and
              interpreting what the data is telling you.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {/* RAW */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-black
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-600">
                    Before
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Raw Dataset
                  </h3>
                </div>

                <Database
                  size={20}
                  className="text-neutral-600"
                />

              </div>


              <div className="mt-6 space-y-2">

                {[
                  "Missing values",
                  "Duplicate records",
                  "Inconsistent formats",
                  "Unstructured variables",
                  "Outliers",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-lg
                      border
                      border-white/5
                      bg-white/[0.02]
                      px-4
                      py-3
                      text-sm
                      text-neutral-500
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>


            {/* PROCESSED */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-blue-500/20
                bg-blue-500/[0.025]
                p-6
              "
            >

              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-400">
                    After
                  </p>

                  <h3 className="mt-1 text-lg font-semibold">
                    Research Insight
                  </h3>
                </div>

                <TrendingUp
                  size={20}
                  className="text-blue-400"
                />

              </div>


              <div className="mt-6 space-y-2">

                {[
                  "Clean analytical dataset",
                  "Relevant variables identified",
                  "Patterns and relationships",
                  "Statistical findings",
                  "Research-ready visualizations",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      rounded-lg
                      border
                      border-blue-500/10
                      bg-blue-500/[0.04]
                      px-4
                      py-3
                      text-sm
                      text-neutral-300
                    "
                  >
                    {item}
                  </div>
                ))}

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* =====================================================
          VISUALIZATION
      ===================================================== */}

      <section className="px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-blue-400
                "
              >
                Visualization
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  font-bold
                  sm:text-4xl
                "
              >
                Make complex results
                <span className="text-blue-400">
                  {" "}easy to understand.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-neutral-400">
                Research results become more meaningful when they are
                presented through clear and appropriate visualizations.
                We create charts and analytical visuals suited to the
                research objective.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                {[
                  "Bar Charts",
                  "Line Charts",
                  "Scatter Plots",
                  "Heatmaps",
                  "Distributions",
                  "Comparisons",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-4
                      py-2
                      text-xs
                      text-neutral-400
                    "
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>


            {/* VISUAL CHART PANEL */}

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-neutral-950
                p-5
              "
            >

              <div className="grid gap-4 sm:grid-cols-2">

                {/* Large chart */}

                <div
                  className="
                    relative
                    min-h-[280px]
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    p-5
                    sm:col-span-2
                  "
                >

                  <div className="flex justify-between">

                    <div>
                      <p className="text-xs text-neutral-500">
                        Trend Analysis
                      </p>

                      <p className="mt-1 text-lg font-semibold">
                        Research Variable
                      </p>
                    </div>

                    <LineChart
                      size={20}
                      className="text-blue-400"
                    />

                  </div>

                  <svg
                    viewBox="0 0 600 180"
                    className="
                      absolute
                      bottom-5
                      left-5
                      h-[170px]
                      w-[calc(100%-40px)]
                    "
                    preserveAspectRatio="none"
                  >

                    <path
                      d="M0 150 C70 125, 80 145, 140 105 S220 120, 270 85 S350 110, 400 55 S470 75, 520 35 S570 50, 600 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="text-blue-400"
                    />

                  </svg>

                </div>


                {/* Mini chart */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    p-5
                  "
                >

                  <p className="text-xs text-neutral-500">
                    Distribution
                  </p>

                  <div className="mt-5 flex h-24 items-end gap-2">

                    {[30, 55, 80, 45, 70, 95, 60].map(
                      (height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{
                            height: `${height}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.6,
                            delay: index * 0.05,
                          }}
                          className="
                            flex-1
                            rounded-t
                            bg-blue-500/70
                          "
                        />
                      )
                    )}

                  </div>

                </div>


                {/* Pie style */}

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black
                    p-5
                  "
                >

                  <p className="text-xs text-neutral-500">
                    Composition
                  </p>

                  <div className="mt-4 flex items-center gap-5">

                    <div
                      className="
                        h-20
                        w-20
                        rounded-full
                        bg-[conic-gradient(#3b82f6_0deg_230deg,#7c3aed_230deg_360deg)]
                        p-3
                      "
                    >
                      <div className="h-full w-full rounded-full bg-black" />
                    </div>

                    <div className="space-y-2 text-xs">

                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                        Dataset A
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-violet-500" />
                        Dataset B
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TECHNOLOGIES
      ===================================================== */}

      <section
        className="
          border-t
          border-white/5
          px-6
          py-20
        "
      >

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
            Analytical Toolkit
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            {technologies.map((technology) => (
              <span
                key={technology}
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
              </span>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="px-6 py-24 sm:py-32">

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
          }}
          className="
            relative
            mx-auto
            max-w-5xl
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
            sm:px-12
          "
        >

          <BarChart3
            size={28}
            className="mx-auto text-blue-400"
          />

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              sm:text-5xl
            "
          >
            Have research data?
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
            Let&apos;s turn your dataset into clear analysis,
            meaningful visualizations and research-ready insights.
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
            Start Your Analysis

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