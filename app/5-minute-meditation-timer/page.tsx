import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata } from "next";
import AudioPlayer from "../components/audio-player";
import { createRef, useRef } from "react";
import Template from "../server-component/template";
dayjs.extend(duration);

export const metadata: Metadata = {
  title: '5 minute meditation timer',
  description: 'This is a online 5 minute meditation timer',
}

export default function FiveMinuteMeditationTimer() {
  
  return (
    
      <Template type="meditation" autoStart={false} src={'/audios/waves.m4a'} />
    
  );
}
