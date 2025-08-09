"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SearchInput } from "../ui/search-input";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../theme-toggle").then(res => res.ThemeToggle), {
  ssr: false,
});
import { Twitter } from "lucide-react";
import { Button } from "../ui/button";
import { MenutBar } from "../menu-bar";
import { ProfileMenu } from "../profile-menu";
import { useSession } from "next-auth/react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return (
    <div className="dark:border-muted/80 fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white dark:bg-black">
      <div className="flex items-center justify-between px-6 py-4 font-sans text-black/80 lg:px-[5%] dark:text-white/80">
        <div className="flex items-center gap-10">
          <Link className="flex cursor-pointer items-center gap-1" href={"/"}>
            <span className="text-xl font-semibold text-black dark:text-white">zyncUI</span>
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link
              href={"/docs/installation"}
              className="duration-150 hover:text-black dark:hover:text-white"
            >
              Installation
            </Link>
            <Link
              href={"/docs/introduction"}
              className="duration-150 hover:text-black dark:hover:text-white"
            >
              Docs
            </Link>
            <Link href={"/blocks"} className="duration-150 hover:text-black dark:hover:text-white">
              Blocks
            </Link>
            <Link
              href={"/templates"}
              className="duration-150 hover:text-black dark:hover:text-white"
            >
              Templates
            </Link>
            <Link href={"/pricing"} className="duration-150 hover:text-black dark:hover:text-white">
              Pricing
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Twitter className="h-5 w-5 cursor-pointer text-black/70 dark:text-white/70" />
          <ThemeToggle />
          <SearchInput />
          <div className="md:hidden">
            <MenutBar toggleMenu={toggleMenu} menuOpen={menuOpen} />
          </div>
          {session ? (
            <ProfileMenu user={session.user} />
          ) : (
            <Button variant={"outline"} className="cursor-pointer">
              <Link href={"/login"}>Sign in</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
