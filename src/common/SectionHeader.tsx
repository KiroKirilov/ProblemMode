import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { commonStyles } from "./commonStyles";

export interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = (props: SectionHeaderProps) => {
  return (
    <Text appearance="hint" style={[styles.title, commonStyles.allCaps]}>{props.title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft: 15,
    fontSize: 12
  }
})