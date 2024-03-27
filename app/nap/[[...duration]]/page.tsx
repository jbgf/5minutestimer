import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata, ResolvingMetadata } from 'next'
import { createRef, useRef } from "react";
import Template from "../../server-component/template";
import { DURATIONS, TimerTypes } from "@/app/const";
import { addPathSuffix, getPathSuffix } from "@/app/server-util";
dayjs.extend(duration);


 
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
    title: `${duration} Minute Nap Timer`,
    description: `Automatically starts for a hassle-free setup, 
    ensuring your short naps end as quietly as they begin. Ideal for relaxation`,
  }
}

export default function NapTimer({params}: {params: Props['params']}) {
  
  return (
    
      <Template noEndSound hidePlayButton duration={(params.duration?.[0]) || addPathSuffix(`5`)} type={TimerTypes.Nap} autoStart  />
    
  );
}
