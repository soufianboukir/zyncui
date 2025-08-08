import Link from "next/link";
import React from "react";

export const Footer = () => {
    return (
        <footer className="border-t border-black/10 dark:border-white/10">
            <div className="flex md:flex-row flex-col items-center text-center md:text-left md:items-start md:justify-between gap-10 py-12 px-10 mx-auto" >
                
                <div className="md:w-[25%]">
                    <Link
                        className="flex cursor-pointer items-center gap-1 mb-4 justify-center md:justify-start"
                        href="/"
                    >
                        <span className="text-xl font-semibold text-black dark:text-white">
                        zyncUI
                        </span>
                    </Link>
                    <p className="text-black/70 dark:text-white/70 text-sm leading-relaxed">
                        A modern UI component library built with Next.js and Tailwind CSS,
                        offering ready-to-use page sections and layouts. <br /> <br />
                        Including authentication pages, dashboard templates, marketing
                        sections, and more.
                    </p>
                </div>

                <div>
                <h2 className="text-lg font-medium text-black dark:text-white">
                    Quick links
                </h2>
                <nav className="text-sm dark:text-white/70 text-black/70 flex flex-col gap-2 mt-3">
                    <Link href="/docs/introduction">Introduction</Link>
                    <Link href="/docs/introduction">Who is it for?</Link>
                    <Link href="/docs/introduction">Getting started</Link>
                    <Link href="/docs/blocks">Pricing</Link>
                </nav>
                </div>

                <div>
                <h2 className="text-lg font-medium text-black dark:text-white">
                    Blocks
                </h2>
                <nav className="text-sm dark:text-white/70 text-black/70 flex flex-col gap-2 mt-3">
                    <Link href="/docs/introduction">Authentication</Link>
                    <Link href="/docs/introduction">Hero sections</Link>
                    <Link href="/docs/introduction">Footer sections</Link>
                </nav>
                </div>

                <div>
                <h2 className="text-lg font-medium text-black dark:text-white">
                    Contact
                </h2>
                <nav className="text-sm dark:text-white/70 text-black/70 flex flex-col gap-2 mt-3">
                    <Link href="/docs/introduction">Email</Link>
                    <Link href="/docs/introduction">Twitter</Link>
                    <Link href="/docs/introduction">LinkedIn</Link>
                </nav>
                </div>

                <div>
                <h2 className="text-lg font-medium text-black dark:text-white">
                    Legal
                </h2>
                <nav className="text-sm dark:text-white/70 text-black/70 flex flex-col gap-2 mt-3">
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
