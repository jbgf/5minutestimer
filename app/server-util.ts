
import { Metadata, ResolvingMetadata } from 'next'
import { Props } from './type'
import { isArray } from 'lodash'

const SUFFIX = 'minutes'
export const addPathSuffix = (duration: string) => `${duration}${SUFFIX}`
export const getPathSuffix = (durationWithMinPath: string) => durationWithMinPath?.replace(SUFFIX, '')


export async function generateMetadataFN(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log({params})
  const durationNum = getPathSuffix(params.duration || addPathSuffix(`5`))
 
  return {
    title: `${durationNum} Minute Timer, ${durationNum} Minute Countdown Timer`,
    description: `${durationNum} minute timer not only helps you countdown time but could also notifies you. Great for managing activities from cooking, napping to scheduling short breaks throughout your day `,

  }
}