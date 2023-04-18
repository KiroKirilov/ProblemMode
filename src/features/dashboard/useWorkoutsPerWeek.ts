import { useSelector } from "react-redux";
import { workoutsByWeek } from "../history/workoutHistorySlice";
import { useMemo } from "react";
import { getLastNWeekStarts } from "../../common/dates";

export const useWorkoutsPerWeek = () => {
  const workoutsPerWeek = useSelector(workoutsByWeek);

  const chartData = useMemo(() => {
    const weekStarts: string[] = getLastNWeekStarts(8)
      .map(x => x.toLocaleString('en-uk', { day: '2-digit', month: '2-digit', year: '2-digit' }));

    const labels: string[] = []

    const data: number[] = [];

    for (const weekStart of weekStarts) {
      labels.push(weekStart.slice(0, 5));
      const week = workoutsPerWeek.find(x => x.key == weekStart);
      data.push(week?.items?.length || 0)
    }

    return {
      labels,
      data
    }
  }, [workoutsPerWeek])

  return {
    chartData
  }
}