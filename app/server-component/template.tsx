import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Timer from "../timer";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import HomeIcon from "../components/home-icon";
dayjs.extend(duration);

interface IProps {
  type?: string;
  autoStart?: boolean
  src?: string;
  isHomePage?: boolean;
}

export default function Template(props: IProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {`5 minute${props.type ? ` ${props.type}` : ''} timer`}
        </h1>
        {!props.isHomePage 
          ? <span className="flex items-center cursor-pointer"><HomeIcon /> <a className="whitespace-nowrap hover:text-sky-500" href="/" target="_blank" title="back to home page">5 minute timer</a></span> 
        :  <div className='fixed z-50 right-4 top-8 flex items-center cursor-pointer'>
              <HomeIcon url="/5-minute-meditation-timer" /><a className="hover:text-sky-500" href="/5-minute-meditation-timer" target="_blank" title="go to 5 minute meditation timer" >5 minute meditation timer</a>
            </div>}
      </div>

      <div className="relative w-[365px] flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          
        <Timer autoStart={props.autoStart} src={props.src} />
        
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      
      </div>
    </main>
  );
}