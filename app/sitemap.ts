import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  return [
    {
      url: "https://poudelmadhav.com.np",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://poudelmadhav.com.np/#about",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://poudelmadhav.com.np/#experience",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://poudelmadhav.com.np/#contact",
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://blog.poudelmadhav.com.np",
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]
}
