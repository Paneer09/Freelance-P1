import Image from "next/image";
import Link from "next/link";

export default function Welcome() {
  const shapes = [
    {
      type: "circle",
      image: "/welcome/image8.png",
    },
    {
      type: "square",
      image: "/welcome/image1.png",
    },
    {
      type: "rectangle",
      image: "/welcome/image2.png",
    },
    {
      type: "triangle",
      image: "/welcome/image3.png",
    },

    // Duplicate for continuous scrolling
    {
      type: "circle",
      image: "/welcome/image4.png",
    },
    {
      type: "square",
      image: "/welcome/image5.png",
    },
    {
      type: "rectangle",
      image: "/welcome/image6.png",
    },
    {
      type: "triangle",
      image: "/welcome/image7.png",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT - SHAPE CAROUSEL */}
        <div className="relative h-[650px] overflow-hidden flex justify-center">

          {/* Top fade */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

          {/* Shape Track */}
          <div className="shape-scroll flex flex-col items-center gap-14">

            {shapes.map((shape, index) => (
              <div
                key={index}
                className={`
                  overflow-hidden
                  flex-shrink-0
                  border
                  border-violet-500/40
                  shadow-[0_0_35px_rgba(139,92,246,0.35)]
                  hover:shadow-[0_0_50px_rgba(139,92,246,0.65)]
                  transition-all
                  duration-500
                  ${
                    shape.type === "circle"
                      ? "w-72 h-72 rounded-full"
                      : shape.type === "square"
                      ? "w-72 h-72 rounded-2xl"
                      : shape.type === "rectangle"
                      ? "w-[420px] h-60 rounded-2xl"
                      : "w-72 h-72"
                  }
                `}
              >

                {shape.type === "triangle" ? (
                  <div className="relative w-full h-full">
                    <div
                      className="
                        absolute
                        inset-0
                        bg-violet-600
                        clip-triangle
                        overflow-hidden
                      "
                    >
                      <Image
                        src={shape.image}
                        alt="Company service"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <Image
                      src={shape.image}
                      alt="Company service"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>

        {/* RIGHT - COMPANY INTRO */}
        <div className="max-w-xl">

          <p className="text-violet-400 uppercase tracking-[0.3em] text-sm font-medium mb-5">
            Welcome to ADVIRAH
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-7">
            Where Ideas Meet
            <span className="text-violet-500"> Expertise</span>
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            At Company name, we turn ideas into meaningful solutions through research, technology, and innovation. We bring expertise and creativity together to transform your vision into real-world impact.
          </p>

          <p className="text-gray-400 leading-7 mb-8">
            From research and publication support to software development,
            data analysis, and technology-driven solutions, we help
            researchers, scholars, and businesses move forward with
            confidence.
          </p>

          <Link
  href="/contact"
  className="
    inline-block
    px-7
    py-3
    rounded-full
    border
    border-violet-500
    text-white
    hover:bg-violet-600
    transition-all
    duration-300
    shadow-[0_0_20px_rgba(139,92,246,0.25)]
    hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]
  "
>
  Give Life to Your Ideas
</Link>
        </div>

      </div>
    </section>
  );
}