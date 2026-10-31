
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      storageKey="advirah-theme"
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
