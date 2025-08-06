import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CreditCard, LifeBuoy, LogOut, MessageSquareShare, Settings, User } from "lucide-react";
import Link from "next/link";

export function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={"/assets/gumball.jpeg"} />
          <AvatarFallback>SB</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4" align="end">
        <DropdownMenuLabel>
          <p>soufian.boukir@gmail.com</p>
          <span className="text-sm text-black/80 dark:text-white/80">soufian.boukir</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={"/profile"}>
            <DropdownMenuItem className="cursor-pointer">
              <User /> Profile
            </DropdownMenuItem>
          </Link>
          <Link href={"/settings"}>
            <DropdownMenuItem className="cursor-pointer">
              <Settings /> Settings
            </DropdownMenuItem>
          </Link>
          <Link href={"/billing"}>
            <DropdownMenuItem className="cursor-pointer">
              <CreditCard /> Billing
            </DropdownMenuItem>
          </Link>
          <Link href={"support"}>
            <DropdownMenuItem className="cursor-pointer">
              <LifeBuoy /> Support
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <Link href={"/feedback"}>
            <DropdownMenuItem className="cursor-pointer">
              <MessageSquareShare /> Feedback
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem className="cursor-pointer">
            <LogOut /> Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
