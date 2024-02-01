'use client'
import React, { useState, useEffect } from 'react';

type AudioPlayerProps = {
  src: string;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [audioBuffer, setAudioBuffer] = useState<AudioBuffer | null>(null);
  const [gainNode, setGainNode] = useState<GainNode | null>(null);

  // 初始化AudioContext和GainNode
  useEffect(() => {
    const ac = new (window.AudioContext || (window as any).webkitAudioContext)();
    const gn = ac.createGain();
    gn.connect(ac.destination);
    setAudioContext(ac);
    setGainNode(gn);

    // 加载音频
    loadAudio(src, ac);

    // 组件卸载时清理资源
    return () => {
      ac.close();
    };
  }, [src]);

  // 加载音频文件
  const loadAudio = async (url: string, ac: AudioContext) => {
    try {
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioData = await ac.decodeAudioData(arrayBuffer);
      setAudioBuffer(audioData);
    } catch (error) {
      console.error("加载音频失败:", error);
    }
  };

  // 播放音频
  const playAudio = () => {
    if (audioContext && audioBuffer && gainNode) {
      const source = audioContext.createBufferSource();
      source.buffer = audioBuffer;
      source.connect(gainNode);
      source.start(0);
    }
  };

  // 处理静音和取消静音
  const toggleMute = () => {
    if (gainNode) {
      gainNode.gain.value = isMuted ? 1 : 0;
      setIsMuted(!isMuted);
    }
  };

  // 用户交互启动音频
  useEffect(() => {
    const startAudio = () => {
      if (audioContext?.state === 'suspended') {
        audioContext.resume().then(() => {
          playAudio();
        });
      }
    };
    document.addEventListener('click', startAudio);
    return () => {
      document.removeEventListener('click', startAudio);
    };
  }, [audioContext, audioBuffer, gainNode]);

  return (
    <div>
      <button onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
    </div>
  );
};

export default AudioPlayer;
