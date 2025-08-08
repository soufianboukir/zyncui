"use client";

import { useEffect, useState, ReactNode } from "react";
import { Link } from "react-scroll";

const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "faqs", label: "FAQs" },
  { id: "whoIsItFor", label: "Who is for?" },
];

interface DocsLayoutProps {
  children: ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [activeId, setActiveId] = useState(sections[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -20% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen">
      <main className="prose dark:prose-invert flex max-w-5xl justify-start md:pl-10">
        {children}
      </main>
      <nav className="fixed top-34 right-10 hidden w-48 flex-col border-gray-200 p-4 2xl:flex dark:border-gray-700">
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
            className={`cursor-pointer rounded px-5 py-0.5 transition-colors ${
              activeId === id
                ? "font-medium text-black dark:text-white"
                : "text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
