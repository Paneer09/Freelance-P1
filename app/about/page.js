"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/about/image1.png",
  "/about/image2.png",
  "/about/image3.png",
  "/about/image4.png",
];

const expertise = [
  {
    title: "PhD Thesis Writing",
    description:
      "Structured and research-focused thesis writing support from planning and literature review to final documentation.",
  },
  {
    title: "Software Implementations",
    description:
      "Development and implementation of software solutions to support research concepts, experiments, and practical outcomes.",
  },
  {
    title: "Journal Manuscripts",
    description:
      "Preparation and refinement of research manuscripts with clear technical presentation and publication-oriented structure.",
  },
  {
    title: "Research Methodology",
    description:
      "Support in selecting suitable research methods, designing experiments, defining approaches, and organizing research work.",
  },
  {
    title: "Statistical Analysis",
    description:
      "Data analysis and statistical interpretation to transform research data into meaningful findings and insights.",
  },
  {
    title: "Proofreading & Editing",
    description:
      "Detailed proofreading and editing to improve clarity, consistency, grammar, technical presentation, and overall readability.",
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* =========================
          TRUST HEADING
      ========================== */}
      <section className="px-6 pt-24 pb-12 text-center">

        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600">
          About Us
        </p>

        <h1 className="text-3xl font-bold md:text-5xl">
          Research You Can Trust
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
          We help researchers transform ideas into structured,
          meaningful, and technically sound research outcomes.
        </p>

      </section>


      {/* =========================
          IMAGE CAROUSEL
      ========================== */}
      <section className="w-full overflow-hidden px-6 pb-24">

        <div className="mx-auto max-w-6xl overflow-hidden">

          <div
            className="flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >

            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full px-3"
              >

                <div className="relative mx-auto h-[250px] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 md:h-[420px]">

                  <Image
                    src={image}
                    alt={`Research ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />

                </div>

              </div>
            ))}

          </div>

        </div>


        {/* DOTS */}
        <div className="mt-6 flex justify-center gap-2">

          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "w-7 bg-blue-600"
                  : "w-2 bg-gray-600"
              }`}
            />
          ))}

        </div>

      </section>


      {/* =========================
          AREA OF EXPERTISE
      ========================== */}
      <section className="px-6 pb-24">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 text-center">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-blue-600">
              What We Offer
            </p>

            <h2 className="text-3xl font-bold md:text-4xl">
              Area of Expertise
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
              Our expertise covers different stages of the research
              journey, from developing research ideas to presenting
              polished and technically sound outcomes.
            </p>

          </div>


          {/* CARDS */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {expertise.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  p-6
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-blue-600/40
                  hover:bg-blue-600/[0.04]
                "
              >

                {/* Number */}
                <div
                  className="
                    mb-5
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-blue-600/30
                    text-sm
                    font-semibold
                    text-blue-600
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>


                {/* Title */}
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-white
                    transition-colors
                    group-hover:text-blue-500
                  "
                >
                  {item.title}
                </h3>


                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}