import { MetadataRoute } from 'next'
import { DURATIONS } from './const'
const generate = (url: string, duration?: string): MetadataRoute.Sitemap[number] => {
  return {
    'url': url + (duration === undefined ? '' : `/${(duration)}`),
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }
}
export default function sitemap(): MetadataRoute.Sitemap {
  const toGenerate = DURATIONS?.slice(0, 3)
  const basePath = `https://www.5minutetimer.app`;
  const meditationPath = `https://www.5minutetimer.app/5-minute-meditation-timer`;
  const arr: MetadataRoute.Sitemap = [generate(basePath)].concat(toGenerate?.map(duration => {
    return generate(basePath, duration)
  }))
  const arr1: MetadataRoute.Sitemap = [generate(meditationPath)].concat(toGenerate?.map(duration => {
    return generate(meditationPath, duration)
  }))
  return [
    ...arr,
    ...arr1
  ]
}