import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Public stories are crawlable; private dashboards, sessions and API
      // endpoints never belong in search results.
      disallow: ["/api/", "/admin", "/auth/", "/manage", "/account"]
    },
    sitemap: SITE_URL + "/sitemap.xml",
    host: SITE_URL
  };
}
