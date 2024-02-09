'use client';
import { useCountDown } from "./util";
import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { useMemoizedFn } from "ahooks";
import AudioPlayer from "./components/audio-player";
import { AudioPlayerRef } from "./type";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import classNames from "classnames";

dayjs.extend(duration);
interface IProps {
  autoStart?: boolean;
  onClickStart?: () => void;
  src?: string;
}


export default function Timer(props: IProps) {
  const playRef = useRef<AudioPlayerRef | null>(null)
  const {isCountingDown, pause, start, remainingSeconds} = useCountDown({
    autoStart: props.autoStart, 
    onPause: () => {
      playRef.current?.stopPlay?.()
    },
    onEnd: () => {
      playRef.current?.stopPlay?.()
    },
    totalSeconds: 5*60/* 1 */
  });
  const [inited, setInited] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);

  const audioDisabled = useMemo(() => {
    return false
    /* return !!props.src && !isAudioReady */
  }, [props.src, isAudioReady])

  const startEnterListenner = useMemoizedFn((e) => {
    if (isCountingDown) return;
    if (e.key === 'Enter') {
      startTimter()
    }
  })
  const startTimter = () => {
    if (audioDisabled) return;
    start()
    setInited(true)
    props.onClickStart?.()
    playRef?.current?.startPlay()
  }
  const autoStart = () => {
    start()
    setInited(true)
  }
  const clickStart = () => {
    startTimter()
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
      <div className="w-96">
        
        <div className="text-8xl border-indigo-950 border-4 rounded-md flex items-center pl-14">{dayjs.duration(remainingSeconds, 'second')?.format('mm:ss')}</div>
        <div className="flex items-center justify-center pt-3">

          {<div className="text-6xl relative z-10 flex justify-center items-end" >{!isCountingDown ? <CaretRightOutlined className={classNames({'text-gray-400': audioDisabled, '!cursor-not-allowed': audioDisabled})} onClick={clickStart} title={`press enter to start`} /> : <PauseOutlined onClick={pause} /> }</div>}
          {!!props.src && <AudioPlayer isAudioReady={isAudioReady} setIsAudioReady={setIsAudioReady} ref={playRef} src={props.src} />} 
        </div>
      </div>
      
  );
}
