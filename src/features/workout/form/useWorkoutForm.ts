import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useController, useFieldArray, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getTimeOfDayString } from "../../../common/dates";
import { startSelecting } from "../../exercises/exercisesSelectionSlice";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { WorkoutFormModel } from "./workoutFormModel";
import { useWorkoutRepository } from "../useWorkoutRepository";
import { stopWorkout } from "../activeWorkoutSlice";
import { WorkoutFormMode } from "./WorkoutForm";
import { useWorkoutTemplateRepository } from "../useWorkoutTemplateRepository";

export const useWorkoutForm = (mode: WorkoutFormMode) => {
  const { control, handleSubmit } = useForm<WorkoutFormModel>();
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();
  const dispatch = useDispatch();
  const { create: createWorkout } = useWorkoutRepository();
  const { create: createTemplate } = useWorkoutTemplateRepository();

  const goToExercisePicker = () => {
    dispatch(startSelecting());
    navigation.navigate(WorkoutStackPages.exercisePicker.name, { selectMode: true })
  }

  const onSubmit = async (model: WorkoutFormModel) => {
    console.log(JSON.stringify(model));

    if (mode == WorkoutFormMode.Template) {
      await createTemplate(model);
      navigation.goBack();
    } else {
      await createWorkout(model);
      dispatch(stopWorkout())
    }
  }

  const onCancel = () => {
    dispatch(stopWorkout())
  }

  const removeExercise = (index: number) => {
    exercisesControl.remove(index)
  }

  const nameControl = useController({
    control,
    defaultValue: mode == WorkoutFormMode.Template
      ? 'New workout template'
      : getTimeOfDayString() + ' Workout',
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
    removeExercise,
    onCancel,
    onSubmit: handleSubmit(onSubmit, (e) => console.log(e)),
    controls: {
      name: nameControl,
      notes: notesControl,
      exercises: exercisesControl,
    }
  }
}