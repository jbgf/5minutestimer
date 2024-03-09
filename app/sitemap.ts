import { MetadataRoute } from 'next'
import { DURATIONS } from './const'
const generate = (url: string, num?: string): MetadataRoute.Sitemap[number] => {
  return {
    'url': url + (num === undefined ? '' : `/${num}`),
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }
}
export default function sitemap(): MetadataRoute.Sitemap {
  const toGenerate = DURATIONS?.slice(0, 2)
  const basePath = `https://www.5minutetimer.app`;
  const meditationPath = `https://www.5minutetimer.app/5-minute-meditation-timer`;
  const arr: MetadataRoute.Sitemap = [generate(basePath)].concat(toGenerate?.map(num => {
    return generate(basePath, num)
  }))
  const arr1: MetadataRoute.Sitemap = [generate(meditationPath)].concat(toGenerate?.map(num => {
    return generate(meditationPath, num)
  }))
  return [
    ...arr,
    ...arr1
  ]
}