import { Workout } from "../../db/models/workout";
import { WorkoutSet } from "../../db/models/workoutSet";
import { ExerciseCategoryType } from "../exercises/exerciseCategoryType";
import { exerciseTypeValueLabelsMap } from "./form/exerciseTypeColumnsInfo";

export const getTotalVolume = (workout: Workout) => {
  let total = 0;
  for (const workoutExercise of workout.exercises) {
    const currentExerciseVolume = calculateSetsVolume(workoutExercise.sets, workoutExercise.exercise.category.categoryType);
    total += currentExerciseVolume;
  }

  return total;
}

export const getBestSetAsString = (sets: WorkoutSet[], categoryType: ExerciseCategoryType) => {
  const columnInfo = exerciseTypeValueLabelsMap[categoryType];
  const bestSet = getBestSet(sets, categoryType);

  if (columnInfo.showReps && columnInfo.showValue) {
    return `${bestSet?.reps}x ${bestSet?.value} kg`;
  }

  if (columnInfo.showReps) {
    return `${bestSet?.reps}`;
  }

  return `${bestSet?.value} kg`;
}

export const getBestSet = (sets: WorkoutSet[], categoryType: ExerciseCategoryType) => {
  let maxSet: WorkoutSet | undefined = undefined;
  let maxVolume = -1;

  for (const set of sets) {
    if (!set.isCompleted) {
      continue;
    }

    const currentSetVolume = calculateSetVolume(set, categoryType);
    if (currentSetVolume > maxVolume) {
      maxVolume = currentSetVolume;
      maxSet = set;
    }
  }

  return maxSet;
}

export const calculateSetsVolume = (sets: WorkoutSet[], categoryType: ExerciseCategoryType) => {
  return sets
    .filter(x => x.isCompleted)
    .map(x => calculateSetVolume(x, categoryType))
    .reduce((prev, current) => prev + current, 0)
}

export const calculateSetVolume = (set: WorkoutSet, categoryType: ExerciseCategoryType) => {
  const columnInfo = exerciseTypeValueLabelsMap[categoryType];

  if (columnInfo.showReps && columnInfo.showValue) {
    return set.reps! * set.value!;
  }

  if (columnInfo.showReps) {
    return set.reps!;
  }

  return set.value!;
}