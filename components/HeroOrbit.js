"use client";

import { useEffect, useState } from "react";

import {
  GraduationCap,
  FileText,
  Sparkles,
  Send,
  Globe2,
} from "lucide-react";

const researchItems = [
  {
    icon: GraduationCap,
    label: "Research",
    size: 82,
  },
  {
    icon: FileText,
    label: "Thesis",
    size: 76,
  },
  {
    icon: Sparkles,
    label: "Innovation",
    size: 112,
    main: true,
  },
  {
    icon: Send,
    label: "Implementation",
    size: 88,
  },
  {
    icon: Globe2,
    label: "Impact",
    size: 82,
  },
];

/* ---------------------------------------------------------
   STAR DATA
--------------------------------------------------------- */

const stars = Array.from({ length: 75 }, (_, index) => ({
  id: index,

  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,

  size: `${Math.random() * 2 + 0.5}px`,

  delay: `${Math.random() * 5}s`,

  duration: `${Math.random() * 3 + 2}s`,

  opacity: Math.random() * 0.7 + 0.2,
}));

export default function HeroOrbit() {
  const [active, setActive] = useState(2);

  /* -------------------------------------------------------
     CHANGE ACTIVE ICON
  ------------------------------------------------------- */

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => {
        return (current + 1) % researchItems.length;
      });
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
  className="
    hero-space
    relative
    flex
    h-[240px]
    w-full
    items-center
    justify-center
    overflow-hidden
    sm:h-[280px]
    md:h-[320px]
    lg:h-[350px]
  "
>
      {/* =====================================================
          BLACK SPACE
      ====================================================== */}

      <div className="absolute inset-0 bg-black" />

      {/* =====================================================
          STARS
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {stars.map((star) => (
          <span
            key={star.id}
            className="hero-star absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}
      </div>

      {/* =====================================================
          BLUE NEBULA — LEFT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          top-[20%]
          h-[180px]
          w-[320px]
          rounded-full
          bg-blue-700/10
          blur-[100px]

          md:h-[240px]
          md:w-[450px]
        "
      />

      {/* =====================================================
          BLUE NEBULA — RIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-15%]
          bottom-[10%]
          h-[180px]
          w-[320px]
          rounded-full
          bg-blue-700/10
          blur-[100px]

          md:h-[250px]
          md:w-[450px]
        "
      />

      {/* =====================================================
          CENTER ATMOSPHERE
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[170px]
          w-[550px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-800/10
          blur-[100px]

          sm:h-[210px]
          sm:w-[650px]

          md:h-[240px]
          md:w-[800px]
        "
      />

      {/* =====================================================
          HORIZONTAL BLUE LIGHT
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-px
          w-[85%]
          -translate-x-1/2
          -translate-y-1/2
          bg-blue-500/10
          blur-[3px]
        "
      />

      {/* =====================================================
          RESEARCH ICONS
      ====================================================== */}

      <div
        className="
          relative
          z-20
          flex
          w-full
          max-w-[1000px]
          items-center
          justify-center
          gap-2
          px-3

          sm:gap-7
          sm:px-5

          md:gap-12

          lg:gap-16
        "
      >
        {researchItems.map((item, index) => {
          const Icon = item.icon;

          const isActive = active === index;

          return (
            <div
              key={item.label}
              className={`
                relative
                flex
                shrink-0
                items-center
                justify-center

                transition-all
                duration-1000
                ease-[cubic-bezier(0.22,1,0.36,1)]

                ${
                  isActive
                    ? "scale-[1.18] opacity-100"
                    : "scale-[0.82] opacity-45"
                }
              `}
            >
              {/* =================================================
                  HUGE OUTER GLOW
              ================================================== */}

              <Icon
                size={item.size}
                strokeWidth={0.7}
                className="
                  absolute
                  text-blue-700
                  opacity-80
                  blur-[18px]
                "
              />

              {/* =================================================
                  BLUE GLOW
              ================================================== */}

              <Icon
                size={item.size}
                strokeWidth={0.9}
                className="
                  absolute
                  text-blue-500
                  opacity-90
                  blur-[7px]
                "
              />

              {/* =================================================
                  NEON ICON
              ================================================== */}

              <Icon
                size={item.size}
                strokeWidth={
                  isActive ? 1.35 : 1.1
                }
                className={`
                  relative
                  z-10
                  text-blue-300

                  ${
                    isActive
                      ? "hero-neon-active"
                      : ""
                  }
                `}
              />

              {/* =================================================
                  WHITE HOT CORE
              ================================================== */}

              {isActive && (
                <Icon
                  size={item.size}
                  strokeWidth={0.65}
                  className="
                    absolute
                    z-20
                    text-white
                    opacity-80
                  "
                />
              )}

              {/* =================================================
                  ENERGY PARTICLE 1
              ================================================== */}

              {isActive && (
                <span
                  className="
                    absolute
                    left-0
                    top-1/3
                    z-30
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-blue-100
                    shadow-[0_0_10px_4px_rgba(59,130,246,0.9)]
                    animate-energy-one
                  "
                />
              )}

              {/* =================================================
                  ENERGY PARTICLE 2
              ================================================== */}

              {isActive && (
                <span
                  className="
                    absolute
                    right-0
                    bottom-1/3
                    z-30
                    h-[3px]
                    w-[3px]
                    rounded-full
                    bg-blue-200
                    shadow-[0_0_10px_4px_rgba(59,130,246,0.9)]
                    animate-energy-two
                  "
                />
              )}

              {/* =================================================
                  ENERGY PARTICLE 3
              ================================================== */}

              {isActive && (
                <span
                  className="
                    absolute
                    right-0
                    top-0
                    z-30
                    h-[2px]
                    w-[2px]
                    rounded-full
                    bg-white
                    shadow-[0_0_8px_3px_rgba(96,165,250,0.9)]
                    animate-energy-three
                  "
                />
              )}

              {/* =================================================
                  LABEL
              ================================================== */}

              <span
                className={`
                  absolute
                  top-full
                  mt-4
                  whitespace-nowrap
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.2em]

                  transition-all
                  duration-700

                  sm:text-[8px]

                  md:text-[9px]

                  ${
                    isActive
                      ? "translate-y-0 text-blue-200 opacity-100"
                      : "translate-y-2 text-blue-500 opacity-0"
                  }
                `}
              >
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          EXTRA LARGE CENTRAL GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-10
          h-[90px]
          w-[220px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/10
          blur-[70px]

          md:h-[130px]
          md:w-[300px]
        "
      />

      {/* =====================================================
          FOREGROUND TINY STARS
      ====================================================== */}

      <span
        className="
          absolute
          left-[15%]
          top-[27%]
          z-10
          h-[2px]
          w-[2px]
          rounded-full
          bg-blue-300
          shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]
          animate-tiny-star
        "
      />

      <span
        className="
          absolute
          left-[27%]
          bottom-[25%]
          z-10
          h-[2px]
          w-[2px]
          rounded-full
          bg-blue-400
          shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]
          animate-tiny-star-delay
        "
      />

      <span
        className="
          absolute
          right-[18%]
          top-[23%]
          z-10
          h-[2px]
          w-[2px]
          rounded-full
          bg-blue-300
          shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]
          animate-tiny-star
        "
      />

      <span
        className="
          absolute
          right-[28%]
          bottom-[20%]
          z-10
          h-[2px]
          w-[2px]
          rounded-full
          bg-blue-400
          shadow-[0_0_10px_3px_rgba(59,130,246,0.7)]
          animate-tiny-star-delay
        "
      />
    </div>
  );
}