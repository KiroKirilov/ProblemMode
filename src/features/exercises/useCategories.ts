import { ExerciseCategory, ExerciseCategoryModel } from "../../db/models/exerciseCategory";
import { useRepository } from "../../db/useRepository";

export const useCategories = () => {
  const { useDataQuery } = useRepository<ExerciseCategory, ExerciseCategoryModel>(ExerciseCategoryModel.schema.name);
  const categories = useDataQuery().sorted("name");

  return {
    categories
  }
}
