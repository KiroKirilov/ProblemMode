import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { InitialsAvatar } from "../../common/InitialsAvatar";
import { ExerciseModel } from "../../db/models/exercise";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPageNames";

interface ExerciseListItemProps {
  item: ExerciseModel;
}

export const ExerciseListItem: React.FC<ExerciseListItemProps> = (props: ExerciseListItemProps) => {
  const { item } = props;
  const navigation = useNavigation<StackNavigationProp<ExerciseStackParamList>>();

  const goToDetails = () => {
    navigation.navigate(ExercisesStackPages.exercisesDetails.name, { id: props.item._id.toHexString() });
  }

  return (
    <TouchableOpacity style={styles.container} onPress={goToDetails}>
      <InitialsAvatar title={item.name} />

      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
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
