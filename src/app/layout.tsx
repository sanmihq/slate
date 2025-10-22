import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts/fonts";
import { generateRootMetadata } from "@/lib/data/appConfig";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";
import Shell from "@/components/sidebar/Shell";

export const metadata: Metadata = generateRootMetadata();

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fonts.bricolage.className} antialiased`}>
          <Providers>
            <Shell>{children}</Shell>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
