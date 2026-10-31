

"use client";

import {
  FaBars,
  FaTimes,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function HeaderMobileMenu({ activeMenu, setActiveMenu }) {
  const open = activeMenu === "header";

  const handleClick = () => {
    setActiveMenu(open ? null : "header");
  };

  return (
    <div className="relative md:hidden">
      {/* Burger */}
      <button
        type="button"
        onClick={handleClick}
        aria-label={open ? "Close header menu" : "Open header menu"}
        aria-expanded={open}
        className="flex h-10 w-10 items-center justify-center text-xl text-white"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Content */}
      <div
        className={`
          fixed right-4 top-[136px]
          w-72 max-w-[90vw]
          bg-black text-white
          shadow-lg rounded-lg
          p-5 z-[1200]
          transition-all duration-300 ease-in-out
          ${
            open
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col gap-4">

          <div className="font-semibold text-lg">
            ADVIRAH
          </div>

          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-blue-400" />
            <span>Nagercoil, Tamil Nadu</span>
          </div>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-3"
          >
            <FaPhoneAlt className="text-blue-400" />
            <span>+91 98765 43210</span>
          </a>

          <a
            href="mailto:info@company.com"
            className="flex items-center gap-3"
          >
            <FaEnvelope className="text-blue-400" />
            <span>info@company.com</span>
          </a>

          <div className="border-t border-gray-700 pt-4">
            <p className="font-semibold mb-2">Follow Us</p>

            <div className="flex gap-4">
              <span>Facebook</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

