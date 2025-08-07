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
import { signOut } from "next-auth/react";
import { User as UserType } from "next-auth";

export function ProfileMenu({ user }: { user: UserType}) {  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src={user.avatarUrl} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-4" align="end">
        <DropdownMenuLabel>
          <p>{user.email}</p>
          <span className="text-sm text-black/80 dark:text-white/80">{user.username}</span>
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
          <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
            <LogOut /> Logout
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
