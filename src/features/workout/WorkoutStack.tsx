import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { ExercisesStackPages } from "../exercises/exercisesPages";
import { ExercisesView } from "../exercises/ExercisesView";
import { ActiveWorkoutForm } from "./form/ActiveWorkoutForm";
import { WorkoutStackPages } from "./workoutPages";
import { WorkoutsHome } from "./WorkoutsHome";
import { WorkoutTemplateForm } from "./templates/WorkoutTemplateForm";
import { WorkoutTemplateDetails } from "./templates/WorkoutTemplateDetails";

const Stack = createStackNavigator();

export const WorkoutStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={WorkoutStackPages.workoutsHome.name}>
      <Stack.Screen options={{ headerShown: false }} name={WorkoutStackPages.workoutsHome.name} component={WorkoutsHome} />
      <Stack.Screen options={{ headerShown: false }} name={WorkoutStackPages.templateForm.name} component={WorkoutTemplateForm} />
      <Stack.Screen options={{ headerShown: false }} name={WorkoutStackPages.templateDetails.name} component={WorkoutTemplateDetails} />
      <Stack.Screen options={{ headerShown: false, presentation: 'card' }} name={WorkoutStackPages.exercisePicker.name} component={ExercisesView} />
    </Stack.Navigator>
  );
};