import { addPathSuffix } from "./server-util";

/** 静音 */
export const MUTE_KEY = 'MUTE_TEST'
/** 播放结束音 */
export const END_SOUND_PLAY_KEY = 'END_SOUND_PLAY_KEY'

export const DURATIONS = Array.apply(null, Array(11)).map(function (x, i) { 
  return addPathSuffix((i + 1) * 5 + ''); 
})

export enum TimerTypes {
  Home = 'home',
  Nap = 'nap',
  Meditation = 'meditation'
}