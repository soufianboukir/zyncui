"use client";

import { Footer } from "@/components/app/footer";
import { ProfileMenu } from "@/components/profile-menu";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  if (status === "loading") return null;

  return (
    <div>
      <header className="dark:border-b-muted/90 mx-auto flex max-w-7xl items-center justify-between border-b border-b-gray-200 px-6 py-4">
        <Link className="flex cursor-pointer items-center gap-1" href={"/"}>
          <span className="text-xl font-semibold text-black dark:text-white">zyncUI</span>
        </Link>

        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <Link href={"/docs"}>Docs</Link>
          </Button>
          <Button variant="ghost">
            <Link href={"/docs"}>Blocks</Link>
          </Button>
          {session ? (
            <ProfileMenu user={session.user} />
          ) : (
            <Button>
              <Link href={"/login"}>Sign in</Link>
            </Button>
          )}
        </div>
      </header>
      {children}
      <div className="mx-auto max-w-7xl">
        <Footer />
      </div>
    </div>
  );
}
