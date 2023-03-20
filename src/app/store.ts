import { configureStore } from '@reduxjs/toolkit';
import exercisesSelectionSlice from '../features/exercises/exercisesSelectionSlice';
import exercisesSlice from '../features/exercises/exercisesSlice';
import themeSlice from '../features/theme/themeSlice';
import activeWorkoutSlice from '../features/workout/activeWorkoutSlice';
import restTimerSlice from '../features/workout/restTimerSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    exercisesSelection: exercisesSelectionSlice,
    exercises: exercisesSlice,
    restTimer: restTimerSlice,
    activeWorkout: activeWorkoutSlice
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
