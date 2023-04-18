import React from "react";
import { Exercise } from "../../../db/models/exercise";
import { ChartWithHeader } from "../ChartWithHeader";
import { LineChartWithTooltips } from "../LineChartWithTooltips";
import { useTrackedExerciseChartData } from "./useTrackedExerciseChartData";

export interface TrackedExerciseChartProps {
  exercise: Exercise;
}

export const TrackedExerciseChart: React.FC<TrackedExerciseChartProps> = (props: TrackedExerciseChartProps) => {
  const { chartData } = useTrackedExerciseChartData(props.exercise);

  return (
    <ChartWithHeader title={props.exercise.name}>
      <LineChartWithTooltips labels={chartData.labels} data={chartData.data} />
    </ChartWithHeader>
  );
};