import { ExerciseBodyPart, ExerciseBodyPartModel } from "../../db/models/exerciseBodyPart";
import { useRepository } from "../../db/useRepository";

export const useBodyParts = () => {
  const { useDataQuery } = useRepository<ExerciseBodyPart, ExerciseBodyPartModel>(ExerciseBodyPartModel.schema.name);
  const bodyParts = useDataQuery().sorted("name");

  return {
    bodyParts
  }
}