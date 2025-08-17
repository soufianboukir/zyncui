export const navbar1Code = `"use client";

import { Menu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar1() {
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
    <div className="h-full w-full">
      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close mobile menu"
          className="absolute inset-0 z-30 bg-black/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          tabIndex={0}
        />
      )}

      <div
        id="mobile-menu"
        className={\`bg-background absolute top-0 right-0 z-40 h-full w-80 max-w-[85%] transform border-l shadow-xl transition-transform duration-300 ease-in-out lg:hidden \${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }\`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-6">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-semibold text-black dark:text-white">zyncUI</span>
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
      <header className="relative flex overflow-hidden">
        <nav
          className="flex w-full items-center justify-between gap-4 p-4 lg:px-12"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="text-xl font-semibold text-black dark:text-white">zyncUI</span>
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

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="ghost" asChild>
              <Link href="#">
                Log in <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </nav>
      </header>
     
    </div>
  );
}
`;
export const navbar1Example = `
import NavBar1 from "@/components/Navbar/navbar-compennets-1";

const page = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6">
      <NavBar1 />
    </div>
  );
};

export default page;
`;
