import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { ExercisesStackPages } from "./exercisesPageNames";
import { ExercisesView } from "./ExercisesView";

const Stack = createStackNavigator();

export const ExercisesStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={ExercisesStackPages.exercisesView.name}>
      <Stack.Screen options={{ headerShown: false }} name={ExercisesStackPages.exercisesView.name} component={ExercisesView} />
    </Stack.Navigator>
  );
};
