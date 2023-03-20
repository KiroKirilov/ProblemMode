import { ExerciseCategoryType } from "../../features/exercises/exerciseCategoryType";
import { ExerciseBodyPart, ExerciseBodyPartModel } from "../models/exerciseBodyPart";
import { ExerciseCategory, ExerciseCategoryModel } from "../models/exerciseCategory";
import { useRepository } from "../useRepository";

export const useNomenclatureSeed = () => {
  const { useDataQuery: categories, insertMany: insertCategories, remove } = useRepository<ExerciseCategory, ExerciseCategoryModel>(ExerciseCategoryModel.schema.name);
  const { useDataQuery: bodyParts, insertMany: insertBodyParts } = useRepository<ExerciseBodyPart, ExerciseBodyPartModel>(ExerciseBodyPartModel.schema.name);
  const hasCategories = categories().some(x => !!x);
  const hasBodyParts = bodyParts().some(x => !!x);

  const seedCategories = async () => {
    if (!hasCategories) {
      await insertCategories(categoriesToSeed)
    }
  }

  const seedBodyParts = async () => {
    if (!hasBodyParts) {
      await insertBodyParts(bodyPartsToSeed)
    }
  }

  return {
    seedBodyParts,
    seedCategories
  }
}

const categoriesToSeed = [
  ExerciseCategoryModel.generate('Distance & Duration', ExerciseCategoryType.DistanceAndDuration),
  ExerciseCategoryModel.generate('Duration', ExerciseCategoryType.Duration),
  ExerciseCategoryModel.generate('Weight & Reps', ExerciseCategoryType.WeightAndReps),
  ExerciseCategoryModel.generate('Weight & Duration', ExerciseCategoryType.WeightAndDuration),
  ExerciseCategoryModel.generate('Weighted Bodyweight', ExerciseCategoryType.WeightedBodyweight),
  ExerciseCategoryModel.generate('Not Measurable', ExerciseCategoryType.NotMeasurable),
  ExerciseCategoryModel.generate('Reps Only', ExerciseCategoryType.RepsOnly),
]

const bodyPartsToSeed = [
  ExerciseBodyPartModel.generate('Core'),
  ExerciseBodyPartModel.generate('Arms'),
  ExerciseBodyPartModel.generate('Back'),
  ExerciseBodyPartModel.generate('Chest'),
  ExerciseBodyPartModel.generate('Legs'),
  ExerciseBodyPartModel.generate('Shoulders'),
  ExerciseBodyPartModel.generate('Olympic'),
  ExerciseBodyPartModel.generate('Full Body'),
  ExerciseBodyPartModel.generate('Cardio'),
  ExerciseBodyPartModel.generate('Other'),
]
