import Image from "next/image";
import { useEffect } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Template from "../server-component/template";
dayjs.extend(duration);

export default function DurationPage({params}: {params: {duration: string}}) {
  console.log(params, `.....params....`)
  return (
    <Template duration={params?.duration || String(5)} isHomePage />
  );
}
