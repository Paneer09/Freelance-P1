"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileSearch,
  ShieldCheck,
  Search,
  AlertTriangle,
  FileText,
} from "lucide-react";

const findings = [
  {
    label: "Original Content",
    value: "86%",
    type: "good",
  },
  {
    label: "Matched Content",
    value: "14%",
    type: "warning",
  },
  {
    label: "Sources Identified",
    value: "08",
    type: "neutral",
  },
];

const checks = [
  "Similarity identification",
  "Source comparison",
  "Repeated content detection",
  "Citation review",
  "Content originality review",
  "Final similarity report",
];

export default function PlagiarismPage() {
  return (
    <main className="overflow-hidden bg-black text-white">

      {/* HERO / SCANNER */}

      <section className="relative px-6 py-24">

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl">

          <div className="text-center">

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
              <ShieldCheck size={14} />
              Similarity Checking
            </div>

            <h1 className="mx-auto mt-7 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              Know What Your
              <span className="block text-blue-400">
                Research Contains.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
              Identify matching content, review sources and understand
              similarity before your research document moves forward.
            </p>

          </div>


          {/* SCANNER */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-16 max-w-4xl"
          >

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl shadow-blue-950/20">

              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

                <div className="flex items-center gap-3">
                  <FileSearch className="text-blue-400" size={19} />
                  <span className="text-sm font-medium">
                    Similarity Analysis
                  </span>
                </div>

                <span className="text-xs text-blue-400">
                  ANALYSIS COMPLETE
                </span>

              </div>


              <div className="grid gap-8 p-6 md:grid-cols-[1fr_0.7fr] md:p-8">

                <div>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-black p-4">
                    <FileText className="text-neutral-500" size={20} />

                    <div className="flex-1">
                      <p className="text-sm">
                        research_manuscript.pdf
                      </p>
                      <p className="mt-1 text-xs text-neutral-600">
                        42 pages · 8,420 words
                      </p>
                    </div>

                    <CheckCircle2
                      size={19}
                      className="text-blue-400"
                    />
                  </div>


                  <div className="relative mt-6 h-2 overflow-hidden rounded-full bg-white/5">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "86%" }}
                      transition={{ duration: 1.5 }}
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                    />

                  </div>

                  <div className="mt-3 flex justify-between text-xs text-neutral-600">
                    <span>Scanning content</span>
                    <span>100%</span>
                  </div>

                </div>


                <div className="flex items-center justify-center">

                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-blue-500/10">

                    <div className="absolute inset-0 rounded-full border-[12px] border-blue-500 border-r-transparent border-b-transparent rotate-[-35deg]" />

                    <div className="text-center">
                      <p className="text-4xl font-bold">
                        86%
                      </p>

                      <p className="mt-1 text-xs text-neutral-500">
                        Original
                      </p>
                    </div>

                  </div>

                </div>

              </div>


              <div className="grid border-t border-white/10 sm:grid-cols-3">

                {findings.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-white/10 p-5 last:border-0 sm:border-b-0 sm:border-r sm:last:border-0"
                  >
                    <p className="text-xs text-neutral-600">
                      {item.label}
                    </p>

                    <p
                      className={`mt-2 text-2xl font-bold ${
                        item.type === "good"
                          ? "text-blue-400"
                          : item.type === "warning"
                          ? "text-violet-400"
                          : "text-white"
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* WHAT WE CHECK */}

      <section className="border-t border-white/5 px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                What We Check
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                More than a percentage.
              </h2>

              <p className="mt-5 leading-7 text-neutral-500">
                Similarity checking is not simply about getting a
                number. The content behind that number needs to be
                reviewed and understood.
              </p>
            </div>


            <div className="grid gap-3 sm:grid-cols-2">

              {checks.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-blue-400"
                  />

                  <span className="text-sm text-neutral-300">
                    {item}
                  </span>
                </motion.div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* IMPORTANT NOTE */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-7">

          <div className="flex gap-4">

            <AlertTriangle
              size={21}
              className="shrink-0 text-violet-400"
            />

            <div>
              <h3 className="font-semibold">
                Similarity does not automatically mean plagiarism.
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Matched content can come from legitimate citations,
                references, common terminology or previously published
                material. Context and source review are important.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 py-28 text-center">

        <ShieldCheck className="mx-auto text-blue-400" size={30} />

        <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
          Check before you submit.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-neutral-400">
          Review your research document and understand its similarity
          before publication or submission.
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm font-semibold hover:bg-blue-500"
        >
          Request a Check
          <ArrowRight size={17} />
        </Link>

      </section>

    </main>
  );
}