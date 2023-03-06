import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SectionHeader } from "../../../common/SectionHeader";

export const WorkoutTemplates: FC = () => {
  return (
    <View style={styles.container}>
      <SectionHeader title="TEMPLATES" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10
  },
})
