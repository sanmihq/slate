"use client";

import * as React from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import { ChevronDown, LogOut, Settings2 } from "lucide-react";

type UserProfileProps = {
  username: string;
  email: string;
  avatar: string;
  initials: string;
  collapsed?: boolean;
};

export function UserProfile({
  username,
  email,
  avatar,
  initials,
  collapsed,
}: UserProfileProps) {
  return (
    <div className="border-t border-gray-200 p-4">
      <Dropdown>
        <DropdownTrigger>
          {/* ✅ Single button element */}
          <button className="flex w-full items-center gap-2">
            <Avatar
              src={avatar}
              alt={initials}
              size={collapsed ? "sm" : "md"}
            />
            {!collapsed && (
              <div className="flex flex-1 flex-col text-left text-sm">
                <span>{username}</span>
                <span className="text-xs text-gray-500">{email}</span>
              </div>
            )}
            {!collapsed && <ChevronDown />}
          </button>
        </DropdownTrigger>

        {/* ✅ HeroUI uses DropdownMenu */}
        <DropdownMenu>
          <DropdownItem key="settings">
            <Settings2 className="mr-2" /> Settings
          </DropdownItem>
          <DropdownItem key="logout">
            <LogOut className="mr-2" /> Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
