import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata, ResolvingMetadata } from 'next'
import { createRef, useRef } from "react";
import Template from "../../server-component/template";
import { DURATIONS } from "@/app/const";
dayjs.extend(duration);

/* export const metadata: Metadata = {
  title: '5 Minute Meditation Timer - Stay Focused and Relaxed',
  description: 'Discover the simplest way to enhance your meditation practice with our 5 Minute Meditation Timer. Perfect for quick mindfulness sessions, our timer helps you stay focused, manage your time efficiently, and find peace in your busy day. Try it now and transform your meditation experience.',
} */
 
type Props = {
  params: { duration: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const duration = params.duration || `5`
 
  return {
    title: `${duration} Minute Meditation Timer`,
    description: `Discover the simplest way to enhance your meditation practice with our ${duration} Minute Meditation Timer. 
    Perfect for quick mindfulness sessions, our timer helps you stay focused, manage your time efficiently, 
    and find peace in your busy day. Try it now and transform your meditation experience.`,

  }
}
 
export const dynamicParams = false
export async function generateStaticParams() {
 
  return DURATIONS.map((duration) => ({
    duration: duration,
  }))
}
export default function FiveMinuteMeditationTimer({params}: {params: {duration: string}}) {
  console.log(params)
  
  return (
    
      <Template duration={(params.duration)} type="meditation" autoStart={false} src={'/audios/正念冥想放松.m4a'} />
    
  );
}
