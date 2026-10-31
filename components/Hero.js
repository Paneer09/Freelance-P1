

"use client";

import Orbit from "./HeroOrbit";

export default function Hero() {
  return (
    <section
  className="
    relative
    min-h-0
    overflow-hidden
    bg-black
    text-white
    flex
    flex-col
    items-center
    text-center
    px-4
    sm:px-6
    pt-2
    sm:pt-4
    pb-6
    md:pb-8
  "
>
      {/* =====================================================
          STARFIELD
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        {Array.from({ length: 120 }).map((_, index) => {
          const left = (index * 37.7) % 100;
          const top = (index * 61.3) % 100;
          const size = 0.7 + ((index * 17) % 13) / 10;
          const delay = ((index * 23) % 50) / 10;
          const duration = 2.5 + ((index * 19) % 35) / 10;

          return (
            <span
              key={index}
              className="hero-page-star absolute rounded-full bg-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* =====================================================
          SUBTLE BLUE SPACE GLOW
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[45%]
          z-0
          h-[500px]
          w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-700/[0.07]
          blur-[150px]
        "
      />

      {/* Left blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-[25%]
          z-0
          h-[300px]
          w-[350px]
          rounded-full
          bg-blue-700/[0.05]
          blur-[120px]
        "
      />

      {/* Right blue glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-[15%]
          z-0
          h-[300px]
          w-[350px]
          rounded-full
          bg-blue-700/[0.05]
          blur-[120px]
        "
      />

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      
<div className="relative z-10 flex w-full flex-col items-center text-center">
      

  
{/* Logo + Company Name */}
<div className="flex w-full items-center justify-center gap-2 sm:gap-3 text-center">

  <img
    src="/header/bglorm.png"
    alt="ADVIRAH Logo"
    className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
  />

  <h1 className="m-0 p-0 text-xl font-bold leading-none text-center sm:text-2xl">
    ADVIRAH
  </h1>

</div>


        {/* =================================================
            TAGLINE
        ================================================== */}
        <h2
  className="
    mt-6
    max-w-2xl
    text-2xl
    font-bold
    leading-tight
    sm:mt-8
    sm:text-3xl
    md:text-5xl
  "
>
          <span className="block">
            Building Digital Solutions
          </span>

          <span className="mt-2 block sm:mt-3">
            for Research & Innovation
          </span>
        </h2>

        {/* =================================================
            ORBIT
        ================================================== */}

        <div className="relative flex w-full justify-center sm:mt-2">
          <Orbit />
        </div>
      </div>
    </section>
  );
}