'use client';
import { useCountDown } from "./util";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { useMemoizedFn } from "ahooks";
import AudioPlayer from "./components/audio-player";
import { AudioPlayerRef } from "./type";

dayjs.extend(duration);
interface IProps {
  autoStart?: boolean;
  onClickStart?: () => void;
  src?: string;
}


export default function Timer(props: IProps) {
  const {isCountingDown, start, remainingSeconds} = useCountDown({autoStart: props.autoStart, totalSeconds: 5*60/* 1 */});
  const [inited, setInited] = useState(false);

  const playRef = useRef<AudioPlayerRef | null>(null)
  const startEnterListenner = useMemoizedFn((e) => {
    if (isCountingDown) return;
    if (e.key === 'Enter') {
      start()
    }
  })
  const autoStart = () => {
    start()
    setInited(true)
  }
  const clickStart = () => {
    start()
    setInited(true)
    props.onClickStart?.()
    playRef?.current?.startPlay()
  }
  useEffect(() => {
    if (props.autoStart !== false) autoStart()
    document.addEventListener('keydown', startEnterListenner)
    return () => {
      document.removeEventListener('keydown', startEnterListenner)
    }
  }, [])
  // const 
  return (
      <>
      {!!props.src && <AudioPlayer ref={playRef} src={props.src} />} 
      { 
      (isCountingDown 
        ? <div className="text-9xl">{dayjs.duration(remainingSeconds, 'second')?.format('mm:ss')}</div>
        : <div
       id="start"
       className="flex place-items-center gap-2 p-8 lg:p-0 text-3xl cursor-pointer z-0"
       
       
       onClick={clickStart}
     >
       {`press enter to ${inited ? `restart` : 'start'}`}
       
     </div>)
}
      </>
      
  );
}
