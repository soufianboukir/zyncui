"use client";

import { Menu, ArrowRight, Play, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { useEffect, useState } from "react";

export default function HeroSection2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById("mobile-menu");
      const menuButton = document.getElementById("menu-button");

      if (
        mobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target as Node) &&
        menuButton &&
        !menuButton.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [mobileMenuOpen]);

  return (
    <div className="from-background via-background to-muted/40 relative min-h-screen w-full overflow-hidden bg-gradient-to-b">
      <div className="from-primary/30 absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r to-blue-500/30 opacity-60 blur-3xl"></div>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="absolute inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={`bg-background absolute top-0 right-0 z-40 h-full w-80 max-w-[85%] transform border-l shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-6">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black font-bold text-white dark:bg-white dark:text-black">
                Y
              </span>
            </Link>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto p-6">
            {["Product", "Features", "Marketplace", "Company"].map(item => (
              <Link
                key={item}
                href="#"
                className="text-muted-foreground hover:bg-muted/50 hover:text-foreground block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="border-t pt-6">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <header className="relative z-20">
        <nav className="flex items-center justify-between px-6 py-6 lg:px-12" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-black font-bold text-white dark:bg-white dark:text-black">
                Y
              </span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <Button
              id="menu-button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-10">
            {["Product", "Features", "Marketplace", "Company"].map(item => (
              <Link
                key={item}
                href="#"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
          <div className="hidden lg:ml-8 lg:flex">
            <Button variant="ghost" asChild>
              <Link href="#">
                Log in <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 text-center md:pt-28 lg:px-8">
        <div className="border-primary/30 bg-primary/10 text-primary inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur">
          <Check className="text-primary mr-2 h-4 w-4" />
          Trusted by 5,000+ developers
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="block">Build beautiful apps</span>
          <span className="from-primary bg-gradient-to-r to-blue-500 bg-clip-text text-transparent">
            without the hassle
          </span>
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg">
          The complete toolkit for modern web development with ready-to-use components, templates,
          and utilities — all in one place.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8">
            Get started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            <Play className="mr-2 h-4 w-4" />
            Watch demo
          </Button>
        </div>

        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: "Type Safe", description: "Full TypeScript support out of the box" },
            { title: "Dark Mode", description: "Automatic dark mode detection" },
            { title: "Accessible", description: "WCAG compliant components" },
          ].map(feature => (
            <Card
              key={feature.title}
              className="border-muted border bg-white/70 p-6 text-center shadow-lg backdrop-blur-lg dark:bg-black/50"
            >
              <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                <Check className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <p className="text-muted-foreground mb-4 text-sm">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {["Acme", "Globex", "Soylent", "Initech", "Umbrella"].map(company => (
              <div key={company} className="font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
