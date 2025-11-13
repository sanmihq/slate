import type { Metadata } from "next";

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/**
 * Default SEO metadata for Slate — by Sanmi Akinwunmi
 */
export const defaultMeta: Metadata = {
  title: "Slate — Note App by Sanmi Akinwunmi",
  description:
    "Slate is a minimal, intelligent note-taking app crafted by Sanmi Akinwunmi to help you capture, organize, and reflect seamlessly.",
  metadataBase: new URL(baseUrl),

  // 🧭 Core SEO
  keywords: [
    "Slate",
    "Note App",
    "Productivity Tool",
    "Note-taking",
    "Sanmi Akinwunmi",
    "Frontend Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Modern Web Apps",
  ],
  authors: [
    {
      name: "Sanmi Akinwunmi",
      url: "https://sanmiakinwunmi.com",
    },
  ],
  creator: "Sanmi Akinwunmi",
  publisher: "Slate — by Sanmi Akinwunmi",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: baseUrl,
  },
  category: "Productivity App",

  // 🌐 Open Graph (for social sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Slate — by Sanmi Akinwunmi",
    title: "Slate — Note App by Sanmi Akinwunmi",
    description:
      "A sleek, modern note-taking app by Sanmi Akinwunmi, designed for focus and flow.",
    url: baseUrl,
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Slate — Note App by Sanmi Akinwunmi",
      },
    ],
  },

  // 🐦 Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Slate — Note App by Sanmi Akinwunmi",
    description:
      "Capture, organize, and think clearly with Slate — a modern note-taking experience.",
    creator: "@sanmi_hq",
    images: [`${baseUrl}/og-image.png`],
  },
};

/**
 * Generate per-page SEO metadata dynamically
 */
export function generateMeta({
  title,
  description,
  path = "",
  image,
  keywords,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[] | string;
}): Metadata {
  const url = `${baseUrl}${path}`;

  // ✅ Normalize keywords
  const normalizedKeywords =
    typeof keywords === "string"
      ? [keywords]
      : keywords ??
        (Array.isArray(defaultMeta.keywords) ? defaultMeta.keywords : []);

  // 🪄 Auto-generate OG image if not provided
  const ogImage =
    image ??
    `${baseUrl}/api/og?title=${encodeURIComponent(
      title
    )}&description=${encodeURIComponent(description)}`;

  return {
    ...defaultMeta,
    title,
    description,
    keywords: normalizedKeywords,
    openGraph: {
      ...defaultMeta.openGraph,
      title,
      description,
      url,
      images: [{ url: ogImage }],
    },
    twitter: {
      ...defaultMeta.twitter,
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
