import { MetadataRoute } from 'next'
import { DURATIONS } from './const'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const toGenerate = DURATIONS?.slice(3)
  
  const arr: MetadataRoute.Sitemap = toGenerate?.map(num => {
    return {
      'url': `https://www.5minutetimer.app/${num}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })
  const arr1: MetadataRoute.Sitemap = toGenerate?.map(num => {
    return {
      'url': `https://www.5minutetimer.app/5-minute-meditation-timer/${num}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  })
  return [
    ...arr,
    ...arr1
  ]
}