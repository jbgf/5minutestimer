'use client';
import { useCountDown } from "./util";
import { useEffect, useRef, useState } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { useMemoizedFn } from "ahooks";
import AudioPlayer from "./components/audio-player";
import { AudioPlayerRef } from "./type";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";

dayjs.extend(duration);
interface IProps {
  autoStart?: boolean;
  onClickStart?: () => void;
  src?: string;
}


export default function Timer(props: IProps) {
  const {isCountingDown, pause, start, remainingSeconds} = useCountDown({autoStart: props.autoStart, totalSeconds: 5*60/* 1 */});
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
      <div>
        {!!props.src && <AudioPlayer ref={playRef} src={props.src} />} 
        <div className="text-8xl border-indigo-950 border-4 rounded-md flex items-center w-96 pl-14">{dayjs.duration(remainingSeconds, 'second')?.format('mm:ss')}</div>
        <div className="text-6xl relative z-10 text-center" >{!isCountingDown ? <CaretRightOutlined onClick={clickStart} title={`press enter to ${inited ? `restart` : 'start'}`} /> : <PauseOutlined onClick={pause} /> }</div>
      </div>
      
  );
}
