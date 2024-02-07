import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'

import { Metadata } from "next";
import { createRef, useRef } from "react";
import Template from "../server-component/template";
dayjs.extend(duration);

export const metadata: Metadata = {
  title: '5 minute meditation timer',
  description: 'This is a online 5 minute meditation timer',
}

export default function FiveMinuteMeditationTimer() {
  
  return (
    
      <Template type="meditation" autoStart={false} src={'/audios/waves正念冥想放松.m4a'} />
    
  );
}
