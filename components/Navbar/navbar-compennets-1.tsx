"use client";

import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
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
    <>
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={`bg-background fixed top-0 right-0 z-40 h-full w-80 max-w-[85%] transform border-l shadow-xl transition-transform duration-300 ease-in-out lg:hidden ${
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
    </>
  );
}
