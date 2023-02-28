import { useMemo } from "react";
import { Exercise, ExerciseModel } from "../../db/models/exercise"
import { useIteratableResults } from "../../db/useIteratableResults";
import { useRepository } from "../../db/useRepository"

export const useExercises = () => {
  const { useDataQuery } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const exercises = useDataQuery();
  const iteratableExercises = useIteratableResults(exercises);

  return {
    exercises: iteratableExercises
  }
}
