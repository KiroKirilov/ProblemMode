import { ExerciseCategoryType } from "../../exercises/exerciseCategoryType";

export interface ExerciseTypeColumnInfo {
  repsLabel: string;
  valueLabel: string;
  showReps: boolean;
  showValue: boolean;
}

export const exerciseTypeValueLabelsMap: {[key: string]: ExerciseTypeColumnInfo} = {
  [ExerciseCategoryType.DistanceAndDuration]: {
    repsLabel: 'Time (s)',
    valueLabel: 'Distance',
    showReps: true,
    showValue: true
  },
  [ExerciseCategoryType.Duration]: {
    repsLabel: 'Time (s)',
    valueLabel: '',
    showReps: true,
    showValue: false
  },
  [ExerciseCategoryType.NotMeasurable]: {
    repsLabel: '',
    valueLabel: '',
    showReps: false,
    showValue: false
  },
  [ExerciseCategoryType.RepsOnly]: {
    repsLabel: 'Reps',
    valueLabel: '',
    showReps: true,
    showValue: false
  },
  [ExerciseCategoryType.WeightAndDuration]: {
    repsLabel: 'Time (s)',
    valueLabel: 'KG',
    showReps: true,
    showValue: true
  },
  [ExerciseCategoryType.WeightAndReps]: {
    repsLabel: 'Reps',
    valueLabel: 'KG',
    showReps: true,
    showValue: true
  },
  [ExerciseCategoryType.WeightedBodyweight]: {
    repsLabel: 'Reps',
    valueLabel: '(+ KG)',
    showReps: true,
    showValue: true
  },
}