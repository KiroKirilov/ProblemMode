import { RouteProp, useRoute } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { MainPage } from "../navigation/MainPage";
import { ExerciseGroup } from "./ExerciseGroup";
import { ExercisePageActions } from "./ExercisePageActions";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPages";
import { useExercises } from "./useExercises";

export const ExercisesView: FC = () => {
  const { exercisesByLetter } = useExercises();

  return (
    <MainPage title={ExercisesStackPages.exercisesView.title} RightAccessory={ExercisePageActions}>
      <Layout style={styles.container}>
        {
          exercisesByLetter.map(exerciseGroup => (
            <ExerciseGroup key={exerciseGroup.key} title={exerciseGroup.key} exercises={exerciseGroup.items} />
          ))
        }

        <Button
      </Layout>
    </MainPage>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
