import { dark } from '@eva-design/eva';
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WorkoutModel } from '../../db/models/workout';
import { groupBy, groupByFlat } from '../../common/grouping';
import { RootState } from '../../app/store';
import { getStartOfWeek } from '../../common/dates';

export type WorkoutHistoryItem = (WorkoutModel & Realm.Object<unknown, never>);

export type WorkoutHistoryGroupItem = (WorkoutHistoryItem | {
  key: string | number;
  count: number;
})

export interface WorkoutHistoryState {
  workouts: WorkoutHistoryItem[];
}

const initialState: WorkoutHistoryState = {
  workouts: []
};

export const workoutHistorySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    setWorkouts: (state, action: PayloadAction<WorkoutHistoryItem[]>) => {
      state.workouts = action.payload
    },
  },
});

const selectWorkoutHistory = (state: RootState) => state.workoutHistory.workouts;

export const workoutsByMonth = createSelector(
  selectWorkoutHistory,
  (workouts) => groupByFlat(
    workouts,
    x => x.completedOn.toLocaleString('en-uk', { month: 'long', year: 'numeric' })))

export const workoutsByWeek = createSelector(
  selectWorkoutHistory,
  (workouts) => groupBy(
    workouts,
    x => getStartOfWeek(x.completedOn)
      .toLocaleString('en-uk', { day: '2-digit', month: '2-digit', year: '2-digit' }))
)

export const { setWorkouts } = workoutHistorySlice.actions;

export default workoutHistorySlice.reducer;
