import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { DashboardStackPages } from "./dashboardPages";
import { DashboardHome } from "./DashboardHome";

const Stack = createStackNavigator();

export const DashboardStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName={DashboardStackPages.dashboardHome.name}>
      <Stack.Screen options={{ headerShown: false }} name={DashboardStackPages.dashboardHome.name} component={DashboardHome} />
    </Stack.Navigator>
  );
};