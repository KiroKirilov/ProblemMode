import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useController, useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getTimeOfDayString } from "../../../common/dates";
import { startSelecting } from "../../exercises/exercisesSelectionSlice";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { ExerciseSetFormModel, WorkoutExerciseFormModel, WorkoutFormModel } from "./workoutFormModel";
import { useWorkoutRepository } from "../useWorkoutRepository";
import { stopWorkout } from "../workoutSlice";
import { WorkoutFormAction, WorkoutFormMode } from "./WorkoutForm";
import { useWorkoutTemplateRepository } from "../useWorkoutTemplateRepository";
import { RootState } from "../../../app/store";
import { useEffect } from "react";
import { WorkoutTemplate } from "../../../db/models/workoutTemplate";

export const useWorkoutForm = (mode: WorkoutFormMode, action: WorkoutFormAction) => {
  const template = useSelector((x: RootState) => x.workout.template);
  const { control, handleSubmit } = useForm<WorkoutFormModel>();
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();
  const dispatch = useDispatch();
  const { create: createWorkout } = useWorkoutRepository();
  const { create: createTemplate, edit: updateTemplate } = useWorkoutTemplateRepository();

  useEffect(() => {
    if (template) {
      loadInitialData(template);
    }
  }, [template])

  const loadInitialData = (initialData: WorkoutTemplate) => {
    nameControl.field.value = initialData.name;
    notesControl.field.value = initialData.notes;

    const formExercises: WorkoutExerciseFormModel[] = []

    for (const workoutExercise of initialData.exercises) {
      const sets: ExerciseSetFormModel[] = workoutExercise.sets.map(x => ({
        isCompleted: false,
        reps: x.reps,
        specialType: x.specialType,
        value: x.value
      }))

      formExercises.push({
        name: workoutExercise.exercise.name,
        categoryType: workoutExercise.exercise.category.categoryType,
        model: workoutExercise.exercise,
        sets: sets
      })
    }

    exercisesControl.append(formExercises);
  }

  const goToExercisePicker = () => {
    dispatch(startSelecting());
    navigation.navigate(WorkoutStackPages.exercisePicker.name, { selectMode: true })
  }

  const onSubmit = async (model: WorkoutFormModel) => {
    console.log(JSON.stringify(model));

    if (mode == WorkoutFormMode.Template) {
      await handleTemplateSubmit(model);
    } else {
      var workout = await createWorkout(model);
      dispatch(stopWorkout());
      navigation.navigate(WorkoutStackPages.workoutFinished.name, { workout });
    }
  }

  const handleTemplateSubmit = async (model: WorkoutFormModel) => {
    if (action == WorkoutFormAction.Create) {
      await createTemplate(model);
    } else {
      console.log('finna update');
      await updateTemplate(model, template?._id);
    }

    navigation.goBack();
  }

  const onCancel = () => {
    dispatch(stopWorkout())
  }

  const removeExercise = (index: number) => {
    exercisesControl.remove(index)
  }

  const getDefaultWorkoutName = () => {
    return mode == WorkoutFormMode.Template
      ? 'New workout template'
      : getTimeOfDayString() + ' Workout';
  }

  const nameControl = useController({
    control,
    defaultValue: template?.name || getDefaultWorkoutName(),
    name: 'name'
  })

  const notesControl = useController({
    control,
    defaultValue: template?.notes,
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