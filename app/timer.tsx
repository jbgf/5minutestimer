'use client';
import { useCountDown } from "./util";
import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import { useMemoizedFn } from "ahooks";
import { AudioPlayerRef } from "./type";
import { CaretRightOutlined, PauseOutlined } from "@ant-design/icons";
import classNames from "classnames";
import { Button, Space, Switch } from "antd";
import { END_SOUND_PLAY_KEY } from "./const";
import { isNil } from "lodash";
import MusicPlayer from "./components/music-play";
import AudioPlayer from "./components/audio-player";

dayjs.extend(duration);
interface IProps {
  autoStart?: boolean;
  onClickStart?: () => void;
  src?: string;
  duration: number
  noEndSound?: boolean
  hidePlayButton?: boolean
}


export default function Timer(props: IProps) {
  const playRef = useRef<AudioPlayerRef | null>(null)
  const endSoundPlayRef = useRef<AudioPlayerRef | null>(null)
  // console.log(`hidePlayButton`, props.hidePlayButton)
  const {isCountingDown, pause, start, remainingSeconds} = useCountDown({
    autoStart: props.autoStart, 
    onPause: () => {
      playRef.current?.stopPlay?.()
    },
    onEnd: () => {
      playRef.current?.stopPlay?.()
      if (!props.noEndSound && endSoundOn) endSoundPlayRef?.current?.startPlay()
    },
    totalSeconds: props.duration * 60
  });
  const [endSoundOn, setSoundIsOn] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(true);

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
    props.onClickStart?.()
    playRef?.current?.startPlay()
  }
  const autoStart = () => {
    start()
  }
  const clickStart = () => {
    startTimter()
  }

  const handleSetSoundIsOn = (value: boolean) => {
    setSoundIsOn(value)
    localStorage.setItem(END_SOUND_PLAY_KEY, value ? '1' : '')
    if (!value) endSoundPlayRef.current?.stopPlay?.()
  }

  useEffect(() => {
    // 播放结束提示初始化
    const endSoundOnStatus = localStorage.getItem(END_SOUND_PLAY_KEY)
    setSoundIsOn(isNil(endSoundOnStatus) ? true : !!localStorage.getItem(END_SOUND_PLAY_KEY));

    if (props.autoStart !== false) autoStart()
    document.addEventListener('keydown', startEnterListenner)
    return () => {
      document.removeEventListener('keydown', startEnterListenner)
    }

  }, [])
  // const 
  return (
      <div className="w-94">
        
        <div className="text-8xl h-24 rounded-md flex items-center relative bg-blue-600 text-white">
          <div className="absolute left-1/2 -translate-x-32">
            {dayjs.duration(remainingSeconds, 'second')?.format('mm:ss')}
          </div>
        </div>
        <div className="flex items-center justify-between pt-8 ">

          {/* page must be touched to play */
          (props.noEndSound ? !props.hidePlayButton : true) && <div className="h-12 text-6xl relative z-10 flex justify-between items-center" >{
            !isCountingDown 
              ? <Button type="primary" disabled={audioDisabled} onClick={clickStart} title={`press enter to start`} >Start</Button>
              : <Button type="primary" onClick={pause} >Pause</Button> }</div>
          }
          <Space align="center">

            {!!props.src && <MusicPlayer ref={playRef} src={props.src} />}
            {!props.noEndSound && <Switch checked={endSoundOn} onChange={handleSetSoundIsOn} checkedChildren={`End Sound On`} unCheckedChildren={`End Sound Off`} size="default" /> }
          </Space>
        </div>
        <AudioPlayer loop={false} src={'/audios/end_钟.mp3'} ref={endSoundPlayRef} hideMuteIcon />
      </div>
      
  );
}
