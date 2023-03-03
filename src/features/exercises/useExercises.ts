import { groupBy } from "../../common/grouping";
import { Exercise, ExerciseModel } from "../../db/models/exercise"
import { useIteratableResults } from "../../db/useIteratableResults";
import { useRepository } from "../../db/useRepository"

export const useExercises = () => {
  const { useDataQuery } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const exercises = useDataQuery().sorted("name");
  const iteratableExercises = useIteratableResults(exercises);

  const exercisesByLetter = groupBy(iteratableExercises, x => x.name[0].toUpperCase())

  return {
    exercisesByLetter
  }
}
