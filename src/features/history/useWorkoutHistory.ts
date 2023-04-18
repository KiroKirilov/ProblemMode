import { useMemo } from "react";
import { Workout, WorkoutModel } from "../../db/models/workout";
import { useIteratableResults } from "../../db/useIteratableResults";
import { useRepository } from "../../db/useRepository";
import { groupByFlat } from "../../common/grouping";

export const useWorkoutHistory = () => {
  const { useDataQuery } = useRepository<Workout, WorkoutModel>(WorkoutModel.schema.name);

  const workouts = useDataQuery().sorted("completedOn", true);
  const iteratableWorkouts = useIteratableResults(workouts);

  return {
    workouts: iteratableWorkouts
  }
}
