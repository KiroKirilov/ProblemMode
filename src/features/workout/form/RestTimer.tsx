import { Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { useRestTimer } from "../useRestTimer";

export const RestTimer: FC = () => {
  const { formattedTime } = useRestTimer();
  
  return (
    <Text appearance="hint" style={styles.restTimer} category="c2">Rest: {formattedTime}</Text>
  );
};

const styles = StyleSheet.create({
  restTimer: {
    textTransform: 'uppercase'
  }
})