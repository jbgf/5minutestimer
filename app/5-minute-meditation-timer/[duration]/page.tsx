import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata } from "next";
import { createRef, useRef } from "react";
import Template from "../../server-component/template";
dayjs.extend(duration);

export const metadata: Metadata = {
  title: '5 Minute Meditation Timer - Stay Focused and Relaxed',
  description: 'Discover the simplest way to enhance your meditation practice with our 5 Minute Meditation Timer. Perfect for quick mindfulness sessions, our timer helps you stay focused, manage your time efficiently, and find peace in your busy day. Try it now and transform your meditation experience.',
}
const DURATIONS = [5, 10 ,15,20, 25, 30]?.map(String)
export async function generateStaticParams() {
 
  return DURATIONS.map((duration) => ({
    duration: duration,
  }))
}
export default function FiveMinuteMeditationTimer({params}: {params: {duration: string}}) {
  console.log(params)
  
  return (
    
      <Template duration={Number(params.duration)} type="meditation" autoStart={false} src={'/audios/正念冥想放松.m4a'} />
    
  );
}
