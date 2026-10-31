"use client";

import { useState } from "react";
import { X, Images } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const gallery = [
    {
      image: "/gallery/image1.png",
      title: "Research & Innovation",
    },
    {
      image: "/gallery/image2.png",
      title: "Research Projects",
    },
    {
      image: "/gallery/image3.png",
      title: "Technology & Development",
    },
    {
      image: "/gallery/image4.png",
      title: "Data & Analytics",
    },
    {
      image: "/gallery/image5.png",
      title: "Academic Collaboration",
    },
    {
      image: "/gallery/image6.png",
      title: "Our Workspace",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative py-28 px-6 text-center">

        <div className="absolute top-10 left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[130px] animate-pulse" />

        <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            <Images size={16} />
            Gallery
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-bold">
            A Glimpse Into
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Our Work
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Explore moments, projects, collaborations, and the work
            behind our research and technology solutions.
          </p>

        </div>

      </section>


      {/* GALLERY */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {gallery.map((item, index) => (

              <button
                key={item.image}
                onClick={() => setSelectedImage(item)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-gray-800 bg-gray-950 text-left animate-[galleryUp_0.6s_ease-out_both]"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6">

                  <h3 className="text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    View image
                  </p>

                </div>

              </button>

            ))}

          </div>

        </div>

      </section>


      {/* IMAGE MODAL */}

      {selectedImage && (

        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-11 h-11 rounded-full border border-gray-700 bg-black flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition-all"
          >
            <X size={22} />
          </button>

          <div
            className="max-w-5xl w-full animate-[galleryOpen_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />

            <h3 className="text-center text-xl font-semibold mt-5">
              {selectedImage.title}
            </h3>

          </div>

        </div>

      )}


      <style jsx>{`

        @keyframes galleryUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes galleryOpen {
          from {
            opacity: 0;
            transform: scale(0.92);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

      `}</style>

    </main>
  );
}