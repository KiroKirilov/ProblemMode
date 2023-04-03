import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveWorkoutState {
  hasActiveWorkout: boolean;
  formIsMinimized: boolean;
  manualMinimizeTrigger: boolean;
}

const initialState: ActiveWorkoutState = {
  hasActiveWorkout: false,
  formIsMinimized: false,
  manualMinimizeTrigger: false,
};

export const activeWorkoutSlice = createSlice({
  name: 'activeWorkout',
  initialState,
  reducers: {
    startWorkout: (state) => {
      state.hasActiveWorkout = true;
    },
    stopWorkout: (state) => {
      state.hasActiveWorkout = false;
    },
    formSheetChanged: (state, action: PayloadAction<number>) => {
      state.formIsMinimized = action.payload === 0;
    },
    manualMinimize: (state) => {
      state.manualMinimizeTrigger = !state.manualMinimizeTrigger;
    }
  },
});

export const { startWorkout, stopWorkout, formSheetChanged, manualMinimize } = activeWorkoutSlice.actions;

export default activeWorkoutSlice.reducer;
