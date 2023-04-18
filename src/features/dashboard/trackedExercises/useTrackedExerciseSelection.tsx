import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { UseFieldArrayReturn } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { exercisesAdded } from "./trackedExercisesSelectionSlice";
import { TrackedExercise, TrackedExerciseModel } from "../../../db/models/trackedExercise";
import { useRepository } from "../../../db/useRepository";

export const useTrackedExerciseSelection = () => {
  const { selectedExercises, selectionComplete } = useSelector((x: RootState) => x.trackedExercisesSelection);
  const dispatch = useDispatch();

  const { insertMany } = useRepository<TrackedExercise, TrackedExerciseModel>(TrackedExerciseModel.schema.name);

  const handleAdd = async () => {
    console.log(selectionComplete);
    if (!selectionComplete || !selectedExercises || Object.keys(selectedExercises).length === 0) {
      return;
    }

    const exercisesToAdd: TrackedExercise[] = [];

    for (const key in selectedExercises) {
      const exercise = selectedExercises[key];
      exercisesToAdd.push(TrackedExerciseModel.generate(exercise));
    }

    console.log('called2');
    await insertMany(exercisesToAdd);

    dispatch(exercisesAdded());
  }

  useFocusEffect(
    useCallback(() => {
      handleAdd()
    }, [selectedExercises, selectionComplete])
  )
}
