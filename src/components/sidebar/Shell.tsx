"use client";

import * as React from "react";
import { Sidebar } from "./Sidebar";
import { useUser } from "@clerk/nextjs";
import Header from "../shared/Header";

export default function Shell({ children }: { children: React.ReactNode }) {
  const { user } = useUser();

  const name = user?.firstName || "Guest";
  const username = user?.username || "guest";
  const email = user?.primaryEmailAddress?.emailAddress || "";
  const initials = name.charAt(0);
  const avatar =
    user?.imageUrl || `https://ui-avatars.com/api/?name=${initials}`;

  const userData = { username, email, avatar, initials };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar (white background) */}
      <Sidebar user={userData} />

      {/* Main content area */}
      <div className="flex flex-1 flex-col bg-gray-100">
        {/* Header (gray background too) */}
        <div className="sticky top-0 z-20 border-b border-gray-200 bg-gray-100">
          <Header />
        </div>

        {/* Main section */}
        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
