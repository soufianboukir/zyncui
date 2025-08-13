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
    <div className="bg-background relative min-h-screen w-full overflow-hidden">
    
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          tabIndex={0}
          className="absolute inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          onKeyDown={e => {
            if (e.key === "Enter" || e.key === " ") {
              setMobileMenuOpen(false);
            }
          }}
          style={{ cursor: "pointer" }}
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

          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-1">
              {["Product", "Features", "Marketplace", "Company"].map(item => (
                <Link
                  key={item}
                  href="#"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t pt-6">
              <Button variant="ghost" asChild className="w-full justify-start">
                <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                  Log in
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden border-t p-6">
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link href="#" onClick={() => setMobileMenuOpen(false)}>
                Log in
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <header className="relative z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
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
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
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
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </Button>
          </div>
        </nav>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 lg:px-8">
        <div className="text-center">
          <div className="mb-8 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium shadow-sm">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            Trusted by thousands of developers
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Build amazing apps</span>
            <span className="from-primary block bg-gradient-to-r to-blue-600 bg-clip-text text-transparent">
              faster than ever
            </span>
          </h1>

          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-xl">
            The complete toolkit for modern web development with everything you need in one package.
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

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: <Check className="text-primary h-5 w-5" />,
                title: "Type Safe",
                description: "Full TypeScript support out of the box",
              },
              {
                icon: <Check className="text-primary h-5 w-5" />,
                title: "Dark Mode",
                description: "Automatic dark mode detection",
              },
              {
                icon: <Check className="text-primary h-5 w-5" />,
                title: "Accessible",
                description: "WCAG compliant components",
              },
            ].map(feature => (
              <Card key={feature.title} className="p-6 text-center">
                <div className="flex justify-center">
                  <div className="bg-secondary rounded-full p-3">{feature.icon}</div>
                </div>
                <h3 className="mt-4 text-lg font-medium">{feature.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16">
            <p className="text-muted-foreground mb-4 text-sm">Trusted by teams at</p>
            <div className="flex flex-wrap justify-center gap-8 opacity-70">
              {["Acme", "Globex", "Soylent", "Initech", "Umbrella"].map(company => (
                <div key={company} className="font-medium">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
