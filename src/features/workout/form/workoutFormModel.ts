import { ExerciseModel } from "../../../db/models/exercise";
import { ExerciseCategoryType } from "../../exercises/exerciseCategoryType";
import { SpecialSetTypes } from "../specialSetTypes";

export interface WorkoutFormModel {
  name: string;
  notes: string;
  exercises: WorkoutExerciseFormModel[];
}

export interface WorkoutExerciseFormModel {
  sets: ExerciseSetFormModel[];
  name: string;
  categoryType: ExerciseCategoryType;
  model: ExerciseModel;
}

export interface ExerciseSetFormModel {
  value?: number;
  reps?: number;
  specialType?: SpecialSetTypes;
  isCompleted: boolean;
}

export const numericSetFields: (keyof ExerciseSetFormModel)[] = ["reps", "value"]