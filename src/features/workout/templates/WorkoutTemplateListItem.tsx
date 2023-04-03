import React, { memo } from "react";
import { WorkoutTemplate } from "../../../db/models/workoutTemplate";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";

export interface WorkoutTemplateListItemProps {
  template: WorkoutTemplate
}

export const WorkoutTemplateListItem: React.FC<WorkoutTemplateListItemProps> = memo((props: WorkoutTemplateListItemProps) => {
  const borderColor = useTheme()['background-basic-color-4'];

  return (
    <View style={[styles.container, { borderColor }]}>
      <Text style={styles.name}>{props.template.name}</Text>

      <View style={styles.exercisesContainer}>
        {
          props.template.exercises.map(workoutExercise => (
            <View>
              <Text appearance="hint" style={styles.exerciseText}>{workoutExercise.sets.length}x {workoutExercise.exercise.name}</Text>
            </View>
          ))
        }
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  exercisesContainer: {
    gap: 2
  },
  exerciseText: {
    fontSize: 14
  }
})