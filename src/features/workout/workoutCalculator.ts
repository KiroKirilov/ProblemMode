import { Exercise } from "../../db/models/exercise";
import { Workout } from "../../db/models/workout";
import { WorkoutSet } from "../../db/models/workoutSet";
import { ExerciseCategoryType } from "../exercises/exerciseCategoryType";
import { WorkoutHistoryItem } from "../history/workoutHistorySlice";
import { exerciseTypeValueLabelsMap } from "./form/exerciseTypeColumnsInfo";

export interface ExerciseExecution {
  sets: WorkoutSet[];
  completedOn: Date;
}

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

export const getExerciseExecutions = (workoutHistory: WorkoutHistoryItem[], exercise: Exercise) => {
  const result: ExerciseExecution[] = [];

  for (const workout of workoutHistory) {
    const workoutExercise = workout.exercises.find(x => x.exercise._id.toHexString() == exercise._id.toHexString());

    if (workoutExercise) {
      result.push({
        sets: workoutExercise.sets,
        completedOn: workout.completedOn
      })
    }
  }

  return result;
}

export const getEstimatedOneRepMax = (set: WorkoutSet) => {
  // this is using the Brzycki formula
  const oneRepMax = set.value! * (36 / (37 - set.reps!));

  return oneRepMax;
}