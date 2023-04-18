import React, { FC } from "react";
import { Dimensions, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { DashboardStackPages } from "./dashboardPages";
import { MainPage } from "../navigation/MainPage";
import { WorkoutsPerWeekChart } from "./WorkoutsPerWeekChart";
import { ExerciseProgress } from "./trackedExercises/ExerciseProgress";

export const DashboardHome: FC = () => {

  return (
    <MainPage title={DashboardStackPages.dashboardHome.title}>
      <WorkoutsPerWeekChart />

      <ExerciseProgress />
    </MainPage>
  );
};