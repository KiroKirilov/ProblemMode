import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { useController, useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getTimeOfDayString } from "../../../common/dates";
import { startSelecting } from "../../exercises/exercisesSelectionSlice";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { WorkoutFormModel } from "./workoutFormModel";

export const useWorkoutForm = () => {
  const { control, handleSubmit } = useForm<WorkoutFormModel>();
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();
  const dispatch = useDispatch();

  const goToExercisePicker = () => {
    dispatch(startSelecting());
    navigation.navigate(WorkoutStackPages.exercisePicker.name, { selectMode: true })
  }

  const onSubmit = (a: any) => {
    console.log(JSON.stringify(a));
  }

  const nameControl = useController({
    control,
    defaultValue: getTimeOfDayString() + ' Workout',
    name: 'name'
  })

  const notesControl = useController({
    control,
    defaultValue: '',
    name: 'notes',
  })

  const exercisesControl = useFieldArray({
    control,
    name: 'exercises'
  })

  return {
    goToExercisePicker,
    control,
    onSubmit: handleSubmit(onSubmit, (e) => console.log(e)),
    controls: {
      name: nameControl,
      notes: notesControl,
      exercises: exercisesControl,
    }
  }
}