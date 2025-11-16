"use client";

import * as React from "react";
import {
  Archive,
  FilePlus2,
  Github,
  HatGlasses,
  Linkedin,
  NotebookPen,
  Sparkles,
  Tags,
  Twitter,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { APP_INFO, APP_ROUTES } from "@/lib/routes";
import { AppBrand } from "./app-brand";
import { GenerateNoteDialog } from "./generate-note-dialog";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useCurrentUser();

  const navMain = [
    { title: "Notes", url: APP_ROUTES.notes, icon: NotebookPen },
    { title: "Archive", url: APP_ROUTES.archive, icon: Archive },
    { title: "Tags", url: APP_ROUTES.tags, icon: Tags },
    { title: "Private", url: APP_ROUTES.private, icon: HatGlasses },
  ];

  const socialLinks = [
    { name: "GitHub", url: APP_INFO.socials.github, icon: Github },
    { name: "LinkedIn", url: APP_INFO.socials.linkedin, icon: Linkedin },
    { name: "X", url: APP_INFO.socials.twitter, icon: Twitter },
  ];

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppBrand />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={navMain} />
        <GenerateNoteDialog />
        <NavProjects projects={socialLinks} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser
          user={{
            name:
              user?.firstName || user?.lastName
                ? `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim()
                : "Guest",
            email: user?.email ?? "guest@example.com",
            avatar: user?.imageUrl ?? "/avatars/default.png",
            initials: user?.initials ?? "U",
          }}
        />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
