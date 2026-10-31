"use client";

import { useEffect, useState } from "react";
// import Image from "next/image";
// import { FaQuoteLeft, FaImage, FaChartBar } from "react-icons/fa";
import {
  FaQuoteLeft,
  FaProjectDiagram,
  FaUsers,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

const reviews = [
  {
    name: "Research Scholar",
    role: "PhD Researcher",
    review:
      "The research guidance and technical support helped us turn our ideas into a clear and structured research work.",
  },
  {
    name: "Academic Researcher",
    role: "Research Professional",
    review:
      "The team provided excellent support throughout the research and publication process. Very professional and helpful.",
  },
  {
    name: "PhD Scholar",
    role: "University Researcher",
    review:
      "From research assistance to documentation, the entire process was smooth and well organized.",
  },
];

export default function Review() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-violet-400 uppercase tracking-[4px] text-sm mb-3">
            Our Happy Clients
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Trusted by Researchers
          </h2>
        </div>

        {/* Equal 50 / 50 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - REVIEW */}
          <div className="w-full min-h-[380px] flex items-center">

            <div
              key={current}
              className="review-flip w-full bg-zinc-950 border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(124,58,237,0.12)]"
            >
              <FaQuoteLeft className="text-violet-500 text-4xl mb-8" />

              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                {reviews[current].review}
              </p>

              <div>
                <h3 className="text-xl font-semibold">
                  {reviews[current].name}
                </h3>

                <p className="text-violet-400 mt-1">
                  {reviews[current].role}
                </p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-10">
                {reviews.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === current
                        ? "w-8 bg-violet-500"
                        : "w-2 bg-zinc-700"
                    }`}
                  ></span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - STATS */}
<div className="w-full grid grid-cols-2 gap-5">

  {/* Total Projects */}
  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[190px] flex flex-col justify-center hover:border-violet-500 transition duration-300">
    <FaProjectDiagram className="text-violet-500 text-3xl mb-5" />

    <h3 className="text-4xl md:text-5xl font-bold">
      250+
    </h3>

    <p className="text-gray-400 mt-3">
      Total Projects Delivered
    </p>
  </div>

  {/* Research Projects */}
  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[190px] flex flex-col justify-center hover:border-violet-500 transition duration-300">
    <FaBookOpen className="text-violet-500 text-3xl mb-5" />

    <h3 className="text-4xl md:text-5xl font-bold">
      120+
    </h3>

    <p className="text-gray-400 mt-3">
      Research Projects
    </p>
  </div>

  {/* Happy Researchers */}
  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[190px] flex flex-col justify-center hover:border-violet-500 transition duration-300">
    <FaUsers className="text-violet-500 text-3xl mb-5" />

    <h3 className="text-4xl md:text-5xl font-bold">
      180+
    </h3>

    <p className="text-gray-400 mt-3">
      Happy Researchers
    </p>
  </div>

  {/* Experience */}
  <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 min-h-[190px] flex flex-col justify-center hover:border-violet-500 transition duration-300">
    <FaAward className="text-violet-500 text-3xl mb-5" />

    <h3 className="text-4xl md:text-5xl font-bold">
      5+
    </h3>

    <p className="text-gray-400 mt-3">
      Years of Experience
    </p>
  </div>

</div>

        </div>
      </div>
    </section>
  );
}