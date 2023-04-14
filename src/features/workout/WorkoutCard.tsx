import { Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Workout } from "../../db/models/workout";
import { getBestSetAsString, getTotalVolume } from "./workoutCalculator";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";

export interface WorkoutCardProps {
  workout: Workout;
  showTotalVolume?: boolean;
  marginVertical?: number;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = (props: WorkoutCardProps) => {
  const theme = useTheme();
  const borderColor = theme['background-basic-color-4'];
  const hintColor = theme['text-hint-color'];

  const dynamicStyles = {
    borderColor,
    marginVertical: props.marginVertical || 15
  }

  return (
    <View style={[styles.workout, dynamicStyles]}>
      <Text style={styles.name}>{props.workout.name}</Text>
      <Text appearance="hint" style={styles.date}>{props.workout.completedOn.toLocaleString('en-us', { month: 'long', day: 'numeric' })}</Text>

      {
        props.showTotalVolume &&
        <View style={styles.totalVolumeContainer}>
          <FontAwesomeIcon iconStyle={{tintColor: hintColor, height: 20}} name="weight-hanging" />
          <Text>{getTotalVolume(props.workout)} kg</Text>
        </View>
      }

      <View style={styles.exercisesContainer}>
        <View style={styles.exerciseRow}>
          <Text style={styles.exercisesHeader}>Exercise</Text>
          <Text style={styles.exercisesHeader}>Best set</Text>
        </View>
        {
          props.workout.exercises.map((workoutExercise, index) => (
            <View key={index} style={styles.exerciseRow}>
              <Text>{workoutExercise.sets.length}x {workoutExercise.exercise.name}</Text>
              <Text>{getBestSetAsString(workoutExercise.sets, workoutExercise.exercise.category.categoryType)}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  workout: {
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 15,
    padding: 15,
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
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 1
  },
  date: {
    fontSize: 14
  },
  totalVolumeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 7.5
  }
})