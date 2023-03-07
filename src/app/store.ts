import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import exercisesSlice from '../features/exercises/exercisesSlice';
import themeSlice from '../features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    exercises: exercisesSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
