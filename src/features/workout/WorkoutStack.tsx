import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { ExercisesStackPages } from "../exercises/exercisesPages";
import { ExercisesView } from "../exercises/ExercisesView";
import { ActiveWorkoutForm } from "./active/ActiveWorkoutForm";
import { WorkoutStackPages } from "./workoutPages";
import { WorkoutsHome } from "./WorkoutsHome";

const Stack = createStackNavigator();

export const WorkoutStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={WorkoutStackPages.workoutsHome.name}>
      <Stack.Screen options={{ headerShown: false }} name={WorkoutStackPages.workoutsHome.name} component={WorkoutsHome} />
      <Stack.Screen options={{ headerShown: false }} name={WorkoutStackPages.activeWorkout.name} component={ActiveWorkoutForm} />
      <Stack.Screen options={{ headerShown: false, presentation: 'card' }} name={WorkoutStackPages.exercisePicker.name} component={ExercisesView} />
    </Stack.Navigator>
  );
};