import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ExerciseModel } from '../../db/models/exercise';

export interface ExercisesState {
  exercsiesByLetter: ((ExerciseModel & Realm.Object<unknown, never>) | { key: string | number })[];
  sliceAmount: number;
}

const initialState: ExercisesState = {
  exercsiesByLetter: [],
  sliceAmount: 0
};

export const exercisesSlice = createSlice({
  name: 'exercises',
  initialState,
  reducers: {
    setExercisesByLetter: (state, action: PayloadAction<((ExerciseModel & Realm.Object<unknown, never>) | { key: string | number })[]>) => {
      state.exercsiesByLetter = action.payload;
    },

    setSliceAmount: (state, action: PayloadAction<number>) => {
      state.sliceAmount = Math.min(action.payload, state.exercsiesByLetter.length);
    },

    incrementSliceAmount: (state, action: PayloadAction<number>) => {
      state.sliceAmount = Math.min(action.payload + state.sliceAmount, state.exercsiesByLetter.length);
    }
  },
});

const selectExercisesByLetter = (state: RootState) => state.exercises.exercsiesByLetter;
const selectSliceAmount = (state: RootState) => state.exercises.sliceAmount;

export const hasMoreData = createSelector(
  selectExercisesByLetter,
  selectSliceAmount,
  (exercises, sliceAmount) => exercises.length > sliceAmount
)

export const slicedExercisesByLetter = createSelector(
  selectExercisesByLetter,
  selectSliceAmount,
  (exercises, sliceAmount) => exercises.slice(0, sliceAmount)
);

export const { setExercisesByLetter, setSliceAmount, incrementSliceAmount } = exercisesSlice.actions;

export default exercisesSlice.reducer;
