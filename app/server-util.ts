
import { Metadata, ResolvingMetadata } from 'next'
import { Props } from './type'

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
    title: `${durationNum}-Minute Timer with End-of-Time Sound`,
    description: `${durationNum}-minute timer not only helps you track time but also notifies you with a pleasant sound. Great for managing various activities. 
    Easy time management is here!`,

  }
}