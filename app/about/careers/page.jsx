"use client";

import { useState } from "react";
import {
  BriefcaseBusiness,
  ArrowRight,
  Code2,
  BarChart3,
  FileText,
  Search,
  CheckCircle2,
  Mail,
} from "lucide-react";

export default function Careers() {
  const [activeJob, setActiveJob] = useState(null);

  const jobs = [
    {
      title: "Research Analyst",
      type: "Full Time",
      icon: Search,
      description:
        "Work on research projects, analyze academic requirements, and support researchers throughout their research journey.",
      skills: ["Research", "Data Analysis", "Documentation"],
    },
    {
      title: "Software Developer",
      type: "Full Time",
      icon: Code2,
      description:
        "Develop software solutions and research-based applications using modern web and programming technologies.",
      skills: ["Python", "React", "SQL"],
    },
    {
      title: "Data Analyst",
      type: "Full Time",
      icon: BarChart3,
      description:
        "Transform research and business data into meaningful insights using statistical analysis and visualization.",
      skills: ["Python", "Statistics", "Power BI"],
    },
    {
      title: "Technical Writer",
      type: "Full Time",
      icon: FileText,
      description:
        "Create clear, structured, and high-quality technical and research documentation.",
      skills: ["Technical Writing", "Research", "Documentation"],
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center px-6">

        {/* Background Glow */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/20 rounded-full blur-[130px] animate-pulse" />

        {/* Decorative circles */}
        <div className="absolute top-24 right-[15%] w-3 h-3 bg-blue-500 rounded-full animate-ping" />
        <div className="absolute bottom-32 left-[18%] w-2 h-2 bg-violet-500 rounded-full animate-ping" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm animate-[fadeIn_1s_ease-out]">
            <BriefcaseBusiness size={16} />
            Career Opportunities
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Build Your
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Future With Us
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Join a team working at the intersection of research,
            technology, data, and innovation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#openings"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:scale-105"
            >
              Explore Openings
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#why-us"
              className="px-7 py-3 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
            >
              Why Join Us?
            </a>

          </div>
        </div>
      </section>


      {/* WHY US */}
      <section id="why-us" className="px-6 py-24">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
              Our Culture
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Why Work With Us?
            </h2>

            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              We believe great work happens when talented people have the
              freedom to learn, create, and grow.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                number: "01",
                title: "Learn & Grow",
                text: "Work on challenging research and technology projects that continuously expand your knowledge.",
              },
              {
                number: "02",
                title: "Make an Impact",
                text: "Contribute to projects that help researchers, organizations, and businesses solve real problems.",
              },
              {
                number: "03",
                title: "Grow Together",
                text: "Collaborate with people from different technical and research backgrounds.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative p-7 rounded-2xl border border-gray-800 bg-gray-950/70 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2"
              >

                <span className="text-5xl font-bold text-gray-800 group-hover:text-blue-500/30 transition-colors duration-500">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* JOB OPENINGS */}
      <section id="openings" className="px-6 py-24 bg-gray-950/40">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-3">
              Opportunities
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Open Positions
            </h2>

            <p className="mt-4 text-gray-400">
              Find a role where your skills can make a difference.
            </p>

          </div>


          <div className="space-y-5">

            {jobs.map((job, index) => {

              const Icon = job.icon;
              const isActive = activeJob === index;

              return (
                <div
                  key={job.title}
                  onClick={() =>
                    setActiveJob(isActive ? null : index)
                  }
                  className="group cursor-pointer rounded-2xl border border-gray-800 bg-black/70 hover:border-blue-500/50 transition-all duration-500 overflow-hidden"
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.12}s both`,
                  }}
                >

                  <div className="p-6 md:p-7 flex items-center gap-5">

                    <div className="w-14 h-14 shrink-0 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                      <Icon size={25} />
                    </div>


                    <div className="flex-1">

                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">

                        <h3 className="text-xl font-semibold">
                          {job.title}
                        </h3>

                        <span className="w-fit text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400">
                          {job.type}
                        </span>

                      </div>

                      <p className="mt-2 text-gray-400">
                        {job.description}
                      </p>

                    </div>


                    <div
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-90" : ""
                      }`}
                    >
                      <ArrowRight className="text-gray-500" />
                    </div>

                  </div>


                  {/* EXPANDED CONTENT */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <div className="px-6 md:px-7 pb-7 md:pl-24">

                        <div className="flex flex-wrap gap-2 mb-5">

                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                            >
                              <CheckCircle2 size={14} />
                              {skill}
                            </span>
                          ))}

                        </div>

                        <a
                          href="mailto:careers@example.com"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors"
                        >
                          <Mail size={17} />
                          Apply Now
                        </a>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="px-6 py-28">

        <div className="relative max-w-5xl mx-auto text-center overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-black to-violet-500/10 p-12 md:p-20">

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-40 bg-blue-500/20 blur-[100px]" />

          <div className="relative z-10">

            <BriefcaseBusiness
              size={40}
              className="mx-auto text-blue-400 mb-6"
            />

            <h2 className="text-3xl md:text-5xl font-bold">
              Don't See Your Role?
            </h2>

            <p className="mt-5 max-w-xl mx-auto text-gray-400">
              We are always interested in meeting talented people.
              Send us your profile and tell us how you can contribute.
            </p>

            <a
              href="mailto:careers@example.com"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              <Mail size={18} />
              Get In Touch
            </a>

          </div>

        </div>

      </section>


      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(35px);
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
