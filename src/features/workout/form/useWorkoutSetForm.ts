import { useTheme } from "@ui-kitten/components";
import { useCallback } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import { useDispatch } from "react-redux";
import { restartRestTimer } from "../restTimerSlice";
import { SpecialSetTypes, specialSetTypesAbbreviationsMap } from "../specialSetTypes";
import { ExerciseSetFormModel, WorkoutFormModel, numericSetFields } from "./workoutFormModel";

export const useWorkoutSetForm = (setsControl: UseFieldArrayReturn<WorkoutFormModel, `exercises.${number}.sets`, "id">) => {
  const dispatch = useDispatch();

  const getSetNumberStatus = useCallback((setType?: SpecialSetTypes) => {
    switch (setType) {
      case SpecialSetTypes.Failure:
        return 'danger'

      case SpecialSetTypes.WarmUp:
        return 'warning'

      case SpecialSetTypes.DropSet:
        return 'success'

      default:
        return 'info'
    }
  }, [])

  const updateSet = (index: number, field: keyof ExerciseSetFormModel, value: any) => {
    const currentValue = setsControl.fields[index];
    const isNumeric = numericSetFields.includes(field);
    setsControl.update(index, {
      ...currentValue,
      [field]: isNumeric ? Number(value) : value
    })
  }

  const updateSetSpecialType = (index: number, newValue?: SpecialSetTypes) => {
    const currentValue = setsControl.fields[index].specialType;
    if (currentValue == newValue) {
      updateSet(index, 'specialType', undefined);
    }
    else {
      updateSet(index, 'specialType', newValue);
    }
  }

  const getSetNumber = (index: number) => {
    const setSpecialType = setsControl.fields[index].specialType;

    if (setSpecialType) {
      return specialSetTypesAbbreviationsMap[setSpecialType];
    }

    const previousSets = setsControl.fields.slice(0, index);

    if (previousSets?.length) {
      let nonWarmupSetsCount = 0;

      for (const set of previousSets) {
        if (set.specialType !== SpecialSetTypes.WarmUp) {
          nonWarmupSetsCount++;
        }
      }

      return nonWarmupSetsCount + 1;
    }

    return index + 1;
  }

  const toggleCompleteSet = (index: number, currentValue: boolean) => {
    const newValue = !currentValue;

    if (newValue) {
      dispatch(restartRestTimer());
    }

    updateSet(index, 'isCompleted', newValue)
  }

  const removeSet = (index: number) => {
    setsControl.remove(index)
  }

  return {
    getSetNumber,
    updateSetSpecialType,
    updateSet,
    toggleCompleteSet,
    removeSet,
    getSetNumberStatus,
  }
}