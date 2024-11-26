import { getPathSuffix } from "@/app/server-util";
import { DURATIONS, TimerTypes } from "@/app/const"
import Link from "next/link";
import { capitalizeFirstLetter, generatePath, getLinkTitle } from "../utils";
import { OtherTypes } from "../const";
import { Space } from "antd";
import { ClockIcon } from "@heroicons/react/24/outline";

interface IProps {
  durationStr: string;
  type?: TimerTypes
}

export default function OtherDurationTimer (props: IProps) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/5 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-6">
          <ClockIcon className="w-6 h-6 text-gray-400" />
          <h2 className="text-2xl font-semibold">
            {`Other Duration ${!!props.type ? capitalizeFirstLetter(props.type!) : ''} Timer`}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {DURATIONS?.filter(duration => duration !== props.durationStr).map(duration => {
            const durationNum = getPathSuffix(duration)
            const typeData = OtherTypes?.filter(item => item?.label === props.type)?.[0] || OtherTypes[0]
            const text = getLinkTitle({title: typeData?.title, durationNum: durationNum})

            return (
              <Link 
                key={duration} 
                href={generatePath({'durationNum': durationNum, 'type': typeData?.path })} 
                title={`go to ${text}`}
                className="bg-white/5 hover:bg-white/10 rounded-md p-4 text-center transition-all duration-200 hover:transform hover:scale-105"
              >
                <span className="text-lg font-medium text-gray-200">{durationNum}</span>
                <span className="block text-sm text-gray-400 mt-1">minutes</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}