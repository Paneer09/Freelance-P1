// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import {
//   GraduationCap,
//   FileText,
//   Code2,
//   BarChart3,
//   BookOpen,
//   ShieldCheck,
//   ClipboardList,
//   Presentation,
//   ChevronDown,
// } from "lucide-react";

// const serviceItems = [
//   {
//     title: "PhD Research Support",
//     description: "Guidance throughout your research journey",
//     href: "/services/phd-research-support",
//     icon: GraduationCap,
//   },
//   {
//     title: "Thesis Writing & Editing",
//     description: "Writing, editing and proofreading support",
//     href: "/services/thesis-writing-editing",
//     icon: FileText,
//   },
//   {
//     title: "Research Implementation",
//     description: "Software and technical implementation",
//     href: "/services/research-implementation",
//     icon: Code2,
//   },
//   {
//     title: "Data Analysis",
//     description: "Statistical analysis and visualization",
//     href: "/services/data-analysis",
//     icon: BarChart3,
//   },
//   {
//     title: "Publication Support",
//     description: "Manuscript and journal preparation",
//     href: "/services/publication-support",
//     icon: BookOpen,
//   },
//   {
//     title: "Plagiarism Checking",
//     description: "Similarity and originality checking",
//     href: "/services/plagiarism-checking",
//     icon: ShieldCheck,
//   },
//   {
//     title: "Research Documentation",
//     description: "Technical and research documentation",
//     href: "/services/research-documentation",
//     icon: ClipboardList,
//   },
//   {
//     title: "Research Presentation Support",
//     description: "PPT and research presentation support",
//     href: "/services/presentation-support",
//     icon: Presentation,
//   },
// ];

// export default function ServicesMenu() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div
//       className="relative z-[100]"
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//     >
//       {/* SERVICES + DOT */}
//       <div className="flex items-center gap-1">

//         {/* Services */}
//         <Link
//           href="/services"
//           className="
//             rounded-md px-3 py-2
//             text-sm font-medium
//             text-white
//             transition-colors
//             hover:text-blue-600
//           "
//         >
//           Services
//         </Link>

//         {/* MOBILE DOT */}
//         <button
//           type="button"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             setIsOpen((prev) => !prev);
//           }}
//           className="
//             flex h-8 w-8
//             items-center justify-center
//             rounded-full
//             md:hidden
//           "
//           aria-label="Open Services menu"
//           aria-expanded={isOpen}
//         >
//           <span
//             className={`
//               h-2.5 w-2.5
//               rounded-full
//               bg-blue-600
//               transition-all duration-300
//               ${isOpen ? "scale-125" : ""}
//             `}
//           />
//         </button>

//         {/* DESKTOP ARROW */}
//         <button
//           type="button"
//           onClick={() => setIsOpen((prev) => !prev)}
//           className="
//             hidden
//             h-8 w-8
//             items-center justify-center
//             rounded-full
//             md:flex
//           "
//           aria-label="Open Services menu"
//           aria-expanded={isOpen}
//         >
//           <ChevronDown
//             size={15}
//             className={`
//               text-blue-600
//               transition-transform duration-300
//               ${isOpen ? "rotate-180" : ""}
//             `}
//           />
//         </button>
//       </div>

//       {/* DROPDOWN */}
//       <div
//         className={`
//           absolute
//           left-1/2
//           top-full
//           z-[9999]
//           -translate-x-1/2
//           pt-3
//           w-[calc(100vw-2rem)]
//           max-w-[360px]
//           md:w-[500px]
//           md:max-w-none
//           transition-all
//           duration-300
//           ${
//             isOpen
//               ? "visible translate-y-0 opacity-100"
//               : "invisible -translate-y-2 opacity-0 pointer-events-none"
//           }
//         `}
//       >
//         <div
//           className="
//             overflow-hidden
//             rounded-2xl
//             border border-white/10
//             bg-neutral-950/95
//             p-3
//             shadow-2xl
//             shadow-blue-950/30
//             backdrop-blur-xl
//           "
//         >

//           {/* HEADER */}
//           <div className="px-3 pb-3 pt-2">
//             <p
//               className="
//                 text-xs
//                 font-semibold
//                 uppercase
//                 tracking-[0.25em]
//                 text-blue-600
//               "
//             >
//               Explore
//             </p>

//             <h3
//               className="
//                 mt-1
//                 text-lg
//                 font-semibold
//                 text-white
//               "
//             >
//               Our Services
//             </h3>
//           </div>

//           {/* MENU ITEMS */}
//           <div
//             className="
//               grid
//               grid-cols-1
//               gap-1
//               md:grid-cols-2
//             "
//           >
//             {serviceItems.map((item) => {
//               const Icon = item.icon;

//               return (
//                 <Link
//                   key={item.title}
//                   href={item.href}
//                   onClick={() => setIsOpen(false)}
//                   className="
//                     group
//                     flex
//                     items-center
//                     gap-3
//                     rounded-xl
//                     p-3
//                     transition-all
//                     duration-200
//                     hover:bg-blue-500/10
//                   "
//                 >

//                   {/* ICON */}
//                   <div
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-xl
//                       border
//                       border-white/10
//                       bg-white/5
//                       text-blue-600
//                       transition-all
//                       group-hover:border-blue-400/40
//                       group-hover:bg-blue-500/15
//                     "
//                   >
//                     <Icon
//                       size={19}
//                       strokeWidth={1.8}
//                     />
//                   </div>

//                   {/* TEXT */}
//                   <div className="min-w-0">
//                     <p
//                       className="
//                         text-sm
//                         font-medium
//                         text-white
//                         transition-colors
//                         group-hover:text-blue-400
//                       "
//                     >
//                       {item.title}
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-xs
//                         text-neutral-400
//                       "
//                     >
//                       {item.description}
//                     </p>
//                   </div>

//                 </Link>
//               );
//             })}
//           </div>

//           {/* FOOTER */}
//           <div
//             className="
//               mt-2
//               border-t
//               border-white/10
//               px-3
//               pt-3
//             "
//           >
//             <p className="text-xs text-neutral-500">
//               Research. Innovation. Impact.
//             </p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  FileText,
  Code2,
  BarChart3,
  BookOpen,
  ShieldCheck,
  ClipboardList,
  Presentation,
  ChevronDown,
} from "lucide-react";

const serviceItems = [
  {
    title: "PhD Research Support",
    description: "Guidance throughout your research journey",
    href: "/services/phd-research-support",
    icon: GraduationCap,
  },
  {
    title: "Thesis Writing & Editing",
    description: "Writing, editing and proofreading support",
    href: "/services/thesis-writing-editing",
    icon: FileText,
  },
  {
    title: "Research Implementation",
    description: "Software and technical implementation",
    href: "/services/research-implementation",
    icon: Code2,
  },
  {
    title: "Data Analysis",
    description: "Statistical analysis and visualization",
    href: "/services/data-analysis",
    icon: BarChart3,
  },
  {
    title: "Publication Support",
    description: "Manuscript and journal preparation",
    href: "/services/publication-support",
    icon: BookOpen,
  },
  {
    title: "Plagiarism Checking",
    description: "Similarity and originality checking",
    href: "/services/plagiarism-checking",
    icon: ShieldCheck,
  },
  {
    title: "Research Documentation",
    description: "Technical and research documentation",
    href: "/services/research-documentation",
    icon: ClipboardList,
  },
  {
    title: "Research Presentation Support",
    description: "PPT and research presentation support",
    href: "/services/presentation-support",
    icon: Presentation,
  },
];

export default function ServicesMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setIsOpen(true);
  };

  const closeMenu = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = setTimeout(() => {
      setIsOpen(false);
      closeTimer.current = null;
    }, 300);
  };

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      openMenu();
    }
  };

  const handleItemClick = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }

    setIsOpen(false);
  };

  return (
    <div
      className="relative z-[100]"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      {/* SERVICES BUTTON */}
      <div className="flex items-center gap-1">
        <Link
          href="/services/phd-research-support"
          className="
            rounded-md px-3 py-2
            text-sm font-medium
            text-white
            transition-colors
            hover:text-blue-600
          "
        >
          Services
        </Link>

        {/* MOBILE DOT */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
          }}
          className="
            flex h-8 w-8
            items-center justify-center
            rounded-full
            md:hidden
          "
          aria-label="Open Services menu"
          aria-expanded={isOpen}
        >
          <span
            className={`
              h-2.5 w-2.5
              rounded-full
              bg-blue-600
              transition-all duration-300
              ${isOpen ? "scale-125" : ""}
            `}
          />
        </button>

        {/* DESKTOP ARROW */}
        <button
          type="button"
          onClick={toggleMenu}
          className="
            hidden
            h-8 w-8
            items-center justify-center
            rounded-full
            md:flex
          "
          aria-label="Open Services menu"
          aria-expanded={isOpen}
        >
          <ChevronDown
            size={15}
            className={`
              text-blue-600
              transition-transform duration-300
              ${isOpen ? "rotate-180" : ""}
            `}
          />
        </button>
      </div>

      {/* DROPDOWN */}
      <div
        className={`
          absolute
          left-1/2
          top-full
          z-[9999]
          -translate-x-1/2
          pt-2

          w-[calc(100vw-2rem)]
          max-w-[360px]

          md:w-[500px]
          md:max-w-none

          transition-all
          duration-300

          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0 pointer-events-none"
          }
        `}
      >
        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-white/10
            bg-neutral-950/95
            p-3
            shadow-2xl
            shadow-blue-950/30
            backdrop-blur-xl
          "
        >
          {/* HEADER */}
          <div className="px-3 pb-3 pt-2">
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-blue-600
              "
            >
              Explore
            </p>

            <h3
              className="
                mt-1
                text-lg
                font-semibold
                text-white
              "
            >
              Our Services
            </h3>
          </div>

          {/* SERVICES */}
          <div
            className="
              grid
              grid-cols-1
              gap-1
              md:grid-cols-2
            "
          >
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={handleItemClick}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    p-3
                    transition-all
                    duration-200
                    hover:bg-blue-500/10
                  "
                >
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      text-blue-600
                      transition-all
                      group-hover:border-blue-400/40
                      group-hover:bg-blue-500/15
                    "
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-sm
                        font-medium
                        text-white
                        transition-colors
                        group-hover:text-blue-400
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1
                        text-xs
                        text-neutral-400
                      "
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* FOOTER */}
          <div
            className="
              mt-2
              border-t
              border-white/10
              px-3
              pt-3
            "
          >
            <p className="text-xs text-neutral-500">
              Research. Innovation. Impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}