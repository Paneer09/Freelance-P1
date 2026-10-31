"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you provide?",
      answer:
        "We provide research and technology services including PhD thesis support, software implementations, journal manuscripts, research methodology, statistical analysis, proofreading, and editing.",
    },
    {
      question: "Do you work with PhD researchers?",
      answer:
        "Yes. We support researchers throughout different stages of their academic research, from research planning and methodology to analysis, documentation, and manuscript preparation.",
    },
    {
      question: "Can you develop software for research projects?",
      answer:
        "Yes. We develop customized software implementations based on the requirements of research projects and organizations.",
    },
    {
      question: "Do you provide statistical analysis?",
      answer:
        "Yes. We provide statistical analysis and data visualization services using appropriate analytical techniques and tools based on the research requirements.",
    },
    {
      question: "Can you help with journal manuscripts?",
      answer:
        "Yes. We assist with manuscript preparation, structuring, technical content, proofreading, editing, and presentation according to the project requirements.",
    },
    {
      question: "How do I start a project?",
      answer:
        "You can contact us through the Contact page. Share your research or project requirements with us, and our team can discuss the next steps with you.",
    },
    {
      question: "Do you customize your services?",
      answer:
        "Yes. Each research or technology project can have different requirements, so our services can be structured according to the specific project needs.",
    },
    {
      question: "How can I contact your team?",
      answer:
        "You can reach us through the contact details provided on our Contact page.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* HERO */}

      <section className="relative py-28 px-6 text-center">

        <div className="absolute top-10 left-[10%] w-72 h-72 bg-blue-600/20 rounded-full blur-[130px] animate-pulse" />

        <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] animate-pulse" />

        <div className="relative z-10 max-w-4xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-bold">
            Questions?
            <span className="block bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            Find answers to some of the most common questions about
            our research and technology services.
          </p>

        </div>

      </section>


      {/* FAQ */}

      <section className="px-6 pb-28">

        <div className="max-w-4xl mx-auto space-y-4">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border overflow-hidden transition-all duration-500 animate-[faqUp_0.5s_ease-out_both] ${
                  isOpen
                    ? "border-blue-500/50 bg-blue-500/5"
                    : "border-gray-800 bg-gray-950/70 hover:border-gray-700"
                }`}
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between gap-5 p-6 text-left"
                >

                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>

                  <span className="shrink-0 w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-blue-400">

                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}

                  </span>

                </button>


                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 pb-28">

        <div className="max-w-4xl mx-auto text-center rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-black to-violet-500/10 p-12">

          <h2 className="text-3xl md:text-4xl font-bold">
            Still Have Questions?
          </h2>

          <p className="mt-4 text-gray-400">
            Our team would be happy to discuss your requirements.
          </p>

          <a
            href="/contact"
            className="inline-block mt-7 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>

        </div>

      </section>


      <style jsx>{`

        @keyframes faqUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>

    </main>
  );
}