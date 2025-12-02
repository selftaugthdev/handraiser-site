import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/download/", "/api/"],
      },
    ],
    sitemap: undefined, // Add your sitemap URL here if you have one
  };
}

