import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.5minutetimer.app',
      lastModified: new Date(),
      changeFrequency: 'monthly'/* 'yearly' */,
      priority: 1,
    },
    {
      url: 'https://www.5minutetimer.app/5-minute-meditation-timer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}