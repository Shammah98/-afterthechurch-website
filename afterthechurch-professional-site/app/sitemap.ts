import type { MetadataRoute } from "next";
import { createAdminClient } from "@/lib/supabase-admin";
import { reviewedResources } from "@/lib/reviewed-resources";
import { SITE_URL } from "@/lib/seo";

// The sitemap is generated against the live moderation status. An unpublished or
// withdrawn story must never be submitted to search engines as a live story URL.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL + "/" },
    { url: SITE_URL + "/stories" },
    { url: SITE_URL + "/recover" },
    { url: SITE_URL + "/resources" },
    { url: SITE_URL + "/safety" },
    { url: SITE_URL + "/about" },
    { url: SITE_URL + "/faq" }
  ];

  const extraResourceSlugs = [
    "toxicity-in-clergy-leadership",
    "bullies-and-sissies",
    "sex-education-in-church",
    "gossip-in-church-leadership",
    "lgbtq-people-and-harm-in-churches"
  ];
  const slugs = new Set([...reviewedResources.map((resource) => resource.slug), ...extraResourceSlugs]);

  for (const slug of slugs) {
    pages.push({ url: SITE_URL + "/resources/" + encodeURIComponent(slug) });
  }

  const supabase = createAdminClient();
  const pageSize = 1000;
  for (let offset = 0; offset < 49000; offset += pageSize) {
    const { data, error } = await supabase
      .from("stories")
      .select("id,created_at")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .range(offset, offset + pageSize - 1);

    if (error) {
      // Do not emit an incomplete sitemap while the moderated-story database is
      // unavailable: a temporary outage should not imply stories were removed.
      console.error("Could not generate the approved-story sitemap:", error);
      throw new Error("Published story list is temporarily unavailable.");
    }

    for (const row of data || []) {
      pages.push({
        url: SITE_URL + "/stories/" + row.id,
        lastModified: new Date(row.created_at)
      });
    }
    if (!data || data.length < pageSize) break;
  }

  return pages;
}
