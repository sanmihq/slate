"use client";

import { type LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Workspace</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const isActive =
            pathname === item.url || pathname.startsWith(`${item.url}/`);

          return (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a
                  href={item.url}
                  className={cn(
                    "flex items-center gap-2 transition-colors",
                    isActive
                      ? "text-sidebar-accent-foreground bg-sidebar-accent"
                      : "text-sidebar-foreground/70 hover:text-sidebar-foreground",
                  )}
                >
                  {item.icon && (
                    <item.icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        isActive
                          ? "text-sidebar-accent-foreground"
                          : "text-sidebar-foreground/70",
                      )}
                    />
                  )}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
