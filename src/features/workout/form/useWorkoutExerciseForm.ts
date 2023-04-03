import { Control, useController, useFieldArray } from "react-hook-form";
import { useDispatch } from "react-redux";
import { restartRestTimer } from "../restTimerSlice";
import { SpecialSetTypes } from "../specialSetTypes";
import { ExerciseSetFormModel, WorkoutFormModel } from "./workoutFormModel";

export const useWorkoutExerciseForm = (control: Control<WorkoutFormModel, any>, index: number) => {
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

  return {
    addEmptySet,
    controls: {
      name: nameControl,
      sets: setsControl
    }
  }
}