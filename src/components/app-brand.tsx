"use client";

import { Frame } from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { APP_INFO } from "@/lib/routes";

export function AppBrand() {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="flex cursor-default items-center gap-3"
        >
          <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            <Frame className="size-4" />
          </div>
          <span
            className={`truncate text-sm font-semibold tracking-wide transition-opacity duration-200 ${
              isMobile
                ? "opacity-100"
                : "group-data-[collapsible=icon]:opacity-0"
            }`}
          >
            {APP_INFO.name}
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
