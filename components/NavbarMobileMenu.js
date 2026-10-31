
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
} from "react-icons/fa";

export default function MobileMenu({ activeMenu, setActiveMenu }) {
  const open = activeMenu === "navbar";

  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Open and close the mobile menu
  const handleClick = () => {
    if (open) {
      closeMenu();
    } else {
      setActiveMenu("navbar");
    }
  };

  // Close everything
  const closeMenu = () => {
    setActiveMenu(null);
    setAboutOpen(false);
    setServicesOpen(false);
  };

  const toggleAbout = () => {
    setServicesOpen(false);
    setAboutOpen((prev) => !prev);
  };

  const toggleServices = () => {
    setAboutOpen(false);
    setServicesOpen((prev) => !prev);
  };

  return (
    <div className="relative md:hidden">

      {/* Burger Button */}
      <button
        type="button"
        onClick={handleClick}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation-menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md text-2xl text-white hover:bg-white/10 focus:outline-none"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation-menu"
        className={`
          absolute right-0 top-full mt-2 w-72
          max-w-[calc(100vw-2rem)]
          rounded-lg bg-black p-5 text-white
          shadow-lg z-[1200]
          transform transition-all duration-300 ease-in-out
          ${
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-3 scale-95 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-4">

          {/* HOME */}
          <Link href="/" onClick={closeMenu}>
            Home
          </Link>

          {/* SERVICES */}
          <div>
            <div className="flex items-center justify-between">
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>

              <button
                type="button"
                onClick={toggleServices}
                aria-label="Open Services menu"
                aria-expanded={servicesOpen}
                className="flex items-center justify-center p-2"
              >
                <span
                  className={`
                    h-2 w-2 rounded-full bg-blue-600
                    transition-transform duration-300
                    ${servicesOpen ? "scale-125" : ""}
                  `}
                />
              </button>
            </div>

            {/* SERVICES SUB MENU */}
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  servicesOpen
                    ? "mt-3 max-h-[500px] opacity-100"
                    : "mt-0 max-h-0 opacity-0"
                }
              `}
            >
              <div className="flex flex-col gap-3 border-l border-blue-600 pl-4">

                <Link href="/services/phd-research-support" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  PhD Research Support
                </Link>

                <Link href="/services/thesis-writing-editing" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Thesis Writing & Editing
                </Link>

                <Link href="/services/research-implementation" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Research Implementation
                </Link>

                <Link href="/services/data-analysis" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Data Analysis
                </Link>

                <Link href="/services/publication-support" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Publication Support
                </Link>

                <Link href="/services/plagiarism-checking" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Plagiarism & Similarity Checking
                </Link>

                <Link href="/services/research-documentation" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Research Documentation
                </Link>

                <Link href="/services/presentation-support" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Research Presentation Support
                </Link>

              </div>
            </div>
          </div>

          {/* ABOUT */}
          <div>
            <div className="flex items-center justify-between">
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>

              <button
                type="button"
                onClick={toggleAbout}
                aria-label="Open About menu"
                aria-expanded={aboutOpen}
                className="flex items-center justify-center p-2"
              >
                <span
                  className={`
                    h-2 w-2 rounded-full bg-blue-600
                    transition-transform duration-300
                    ${aboutOpen ? "scale-125" : ""}
                  `}
                />
              </button>
            </div>

            {/* ABOUT SUB MENU */}
            <div
              className={`
                overflow-hidden transition-all duration-300 ease-in-out
                ${
                  aboutOpen
                    ? "mt-3 max-h-60 opacity-100"
                    : "mt-0 max-h-0 opacity-0"
                }
              `}
            >
              <div className="flex flex-col gap-3 border-l border-blue-600 pl-4">

                <Link href="/about" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  About Us
                </Link>

                <Link href="/about/team" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Our Team
                </Link>

                <Link href="/about/gallery" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Gallery
                </Link>

                <Link href="/about/faq" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  FAQ
                </Link>

                <Link href="/about/careers" onClick={closeMenu} className="text-sm text-gray-300 hover:text-blue-600">
                  Careers
                </Link>

              </div>
            </div>
          </div>

          {/* RESEARCH */}
          <Link href="/research" onClick={closeMenu}>
            Research
          </Link>

          {/* CONTACT */}
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>

          {/* PHONE */}
          <div className="border-t pt-4">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-2 font-semibold text-blue-600"
            >
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
