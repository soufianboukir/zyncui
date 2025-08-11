"use client";

import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";

export default function SideBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentPath = usePathname();

  const formatPathSegment = (segment: string) => {
    if (!segment) return;
    return segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const generateBreadcrumbs = () => {
    if (!currentPath) return null;

    const segments = currentPath.split("/").filter(segment => segment !== "");

    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      const isLast = index === segments.length - 1;

      return (
        <BreadcrumbItem key={path}>
          {isLast ? (
            <span className="text-foreground font-medium">{formatPathSegment(segment)}</span>
          ) : (
            <span>{formatPathSegment(segment)}</span>
          )}
          {!isLast && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      );
    });
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>{generateBreadcrumbs()}</BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
