import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text, useTheme } from "@ui-kitten/components";
import React, { memo, useMemo, useState } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";
import { IconAvatar } from "../../common/avatars/IconAvatar";
import { InitialsAvatar } from "../../common/avatars/InitialsAvatar";
import { ExerciseModel } from "../../db/models/exercise";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPages";
import { useExerciseListItemState } from "./useExerciseListItemState";

interface ExerciseListItemProps {
  item: ExerciseModel;
}

export const ExerciseListItem: React.FC<ExerciseListItemProps> = (props: ExerciseListItemProps) => {
  const { item } = props;
  const { handlePress, isSelected, selectedStyles, selectedBackgroundColor } = useExerciseListItemState(item);

  return (
    <TouchableHighlight underlayColor={selectedBackgroundColor} style={[styles.container, selectedStyles]} onPress={handlePress}>
      <>
        {
          isSelected
            ? <IconAvatar iconName="check" />
            : <InitialsAvatar title={item.name} />
        }

        <Text style={styles.name}>{item.name}</Text>
      </>
    </TouchableHighlight>
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
