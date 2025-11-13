import {
  Bricolage_Grotesque,
  Familjen_Grotesk,
  Geist,
  Geist_Mono,
  Mona_Sans,
} from "next/font/google";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  preload: true,
  adjustFontFallback: false,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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

const monasans = Mona_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-monasans",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-familjen",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const fonts = {
  bricolage,
  familjen,
  geistMono,
  geist,
  monasans,
};
