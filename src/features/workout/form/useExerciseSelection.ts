import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { WorkoutFormModel } from "./workoutFormModel";
import { exercisesAdded } from "../../exercises/exercisesSelectionSlice";

export const useExerciseSelection = (exercisesControl: UseFieldArrayReturn<WorkoutFormModel, "exercises", "id">) => {
  const { selectedExercises, selectionComplete } = useSelector((x: RootState) => x.exercisesSelection);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      if (!selectionComplete || !selectedExercises || Object.keys(selectedExercises).length === 0) {
        return;
      }

      for (const key in selectedExercises) {
        const exerciseToAdd = selectedExercises[key];
        exercisesControl.append({
          name: exerciseToAdd.name,
          categoryType: exerciseToAdd.category.categoryType,
          model: exerciseToAdd,
          sets: [{
            isCompleted: false,
          }],
        })
      }

      dispatch(exercisesAdded());
    }, [selectedExercises, selectionComplete])
  )
}
