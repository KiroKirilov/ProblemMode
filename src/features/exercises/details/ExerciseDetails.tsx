import React from "react";
import { StyleSheet } from "react-native";
import { SubPage } from "../../navigation/SubPage";
import { ExerciseDetailsActions } from "./ExerciseDetailsActions";
import { useExerciseDetails } from "./useExerciseDetails";

export const ExerciseDetails: React.FC = () => {
  const { exercise, onDelete } = useExerciseDetails();

  return (
    <SubPage
      title={exercise?.name}
      level="2"
      rightAccessory={() => <ExerciseDetailsActions exercise={exercise!} onDelete={onDelete} />}
      contentContainerStyle={styles.container}>

    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
})
