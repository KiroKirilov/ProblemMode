import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { WorkoutFormModel } from "./workoutFormModel";

export const useExerciseSelection = (exercisesControl: UseFieldArrayReturn<WorkoutFormModel, "exercises", "id">) => {
  const selectedExercises = useSelector((x: RootState) => x.exercisesSelection.selectedExercises);
  const selectionComplete = useSelector((x: RootState) => x.exercisesSelection.selectionComplete);
  
  useFocusEffect(
    useCallback(() => {
      if (!selectionComplete) {
        return;
      }

      for (const key in selectedExercises) {
        const exerciseToAdd = selectedExercises[key];
        exercisesControl.append({
          name: exerciseToAdd.name,
          sets: [],
          categoryType: exerciseToAdd.category.categoryType
        })
      }
    }, [selectedExercises, selectionComplete])
  )
}