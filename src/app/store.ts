import { configureStore } from '@reduxjs/toolkit';
import exercisesSelectionSlice from '../features/exercises/exercisesSelectionSlice';
import exercisesSlice from '../features/exercises/exercisesSlice';
import themeSlice from '../features/theme/themeSlice';
import workoutSlice from '../features/workout/workoutSlice';
import restTimerSlice from '../features/workout/restTimerSlice';
import workoutHistorySlice from '../features/history/workoutHistorySlice';
import trackedExercisesSelectionSlice from '../features/dashboard/trackedExercises/trackedExercisesSelectionSlice';
import trackedExercisesSlice from '../features/dashboard/trackedExercises/trackedExercisesSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    exercisesSelection: exercisesSelectionSlice,
    exercises: exercisesSlice,
    restTimer: restTimerSlice,
    workout: workoutSlice,
    workoutHistory: workoutHistorySlice,
    trackedExercisesSelection: trackedExercisesSelectionSlice,
    trackedExercises: trackedExercisesSlice,
  },
  
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
