import dayjs from "dayjs";
import duration from 'dayjs/plugin/duration'
import Template from "@/app/page";
import { Metadata } from "next";
import AudioPlayer from "../components/audio-player";
dayjs.extend(duration);

export const metadata: Metadata = {
  title: '5 minute meditation timer',
  description: 'This is a online 5 minute meditation timer',
}

export default function FiveMinuteMeditationTimer() {
  return (
    <>
      <AudioPlayer src={'/audios/waves.m4a'} />
      <Template />
    </>
  );
}
