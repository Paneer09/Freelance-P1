"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Database,
  FlaskConical,
  Lightbulb,
  BarChart3,
  FileText,
  Code2,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const researchStages = [
  {
    number: "01",
    title: "Idea",
    description:
      "Define the research problem, objectives and questions before development begins.",
    icon: Lightbulb,
  },
  {
    number: "02",
    title: "Literature",
    description:
      "Understand existing work, identify research gaps and establish the research direction.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Method",
    description:
      "Choose an appropriate methodology, dataset, architecture and experimental approach.",
    icon: FlaskConical,
  },
  {
    number: "04",
    title: "Build",
    description:
      "Convert the proposed methodology into a working prototype, model or software system.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Analyze",
    description:
      "Transform collected data and experimental results into meaningful research evidence.",
    icon: BarChart3,
  },
  {
    number: "06",
    title: "Impact",
    description:
      "Document, communicate and present the research so its contribution is clearly understood.",
    icon: Sparkles,
  },
];

const insights = [
  {
    category: "RESEARCH QUESTION",
    question: "Is your research problem clearly defined?",
    answer:
      "A strong research project begins with a specific problem. Clear objectives help determine the right methodology, data and evaluation strategy.",
  },
  {
    category: "METHODOLOGY",
    question: "Are you choosing the right research approach?",
    answer:
      "The methodology should follow the research question. The right approach creates a logical connection between the problem, experiment and expected outcome.",
  },
  {
    category: "DATA",
    question: "Does your dataset support your objective?",
    answer:
      "More data does not automatically mean better research. Relevance, quality, preprocessing and appropriate feature selection are often more important.",
  },
  {
    category: "ANALYSIS",
    question: "Can your results actually support your conclusion?",
    answer:
      "Research results need meaningful analysis. Appropriate statistics, visualizations and comparisons help turn raw observations into defensible findings.",
  },
  {
    category: "PUBLICATION",
    question: "Is your manuscript ready to communicate the research?",
    answer:
      "A strong manuscript connects the problem, methodology, results and contribution into one clear academic story.",
  },
];

const realities = [
  {
    assumption: "More data means better research.",
    reality:
      "Relevant, reliable and appropriately prepared data matters more than simply having a large dataset.",
  },
  {
    assumption: "A similarity score means plagiarism.",
    reality:
      "Similarity identifies matching content. Each match needs to be interpreted in its academic context.",
  },
  {
    assumption: "A beautiful presentation means a strong defense.",
    reality:
      "A strong defense communicates the research logic, methodology and contribution clearly.",
  },
  {
    assumption: "The model with the highest accuracy is always the best.",
    reality:
      "Model selection depends on the research objective, dataset, evaluation criteria and practical context.",
  },
];

const paths = [
  {
    icon: Lightbulb,
    title: "I have an idea",
    text: "You have a research problem but need direction.",
    link: "/services/phd-research-support",
  },
  {
    icon: Code2,
    title: "I need implementation",
    text: "You need to turn research methodology into a working system.",
    link: "/services/research-implementation",
  },
  {
    icon: BarChart3,
    title: "I need analysis",
    text: "You have data and need meaningful research insights.",
    link: "/services/data-analysis",
  },
  {
    icon: FileText,
    title: "I'm preparing for publication",
    text: "Your research is ready and needs publication support.",
    link: "/services/publication-support",
  },
];

const technologies = {
  DATA: ["Python", "Pandas", "NumPy", "SQL"],
  VISUALIZATION: ["Matplotlib", "Seaborn", "Power BI", "Excel"],
  "MACHINE LEARNING": ["Scikit-learn", "TensorFlow", "PyTorch"],
  DEVELOPMENT: ["React", "Next.js", "Flask", "REST APIs"],
};

export default function ResearchPage() {
  const [activeStage, setActiveStage] = useState(0);
  const [activeInsight, setActiveInsight] = useState(0);
  const [activeTech, setActiveTech] = useState("DATA");

  const stage = researchStages[activeStage];
  const StageIcon = stage.icon;

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-[90vh] px-6 py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="relative mx-auto flex max-w-6xl flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400"
          >
            <Sparkles size={14} />
            Research Insights
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 max-w-5xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-8xl"
          >
            Ideas become
            <span className="block bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              evidence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-7 max-w-2xl text-base leading-8 text-neutral-400 sm:text-lg"
          >
            Explore the thinking behind strong research — from defining
            the right question to turning evidence into meaningful impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <Link
              href="#research-journey"
              className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold transition hover:bg-violet-500"
            >
              Explore Research
              <ArrowRight size={17} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-neutral-300 transition hover:border-violet-500/30 hover:text-white"
            >
              Discuss Your Research
            </Link>
          </motion.div>

          {/* RESEARCH NETWORK */}
          <div className="relative mt-24 h-52 w-full max-w-3xl">
            <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/30 bg-violet-500/10 shadow-[0_0_80px_rgba(124,58,237,0.18)]">
              <div className="flex h-full items-center justify-center">
                <Brain className="text-violet-400" size={32} />
              </div>
            </div>

            <div className="absolute left-[12%] top-[20%] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-950">
              <Lightbulb size={18} className="text-violet-400" />
            </div>

            <div className="absolute right-[12%] top-[20%] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-950">
              <Database size={18} className="text-blue-400" />
            </div>

            <div className="absolute bottom-[5%] left-[27%] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-950">
              <FlaskConical size={18} className="text-violet-400" />
            </div>

            <div className="absolute bottom-[5%] right-[27%] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-neutral-950">
              <BarChart3 size={18} className="text-blue-400" />
            </div>

            <div className="absolute left-[18%] top-[32%] h-px w-[30%] rotate-[18deg] bg-gradient-to-r from-transparent via-violet-500/40 to-violet-500/20" />

            <div className="absolute right-[18%] top-[32%] h-px w-[30%] -rotate-[18deg] bg-gradient-to-l from-transparent via-blue-500/40 to-blue-500/20" />

            <div className="absolute bottom-[27%] left-[34%] h-px w-[18%] rotate-[28deg] bg-violet-500/20" />

            <div className="absolute bottom-[27%] right-[34%] h-px w-[18%] -rotate-[28deg] bg-blue-500/20" />
          </div>
        </div>
      </section>

      {/* RESEARCH JOURNEY */}
      <section
        id="research-journey"
        className="border-t border-white/5 px-6 py-28"
      >
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Research Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Where does your research stand?
            </h2>

            <p className="mt-5 leading-8 text-neutral-500">
              Every strong research project moves through connected
              decisions. Explore each stage to understand what matters.
            </p>
          </div>

          <div className="mt-16 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

            {/* STAGE NAV */}
            <div className="space-y-2">
              {researchStages.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 ${
                      activeStage === index
                        ? "border-violet-500/30 bg-violet-500/[0.07]"
                        : "border-white/5 bg-neutral-950 hover:border-white/10"
                    }`}
                  >
                    <span className="text-xs text-neutral-600">
                      {item.number}
                    </span>

                    <Icon
                      size={18}
                      className={
                        activeStage === index
                          ? "text-violet-400"
                          : "text-neutral-600"
                      }
                    />

                    <span
                      className={
                        activeStage === index
                          ? "font-semibold text-white"
                          : "text-neutral-400"
                      }
                    >
                      {item.title}
                    </span>

                    <ChevronRight
                      size={17}
                      className="ml-auto text-neutral-700"
                    />
                  </button>
                );
              })}
            </div>

            {/* STAGE DISPLAY */}
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className="relative min-h-[390px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

              <div className="relative">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                  Stage {stage.number}
                </span>

                <div className="mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10">
                  <StageIcon size={30} className="text-violet-400" />
                </div>

                <h3 className="mt-8 text-4xl font-bold">
                  {stage.title}
                </h3>

                <p className="mt-5 max-w-lg text-base leading-8 text-neutral-500">
                  {stage.description}
                </p>

                <div className="mt-10 flex items-center gap-3 text-sm text-neutral-400">
                  <CheckCircle2 size={17} className="text-violet-400" />
                  A thoughtful research process starts here.
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* INSIGHT CAROUSEL */}
      <section className="bg-neutral-950/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Think Before You Build
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Questions worth asking.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-neutral-500">
              Good research often begins by asking a better question.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-black">

            <div className="grid min-h-[390px] md:grid-cols-[0.35fr_0.65fr]">

              <div className="border-b border-white/10 p-7 md:border-b-0 md:border-r">
                <div className="space-y-2">
                  {insights.map((item, index) => (
                    <button
                      key={item.category}
                      type="button"
                      onClick={() => setActiveInsight(index)}
                      className={`w-full rounded-xl p-4 text-left transition ${
                        activeInsight === index
                          ? "bg-violet-500/10 text-white"
                          : "text-neutral-500 hover:bg-white/[0.03] hover:text-neutral-300"
                      }`}
                    >
                      <span className="text-[10px] font-semibold tracking-[0.2em]">
                        {item.category}
                      </span>

                      <span className="mt-2 block text-sm font-medium">
                        {item.question}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <motion.div
                key={activeInsight}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col justify-center p-8 sm:p-12"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                  {insights[activeInsight].category}
                </span>

                <h3 className="mt-6 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
                  {insights[activeInsight].question}
                </h3>

                <p className="mt-6 max-w-xl leading-8 text-neutral-500">
                  {insights[activeInsight].answer}
                </p>

                <div className="mt-10 h-px w-full max-w-xl bg-white/10" />

                <p className="mt-5 text-sm text-neutral-600">
                  Research insight {String(activeInsight + 1).padStart(2, "0")}{" "}
                  / {String(insights.length).padStart(2, "0")}
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* REALITY CHECK */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Research Reality Check
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Assumption vs reality.
            </h2>

            <p className="mt-5 leading-8 text-neutral-500">
              Research becomes stronger when assumptions are tested rather
              than simply accepted.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {realities.map((item, index) => (
              <motion.div
                key={item.assumption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-white/10 bg-neutral-950 p-7"
              >
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-600">
                  <span>Assumption</span>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-neutral-300">
                  “{item.assumption}”
                </h3>

                <div className="my-6 h-px bg-white/10" />

                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-400">
                  <CheckCircle2 size={14} />
                  Research Reality
                </div>

                <p className="mt-4 leading-7 text-neutral-500">
                  {item.reality}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR PATH */}
      <section className="border-y border-white/5 bg-neutral-950/50 px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Choose Your Research Path
            </p>

            <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
              Where are you right now?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-neutral-500">
              Start from the stage that best describes your research.
            </p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {paths.map((path) => {
              const Icon = path.icon;

              return (
                <Link
                  key={path.title}
                  href={path.link}
                  className="group rounded-2xl border border-white/10 bg-black p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                    <Icon size={21} className="text-violet-400" />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold">
                    {path.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-neutral-500">
                    {path.text}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-violet-400">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESEARCH TOOLKIT */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                Research Toolkit
              </p>

              <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
                Tools should serve the research.
              </h2>

              <p className="mt-5 leading-8 text-neutral-500">
                Technology is valuable when it helps answer the research
                question, process evidence or communicate the result.
              </p>

              <div className="mt-8 space-y-2">
                {Object.keys(technologies).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveTech(category)}
                    className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left text-sm transition ${
                      activeTech === category
                        ? "border-violet-500/30 bg-violet-500/10 text-white"
                        : "border-white/5 bg-neutral-950 text-neutral-500 hover:text-white"
                    }`}
                  >
                    {category}
                    <ChevronRight size={16} />
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeTech}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative flex min-h-[420px] items-center overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 p-8 sm:p-12"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

              <div className="relative w-full">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                  {activeTech}
                </span>

                <h3 className="mt-5 text-3xl font-bold">
                  Research technology stack
                </h3>

                <div className="mt-10 flex flex-wrap gap-3">
                  {technologies[activeTech].map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black px-5 py-3 text-sm text-neutral-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl border border-white/5 bg-black p-6">
                  <p className="text-sm leading-7 text-neutral-500">
                    The technology is only one part of the solution.
                    The research objective remains the starting point
                    for every technical decision.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* RESEARCH FLOW */}
      <section className="bg-neutral-950/70 px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            From Question To Impact
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
            Research should move somewhere.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-8 text-neutral-500">
            The goal is not simply to produce results. It is to turn
            those results into understanding and impact.
          </p>

          <div className="mt-16 overflow-x-auto pb-4 scrollbar-hide">
            <div className="mx-auto flex min-w-[900px] items-center justify-center gap-3">

              {[
                "QUESTION",
                "EVIDENCE",
                "METHOD",
                "ANALYSIS",
                "INSIGHT",
                "IMPACT",
              ].map((item, index) => (
                <div key={item} className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex h-28 w-28 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/[0.06] text-xs font-semibold tracking-widest text-violet-300"
                  >
                    {item}
                  </motion.div>

                  {index < 5 && (
                    <ArrowRight
                      size={18}
                      className="text-neutral-700"
                    />
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-6 py-32 text-center">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto max-w-3xl">

          <Sparkles
            size={30}
            className="mx-auto text-violet-400"
          />

          <h2 className="mt-6 text-4xl font-bold sm:text-6xl">
            Where are you in
            <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              your research?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-neutral-500">
            Whether you have an idea, a dataset, a prototype or a
            manuscript, the next step starts with understanding where
            your research stands.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-violet-500"
          >
            Discuss Your Research
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}