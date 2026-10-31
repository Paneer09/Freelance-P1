"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Clock,
} from "lucide-react";

export default function Contact() {
  const [activeCard, setActiveCard] = useState(0);

  const contactCards = [
    {
      title: "Email Us",
      value: "info@yourcompany.com",
      description: "Send us your requirements",
      icon: Mail,
    },
    {
      title: "Call Us",
      value: "+91 98765 43210",
      description: "Let's discuss your project",
      icon: Phone,
    },
    {
      title: "Visit Us",
      value: "Nagercoil, Tamil Nadu",
      description: "Our office location",
      icon: MapPin,
    },
  ];

  const card = contactCards[activeCard];
  const CardIcon = card.icon;

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % contactCards.length);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[65vh] flex items-center justify-center px-6">

        {/* Background glow */}

        <div className="absolute top-10 left-[5%] w-80 h-80 bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />

        <div className="absolute bottom-0 right-[5%] w-96 h-96 bg-violet-600/20 rounded-full blur-[150px] animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm animate-[fadeIn_0.8s_ease-out]">
            <Mail size={16} />
            Get In Touch
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-bold leading-tight animate-[heroUp_0.8s_ease-out]">
            Let's Start a
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Conversation
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed">
            Have a research idea, software requirement, or project in mind?
            Tell us about it and let's explore how we can work together.
          </p>

          <a
            href="#contact-details"
            className="inline-flex items-center gap-2 mt-9 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </a>

        </div>
      </section>


      {/* =====================================================
          MAP + LOCATION
      ===================================================== */}

      <section
        id="contact-details"
        className="px-6 py-24"
      >

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
              Find Us
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              Our Location
            </h2>

            <p className="mt-5 text-gray-400">
              We are here to connect, collaborate, and build together.
            </p>

          </div>


          <div className="grid lg:grid-cols-5 gap-8 items-stretch">

            {/* MAP */}

            <div className="lg:col-span-3 relative min-h-[450px] rounded-3xl overflow-hidden border border-gray-800 bg-gray-950">

              {/* Replace this iframe URL with your actual location */}

              <iframe
                src="https://www.google.com/maps?q=Nagercoil,Tamil%20Nadu,India&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />

              {/* Map overlay */}

              <div className="absolute bottom-5 left-5 right-5 pointer-events-none">

                <div className="inline-flex items-center gap-3 px-5 py-4 rounded-2xl bg-black/80 backdrop-blur-md border border-gray-700">

                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="font-semibold">
                      Our Office
                    </p>

                    <p className="text-sm text-gray-400">
                      Nagercoil, Tamil Nadu
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* LOCATION INFORMATION */}

            <div className="lg:col-span-2 rounded-3xl border border-gray-800 bg-gray-950 p-8 md:p-10 flex flex-col justify-center">

              <p className="text-blue-400 text-sm uppercase tracking-widest">
                Come Visit
              </p>

              <h3 className="mt-4 text-3xl font-bold">
                We'd Love To Meet You
              </h3>

              <p className="mt-5 text-gray-400 leading-relaxed">
                Whether you want to discuss a research project,
                software implementation, or collaboration,
                our team is ready to hear from you.
              </p>


              <div className="mt-8 space-y-5">

                <div className="flex gap-4">

                  <MapPin className="text-blue-400 shrink-0" />

                  <div>
                    <p className="font-medium">
                      Address
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Your Company Address,
                      Nagercoil, Tamil Nadu, India
                    </p>
                  </div>

                </div>


                <div className="flex gap-4">

                  <Clock className="text-blue-400 shrink-0" />

                  <div>
                    <p className="font-medium">
                      Working Hours
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          ROTATING CONTACT CARDS
      ===================================================== */}

      <section className="px-6 py-28 bg-gray-950/40">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-4xl md:text-5xl font-bold">
              We're Just a Message Away
            </h2>

            <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
              Choose the easiest way to reach us.
            </p>

          </div>


          {/* ROTATING CARD */}

          <div className="flex justify-center">

            <div
              className="relative w-full max-w-md h-[330px]"
              style={{
                perspective: "1200px",
              }}
            >

              <div
                key={activeCard}
                className="absolute inset-0 cursor-pointer"
                onClick={nextCard}
                style={{
                  animation: "cardRotate 0.7s ease-out",
                  transformStyle: "preserve-3d",
                }}
              >

                <div className="absolute inset-0 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-black to-violet-500/10 p-8 flex flex-col justify-between overflow-hidden">

                  {/* Glow */}

                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-[80px]" />


                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <CardIcon size={30} />
                      </div>

                      <span className="text-xs uppercase tracking-widest text-gray-500">
                        0{activeCard + 1} / 03
                      </span>

                    </div>


                    <p className="mt-8 text-blue-400 text-sm uppercase tracking-widest">
                      {card.title}
                    </p>

                    <h3 className="mt-3 text-2xl md:text-3xl font-bold break-words">
                      {card.value}
                    </h3>

                    <p className="mt-3 text-gray-400">
                      {card.description}
                    </p>

                  </div>


                  <div className="relative z-10 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      Click to rotate
                    </span>

                    <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center">
                      <ArrowRight size={18} />
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* CARD DOTS */}

          <div className="flex justify-center gap-3 mt-8">

            {contactCards.map((_, index) => (

              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeCard === index
                    ? "w-10 bg-blue-500"
                    : "w-2 bg-gray-700"
                }`}
              />

            ))}

          </div>

        </div>

      </section>  


      {/* =====================================================
          CONTACT FORM
      ===================================================== */}

      {/* <section className="px-6 py-28">

        <div className="max-w-6xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-14 items-center"> */}

            {/* LEFT */}

            {/* <div>

              <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
                Start A Project
              </p>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Tell Us About
                <span className="block text-blue-400">
                  Your Project
                </span>
              </h2>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-lg">
                Share your requirements with us. Whether it is
                research, software development, data analysis,
                or another project, we'd love to hear from you.
              </p>

              <div className="mt-8 h-[2px] w-20 bg-blue-500" />

            </div> */}


            {/* FORM */}

            {/* <form className="p-8 md:p-10 rounded-3xl border border-gray-800 bg-gray-950">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="text-sm text-gray-400">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-gray-800 outline-none focus:border-blue-500 transition-colors"
                  />
                </div>


                <div>
                  <label className="text-sm text-gray-400">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-gray-800 outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

              </div> */}


              {/* <div className="mt-5">

                <label className="text-sm text-gray-400">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-gray-800 outline-none focus:border-blue-500 transition-colors"
                />

              </div>


              <div className="mt-5">

                <label className="text-sm text-gray-400">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your project..."
                  className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-gray-800 outline-none focus:border-blue-500 transition-colors resize-none"
                />

              </div>


              <button
                type="submit"
                className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>

      </section> */}


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="px-6 pb-28">

        <div className="relative max-w-6xl mx-auto rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-black to-violet-500/10 p-12 md:p-20 text-center overflow-hidden">

          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

          <div className="relative z-10">

            <h2 className="text-3xl md:text-5xl font-bold">
              Have Something In Mind?
            </h2>

            <p className="mt-5 text-gray-400 max-w-xl mx-auto">
              Don't hesitate to reach out. Every great project
              starts with a conversation.
            </p>

            <a
              href="mailto:info@yourcompany.com"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300"
            >
              <Mail size={18} />
              Email Us
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`

        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }

        @keyframes heroUp {
          from {
            opacity: 0;
            transform: translateY(35px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardRotate {
          0% {
            opacity: 0;
            transform: rotateY(-90deg) scale(0.9);
          }

          100% {
            opacity: 1;
            transform: rotateY(0deg) scale(1);
          }
        }

      `}</style>

    </main>
  );
}