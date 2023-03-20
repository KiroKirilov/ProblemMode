import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../app/store";
import { incrementRestTimer, startRestTimer } from "./restTimerSlice";

let timeout = -1;

export const useRestTimer = () => {
  const dispatch = useDispatch();
  const { time, isStarted } = useSelector((x: RootState) => x.restTimer);
  
  useEffect(() => {
    dispatch(startRestTimer())
  }, []);


	useEffect(() => {
		if (isStarted) {
      clearTimeout(timeout);
      
			timeout = setTimeout(() => {
				dispatch(incrementRestTimer());
			}, 1000);
		}
	}, [isStarted, time]);

  const formattedTime = useMemo(() => {
		const minutes: number = Math.floor(time / 60);
		const seconds: number = time % 60;

		const formattedSeconds = seconds.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});

		const formattedMinutes = minutes.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});

		return `${formattedMinutes}:${formattedSeconds}`;
	}, [time]);
  
  return {
    formattedTime,
  }
}