import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface RestTimerState {
  time: number;
  isStarted: boolean;
}

const initialState: RestTimerState = {
  time: 0,
  isStarted: false
};

export const restTimerSlice = createSlice({
  name: 'restTimer',
  initialState,
  reducers: {
    startRestTimer: (state) => {
      state.time = 0;
      state.isStarted = true;
    },
    stopRestTimer: (state) => {
      state.isStarted = false;
    },
    restartRestTimer: (state) => {
      state.time = 0;
    },
    incrementRestTimer: (state) => {
      state.time += 1;
    }
  },
});

export const { incrementRestTimer, restartRestTimer, startRestTimer, stopRestTimer } = restTimerSlice.actions;

export default restTimerSlice.reducer;
