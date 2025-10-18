import { appConfig } from "@/lib/data/appConfig";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || appConfig.url;
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}${appConfig.links.signin}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}${appConfig.links.signup}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return staticPages;
}
