import { Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";

export interface ChartWithHeaderProps {
  children?: React.ReactNode[] | React.ReactNode;
  title?: string;
}

export const ChartWithHeader: React.FC<ChartWithHeaderProps> = (props: ChartWithHeaderProps) => {
  const primaryColor = useTheme()['color-primary-500']

  return (
    <View>
      <View style={[styles.headerContainer, { borderColor: primaryColor }]}>
        <Text style={styles.header}>{props.title}</Text>
        <View style={[styles.borderFiller, {backgroundColor: primaryColor}]}></View>
      </View>
      <View style={styles.chartContainer}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 7.5,
    borderWidth: 1,
    borderRadius: 15,
    height: 100
  },
  header: {
    marginHorizontal: 15,
    marginTop: 11,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  chartContainer: {
    marginTop: -65
  },
  borderFiller: {
    width: '100%',
    height: 15,
  }
})