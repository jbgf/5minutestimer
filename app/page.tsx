import Image from "next/image";
import { useEffect } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Template from "./server-component/template";
import DurationPage from "./[duration]/page";
dayjs.extend(duration);

export default function Page() {
  
  return (
    <DurationPage params={{duration:`5`}} />
  );
}
