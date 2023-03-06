import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "@ui-kitten/components";
import React from "react";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPages";

export const ExercisePageActions: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<ExerciseStackParamList>>();

  const goToForm = () => {
    navigation.navigate(ExercisesStackPages.exercisesForm.name);
  }

  return (
    <Button
      onPress={goToForm}
      style={{ width: 50 }}
      appearance='ghost'
      status='control'
      accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="plus" />} />
  );
};
