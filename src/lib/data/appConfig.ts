import { Metadata } from "next";

export const appConfig = {
  name: "Slate",
  title: "Slate: Your minimalist note workspace",
  description:
    "Create, organize, and sync your notes in real-time with a clean, modern interface.",
  url: "https://slate.vercel.app",
  author: {
    name: "Sanmi Akinwunmi",
    url: "https://sanmihq.com",
  },
  keywords: [
    "notes",
    "note-taking",
    "productivity",
    "realtime",
    "slate",
    "next.js",
    "firebase",
  ],
  themeColor: "#f9f9fb",
  links: {
    home: "/",
    signin: "/sign-in",
    signup: "/sign-up",
    app: "/",
  },
  ogImage: "/og-image.png",
  twitterHandle: "@sanmi_hq",
  developer: {
    name: "Sanmi Akinwunmi",
    links: {
      github: "https://github.com/sanmihq",
      twitter: "https://x.com/sanmi_hq",
      linkedin: "https://www.linkedin.com/in/sanmihq/",
    },
  },
};

export type AppConfig = typeof appConfig;

export const generateRootMetadata = (): Metadata => ({
  title: {
    default: appConfig.title,
    template: `%s | ${appConfig.name}`,
  },
  description: appConfig.description,
  keywords: appConfig.keywords,
  authors: [{ name: appConfig.author.name, url: appConfig.author.url }],
  themeColor: appConfig.themeColor,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appConfig.url,
    title: appConfig.title,
    description: appConfig.description,
    siteName: appConfig.name,
    images: [
      {
        url: `${appConfig.url}${appConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: appConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.title,
    description: appConfig.description,
    images: [`${appConfig.url}${appConfig.ogImage}`],
    creator: appConfig.twitterHandle,
  },
});
