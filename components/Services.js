
import Link from "next/link";

import {
  FaLightbulb,
  FaPenNib,
  FaBookOpen,
  FaEdit,
  FaSyncAlt,
  FaUserGraduate,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLightbulb />,
    title: "Initial Research Assistance",
    description:
      "Get the right direction for your research idea, topic, methodology, and planning.",
    href: "/services/phd-research-support",
  },
  {
    icon: <FaPenNib />,
    title: "Research Writing Support",
    description:
      "Professional support for research papers, proposals, literature reviews, and thesis writing.",
    href: "/services/research-documentation",
  },
  {
    icon: <FaBookOpen />,
    title: "Journal Publication",
    description:
      "Guidance for selecting suitable journals, preparing manuscripts, submission, and publication.",
    href: "/services/publication-support",
  },
  {
    icon: <FaEdit />,
    title: "Editorial Services",
    description:
      "Improve the language, structure, formatting, clarity, and overall quality of your research work.",
    href: "/services/thesis-writing-editing",
  },
  {
    icon: <FaSyncAlt />,
    title: "Journal Revision Assistance",
    description:
      "Support for addressing reviewer comments, making revisions, and preparing manuscripts for resubmission.",
    href: "/services/plagiarism-checking",
  },
  {
    icon: <FaUserGraduate />,
    title: "Guidance & Mentorship",
    description:
      "Personalized guidance to help you confidently navigate every stage of your research journey.",
    href: "/contact",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-4">
            What We Offer
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Research Support,
            <span className="text-violet-500">
              {" "}From Idea to Publication
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Expert support and guidance at every stage of your research journey.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="
                group
                relative
                block
                bg-zinc-950
                border
                border-zinc-800
                rounded-2xl
                p-8
                min-h-[280px]
                overflow-hidden
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-violet-500/60
                hover:shadow-[0_0_35px_rgba(139,92,246,0.18)]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-violet-500
              "
            >
              {/* Number */}
              <div
                className="
                  absolute
                  top-5
                  right-6
                  text-4xl
                  font-bold
                  text-zinc-800
                  group-hover:text-violet-500/20
                  transition
                "
              >
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="
                  w-14
                  h-14
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  bg-violet-500/10
                  border
                  border-violet-500/20
                  text-violet-400
                  text-2xl
                  mb-7
                  group-hover:bg-violet-600
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-xl
                  font-semibold
                  mb-4
                  group-hover:text-violet-400
                  transition
                "
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-7 text-sm">
                {service.description}
              </p>

              {/* Hover Line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-8
                  h-[2px]
                  w-0
                  bg-violet-500
                  group-hover:w-16
                  transition-all
                  duration-500
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
