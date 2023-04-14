import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { HistoryStackPages } from "./historyPages";
import { HistoryHome } from "./HistoryHome";

const Stack = createStackNavigator();

export const HistoryStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={HistoryStackPages.historyHome.name}>
      <Stack.Screen options={{ headerShown: false }} name={HistoryStackPages.historyHome.name} component={HistoryHome} />
    </Stack.Navigator>
  );
};