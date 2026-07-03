// Utils
import { SITE_CONFIG } from "@/lib/site-config";

// Types
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_CONFIG.url,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
