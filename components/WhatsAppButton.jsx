"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "919876543210";

  const message = encodeURIComponent(
    "Hello, I would like to know more about your research support services."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[9999]
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-lg
        shadow-green-500/30
        transition-all
        duration-300
        hover:scale-110
        hover:bg-green-400
        md:bottom-7
        md:right-7
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}