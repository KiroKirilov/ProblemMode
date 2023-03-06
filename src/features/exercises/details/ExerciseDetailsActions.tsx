import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "@ui-kitten/components";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { ExerciseModel } from "../../../db/models/exercise";
import { ExercisesStackPages, ExerciseStackParamList } from "../exercisesPages";

export interface ExerciseDetailsActionsProps {
  exercise: ExerciseModel;
  onDelete?: () => void;
}

export const ExerciseDetailsActions: FC<ExerciseDetailsActionsProps> = (props: ExerciseDetailsActionsProps) => {
  const navigation = useNavigation<StackNavigationProp<ExerciseStackParamList>>();

  const goToForm = () => {
    navigation.navigate(ExercisesStackPages.exercisesForm.name, props.exercise)
  }

  const deleteExercise = () => {
    if (props.onDelete) {
      props.onDelete();
    }
  }

  return (
    <View style={styles.actionsContainer}>
      <Button
        onPress={goToForm}
        style={{ width: 50 }}
        appearance='ghost'
        status='control'
        accessoryLeft={props => <FontAwesomeIcon iconStyle={props?.style} name="pen" />} />

      <Button
        onPress={deleteExercise}
        style={{ width: 50 }}
        appearance='ghost'
        status='danger'        
        accessoryLeft={props => <FontAwesomeIcon iconStyle={props?.style} name="trash" />} />
    </View>
  );
};



const styles = StyleSheet.create({
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
})
