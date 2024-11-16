
import { Metadata, ResolvingMetadata } from 'next'
import { Props } from './type'
import { isArray } from 'lodash'
import { addPathSuffix, generateDescription, generateTitle } from '@/util'
import { SUFFIX } from './const'

export const getPathSuffix = (durationWithMinPath: string) => durationWithMinPath?.replace(SUFFIX, '')


export async function generateMetadataFN(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // console.log({params})
  const durationNum = getPathSuffix(params.duration || addPathSuffix(`5`))
 
  return {
    title: generateTitle({duration: durationNum}),
    description: generateDescription({'duration': durationNum}),
    alternates: {
      canonical: 'https://www.5minutetimer.app', // 请替换为您的实际域名
    },
  }
}