"use client";

import { useEffect, useState, ReactNode, useCallback } from "react";
import { Link } from "react-scroll";

interface Section {
  id: string;
  label: string;
}

interface DocsLayoutProps {
  children: ReactNode;
  sections: Section[];
}

export default function DocsLayout({ children, sections }: DocsLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  const checkActiveSection = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const viewportCenter = window.scrollY + viewportHeight / 2;

    for (const { id } of sections) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementBottom = elementTop + rect.height;
      const elementMiddle = (elementTop + elementBottom) / 2;

      if (Math.abs(elementMiddle - viewportCenter) < viewportHeight * 0.25) {
        setActiveId(id);
        break;
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener("scroll", checkActiveSection);
    window.addEventListener("resize", checkActiveSection);
    checkActiveSection();

    return () => {
      window.removeEventListener("scroll", checkActiveSection);
      window.removeEventListener("resize", checkActiveSection);
    };
  }, [checkActiveSection]);

  return (
    <div className="flex min-h-screen">
      <main className="prose dark:prose-invert flex w-full justify-start md:max-w-5xl md:pl-10">
        {children}
      </main>
      <nav className="fixed top-34 right-14 hidden flex-col border-gray-200 p-4 2xl:flex dark:border-gray-700">
        <p className="mb-3 font-medium">On this page</p>
        {sections.map(({ id, label }) => (
          <Link
            key={id}
            to={id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-100}
            onSetActive={to => setActiveId(to)}
            className={`cursor-pointer rounded py-0.5 pl-4 transition-colors ${
              activeId === id
                ? "rounded-none border-l-2 border-l-blue-500 text-black dark:text-white"
                : "rounded-none border-l-2 border-l-white text-black/60 hover:text-black dark:border-l-black dark:text-white/60 dark:hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
