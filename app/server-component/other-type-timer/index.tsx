import HomeIcon from "@/app/components/home-icon";
import { generateHomePath, generateMeditationPath, generatePath, getLinkTitle } from "../utils";
import Link from "next/link";
import { OtherTypes } from "../const";
interface IProps {
  durationNum: string;
}
export default function OtherTypeTimers (props: IProps) {
  
  return (
    <div className="p-4 pl-0 mt-6 grid lg:w-full lg:mb-0  lg:text-left self-start">
        <h2 className="text-2xl pb-2">{`Other Type ${props.durationNum} Minute Timer`}</h2>
        <section className="pl-4">

          <span className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center pt-2">
            {/* <HomeIcon />  */}
            {OtherTypes.map((item, index) => {
              const text = getLinkTitle({title: item?.title, durationNum: props.durationNum})
              return <Link 

                key={index} 
                className="whitespace-nowrap hover:text-sky-500 underline" 
                href={generatePath({type: item?.path, 'durationNum': props.durationNum})} 
                title={`go to ${text}`}>
                  {text}
                </Link>
              })}
          </span> 
        </section>
      </div>
  )
}