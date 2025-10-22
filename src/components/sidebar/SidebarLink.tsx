"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@heroui/react";
import { IconWrapper } from "../shared/IconWrapper";

type SidebarLinkProps = {
  title: string;
  icon?: React.ComponentType<any>;
  url: string;
  collapsed?: boolean;
  active?: boolean;
};

export function SidebarLink({
  title,
  icon: Icon,
  url,
  collapsed,
  active,
}: SidebarLinkProps) {
  return (
    <Link
      href={url}
      className={cn(
        "group flex items-center gap-2 rounded-md p-2 text-sm font-medium transition-all duration-200",
        active
          ? "bg-gray-200 text-gray-900"
          : "text-gray-600 hover:bg-blue-600 hover:text-white",
      )}
    >
      {Icon && (
        <IconWrapper
          icon={Icon}
          className={cn(
            "h-4 w-4 shrink-0 transition-colors duration-200",
            active ? "text-gray-600" : "text-gray-600 group-hover:text-white",
          )}
        />
      )}
      {!collapsed && <span>{title}</span>}
    </Link>
  );
}
