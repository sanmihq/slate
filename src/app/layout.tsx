import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts/fonts";
import { generateRootMetadata } from "@/lib/data/appConfig";

export const metadata: Metadata = generateRootMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fonts.bricolage.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
