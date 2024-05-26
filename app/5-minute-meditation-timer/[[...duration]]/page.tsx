import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata, ResolvingMetadata } from 'next'
import { createRef, useRef } from "react";
import Template from "../../server-component/template";
import { TimerTypes } from "@/app/const";
import { getPathSuffix } from "@/app/server-util";
import { addPathSuffix, generateDescription, generateTitle } from "@/util";
dayjs.extend(duration);

/* export const metadata: Metadata = {
  title: '5 Minute Meditation Timer - Stay Focused and Relaxed',
  description: 'Discover the simplest way to enhance your meditation practice with our 5 Minute Meditation Timer. Perfect for quick mindfulness sessions, our timer helps you stay focused, manage your time efficiently, and find peace in your busy day. Try it now and transform your meditation experience.',
} */
 
type Props = {
  params: { duration: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const duration = getPathSuffix((params.duration?.[0] || addPathSuffix(`5`)))
 
  return {
    title: generateTitle({'duration': duration, type: TimerTypes.Meditation}),
    description: generateDescription({'duration': duration, type: TimerTypes.Meditation}),
  }
}
 
// export const dynamicParams = false
/* export async function generateStaticParams() {
 
  return DURATIONS.map((duration) => ({
    duration: [duration],
  }))
} */
export default function FiveMinuteMeditationTimer({params}: {params: Props['params']}) {
  // console.log(`meditation 5`, params)
  
  return (
    
      <Template duration={(params.duration?.[0]) || addPathSuffix(`5`)} type={TimerTypes.Meditation} autoStart={false} src={'/audios/正念冥想放松.m4a'} />
    
  );
}
