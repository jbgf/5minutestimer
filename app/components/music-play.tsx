'use client'
import { BellSlashIcon } from '@heroicons/react/20/solid';
import { BellAlertIcon } from '@heroicons/react/24/solid';
import React, { useMemo, useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import usePersistFn from '../hooks/usePersistFn';
import { AudioPlayerRef } from '../type';
import { Spin } from 'antd';
import { MUTE_KEY } from '../const';
import AudioPlayer from './audio-player';

type MusicPlayerProps = {
  src: string;
};

const MusicPlayer = forwardRef<AudioPlayerRef, MusicPlayerProps>((props, ref) => {
  const audioRef = React.useRef<AudioPlayerRef>(null);

  // 利用 ref 在父组件中暴露方法
  useImperativeHandle(ref, () => ({
    startPlay: () => {
      audioRef?.current?.startPlay();
    },
    stopPlay: () => {
      audioRef?.current?.stopPlay();
    }
  }));

  return (
    <AudioPlayer loop src={props.src} ref={audioRef} />
  );
});

MusicPlayer.displayName = 'MusicPlayer';
export default MusicPlayer;
