import { DURATIONS, TimerTypes } from "@/app/const"
import { getPathSuffix } from "@/app/server-util";
import Link from "next/link";
import { generatePath, getLinkTitle } from "../utils";
import { OtherTypes } from "../const";
interface IProps {
  durationStr: string;
  type?: TimerTypes
}
export default function OtherDurationTimer (props: IProps) {
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center pt-10">
          {DURATIONS?.filter(duration => duration !== props.durationStr).map(duration => {
            const durationNum = getPathSuffix(duration)
            const typeData = OtherTypes?.filter(item => item?.label === props.type)?.[0] || OtherTypes[0]
            const text = getLinkTitle({title: typeData?.title, durationNum: durationNum})

            return <Link key={duration} className="whitespace-nowrap hover:text-sky-500 underline" 
              href={generatePath({'durationNum': durationNum, 'type': typeData?.label })} 
              title={`go to ${text}`}>{text}</Link>
          })}
        </section>
  )
}