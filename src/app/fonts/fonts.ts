import { Bricolage_Grotesque, Geist } from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  adjustFontFallback: false,
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const fonts = {
  geist,
  bricolage,
};
