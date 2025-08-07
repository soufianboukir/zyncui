"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  console.log({ theme });

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex h-8 w-8 items-center justify-center focus:outline-none"
      type="button"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 cursor-pointer text-black/70 dark:text-white/70" />
      ) : (
        <Moon className="h-5 w-5 cursor-pointer text-black/70 dark:text-white/70" />
      )}
    </button>
  );
}
