import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Timer from "../timer";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import HomeIcon from "../components/home-icon";
import Link from "next/link";
dayjs.extend(duration);

interface IProps {
  type?: string;
  autoStart?: boolean
  src?: string;
  isHomePage?: boolean;
}

export default function Template(props: IProps) {
  const {autoStart = false} = props;
  const timerText = `5 minute${props.type ? ` ${props.type}` : ''} timer`
  return (
    <>
      <header className="p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {timerText}
          </h1>
          
          
          <span className="fixed z-50 right-4 top-8 flex items-center cursor-pointer">
            <HomeIcon url={props.isHomePage ? "/5-minute-meditation-timer" : "/"}/> 
            <Link className="whitespace-nowrap hover:text-sky-500" href={props.isHomePage ? "/5-minute-meditation-timer" : "/"} title="back to home page">{props.isHomePage ? `5 minute meditation timer` : `5 minute timer`}</Link>
          </span> 
        </div>
        
      </header>
    <main className="flex flex-col items-center p-24 justify-around flex-1">
      
      <div className="relative w-[365px] flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          
        <Timer autoStart={autoStart} src={props.src} />
        
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      </div>
    </main>
    <footer className="p-6 lg:p-24">
      <h2 className="text-2xl pb-2">How to Use the 5 Minute Timer</h2>
      <section className="pl-4">
      <p className="text-gray400">{`Our 5 minute timer is designed to be simple and effective, focused sessions of any task that requires a brief time management solution. Here's how to get started:`}</p>
      <ol className="text-gray-500 list-decimal pl-4">
          <li><strong>Start the Countdown:</strong> Simply press the <strong>{`"Enter"`}</strong> key on your keyboard to initiate the 5 minute countdown.</li>
          <li><strong>Stay Focused:</strong> While the timer counts down, dedicate your full attention to your task.</li>
      </ol>
      </section>
    </footer>
    </>
  );
}
