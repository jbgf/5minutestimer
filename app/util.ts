import { useEffect, useState } from "react";
import usePersistFn from "./hooks/usePersistFn";

interface IUseCountDown {
  totalSeconds?: number;
  autoStart?: boolean
  onEnd?: () => void;
  onPause?: () => void;
}

export function useCountDown(props: IUseCountDown = {}) {
  const {  totalSeconds = 60 } = props;

  const [isCountingDown, setIsCountingDown] = useState(props.autoStart ?? true);
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const count = usePersistFn(() => {
    if (!isCountingDown) return;
    if (remainingSeconds >= 1) {
      setRemainingSeconds(remainingSeconds - 1);
    } else {
      setIsCountingDown(false);
      props.onEnd?.();
    }
  })
  useEffect(() => {
    if (!isCountingDown) {
      return;
    }

    setTimeout(() => {
      count();
    }, 1000);
  }, [remainingSeconds, isCountingDown]);

  

  function startCountDown() {
    setRemainingSeconds(remainingSeconds || totalSeconds);
    setIsCountingDown(true);
  }
  function pause () {
    setIsCountingDown(false)
    props.onPause?.();
  }
  return {
    isCountingDown,
    /** 最小为1 */
    remainingSeconds,
    start: () => startCountDown(),
    pause,
  };
}

