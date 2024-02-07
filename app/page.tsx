import Image from "next/image";
import { useEffect } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Timer from "./timer";
import Template from "./server-component/template";
dayjs.extend(duration);

export default function Page() {
  return (
    <Template isHomePage />
  );
}
