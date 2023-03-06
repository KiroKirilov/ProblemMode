import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button, Layout, Divider } from "@ui-kitten/components";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { MainPage } from "../navigation/MainPage";
import { WorkoutTemplates } from "./templates/WorkoutTemplates";
import { WorkoutStackPages, WorkoutStackParamList } from "./workoutPages";

export const WorkoutsHome: FC = () => {  
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();

  const startNewWorkout = () => {
    navigation.navigate(WorkoutStackPages.activeWorkout.name);
  }

  return (
    <MainPage title={WorkoutStackPages.workoutsHome.title}>
      <Layout style={styles.container}>
        <Button appearance="outline" onPress={startNewWorkout}>Start an empty workout</Button>
      </Layout>

      <Divider />

      <WorkoutTemplates />
    </MainPage>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
})
