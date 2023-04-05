import { WorkoutSet } from "../../db/models/workoutSet";
import { ExerciseCategoryType } from "../exercises/exerciseCategoryType";
import { exerciseTypeValueLabelsMap } from "./form/exerciseTypeColumnsInfo";

export const getBestSetAsString = (sets: WorkoutSet[], categoryType: ExerciseCategoryType) => {
  const columnInfo = exerciseTypeValueLabelsMap[categoryType];
  const bestSet = getBestSet(sets, categoryType);

  if (columnInfo.showReps && columnInfo.showValue) {
    return `${bestSet?.reps}x ${bestSet?.value}`;
  }

  if (columnInfo.showReps) {
    return `${bestSet?.reps}`;
  }

  return `${bestSet?.value}`;
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