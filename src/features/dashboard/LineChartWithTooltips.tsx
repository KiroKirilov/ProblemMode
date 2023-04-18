import { Text, Tooltip, useTheme } from "@ui-kitten/components";
import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dataset } from "react-native-chart-kit/dist/HelperTypes";

type DataPointClickData = {
  index: number;
  value: number;
  dataset: Dataset;
  x: number;
  y: number;
  getColor: (opacity: number) => string;
}

export interface LineChartWithTooltipsProps {
  labels: string[];
  data: number[];
  padding?: number;
}

export const LineChartWithTooltips: React.FC<LineChartWithTooltipsProps> = (props: LineChartWithTooltipsProps) => {
  const theme = useTheme();
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);
  const [tooltipValue, setTooltipValue] = useState(0);
  const [tooltipWeek, setTooltipWeek] = useState("");

  const showTooltip = (data: DataPointClickData) => {
    setTooltipVisible(true);
    setTooltipX(data.x);
    setTooltipY(data.y);
    setTooltipValue(data.value);
    setTooltipWeek(props.labels[data.index]);
  }
  
  return (
    <>
      <Tooltip
        anchor={() => <View style={{ position: 'absolute', top: tooltipY, left: tooltipX }}></View>}
        visible={tooltipVisible}
        onBackdropPress={() => setTooltipVisible(false)}>
        <Text>{tooltipValue} workouts for w/c {tooltipWeek}</Text>
      </Tooltip>

      <LineChart
        data={{
          labels: props.labels,
          datasets: [
            {
              data: props.data
            },
            {
              data: [0],
              color: () => 'rgba(0, 0, 0, 0)',
            },
          ]
        }}
        yAxisInterval={1}
        bezier
        width={Dimensions.get("window").width - 2 * (props.padding || 15)}
        height={250}
        yAxisLabel=""
        yAxisSuffix=""
        xLabelsOffset={12}
        verticalLabelRotation={-60}
        chartConfig={{
          backgroundColor: theme['color-primary-500'],
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForLabels: {
            fontSize: 12,
          },
        }}
        onDataPointClick={(data) => showTooltip(data)}
        style={{
          borderRadius: 15,
        }} />
    </>
  );
};