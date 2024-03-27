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

  return generateMetadataFN({params, searchParams}, parent)
}

export default function DurationPage({params}: {params: {duration: string}}) {
  console.log(`home.....params....`,params, )
  // const isOldGoogleSearch = params?.duration === '5-minute-meditation-timer'
  return (
    <Template duration={params?.duration || addPathSuffix(String(5))} isHomePage />
  );
}
