import * as React from "react";
import { ChevronRight, LayoutGrid, Rocket, StretchHorizontal } from "lucide-react";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";

const data = {
  // versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
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
          title: "Installation",
          url: "#",
        },
        {
          title: "Project Structure",
          url: "#",
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
          title: "Navbar",
          url: "#",
        },
        {
          title: "Hero",
          url: "#",
          isActive: true,
        },
        {
          title: "Bento grid",
          url: "#",
        },
        {
          title: "Carousel",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Feature",
          url: "#",
        },
        {
          title: "Gallery",
          url: "#",
        },
        {
          title: "Items",
          url: "#",
        },
        {
          title: "Logos",
          url: "#",
        },
        {
          title: "Pricing",
          url: "#",
        },
        {
          title: "Social Proof",
          url: "#",
        },
        {
          title: "Stats",
          url: "#",
        },
        {
          title: "Tabs",
          url: "#",
        },
        {
          title: "Testimonials",
          url: "#",
        },
        {
          title: "CTA",
          url: "#",
        },
        {
          title: "Footer",
          url: "#",
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
    <Sidebar {...props} className="pt-17">
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
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
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {item?.icone}
                  {item.title}
                  {item.flech}
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map(item => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton asChild isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
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
