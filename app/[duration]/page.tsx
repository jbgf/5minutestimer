import Image from "next/image";
import { useEffect } from "react";
import { Metadata, ResolvingMetadata } from 'next'

import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Template from "../server-component/template";
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
  // read route params
  const duration = params.duration || `5`
 
  return {
    title: `${duration} Minute Timer - Boost Your Productivity`,
    description: `Discover efficient ways to use a ${duration} minute timer for boosting productivity 
    and focus. From Pomodoro techniques to quick breaks and meditation, 
    learn how to incorporate short intervals into your daily routine for improved efficiency.`,

  }
}

export default function DurationPage({params}: {params: {duration: string}}) {
  console.log(params, `.....params....`)
  return (
    <Template duration={params?.duration || String(5)} isHomePage />
  );
}
