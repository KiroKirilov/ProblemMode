import { dark } from '@eva-design/eva';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkoutModel } from '../../../db/models/workout';
import { groupBy, groupByFlat } from '../../../common/grouping';
import { RootState } from '../../../app/store';
import { getStartOfWeek } from '../../../common/dates';
import { TrackedExerciseModel } from '../../../db/models/trackedExercise';

export interface TrackedExercisesState {
  exercises: TrackedExerciseModel[];
}

const initialState: TrackedExercisesState = {
  exercises: []
};

export const trackedExercisesSlice = createSlice({
  name: 'trackedExercises',
  initialState,
  reducers: {
    setTrackedExercises: (state, action: PayloadAction<TrackedExerciseModel[]>) => {
      state.exercises = action.payload
    },
  },
});

export const { setTrackedExercises } = trackedExercisesSlice.actions;

export default trackedExercisesSlice.reducer;
