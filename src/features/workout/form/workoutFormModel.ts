import { ExerciseCategoryType } from "../../exercises/exerciseCategoryType";

export interface WorkoutFormModel {
  name: string;
  notes: string;
  exercises: WorkoutExerciseFormModel[];
}

export interface WorkoutExerciseFormModel {
  sets: ExerciseSetFormModel[];
  name: string;
  categoryType: ExerciseCategoryType;
}

export interface ExerciseSetFormModel {
  value?: number;
  reps?: number;
  isCompleted: boolean;
}