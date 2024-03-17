import Image from "next/image";
import { useEffect } from "react";
import { Metadata, ResolvingMetadata } from 'next'

import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Template from "../server-component/template";
import { addPathSuffix, generateMetadataFN, getPathSuffix } from "../server-util";
dayjs.extend(duration);
type Props = {
  params: { duration: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  /* 
    export const metadata: Metadata = {
  title: "5 minute timer - Boost Your Productivity",
  description: "Discover efficient ways to use a 5 minute timer for boosting productivity 
  and focus. From Pomodoro techniques to quick breaks and meditation, 
  learn how to incorporate short intervals into your daily routine for improved efficiency.",
};
  */
  return generateMetadataFN({params, searchParams}, parent)
}

export default function DurationPage({params}: {params: {duration: string}}) {
  console.log(`home.....params....`,params, )
  const isOldGoogleSearch = params?.duration === '5-minute-meditation-timer'
  return isOldGoogleSearch 
  ? (<Template duration={(params.duration)} type="meditation" autoStart={false} src={'/audios/正念冥想放松.m4a'} />) 
  : (
    <Template duration={params?.duration || addPathSuffix(String(5))} isHomePage />
  );
}
