import { Exercise, ExerciseModel } from "../models/exercise";
import { ExerciseBodyPart, ExerciseBodyPartModel } from "../models/exerciseBodyPart";
import { ExerciseCategory, ExerciseCategoryModel } from "../models/exerciseCategory";
import { useRepository } from "../useRepository";
import exercises from "./exercises.json";

export const useExercisesSeed = () => {
  const { useDataQuery, insertMany, remove } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const { useDataQuery: useCategories } = useRepository<ExerciseCategory, ExerciseCategoryModel>(ExerciseCategoryModel.schema.name);
  const { useDataQuery: useBodyParts } = useRepository<ExerciseBodyPart, ExerciseBodyPartModel>(ExerciseBodyPartModel.schema.name);

  const categories = useCategories();
  const bodyParts = useBodyParts();
  const hasExercises = useDataQuery().some(x => !!x);

  const seedExercises = async () => {
    if (!hasExercises) {
      const categoriesMap: any = categories.reduce((a, v) => ({ ...a, [v.categoryType]: v }), {});
      const bodyPartsMap: any = bodyParts.reduce((a, v) => ({ ...a, [v.name]: v }), {});

      const exercisesToSeed = [];

      for (const exercise of exercises) {
        const category = categoriesMap[exercise.Category];
        const bodyPart = bodyPartsMap[exercise.BodyPart];
        exercisesToSeed.push(ExerciseModel.generate(exercise.Name, category, bodyPart))
      }

      await insertMany(exercisesToSeed);
    }
  }

  return {seedExercises};

}