import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata, ResolvingMetadata } from 'next'
import { createRef, useRef } from "react";
import Template from "../../server-component/template";
import { TimerTypes } from "@/app/const";
import { getPathSuffix } from "@/app/server-util";
import { addPathSuffix, generateDescription, generateTitle } from "@/util";
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
    title: generateTitle({duration, type: TimerTypes.Nap}),
    description: generateDescription({'duration': duration, 'type': TimerTypes.Nap}),
  }
}

export default function NapTimer({params}: {params: Props['params']}) {
  
  return (
    
      <Template duration={(params.duration?.[0]) || addPathSuffix(`5`)} type={TimerTypes.Nap} autoStart  />
    
  );
}
