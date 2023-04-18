import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';
import { ExerciseModel } from '../../../db/models/exercise';

interface SelectedExercises {
  [key: string]: ExerciseModel;
}


export interface TrackedExercisesSelectionState {
  selectedExercises: SelectedExercises;
  selectionComplete: boolean;
}

const initialState: TrackedExercisesSelectionState = {
  selectedExercises: {},
  selectionComplete: false
};

export const trackedExercisesSelectionSlice = createSlice({
  name: 'trackedExercisesSelection',
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
    stopSelecting: (state) => {
      state.selectionComplete = true;
    },
    exercisesAdded: (state) => {
      state.selectedExercises = {};
    }
  },
});

export const { selectExercise, unselectExercise, startSelecting, stopSelecting, exercisesAdded } = trackedExercisesSelectionSlice.actions;

export default trackedExercisesSelectionSlice.reducer;
