import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setExercisesByLetter } from "../features/exercises/exercisesSlice";
import { useExercises } from "../features/exercises/useExercises";
import { RootState } from "./store";
import { useWorkoutHistory } from "../features/history/useWorkoutHistory";
import { setWorkouts } from "../features/history/workoutHistorySlice";
import { useTrackedExercises } from "../features/dashboard/trackedExercises/useTrackedExercises";
import { setTrackedExercises } from "../features/dashboard/trackedExercises/trackedExercisesSlice";

export const useInitialData = () => {
  const { exercisesByLetter } = useExercises();
  const { workouts } = useWorkoutHistory();
  const { trackedExercises } = useTrackedExercises();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setExercisesByLetter(exercisesByLetter));
  }, [exercisesByLetter])

  useEffect(() => {
    dispatch(setWorkouts(workouts));
  }, [workouts])

  useEffect(() => {
    dispatch(setTrackedExercises(trackedExercises));
  }, [workouts])
}