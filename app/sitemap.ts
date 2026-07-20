import type { MetadataRoute } from "next"
import { site, services, products, industries } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const routes = [
    "",
    "/services",
    "/products",
    "/industries",
    "/about",
    "/contact",
    ...services.map((s) => `/services/${s.slug}`),
    ...products.map((p) => `/products/${p.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
  ]

  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
  }))
}
