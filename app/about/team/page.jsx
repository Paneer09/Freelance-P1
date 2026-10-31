"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Search,
  Code2,
  BarChart3,
  FileText,
} from "lucide-react";

export default function OurTeam() {
  const [currentMember, setCurrentMember] = useState(0);

  const team = [
    {
      name: "Dr. Research Lead",
      role: "Research Director",
      image: "/team/image1.png",
      description:
        "Leading research projects with a strong focus on methodology, academic quality, and meaningful research outcomes.",
    },
    {
      name: "Software implementation",
      role: "Software implementation",
      image: "/team/image2.png",
      description:
        "Developing practical software solutions and research-based applications using modern technologies.",
    },
    {
      name: "Data Analyst",
      role: "Data & Statistics",
      image: "/team/image3.png",
      description:
        "Transforming complex datasets into meaningful insights through statistical analysis and visualization.",
    },
    {
      name: "Technical Writer",
      role: "Research Documentation",
      image: "/team/image4.png",
      description:
        "Creating clear, structured, and high-quality research and technical documentation.",
    },
  ];

  const expertise = [
    {
      title: "Research",
      icon: Search,
      description:
        "Research planning, methodology, academic development, and research support.",
    },
    {
      title: "Software",
      icon: Code2,
      description:
        "Modern software implementations designed around real research and business requirements.",
    },
    {
      title: "Data Analysis",
      icon: BarChart3,
      description:
        "Statistical analysis, visualization, and data-driven insights for research projects.",
    },
    {
      title: "Documentation",
      icon: FileText,
      description:
        "Clear and structured technical, academic, and research documentation.",
    },
  ];

  /* AUTO SLIDE */

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMember((prev) => (prev + 1) % team.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [team.length]);

  const previousMember = () => {
    setCurrentMember(
      (prev) => (prev - 1 + team.length) % team.length
    );
  };

  const nextMember = () => {
    setCurrentMember((prev) => (prev + 1) % team.length);
  };

  const member = team[currentMember];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative py-28 px-6 text-center">

        <div className="absolute top-10 left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[130px] animate-pulse" />

        <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            <Users size={16} />
            Our Team
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-bold leading-tight">
            Meet the Minds
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Behind Our Work
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            A multidisciplinary team combining research, technology,
            data, and creativity to build meaningful solutions.
          </p>

        </div>

      </section>


      {/* ================= TEAM CAROUSEL ================= */}

      <section className="px-6 py-20">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
              The People
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Meet Our Team
            </h2>

          </div>


          {/* CAROUSEL */}

          <div className="relative flex items-center justify-center">

            {/* LEFT */}

            <button
              onClick={previousMember}
              className="absolute left-0 md:left-4 z-20 w-11 h-11 rounded-full border border-gray-700 bg-black/90 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft size={22} />
            </button>


            {/* CARD */}

            <div
              key={currentMember}
              className="w-full max-w-4xl rounded-3xl border border-gray-800 bg-gray-950 overflow-hidden shadow-2xl animate-[teamSlide_0.6s_ease-out]"
            >

              <div className="grid md:grid-cols-2">

                {/* IMAGE */}

                <div className="relative h-[350px] md:h-[450px]">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                </div>


                {/* DETAILS */}

                <div className="p-8 md:p-12 flex flex-col justify-center">

                  <p className="text-blue-400 text-sm uppercase tracking-widest">
                    {member.role}
                  </p>

                  <h3 className="mt-3 text-3xl md:text-4xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-6 text-gray-400 leading-relaxed">
                    {member.description}
                  </p>

                  <div className="mt-8 w-12 h-[2px] bg-blue-500" />

                </div>

              </div>

            </div>


            {/* RIGHT */}

            <button
              onClick={nextMember}
              className="absolute right-0 md:right-4 z-20 w-11 h-11 rounded-full border border-gray-700 bg-black/90 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:scale-110 transition-all duration-300"
            >
              <ChevronRight size={22} />
            </button>

          </div>


          {/* DOTS */}

          <div className="flex justify-center gap-2 mt-7">

            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMember(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentMember === index
                    ? "w-8 bg-blue-500"
                    : "w-2 bg-gray-700"
                }`}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================= WHAT WE DO ================= */}

      <section className="px-6 py-24 bg-gray-950/40">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
              Our Capabilities
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              What We Do
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Different areas of expertise come together to support
              research and technology projects.
            </p>

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

            {expertise.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group p-7 rounded-2xl border border-gray-800 bg-black hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-500"
                  style={{
                    animation: `cardUp 0.6s ease-out ${
                      index * 0.12
                    }s both`,
                  }}
                >

                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">

                    <Icon size={26} />

                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================= TEAM VALUES ================= */}

      <section className="px-6 py-24">

        <div className="max-w-5xl mx-auto text-center">

          <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
            How We Work
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            One Team. One Purpose.
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            We believe strong collaboration, careful research, and
            thoughtful technology create better outcomes.
          </p>


          <div className="grid md:grid-cols-3 gap-5 mt-14">

            {[
              {
                title: "Collaboration",
                text: "Different skills working together toward one goal.",
              },
              {
                title: "Quality",
                text: "Attention to detail in every stage of the work.",
              },
              {
                title: "Innovation",
                text: "Finding better ways to solve complex problems.",
              },
            ].map((item, index) => (

              <div
                key={item.title}
                className="p-7 rounded-2xl border border-gray-800 bg-gray-950/60 hover:border-violet-500/50 hover:bg-violet-500/5 transition-all duration-500"
                style={{
                  animation: `cardUp 0.6s ease-out ${
                    index * 0.15
                  }s both`,
                }}
              >

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="px-6 py-24">

        <div className="relative max-w-5xl mx-auto overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-black to-violet-500/10 p-12 md:p-20 text-center">

          <div className="absolute w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">

            <h2 className="text-3xl md:text-5xl font-bold">
              Let's Work Together
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl mx-auto">
              Have a research idea or technology project?
              Let's turn it into something meaningful.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              Contact Us
              <ChevronRight size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`

        @keyframes teamSlide {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>

    </main>
  );
}