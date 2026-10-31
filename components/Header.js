

// "use client";

// import {
//   FaEnvelope,
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// import Image from "next/image";
// import Link from "next/link";
// import { FaPhoneAlt, FaChevronDown } from "react-icons/fa";
// import HeaderMobileMenu from "./HeaderMobileMenu";

// export default function Header({ activeMenu, setActiveMenu }) {
//   return (
//     <header className="fixed top-0 left-0 z-[1000] w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">

//       {/* FIRST ROW: Company Logo + Email + Social Icons */}
//       <div className="w-full">
//         <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-[64px]">

//           {/* Company Logo */}
//           <Link href="/" className="flex items-center rounded">
//             <Image
//               src="/header/bgrcmpn.png"
//               alt="ADVIRAH - Research, Publication, Innovation"
//               width={180}
//               height={60}
//               priority
//               className="h-auto w-[140px] object-contain sm:w-[170px]"
//             />
//           </Link>

//           {/* Email + Social Icons */}
//           <div className="hidden md:flex items-center gap-7">

//             {/* Email */}
//             <a
//               href="mailto:info@company.com"
//               className="header-icon-link flex items-center gap-2"
//             >
//               <FaEnvelope />
//               <span>info@company.com</span>
//             </a>

//             {/* Social Media */}
//             <div className="flex items-center gap-5">

//               <a
//                 href="#"
//                 aria-label="Facebook"
//                 className="header-social-icon"
//               >
//                 <FaFacebookF />
//               </a>

//               <a
//                 href="#"
//                 aria-label="Instagram"
//                 className="header-social-icon"
//               >
//                 <FaInstagram />
//               </a>

//               <a
//                 href="#"
//                 aria-label="LinkedIn"
//                 className="header-social-icon"
//               >
//                 <FaLinkedinIn />
//               </a>

//             </div>
//           </div>

//         </div>
//       </div>

//       {/* SECOND ROW: Navigation + Phone */}
// <div className="w-full">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between border border-blue-400/50">

//     {/* Mobile Logo */}
//     <Link href="/" className="flex items-center md:hidden">
//       <Image
//         src="/header/bgrcmpn.png"
//         alt="ADVIRAH"
//         width={140}
//         height={50}
//         className="h-auto w-[100px] object-contain"
//       />
//     </Link>

//     {/* Desktop Navigation */}
//     <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
//       <Link href="/" className="hover:text-blue-400 transition">Home</Link>
//       <Link href="/services" className="flex items-center gap-0.5 hover:text-blue-400 transition">
//         <span>Services</span>
//         <FaChevronDown className="text-[10px]" />
//       </Link>
//       <Link href="/about" className="flex items-center gap-0.5 hover:text-blue-400 transition">
//         <span>About</span>
//         <FaChevronDown className="text-[10px]" />
//       </Link>
//       <Link href="/research" className="flex items-center gap-0.5 hover:text-blue-400 transition">
//         <span>Research</span>
//         <FaChevronDown className="text-[10px]" />
//       </Link>
//       <Link href="/contact" className="flex items-center gap-0.5 hover:text-blue-400 transition">
//         <span>Contact</span>
//         <FaChevronDown className="text-[10px]" />
//       </Link>
//     </nav>

//     {/* Desktop Phone */}
//     <a
//       href="tel:+919876543210"
//       className="hidden md:flex items-center gap-2 rounded-xl border border-gray-400 px-4 py-2 text-blue-400 font-semibold hover:border-blue-400 transition"
//     >
//       <FaPhoneAlt />
//       <span>+91 98765 43210</span>
//     </a>

//     {/* Mobile Menu */}
//     <div className="md:hidden">
//       <HeaderMobileMenu
//         activeMenu={activeMenu}
//         setActiveMenu={setActiveMenu}
//       />
//     </div>

//   </div>
// </div>

//     </header>
//   );
// }


"use client";

import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import HeaderMobileMenu from "./HeaderMobileMenu";

export default function Header({ activeMenu, setActiveMenu }) {
  return (
    <header className="fixed top-0 left-0 z-[1000] w-full bg-primary text-white">

      {/* FIRST ROW: Company Logo + Email + Social Icons + Mobile Menu */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between min-h-[64px]">

          {/* Company Logo */}
          <Link href="/" className="flex items-center rounded">
            <Image
              src="/header/bgrcmpn.png"
              alt="ADVIRAH - Research, Publication, Innovation"
              width={180}
              height={60}
              priority
              className="h-auto w-[140px] object-contain sm:w-[170px]"
            />
          </Link>

          {/* Email + Social Icons */}
          <div className="hidden md:flex items-center gap-7">

            <a
              href="mailto:info@company.com"
              className="header-icon-link flex items-center gap-2"
            >
              <FaEnvelope />
              <span>info@company.com</span>
            </a>

            <div className="flex items-center gap-5">
              <a
                href="#"
                aria-label="Facebook"
                className="header-social-icon"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="header-social-icon"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="header-social-icon"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Header Mobile Menu - beside company logo */}
          <div className="md:hidden">
            <HeaderMobileMenu
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
            />
          </div>

        </div>
      </div>

      {/* SECOND ROW: Navigation + Phone */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between border border-blue-400/50">

          {/* Mobile Logo */}
          <Link href="/" className="flex items-center md:hidden">
            <Image
              src="/header/bgrcmpn.png"
              alt="ADVIRAH"
              width={140}
              height={50}
              className="h-auto w-[100px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-0.5 hover:text-blue-400 transition"
            >
              <span>Services</span>
              <FaChevronDown className="text-[10px]" />
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-0.5 hover:text-blue-400 transition"
            >
              <span>About</span>
              <FaChevronDown className="text-[10px]" />
            </Link>

            <Link
              href="/research"
              className="flex items-center gap-0.5 hover:text-blue-400 transition"
            >
              <span>Research</span>
              <FaChevronDown className="text-[10px]" />
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-0.5 hover:text-blue-400 transition"
            >
              <span>Contact</span>
              <FaChevronDown className="text-[10px]" />
            </Link>
          </nav>

          {/* Desktop Phone */}
          <a
            href="tel:+919876543210"
            className="hidden md:flex items-center gap-2 rounded-xl border border-gray-400 px-4 py-2 text-blue-400 font-semibold hover:border-blue-400 transition"
          >
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </a>

        </div>
      </div>

    </header>
  );
}
