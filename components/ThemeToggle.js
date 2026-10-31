"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa6";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        fixed bottom-24 right-5 z-[999]
        flex h-12 w-12 items-center justify-center
        rounded-full border border-violet-500/40
        bg-white text-violet-700 shadow-lg
        transition-all duration-300
        hover:scale-110 hover:bg-violet-600 hover:text-white
        dark:bg-[#15121d] dark:text-yellow-300
        dark:hover:bg-violet-600 dark:hover:text-white
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-violet-500
      "
    >
      {isDark ? (
        <FaSun size={19} aria-hidden="true" />
      ) : (
        <FaMoon size={19} aria-hidden="true" />
      )}
    </button>
  );
}
