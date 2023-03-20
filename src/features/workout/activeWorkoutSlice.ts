import { dark } from '@eva-design/eva';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ActiveWorkoutState {
}

const initialState: ActiveWorkoutState = {
};

export const activeWorkoutSlice = createSlice({
  name: 'activeWorkout',
  initialState,
  reducers: {
  },
});

export const {  } = activeWorkoutSlice.actions;

export default activeWorkoutSlice.reducer;
