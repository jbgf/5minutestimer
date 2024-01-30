import { useEffect, useState } from "react";

interface IUseCountDown {
  totalSeconds?: number;
}
export function useCountDown(props: IUseCountDown = {}) {
  const {  totalSeconds = 60 } = props;

  const [isCountingDown, setIsCountingDown] = useState(true);
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  useEffect(() => {
    if (!isCountingDown) {
      return;
    }

    setTimeout(() => {
      if (remainingSeconds >= 1) {
        setRemainingSeconds(remainingSeconds - 1);
      } else {
        // setRemainingSeconds(0);
        setIsCountingDown(false);
      }
    }, 1000);
  }, [remainingSeconds, isCountingDown]);

  

  function startCountDown() {
    setRemainingSeconds(totalSeconds);
    setIsCountingDown(true);
  }

  return {
    isCountingDown,
    /** 最小为1 */
    remainingSeconds,
    start: startCountDown,
  };
}