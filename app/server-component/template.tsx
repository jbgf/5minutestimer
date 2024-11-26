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
      <main className="flex flex-col items-center lg:p-24 !pb-0 2xl:pt-60 flex-1">
      
        <div className="relative w-[365px] flex flex-col mb-60">
          
        <Timer duration={Number(durationNum)} noEndSound={props.noEndSound} hidePlayButton={props.hidePlayButton} autoStart={autoStart} src={props.src} />
        
      </div>
      {/* other duration timer */}
      <OtherDurationTimer durationStr={props.duration} type={props.type} />
      {/* other type timer */}
      <OtherTypeTimers durationNum={durationNum} />
    </main>
    
      <article className="p-4 lg:p-24 prose prose-slate dark:prose-invert max-w-none">
      {props.type !== TimerTypes.Nap && (
          <>
            <h2 className="text-2xl font-bold mb-6">{`How to Use the ${durationNum} Minute Timer`}</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{`About ${durationNum} Minute Timer`}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {`Our ${durationNum} minute timer is designed to be simple and effective for focused sessions of any task that requires brief time management. Whether you're taking a quick break, meditating, or following the Pomodoro Technique, this timer helps you stay on track.`}
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Quick Start Guide</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <ol className="list-decimal pl-6 space-y-3">
                    <li>
                      <strong>Start the Timer:</strong>
                      {` Click the Play button to begin your ${durationNum}-minute countdown`}
                    </li>
                    <li>
                      <strong>Focus on Your Task:</strong>
                      {` Utilize these ${durationNum} minutes for focused work or relaxation`}
                    </li>
                    <li>
                      <strong>Get Notified:</strong>
                      {` When ${durationNum} minutes are up, you'll receive an alert (if enabled)`}
                    </li>
                  </ol>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Simple Interface:</strong> Clean, distraction-free design</li>
                    <li><strong>Customizable Alerts:</strong> Optional sound notifications</li>
                    <li><strong>Device Friendly:</strong> Works on desktop and mobile devices</li>
                    <li><strong>No Account Needed:</strong> Start using immediately</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-6 mt-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Why {durationNum} Minutes?</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <p className="mb-3">
                    {durationNum} minutes is an optimal time interval that balances productivity with sustainability. It's:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Long enough to achieve meaningful progress</li>
                    <li>Short enough to maintain intense focus</li>
                    <li>Perfect for quick breaks or meditation sessions</li>
                    <li>Ideal for the popular Pomodoro Technique</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Tips for Success</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Prepare Your Space:</strong> Find a quiet, comfortable environment</li>
                    <li><strong>Set Clear Goals:</strong> Know what you want to accomplish</li>
                    <li><strong>Minimize Distractions:</strong> Put your phone on silent mode</li>
                    <li><strong>Stay Consistent:</strong> Regular timing sessions build better habits</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <div className="text-gray-600 dark:text-gray-400">
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Precise Timing:</strong> Accurate to the second</li>
                    <li><strong>Sound System:</strong> Clear, non-intrusive notifications</li>
                    <li><strong>Offline Support:</strong> Works without internet connection</li>
                    <li><strong>Zero Lag:</strong> Immediate response to your interactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
      )}
    </article>

    </>
  );
}
