/* eslint-disable react/no-unescaped-entities */
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Timer from "../timer";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import HomeIcon from "../components/home-icon";
import Link from "next/link";
import { Dropdown } from "antd";
import { TimerTypes } from "../const";

import { generateHomePath, generateMeditationPath } from "./utils";
import OtherTypeTimers from "./other-type-timer";
import OtherDurationTimer from "./other-duration-timer";
dayjs.extend(duration);

interface IProps {
  type?: TimerTypes;
  autoStart?: boolean
  src?: string;
  isHomePage?: boolean;
  duration: string
  noEndSound?: boolean
  hidePlayButton?: boolean
}

export default function Template(props: IProps) {
  const {autoStart = false} = props;
  // console.log(`...props...`, props)
  const durationNum = String(parseInt(props.duration))
  const timerText = `${durationNum} minute${props.type ? ` ${props.type}` : ''} timer`
  
  
  
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
      
      <div className="relative w-[365px] flex flex-col ">
          
        <Timer duration={Number(durationNum)} noEndSound={props.noEndSound} hidePlayButton={props.hidePlayButton} autoStart={autoStart} src={props.src} />
        
      </div>
      {/* other duration timer */}
      <OtherDurationTimer durationStr={props.duration} type={props.type} />
      {/* other type timer */}
      <OtherTypeTimers durationNum={durationNum} />
    </main>
    
    <article className="p-4 lg:p-24">
      {props.type !== TimerTypes.Nap && (
      <>
        <h2 className="text-2xl pb-2">{`How to Use the ${durationNum} Minute Timer`}</h2>
        <section className="pl-4">
        <p className="underline text-gray-400">{`Our ${durationNum} minute timer is designed to be simple and effective for 
        focused sessions of any task that requires brief time management.To use our 5 Minutes Timer, Here's how to get started:`}</p>
        <ol className="text-gray-500 list-decimal pl-4">
            <li><strong>Start the Countdown:</strong>{` You can start the ${durationNum} minute countdown by `}clicking the <strong>Play button</strong> on the screen.</li>
            <li><strong>Stay Focused:</strong> While the timer counts down, dedicate your full attention to your task. The minimalistic design helps you stay focused without distractions.</li>
            <li><strong>Toggle End-of-Timer Sound:</strong> If you prefer to have a sound alert when the timer ends, you can enable or disable this feature using the switch provided. The <strong>"End Sound On"</strong> setting will play a notification sound at the end of the countdown, while <strong>"End Sound Off"</strong> will keep the timer silent upon completion.</li>
        </ol>
        </section>
      </>
      )}
    </article>

    </>
  );
}
