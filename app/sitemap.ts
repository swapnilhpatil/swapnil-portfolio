import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swapnil-portfolio-kappa.vercel.app";

  // Get blog slugs
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir);
  const blogPosts = files
    .filter((file) => file.endsWith("-blog.md"))
    .map((file) => {
      const slug = file.replace("-blog.md", "");
      return {
        url: `${baseUrl}/blog/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogPosts,
  ];
}
