import { useDispatch } from "react-redux";
import { DashboardStackPages, DashboardStackParamList } from "../dashboardPages";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { startSelecting } from "./trackedExercisesSelectionSlice";
import { useRepository } from "../../../db/useRepository";
import { TrackedExercise, TrackedExerciseModel } from "../../../db/models/trackedExercise";
import { useIteratableResults } from "../../../db/useIteratableResults";

export const useTrackedExercises = () => {
  const { useDataQuery } = useRepository<TrackedExercise, TrackedExerciseModel>(TrackedExerciseModel.schema.name);
  const trackedExercises = useDataQuery();
  const iteratableTrackedExercises = useIteratableResults(trackedExercises);

  return {
    trackedExercises: iteratableTrackedExercises
  }
}