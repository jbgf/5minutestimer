import { SUFFIX, TimerTypes } from "./app/const"
export const addPathSuffix = (duration: string) => `${duration}${SUFFIX}`
export const generateTitle = (data: {duration: string, type?: TimerTypes}) => {
  if (data.type === TimerTypes.Meditation) {
    return `${data?.duration}-Minute Meditation Session Timer | Yoga`
  }
  if (data?.type === TimerTypes.Nap) {
    return `Quick ${data.duration} Minute Timer: Quick Nap Alarm`
  }
  /* Clock, Stopwatch, Countdown to a date, set */
  
  return `Simple ${data.duration} Minute Countdown Timer, Alarm`
}

export const generateDescription = (data: {duration: string, type?: TimerTypes}) => {
  if (data.type === TimerTypes.Meditation) {
    return `Start your quick yoga routine or enjoy a tranquil meditation with our ${data?.duration}-minute countdown timer`
  }
  if (data.type === TimerTypes.Nap) {
    return `Set a ${data.duration} minute nap timer to help you recharge quickly. Ideal for short breaks`
  }
  return `Set a ${data.duration} minute countdown timer for your activities whether it's cooking, working, study breaks or relaxing`
}



