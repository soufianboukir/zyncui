import * as React from "react";
import { ChevronRight, LayoutGrid, Lock, Rocket, StretchHorizontal } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  navMain: [
    {
      title: "Getting Started",
      icone: <Rocket className="mr-2 text-black/80 dark:text-white/80" />,
      url: "#",
      flech: (
        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-z-90" />
      ),
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction",
        },
        {
          title: "Installation",
          url: "/docs/installation",
        },
        {
          title: "Project structure",
          url: "/docs/project-structure",
        },
      ],
    },
    {
      title: "Sections",
      icone: <StretchHorizontal className="mr-2 text-black/80 dark:text-white/80" />,
      url: "#",
      flech: (
        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
      ),
      items: [
        {
          title: "Hero",
          url: "#",
        },
        {
          title: "NavBar",
          url: "#",
        },
      ],
    },
    {
      title: "Authentication",
      icone: <Lock className="mr-2 text-black/80 dark:text-white/80" />,
      url: "#",
      flech: (
        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
      ),
      items: [
        {
          title: "login forms",
          url: "/docs/blocks/login",
        },
        {
          title: "sign up forms",
          url: "/docks/blocks/signup",
        },
      ],
    },
    {
      title: "Templates",
      icone: <LayoutGrid className="mr-2 text-black/80 dark:text-white/80" />,
      url: "#",
      items: [],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="sticky pt-17">
      <SidebarContent className="gap-0">
        {data.navMain.map(item => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground cursor-pointer text-sm"
              >
                <CollapsibleTrigger>
                  {item?.icone}
                  {item.title}
                  {item.flech}
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent className="ml-8">
                  <SidebarMenu className="mt-2 flex flex-col gap-2">
                    {item.items.map(item => (
                      <SidebarMenuItem key={item.title}>
                        <Link
                          href={item.url}
                          className="text-black/70 duration-150 hover:text-black dark:text-white/70 dark:hover:text-white"
                        >
                          {item.title}
                        </Link>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
