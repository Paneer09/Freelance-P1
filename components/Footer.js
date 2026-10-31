

"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "All Services", href: "/services/phd-research-support" },
  { label: "Gallery", href: "/about/gallery" },
  { label: "FAQ", href: "/about/faq" },
  { label: "Contact", href: "/contact" },
];

const researchLinks = [
  {
    label: "Initial Research Assistance",
    href: "/services/phd-research-support",
  },
  {
    label: "Research Writing Support",
    href: "/services/research-documentation",
  },
  {
    label: "Journal Publication",
    href: "/services/publication-support",
  },
  {
    label: "Editorial Services",
    href: "/services/thesis-writing-editing",
  },
  {
    label: "Journal Revision Assistance",
    href: "/services/plagiarism-checking",
  },
  {
    label: "Guidance & Mentorship",
    href: "/contact",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedinIn />,
  },
  {
    label: "X",
    href: "https://x.com/",
    icon: <FaXTwitter />,
  },
];

const linkClass =
  "group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">

      {/* Top Call To Action */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-violet-400">
                Research to Reality
              </p>

              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
                Give Life to the
                <br />
                <span className="text-gray-300">
                  ideas you have.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
                Have a research idea? Let&apos;s work together to turn it
                into meaningful results.
              </p>
            </div>

            <Link
              href="/contact"
              className="
                group inline-flex shrink-0 items-center justify-center
                rounded-full border border-violet-500/60
                bg-violet-600 px-7 py-3.5
                font-medium text-white
                shadow-[0_0_20px_rgba(139,92,246,0.18)]
                transition-all duration-300
                hover:-translate-y-1 hover:border-violet-400
                hover:bg-violet-500
                hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-violet-400
                focus-visible:ring-offset-2 focus-visible:ring-offset-black
              "
            >
              Get In Touch
            </Link>

          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Company Information */}
          <div className="lg:col-span-2">

            {/* Company Logo */}
            <Link
              href="/"
              aria-label="ADVIRAH Home"
              className="
                inline-flex items-center rounded-sm
                transition-opacity duration-300 hover:opacity-90
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-violet-500
              "
            >
              <Image
                src="/header/bgrcmpn.png"
                alt="ADVIRAH - Research, Publication, Innovation"
                width={220}
                height={75}
                priority={false}
                className="h-auto w-[160px] object-contain sm:w-[180px] md:w-[200px]"
              />
            </Link>

            {/* Company Description */}
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              A research and technology consultancy helping researchers,
              scholars, and businesses turn ideas into practical solutions
              through research support, technology, and innovation.
            </p>

            {/* Contact Information */}
            <div className="mt-7 space-y-5">

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <FaPhone
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-violet-400"
                />

                <div className="space-y-2">
                  <a
                    href="tel:+919944103829"
                    className="block text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400"
                  >
                    +91 99441 03829
                  </a>

                  <a
                    href="tel:+917448442551"
                    className="block text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400"
                  >
                    +91 74484 42551
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FaEnvelope
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-violet-400"
                />

                <a
                  href="mailto:info@companymail.com"
                  className="break-all text-sm text-gray-400 transition-colors duration-300 hover:text-violet-400"
                >
                  info@companymail.com
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-gray-400">
                <FaLocationDot
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-violet-400"
                />

                <p className="text-sm leading-6">
                  Nagercoil, Tamil Nadu,
                  <br />
                  India
                </p>
              </div>

            </div>

            {/* Social Media */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    flex h-10 w-10 items-center justify-center rounded-full
                    border border-white/10 bg-white/[0.02]
                    text-gray-400
                    transition-all duration-300
                    hover:-translate-y-1 hover:border-violet-500
                    hover:bg-violet-600 hover:text-white
                    hover:shadow-[0_0_18px_rgba(139,92,246,0.3)]
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-violet-400
                  "
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    <span className="h-px w-0 shrink-0 bg-violet-400 transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Services */}
          <div className="lg:col-span-2">
            <h3 className="mb-6 text-lg font-semibold">
              Research Services
            </h3>

            <ul className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {researchLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClass}>
                    <span className="h-px w-0 shrink-0 bg-violet-400 transition-all duration-300 group-hover:w-3" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-5 text-center text-sm text-gray-500 md:flex-row md:text-left">

            <p>
              © {new Date().getFullYear()} ADVIRAH. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <Link
                href="/privacy-policy"
                className="transition-colors duration-300 hover:text-violet-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-violet-400"
              >
                Terms &amp; Conditions
              </Link>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
