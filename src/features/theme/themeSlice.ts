import { dark } from '@eva-design/eva';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  baseTheme: any;
  baseThemeName: 'dark' | 'light';
}

const initialState: ThemeState = {
  baseTheme: dark,
  baseThemeName: 'dark',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeBaseTheme: (state, action: PayloadAction<ThemeState>) => {
      state.baseTheme = action.payload.baseTheme;
      state.baseThemeName = action.payload.baseThemeName;
    },
  },
});

export const { changeBaseTheme } = themeSlice.actions;

export default themeSlice.reducer;
