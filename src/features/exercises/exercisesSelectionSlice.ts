import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';
import { ExerciseModel } from '../../db/models/exercise';

interface SelectedExercises {
  [key: string]: ExerciseModel;
}

export enum ExercisesAddMode {
  Regular = "Regular",
  SuperSet = "SuperSet"
}

export interface ExercisesSelectionState {
  selectedExercises: SelectedExercises;
  selectionComplete: boolean;
  addMode: ExercisesAddMode;
}

const initialState: ExercisesSelectionState = {
  selectedExercises: {},
  selectionComplete: false,
  addMode: ExercisesAddMode.Regular
};

export const exercisesSelectionSlice = createSlice({
  name: 'exercisesSelection',
  initialState,
  reducers: {
    selectExercise: (state, action: PayloadAction<ExerciseModel>) => {
      state.selectedExercises = {
        ...state.selectedExercises,
        [action.payload._id.toHexString()]: action.payload
      }
    },
    unselectExercise: (state, action: PayloadAction<string>) => {
      const { [action.payload]: removedExercise, ...remainingExercises} = state.selectedExercises;
      state.selectedExercises = remainingExercises;
    },
    startSelecting: (state) => {
      state.selectionComplete = false;
      state.selectedExercises = {};
    },
    stopSelecting: (state, action: PayloadAction<ExercisesAddMode>) => {
      state.selectionComplete = true;
      state.addMode = action.payload
    }
  },
});

export const { selectExercise, unselectExercise, startSelecting, stopSelecting } = exercisesSelectionSlice.actions;

export default exercisesSelectionSlice.reducer;
