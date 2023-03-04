import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { InitialsAvatar } from "../../common/InitialsAvatar";
import { ExerciseModel } from "../../db/models/exercise";

interface ExerciseListItemProps {
  item: ExerciseModel;
}

export const ExerciseListItem: React.FC<ExerciseListItemProps> = (props: ExerciseListItemProps) => {
  const { item } = props;

  return (
    <View style={styles.container}>
      <InitialsAvatar title={item.name} />

      <Text style={styles.name}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 15,
    paddingVertical: 10
  },
  name: {
    marginTop: -3
  }
})
