import { dark } from '@eva-design/eva';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ExercisesState {
  baseTheme: any;
  baseThemeName: 'dark' | 'light';
}

const initialState: ExercisesState = {
  baseTheme: dark,
  baseThemeName: 'dark',
};

export const exercisesSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeBaseTheme: (state, action: PayloadAction<ExercisesState>) => {
      state.baseTheme = action.payload.baseTheme;
      state.baseThemeName = action.payload.baseThemeName;
    },
  },
});

export const { changeBaseTheme } = exercisesSlice.actions;

export default exercisesSlice.reducer;
