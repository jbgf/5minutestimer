import HomeIcon from "@/app/components/home-icon";
import { generateHomePath, generateMeditationPath, generatePath, getLinkTitle } from "../utils";
import Link from "next/link";
import { OtherTypes } from "../const";
interface IProps {
  durationNum: string;
}
export default function OtherTypeTimers (props: IProps) {
  
  return (
    <div className="p-4 pl-0 mt-96 grid lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left self-start">
        <h2 className="text-2xl pb-2">{`Other ${props.durationNum} Minute Timer`}</h2>
        <section className="pl-4">

          <span className="grid sm:grid-cols-2 md:grid-cols-3 z-50 right-4 top-8 items-center cursor-pointer">
            {/* <HomeIcon />  */}
            {OtherTypes.map((item, index) => {
              const text = getLinkTitle({title: item?.title, durationNum: props.durationNum})
              return <Link 

                key={index} 
                className="whitespace-nowrap hover:text-sky-500 underline mr-4" 
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