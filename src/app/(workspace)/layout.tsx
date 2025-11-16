import type { Metadata } from "next";
import "../globals.css";
import { defaultMeta } from "@/lib/seo";
import { ClerkProvider } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppHeader } from "@/components/app-header";

export const metadata: Metadata = {
  ...defaultMeta,
  title: "Workspace - Slate",
  description: "Manage your notes, profile, and settings seamlessly.",
  openGraph: {
    ...defaultMeta.openGraph,
    title: "Workspace - Slate",
    description: "Access your workspace and manage your notes effortlessly.",
  },
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <AppHeader />
          <main className="flex flex-1 flex-col gap-6 p-6 ">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </ClerkProvider>
  );
}
