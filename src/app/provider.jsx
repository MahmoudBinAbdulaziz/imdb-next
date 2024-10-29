"use client";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function Provider({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid rendering until mounted

  return (
    <ThemeProvider
      defaultTheme="system"
      attribute="class"
      enableSystem
      //   forcedTheme={isMounted ? "dark" : "light"}
    >
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
