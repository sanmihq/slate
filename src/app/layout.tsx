import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "@/fonts";
import { defaultMeta } from "@/lib/seo";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

export const metadata: Metadata = defaultMeta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${fonts.familjen.className} ${fonts.geistMono.variable} antialiased`}
        >
          <Toaster richColors style={{ fontFamily: "inherit" }} />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
