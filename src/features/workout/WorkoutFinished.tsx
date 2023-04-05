import { useRoute, RouteProp } from "@react-navigation/native";
import React, { FC } from "react";
import { WorkoutStackParamList } from "./workoutPages";
import { SubPage } from "../navigation/SubPage";
import { Text, useTheme } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { getBestSetAsString } from "./workoutCalculator";


const muscleImage = require("../../assets/images/muscle.png");

export const WorkoutFinished: FC = () => {
  const { params } = useRoute<RouteProp<WorkoutStackParamList, 'workoutFinished'>>();
  const borderColor = useTheme()['background-basic-color-4'];
  const workout = params.workout;

  return (
    <SubPage>
      <View style={styles.header}>
        <Image style={styles.muscleImage} source={muscleImage} />
        <Text category="h3">Congratulations!</Text>
      </View>

      <View style={[styles.workout, { borderColor }]}>
        <Text style={styles.name}>{workout.name}</Text>
        <Text appearance="hint" style={styles.date}>{workout.completedOn.toLocaleString('en-us', { month: 'long', day: 'numeric' })}</Text>

        <View style={styles.exercisesContainer}>
          <View style={styles.exerciseRow}>
            <Text style={styles.exercisesHeader}>Exercise</Text>
            <Text style={styles.exercisesHeader}>Best set</Text>
          </View>
          {
            workout.exercises.map((workoutExercise, index) => (
              <View key={index} style={styles.exerciseRow}>
                <Text>{workoutExercise.sets.length}x {workoutExercise.exercise.name}</Text>
                <Text>{getBestSetAsString(workoutExercise.sets, workoutExercise.exercise.category.categoryType)}</Text>
              </View>
            ))
          }
        </View>
      </View>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  muscleImage: {
    width: '35%',
    aspectRatio: 1 / 1,
    height: undefined,
    marginBottom: 15
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '7.5%'
  },
  workout: {
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 15,
    padding: 15,
    marginTop: 15,
    marginBottom: 15
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 1
  },
  exercisesContainer: {
    marginTop: 10
  },
  exercisesHeader: {
    fontWeight: 'bold',
    fontSize: 16
  },
  exerciseRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  date: {
    fontSize: 14
  }
})