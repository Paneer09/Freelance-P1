


import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import MobileMenu from "./NavbarMobileMenu";
import AboutMenu from "@/components/AboutMenu";
import ServicesMenu from "@/components/ServicesMenu";

export default function Navbar({ activeMenu, setActiveMenu }) {
  return (
    <nav className="fixed top-[64px] left-0 z-[1100] w-full bg-black text-white shadow-md p-1">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-3">

        {/* Left - Logo */}
        <Link href="/" className="flex items-center ml-5">
          <img
            src="/header/bglorm.png"
            alt="ADVIRAH Logo"
            className="h-10 w-auto object-contain sm:h-12"
          />
        </Link>

        {/* Center - Desktop Menu */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          <Link href="/" className="transition-colors hover:text-blue-400">
            Home
          </Link>

          <ServicesMenu />
          <AboutMenu />

          <Link href="/research" className="transition-colors hover:text-blue-400">
            Research
          </Link>

          <Link href="/contact" className="transition-colors hover:text-blue-400">
            Contact
          </Link>
        </div>

        {/* Right - Phone */}
        <a
          href="tel:+919876543210"
          className="hidden shrink-0 items-center gap-2 rounded-xl border border-green-100 p-2 font-semibold text-blue-400 md:flex"
        >
          <FaPhoneAlt />
          <span>+91 98765 43210</span>
        </a>

        {/* Mobile Burger Menu */}
        <div className="flex items-center md:hidden">
          <MobileMenu
            activeMenu={activeMenu}
            setActiveMenu={setActiveMenu}
          />
        </div>

      </div>
    </nav>
  );
}
