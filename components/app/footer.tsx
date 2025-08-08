import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex flex-col items-center gap-10 px-10 py-12 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="md:w-[25%]">
          <Link
            className="mb-4 flex cursor-pointer items-center justify-center gap-1 md:justify-start"
            href="/"
          >
            <span className="text-xl font-semibold text-black dark:text-white">zyncUI</span>
          </Link>
          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
            A modern UI component library built with Next.js and Tailwind CSS, offering ready-to-use
            page sections and layouts. <br /> <br />
            Including authentication pages, dashboard templates, marketing sections, and more.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-medium text-black dark:text-white">Quick links</h2>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-black/70 dark:text-white/70">
            <Link href="/docs/introduction">Introduction</Link>
            <Link href="/docs/introduction">Who is it for?</Link>
            <Link href="/docs/introduction">Getting started</Link>
            <Link href="/docs/blocks">Pricing</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-medium text-black dark:text-white">Blocks</h2>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-black/70 dark:text-white/70">
            <Link href="/docs/introduction">Authentication</Link>
            <Link href="/docs/introduction">Hero sections</Link>
            <Link href="/docs/introduction">Footer sections</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-medium text-black dark:text-white">Contact</h2>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-black/70 dark:text-white/70">
            <Link href="/docs/introduction">Email</Link>
            <Link href="/docs/introduction">Twitter</Link>
            <Link href="/docs/introduction">LinkedIn</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-lg font-medium text-black dark:text-white">Legal</h2>
          <nav className="mt-3 flex flex-col gap-2 text-sm text-black/70 dark:text-white/70">
            <Link href="/terms-of-service">Terms of service</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </nav>
        </div>
      </div>

      <div className="py-4">
        <p className="text-center text-sm text-black/60 dark:text-white/60">
          © 2025 zyncUI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
