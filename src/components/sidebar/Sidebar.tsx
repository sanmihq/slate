"use client";

import * as React from "react";
import { SidebarLink } from "./SidebarLink";
import { UserProfile } from "../shared/UserProfile";
import { ChevronRight, ChevronLeft, Archive, Notebook } from "lucide-react";
import { appConfig } from "@/lib/data/appConfig";
import { Button } from "@heroui/react";

type SidebarProps = {
  user: { username: string; email: string; avatar: string; initials: string };
  currentPath?: string;
};

export function Sidebar({ user, currentPath = "/" }: SidebarProps) {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside
      className={`flex h-screen flex-col border-r border-gray-200 bg-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-4 py-5">
        {!collapsed && (
          <span className="truncate text-lg font-bold">{appConfig.name}</span>
        )}
        <Button
          size="sm"
          isIconOnly
          variant="light"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>

      {/* Simple Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-2">
        <SidebarLink
          title="All Notes"
          url="/"
          icon={Notebook}
          collapsed={collapsed}
          active={currentPath === "/"}
        />
        <SidebarLink
          title="Archive"
          url="/archive"
          icon={Archive}
          collapsed={collapsed}
          active={currentPath === "/archive"}
        />
      </nav>

      {/* User */}
      <UserProfile {...user} collapsed={collapsed} />
    </aside>
  );
}
