import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

export function MenutBar({ toggleMenu }: { toggleMenu: () => void; menuOpen: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu
          className="h-5 w-5 cursor-pointer text-black/70 dark:text-white/70"
          onClick={toggleMenu}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-5 h-screen w-screen bg-white p-6 dark:bg-black"
        align="start"
        sideOffset={8}
      >
        <div className="flex flex-col gap-4 text-lg">
          <DropdownMenuItem asChild>
            <Link href="/installation" className="w-full">
              Installation
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/docs" className="w-full">
              Docs
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/blocks" className="w-full">
              Blocks
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/templates" className="w-full">
              Templates
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/pricing" className="w-full">
              Pricing
            </Link>
          </DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
