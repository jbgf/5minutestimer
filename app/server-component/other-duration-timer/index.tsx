import { DURATIONS, TimerTypes } from "@/app/const"
import { getPathSuffix } from "@/app/server-util";
import Link from "next/link";
import { capitalizeFirstLetter, generatePath, getLinkTitle } from "../utils";
import { OtherTypes } from "../const";
interface IProps {
  durationStr: string;
  type?: TimerTypes
}
export default function OtherDurationTimer (props: IProps) {
  return (
    <div  className="p-4 mt-96 grid  lg:w-full lg:mb-0  lg:text-left self-start">
      <h2 className="text-2xl pb-2">{`Other Duration ${!!props.type ? capitalizeFirstLetter(props.type!) : ''} Timer`}</h2>
      <section className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center pt-2">
          {DURATIONS?.filter(duration => duration !== props.durationStr).map(duration => {
            const durationNum = getPathSuffix(duration)
            const typeData = OtherTypes?.filter(item => item?.label === props.type)?.[0] || OtherTypes[0]
            const text = getLinkTitle({title: typeData?.title, durationNum: durationNum})

            return <Link key={duration} className="whitespace-nowrap hover:text-sky-500 underline" 
              href={generatePath({'durationNum': durationNum, 'type': typeData?.label })} 
              title={`go to ${text}`}>{text}</Link>
          })}
        </section>
      </div>
  )
}