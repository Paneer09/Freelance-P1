"use client";

import { useEffect } from "react";
import { animate } from "framer-motion";

export default function GlobalScrollAnimation({ children }) {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(
              entry.target,
              {
                opacity: 1,
                y: 0,
              },
              {
                duration: 0.8,
                ease: "easeOut",
              }
            );

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(40px)";

      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}