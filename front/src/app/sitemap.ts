import { MetadataRoute } from "next";
import { siteConfig } from "./config/site.config";

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
  return routes.map((route) => ({
    url: `${siteConfig.url}/${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
