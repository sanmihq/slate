import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts/fonts";
import { generateRootMetadata } from "@/lib/data/appConfig";
import { ClerkProvider } from "@clerk/nextjs";
import { AuthWrapper } from "@/components/AuthWrapper";

export const metadata: Metadata = generateRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fonts.bricolage.className} antialiased`}>
          {/* <AuthWrapper> */}
          {children}
          {/* </AuthWrapper> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
