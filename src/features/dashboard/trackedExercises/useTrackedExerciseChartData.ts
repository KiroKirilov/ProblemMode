import { useSelector } from "react-redux";
import { Exercise } from "../../../db/models/exercise";
import { RootState } from "../../../app/store";
import { useMemo } from "react";
import { getBestSet, getEstimatedOneRepMax, getExerciseExecutions } from "../../workout/workoutCalculator";

export const useTrackedExerciseChartData = (exercise: Exercise) => {
  const workoutHistory = useSelector((x: RootState) => x.workoutHistory.workouts);

  const chartData = useMemo(() => {
    const exerciseExecutions = getExerciseExecutions(workoutHistory, exercise)
      .slice(0, 8)
      .reverse();

    const labels: string[] = [];
    const data: number[] = [];

    for (const execution of exerciseExecutions) {
      const bestSet = getBestSet(execution.sets, exercise.category.categoryType);

      if (bestSet) {
        const estimatedOneRepMax = getEstimatedOneRepMax(bestSet);
        labels.push(execution.completedOn.toLocaleString('en-uk', { day: '2-digit', month: '2-digit' }));
        data.push(estimatedOneRepMax);
      }
    }

    return {
      labels,
      data
    }
  }, [workoutHistory, exercise])

  return {
    chartData
  }
}