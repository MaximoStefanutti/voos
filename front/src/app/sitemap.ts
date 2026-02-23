import { MetadataRoute } from "next";
import { siteConfig } from "./config/site.config";
import { categoryContent } from "./lib/services/categoryContent";

const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "tratamientos",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "sobre-nosotras",
    priority: 0.8,
    changeFrequency: "monthly",
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = routes.map((route) => ({
    url: `${siteConfig.url}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const categoryRoutes = Object.keys(categoryContent).map((category) => ({
    url: `${siteConfig.url}/tratamientos${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...categoryRoutes];
}
