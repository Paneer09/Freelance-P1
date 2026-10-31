"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileText,
  FolderOpen,
  Layers3,
  ListTree,
  PenLine,
} from "lucide-react";

const chapters = [
  "Abstract",
  "Introduction",
  "Literature Review",
  "Methodology",
  "System Design",
  "Implementation",
  "Results & Analysis",
  "Conclusion",
];

const features = [
  {
    title: "Chapter Structure",
    text: "Organize research content into a logical academic structure.",
    icon: ListTree,
  },
  {
    title: "Technical Documentation",
    text: "Clearly document systems, methods, experiments and implementation.",
    icon: FileText,
  },
  {
    title: "Consistency",
    text: "Maintain consistent terminology, formatting and presentation.",
    icon: Layers3,
  },
  {
    title: "Final Review",
    text: "Review the complete document before submission.",
    icon: CheckCircle2,
  },
];

export default function ResearchDocumentationPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* HERO */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                Research Documentation
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
                Give Your Research
                <span className="block text-blue-400">
                  A Clear Structure.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
                Organize research content into clear chapters,
                technical sections and professional documentation
                that communicates your work effectively.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold hover:bg-blue-500"
              >
                Discuss Documentation
                <ArrowRight size={17} />
              </Link>

            </motion.div>


            {/* DOCUMENT EDITOR */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-3 shadow-2xl"
            >

              <div className="grid min-h-[470px] grid-cols-[150px_1fr] overflow-hidden rounded-xl border border-white/10">

                {/* SIDEBAR */}

                <div className="border-r border-white/10 bg-black p-4">

                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <FolderOpen size={15} className="text-blue-400" />
                    Research
                  </div>

                  <div className="mt-6 space-y-2">

                    {chapters.map((chapter, index) => (
                      <div
                        key={chapter}
                        className={`rounded-md px-2 py-2 text-[10px] ${
                          index === 0
                            ? "bg-blue-500/10 text-blue-400"
                            : "text-neutral-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}{" "}
                        {chapter}
                      </div>
                    ))}

                  </div>

                </div>


                {/* DOCUMENT */}

                <div className="bg-neutral-950 p-6 sm:p-8">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-widest text-blue-400">
                      Chapter 01
                    </span>

                    <PenLine size={15} className="text-neutral-600" />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold">
                    Introduction
                  </h2>

                  <div className="mt-8 space-y-3">

                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-5/6 rounded bg-white/10" />

                    <div className="my-7 h-32 rounded-lg border border-blue-500/10 bg-blue-500/[0.03]" />

                    <div className="h-2 w-full rounded bg-white/10" />
                    <div className="h-2 w-11/12 rounded bg-white/10" />
                    <div className="h-2 w-4/6 rounded bg-white/10" />

                  </div>

                  <div className="mt-8 flex items-center gap-2 text-xs text-neutral-600">
                    <CheckCircle2 size={14} className="text-blue-400" />
                    Structure reviewed
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>
      </section>


      {/* FEATURES */}

      <section className="border-t border-white/5 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="max-w-xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              Documentation Focus
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Structure before complexity.
            </h2>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 5 }}
                  className="flex gap-5 rounded-2xl border border-white/10 bg-neutral-950 p-6"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {feature.text}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>


      {/* DOCUMENT STRUCTURE */}

      <section className="bg-neutral-950/50 px-6 py-24">

        <div className="mx-auto max-w-5xl text-center">

          <BookOpen className="mx-auto text-blue-400" size={28} />

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            A document that tells the research story.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-500">
            Each chapter should connect naturally with the next —
            from the research problem to methodology, implementation
            and final results.
          </p>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {chapters.map((chapter, index) => (
              <div
                key={chapter}
                className="rounded-xl border border-white/10 bg-black p-4 text-left"
              >
                <span className="text-xs text-blue-400">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-2 text-sm font-medium">
                  {chapter}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* CTA */}

      <section className="px-6 py-28 text-center">

        <FileText className="mx-auto text-blue-400" size={30} />

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Build a document around your research.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-neutral-400">
          Let&apos;s organize your research into a clear and
          professional document.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold hover:bg-blue-500"
        >
          Start Documentation
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}