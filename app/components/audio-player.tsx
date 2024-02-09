'use client'
import { BellSlashIcon } from '@heroicons/react/20/solid';
import { BellAlertIcon } from '@heroicons/react/24/solid';
import React, { useMemo, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import usePersistFn from '../hooks/usePersistFn';
import { AudioPlayerRef } from '../type';
import { Spin } from 'antd';

type AudioPlayerProps = {
  src: string;
  isAudioReady: boolean;
  setIsAudioReady: (val: boolean) => void;
};
const MUTE_KEY = 'MUTE_TEST'


const AudioPlayer = forwardRef<AudioPlayerRef, AudioPlayerProps>((props, ref) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  // 利用 ref 在父组件中暴露方法
  useImperativeHandle(ref, () => ({
    startPlay: () => {
      audioRef?.current?.play();
    },
    stopPlay: () => {
      audioRef?.current?.pause();
    }
  }));

  // 静音状态变化时，更新 <audio> 元素
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // 加载音频文件时更新状态
  const onAudioLoaded = () => {
    props.setIsAudioReady(true);
  };

  // 静音状态初始化
  useEffect(() => {
    setIsMuted(!!localStorage.getItem(MUTE_KEY));
  }, []);

  // 处理静音和取消静音
  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    localStorage.setItem(MUTE_KEY, newMutedState ? '1' : '');
  };

  const ICON = isMuted ? BellSlashIcon : BellAlertIcon;

  return (
    <div className='z-50 left-4 top-8'>
      <audio 
        ref={audioRef} 
        src={props.src} 
        onCanPlayThrough={onAudioLoaded} 
        onEnded={() => {
          // 可以在这里处理音频播放结束后的逻辑
        }}
        onLoadStart={onAudioLoaded}
        preload="auto"
        loop
      />
      {/* <Spin spinning={!props.isAudioReady}> */}
        <button onClick={toggleMute}>
          <ICON className="h-10 w-10 text-indigo-700 " />
        </button>
      {/* </Spin> */}
    </div>
  );
});

AudioPlayer.displayName = 'AudioPlayer';
export default AudioPlayer;
