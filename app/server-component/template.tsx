/* eslint-disable react/no-unescaped-entities */
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Timer from "../timer";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import HomeIcon from "../components/home-icon";
import Link from "next/link";
import { Dropdown } from "antd";
import { DURATIONS } from "../const";
import { addPathSuffix, getPathSuffix } from "../server-util";
dayjs.extend(duration);

interface IProps {
  type?: string;
  autoStart?: boolean
  src?: string;
  isHomePage?: boolean;
  duration: string
}

export default function Template(props: IProps) {
  const {autoStart = false} = props;
  // console.log(`...props...`, props)
  const durationNum = String(parseInt(props.duration))
  const timerText = `${durationNum} minute${props.type ? ` ${props.type}` : ''} timer`
  const generateMeditationPath = (data: {durationNum: string}) => {
    const link = `/5-minute-meditation-timer/${data.durationNum}`
    return addPathSuffix(link)
  }
  const generateHomePath = (data:{durationNum: string}) => {
    const link = `/${data.durationNum}`
    return addPathSuffix(link);
  }
  const meditationLink = generateMeditationPath({durationNum});
  const baseTimerLink = generateHomePath({durationNum})
  return (
    <>
      <header className="p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1 className="fixed left-0 top-0 flex w-full justify-start lg:justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 
          pb-6 pt-8 pl-3 
          lg:p-4 lg:dark:bg-zinc-800/30">
            {timerText}
          </h1>
          
          
          
        </div>
        
      </header>
    <main className="flex flex-col items-center lg:p-24 !pb-0 2xl:pt-80 flex-1">
      
      <div className="relative w-[365px] flex flex-col after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] 
      after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 
      after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent 
      before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]
       after:dark:opacity-40">
          
        <Timer duration={Number(durationNum)} autoStart={autoStart} src={props.src} />
        
      </div>
      {/* other duration timer */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center pt-10">
          {DURATIONS?.filter(duration => duration !== props.duration).map(duration => {
            const durationNum = getPathSuffix(duration)
            return <Link key={duration} className="whitespace-nowrap hover:text-sky-500 underline" href={props.isHomePage 
              ? generateHomePath({durationNum})
              : generateMeditationPath({durationNum})
            } title={props.isHomePage ? `go to ${durationNum} minutes timer` : `go to ${durationNum} minutes meditation timer`}>{props.isHomePage 
              ? `${durationNum} min timer` : `${durationNum} min meditation timer`}</Link>
          })}
        </section>
      {/* other type timer */}
      <div className="p-4  mt-96 grid lg:max-w-5xl lg:w-full lg:mb-0  lg:text-left self-start">
        <h2 className="text-2xl pb-2">{`Other ${durationNum} Minute Timer`}</h2>
        <section className="pl-4">

          <span className="z-50 right-4 top-8 flex items-center cursor-pointer">
            <HomeIcon url={props.isHomePage ? meditationLink : baseTimerLink}/> 
            <Link className="whitespace-nowrap hover:text-sky-500 underline" href={props.isHomePage 
            ? meditationLink : baseTimerLink} title={props.isHomePage ? `go to meditation timer`: "back to home page"}>{props.isHomePage 
            ? `${durationNum} minute meditation timer` : `${durationNum} minute timer`}</Link>
          </span> 
        </section>
      </div>
    </main>
    <article className="p-4 lg:p-24">
      <h2 className="text-2xl pb-2">{`How to Use the ${durationNum} Minute Timer`}</h2>
      <section className="pl-4">
      <p className="underline text-gray-400">{`Our ${durationNum} minute timer is designed to be simple and effective for 
      focused sessions of any task that requires brief time management. Here's how to get started:`}</p>
      <ol className="text-gray-500 list-decimal pl-4">
          <li><strong>Start the Countdown:</strong>{` You can start the ${durationNum} minute countdown by either pressing the `}<strong>"Enter"</strong> key on your keyboard or clicking the <strong>Play button</strong> on the screen.</li>
          <li><strong>Stay Focused:</strong> While the timer counts down, dedicate your full attention to your task. The minimalistic design helps you stay focused without distractions.</li>
          <li><strong>Toggle End-of-Timer Sound:</strong> If you prefer to have a sound alert when the timer ends, you can enable or disable this feature using the switch provided. The <strong>"End Sound On"</strong> setting will play a notification sound at the end of the countdown, while <strong>"End Sound Off"</strong> will keep the timer silent upon completion.</li>
      </ol>
      </section>
    </article>

    </>
  );
}
