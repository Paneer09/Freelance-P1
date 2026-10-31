"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  Globe2,
  Send,
  Sparkles,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Manuscript Preparation",
    description: "Structure and refine the research manuscript.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Journal Alignment",
    description: "Prepare the manuscript according to target journal requirements.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Quality Review",
    description: "Review language, structure, references and presentation.",
    icon: CheckCircle2,
  },
  {
    number: "04",
    title: "Submission Preparation",
    description: "Prepare the final manuscript and supporting material.",
    icon: Send,
  },
];

const checklist = [
  "Manuscript structure",
  "Abstract refinement",
  "Research title",
  "Keywords",
  "Figures & tables",
  "References",
  "Journal formatting",
  "Language refinement",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PublicationSupportPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* HERO */}

      <section className="relative min-h-[85vh] px-6 py-24">

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl items-center">

          <div className="grid w-full items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >

              <motion.div
                variants={fadeUp}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-violet-400"
              >
                <Sparkles size={14} />
                Publication Support
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
              >
                Prepare Your Research
                <span className="block bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  For Publication.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-7 max-w-xl text-lg leading-8 text-neutral-400"
              >
                Refine your research manuscript and prepare it for
                professional journal and publication requirements.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold transition hover:bg-violet-500"
                >
                  Discuss Publication
                  <ArrowRight size={17} />
                </Link>
              </motion.div>

            </motion.div>


            {/* MANUSCRIPT PREVIEW */}

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="mx-auto max-w-md rotate-2 rounded-xl border border-white/10 bg-neutral-900 p-4 shadow-2xl shadow-violet-950/30">

                <div className="rounded-lg bg-white p-7 text-black">

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-600">
                      RESEARCH MANUSCRIPT
                    </span>

                    <span className="text-xs text-neutral-400">
                      01 / 12
                    </span>
                  </div>

                  <div className="mt-8 h-3 w-3/4 rounded bg-neutral-900" />
                  <div className="mt-3 h-2 w-full rounded bg-neutral-200" />
                  <div className="mt-2 h-2 w-5/6 rounded bg-neutral-200" />

                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded bg-violet-100" />
                    <div className="h-20 rounded bg-neutral-100" />
                  </div>

                  <div className="mt-7 space-y-2">
                    <div className="h-2 w-full rounded bg-neutral-200" />
                    <div className="h-2 w-full rounded bg-neutral-200" />
                    <div className="h-2 w-4/5 rounded bg-neutral-200" />
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs text-violet-600">
                    <Globe2 size={14} />
                    Journal-ready structure
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* TIMELINE */}

      <section className="border-t border-white/5 px-6 py-24 sm:py-32">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Publication Journey
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              From manuscript
              <span className="text-violet-400"> to submission.</span>
            </h2>
          </div>

          <div className="mt-16 space-y-5">

            {stages.map((stage) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-violet-500/30"
                >

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={22} />
                  </div>

                  <div className="flex-1">
                    <span className="text-xs text-violet-400">
                      {stage.number}
                    </span>

                    <h3 className="mt-1 text-lg font-semibold">
                      {stage.title}
                    </h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {stage.description}
                    </p>
                  </div>

                  <ArrowRight className="hidden text-neutral-700 transition group-hover:text-violet-400 sm:block" />

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* CHECKLIST */}

      <section className="bg-neutral-950/50 px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Manuscript Checklist
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Every important detail matters.
            </h2>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {checklist.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-black p-4 text-sm text-neutral-400"
              >
                <CheckCircle2 size={17} className="mb-3 text-blue-400" />
                {item}
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="px-6 py-28 text-center">

        <BookOpen className="mx-auto text-violet-400" size={30} />

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Ready to prepare your manuscript?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-neutral-400">
          Let&apos;s refine your research and prepare the next step
          toward publication.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold hover:bg-violet-500"
        >
          Start a Conversation
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}