import { configureStore } from '@reduxjs/toolkit';
import exercisesSelectionSlice from '../features/exercises/exercisesSelectionSlice';
import exercisesSlice from '../features/exercises/exercisesSlice';
import themeSlice from '../features/theme/themeSlice';
import workoutSlice from '../features/workout/workoutSlice';
import restTimerSlice from '../features/workout/restTimerSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    exercisesSelection: exercisesSelectionSlice,
    exercises: exercisesSlice,
    restTimer: restTimerSlice,
    workout: workoutSlice
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
