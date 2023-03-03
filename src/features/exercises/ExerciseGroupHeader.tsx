import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";

export interface ExerciseGroupHeaderProps {
  title: string;
}

export const ExerciseGroupHeader: React.FC<ExerciseGroupHeaderProps> = (props: ExerciseGroupHeaderProps) => {
  return (
    <Text appearance="hint" style={styles.title}>{props.title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
    fontSize: 12
  }
})