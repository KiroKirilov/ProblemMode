import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Card, Layout, Modal, Text } from "@ui-kitten/components";
import React, { FC, useState } from "react";
import { StyleSheet } from "react-native";
import { getTimeOfDayString } from "../../../common/dates";
import { ExercisesStackPages } from "../../exercises/exercisesPages";
import { ExercisesView } from "../../exercises/ExercisesView";
import { SubPage } from "../../navigation/SubPage";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { ActiveWorkoutHeaderActions } from "./ActiveWorkoutHeaderActions";

export const ActiveWorkoutForm: FC = () => {
  const workoutDefaultTitle = getTimeOfDayString() + ' Workout';
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();

  const goToExercisePicker = () => {
    navigation.navigate(WorkoutStackPages.exercisePicker.name, { selectMode: true })
  }

  return (
    <SubPage leftAccessory={() => <ActiveWorkoutHeaderActions />}>
      <Layout style={styles.container}>
        <Text style={styles.workoutName}>
          {workoutDefaultTitle}
        </Text>

        <Button onPress={goToExercisePicker}>Toggle</Button>

      </Layout>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 1
  },
  workoutName: {
    fontSize: 20
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }
})
