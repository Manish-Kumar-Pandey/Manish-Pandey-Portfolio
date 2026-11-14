import { MetadataRoute } from "next";
import { portfolioData } from "@/data/portfolio";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioData.seo.siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

