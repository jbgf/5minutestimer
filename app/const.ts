

export const SUFFIX = 'minutes'

const addPathSuffix = (duration: string) => `${duration}${SUFFIX}`

/** 静音 */
export const MUTE_KEY = 'MUTE_TEST'
/** 播放结束音 */
export const END_SOUND_PLAY_KEY = 'END_SOUND_PLAY_KEY'

export const DURATIONS = Array.apply(null, Array(11)).map(function (x, i) { 
  return addPathSuffix((i + 1) * 5 + ''); 
})

export enum TimerTypes {
  Home = '',
  Nap = 'nap',
  Meditation = 'meditation'
}