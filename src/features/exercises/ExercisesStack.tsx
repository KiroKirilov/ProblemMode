import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { ExerciseDetails } from "./details/ExerciseDetails";
import { ExercisesStackPages } from "./exercisesPageNames";
import { ExercisesView } from "./ExercisesView";
import { ExerciseForm } from "./form/ExerciseForm";

const Stack = createStackNavigator();

export const ExercisesStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ExercisesStackPages.exercisesView.name}>
      <Stack.Screen options={{ headerShown: false }} name={ExercisesStackPages.exercisesView.name} component={ExercisesView} />
      <Stack.Screen options={{ headerShown: false }} name={ExercisesStackPages.exercisesForm.name} component={ExerciseForm} />
      <Stack.Screen options={{ headerShown: false }} name={ExercisesStackPages.exercisesDetails.name} component={ExerciseDetails} />
    </Stack.Navigator>
  );
};
