import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';
import { WorkoutTemplateModel } from '../../db/models/workoutTemplate';

type TemplateType = (WorkoutTemplateModel & Realm.Object<WorkoutTemplateModel, never>) | null;

export interface WorkoutState {
  hasActiveWorkout: boolean;
  formIsMinimized: boolean;
  manualMinimizeTrigger: boolean;
  template?: TemplateType;
}

const initialState: WorkoutState = {
  hasActiveWorkout: false,
  formIsMinimized: false,
  manualMinimizeTrigger: false,
  template: undefined,
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    startWorkout: (state, action:PayloadAction<TemplateType | undefined>) => {
      if (action.payload) {
        state.template = action.payload
      }

      state.hasActiveWorkout = true;
    },
    stopWorkout: (state) => {
      state.hasActiveWorkout = false;
      state.template = undefined;
    },
    formSheetChanged: (state, action: PayloadAction<number>) => {
      state.formIsMinimized = action.payload === 0;
    },
    manualMinimize: (state) => {
      state.manualMinimizeTrigger = !state.manualMinimizeTrigger;
    },
    setTemplate: (state, action:PayloadAction<TemplateType | undefined>) => {
      state.template = action.payload
    }
  },
});

export const { startWorkout, stopWorkout, formSheetChanged, manualMinimize, setTemplate } = workoutSlice.actions;

export default workoutSlice.reducer;
