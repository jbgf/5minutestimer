'use client';
import { useCountDown } from "./util";
import { useEffect } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { useMemoizedFn } from "ahooks";
dayjs.extend(duration);
export default function Timer() {
  const {isCountingDown, start, remainingSeconds} = useCountDown({totalSeconds: 5*60});
  const listenner = useMemoizedFn((e) => {
    if (isCountingDown) return;
    if (e.key === 'Enter') {
      start()
    }
  })
  useEffect(() => {
    start()
    document.addEventListener('keydown', listenner)
    return () => {
      document.removeEventListener('keydown', listenner)
    }
  }, [])
  // const 
  return (
    
       isCountingDown ? <div className="text-9xl">{dayjs.duration(remainingSeconds, 'second')?.format('mm:ss')}</div>
       : <div
       className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-3xl z-[1]"
       
       
       onClick={() => start()}
     >
       enter to restart
       
     </div>

  );
}
