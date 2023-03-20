import { Control, useController, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { restartRestTimer } from "../restTimerSlice";
import { ExerciseSetFormModel, WorkoutFormModel } from "./workoutFormModel";

export const useWorkoutExerciseForm = (control: Control<WorkoutFormModel, any>, index: number) => {
  const dispatch = useDispatch();

  const nameControl = useController({
    control: control,
    name: `exercises.${index}.name`
  })

  const setsControl = useFieldArray({
    control: control,
    name: `exercises.${index}.sets`
  })

  const addEmptySet = () => {
    setsControl.append({
      isCompleted: false
    })
  }

  const updateSet = (index: number, field: keyof ExerciseSetFormModel, value: any) => {
    const currentValue = setsControl.fields[index];
    setsControl.update(index, {
      ...currentValue,
      [field]: value
    })
  }

  const toggleCompleteSet = (index: number, currentValue: boolean) => {
    const newValue = !currentValue;

    if (newValue) {
      dispatch(restartRestTimer());
    }

    updateSet(index, 'isCompleted', newValue)
  }

  return {
    toggleCompleteSet,
    updateSet,
    addEmptySet,
    controls: {
      name: nameControl,
      sets: setsControl
    }
  }
}