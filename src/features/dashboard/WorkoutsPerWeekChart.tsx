import React, { FC, useState } from "react";
import { Dimensions, View } from "react-native";
import { LineChart, BarChart } from "react-native-chart-kit";
import { useSelector, useStore } from "react-redux";
import { workoutsByWeek } from "../history/workoutHistorySlice";
import { useWorkoutsPerWeek } from "./useWorkoutsPerWeek";
import { ScrollView } from "react-native-gesture-handler";
import { Tooltip, Text, useTheme } from "@ui-kitten/components";
import { Dataset } from "react-native-chart-kit/dist/HelperTypes";
import { ChartWithHeader } from "./ChartWithHeader";
import { LineChartWithTooltips } from "./LineChartWithTooltips";

const graphPadding = 15;

export const WorkoutsPerWeekChart: FC = () => {
  const { chartData } = useWorkoutsPerWeek();

  return (
    <View style={{ paddingHorizontal: graphPadding }}>
      <ChartWithHeader title="Workouts per week">
        <LineChartWithTooltips data={chartData.data} labels={chartData.labels} padding={graphPadding} />
      </ChartWithHeader>
    </View>
  );
}