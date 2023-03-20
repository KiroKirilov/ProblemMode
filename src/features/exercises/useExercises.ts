import { RouteProp, useRoute } from "@react-navigation/native";
import { groupBy, groupByFlat } from "../../common/grouping";
import { Exercise, ExerciseModel } from "../../db/models/exercise"
import { useIteratableResults } from "../../db/useIteratableResults";
import { useRepository } from "../../db/useRepository"
import { ExerciseStackParamList } from "./exercisesPages";

export const useExercises = () => {
  const { useDataQuery } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const exercises = useDataQuery().sorted("name");
  const iteratableExercises = useIteratableResults(exercises);

  const exercisesByLetter = groupByFlat(iteratableExercises, x => x.name[0].toUpperCase())

  return {
    exercisesByLetter,
  }
}
