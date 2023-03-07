import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ExerciseModel } from '../../db/models/exercise';

interface SelectedExercises {
  [key: string]: boolean;
}

export interface ExercisesState {
  selectedExercises: SelectedExercises;
  isCurrentlySelecting: boolean;
}

const initialState: ExercisesState = {
  selectedExercises: {},
  isCurrentlySelecting: false
};

export const exercisesSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    selectExercise: (state, action: PayloadAction<string>) => {
      state.selectedExercises = {
        ...state.selectedExercises,
        [action.payload]: true
      }
    },
    unselectExercise: (state, action: PayloadAction<string>) => {
      const { [action.payload]: removedExercise, ...remainingExercises} = state.selectedExercises;
      state.selectedExercises = remainingExercises;
    },
    startSelecting: (state) => {
      state.isCurrentlySelecting = true;
    },
    stopSelecting: (state) => {
      state.isCurrentlySelecting = false;
    }
  },
});

export const { selectExercise, unselectExercise, startSelecting, stopSelecting } = exercisesSlice.actions;

export default exercisesSlice.reducer;
