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
  const [isMuted, setIsMuted] = useState<boolean>();
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);
  
  const startPlay = () => {
    startAudio()
  }

  useImperativeHandle(
    ref,
    () => ({
      startPlay
    }),
    
  )
  // 初始化AudioContext和GainNode
  useEffect(() => {
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gn = ac.createGain();
    gn.connect(ac.destination);
    setAudioContext(ac);
    setGainNode(gn);

    // 加载音频
    loadAudio(props.src, ac);

    // 组件卸载时清理资源
    return () => {
      ac.close();
    };
  }, [props.src]);
  // 静音
  useEffect(() => {
    if (!!localStorage.getItem(MUTE_KEY)) setIsMuted(true)
  }, [])
  // setting muted state
  useEffect(() => {
    if (gainNode) {
      gainNode.gain.value = isMuted ? 0 : 1;
    }
  }, [gainNode, isMuted])

  // 加载音频文件
  const loadAudio = async (url: string, ac: AudioContext) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioData = await ac.decodeAudioData(arrayBuffer);
      setAudioBuffer(audioData);
      props.setIsAudioReady(true); // 设置音频准备就绪状态
    } catch (error) {
      console.error("加载音频失败:", error);
    }
  };

  const playAudio = () => {
    if (audioContext && audioBuffer && gainNode) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(gainNode);
      source.loop = false; 
      source.start(0);

      source.onended = () => {
        playAudio();
      };
    }
  };

  // 处理静音和取消静音
  const toggleMute = () => {
    if (gainNode) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      localStorage.setItem(MUTE_KEY, newMutedState ? `1`: '');
    }
  };
  /** 播放音频文件 */
  const startAudio = usePersistFn(async () => {
    if (audioContext?.state === 'suspended') {
      await audioContext.resume()
    }
    playAudio();
  });
 
  const startAudioOnEnter = usePersistFn((e: KeyboardEvent) => {
    if (e.key === 'Enter') startAudio()
  })
  // 用户交互启动音频
  useEffect(() => {
    
    document.addEventListener('keydown', startAudioOnEnter);
    return () => {
      document.removeEventListener('keydown', startAudioOnEnter);

    };
  }, [audioContext, audioBuffer, gainNode]);
  const ICON = useMemo(() => isMuted ? BellSlashIcon : BellAlertIcon, [isMuted])
  return (
    <div className='fixed z-50 left-4 top-8'>
      

      <Spin spinning={!props.isAudioReady}><button onClick={toggleMute}><ICON className="h-6 w-6 "/></button></Spin>
    </div>
  );
});
AudioPlayer.displayName = 'AudioPlayer';
export default AudioPlayer;
