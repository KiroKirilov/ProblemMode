import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setExercisesByLetter } from "../features/exercises/exercisesSlice";
import { useExercises } from "../features/exercises/useExercises";
import { RootState } from "./store";

export const useInitialData = () => {
  const { exercisesByLetter } = useExercises();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setExercisesByLetter(exercisesByLetter));
  }, [exercisesByLetter])
}