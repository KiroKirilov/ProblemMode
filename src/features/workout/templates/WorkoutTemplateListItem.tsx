import React, { memo } from "react";
import { WorkoutTemplate } from "../../../db/models/workoutTemplate";
import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "@ui-kitten/components";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

export interface WorkoutTemplateListItemProps {
  template: WorkoutTemplate
}

export const WorkoutTemplateListItem: React.FC<WorkoutTemplateListItemProps> = memo((props: WorkoutTemplateListItemProps) => {
  const borderColor = useTheme()['background-basic-color-4'];
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();

  const goToDetails = () => {
    navigation.navigate(WorkoutStackPages.templateDetails.name, { templateId: props.template._id.toHexString() });
  }

  return (
    <View style={[styles.container, { borderColor }]}>
      <TouchableOpacity onPress={goToDetails}>
        <Text style={styles.name}>{props.template.name}</Text>

        <View style={styles.exercisesContainer}>
          {
            props.template.exercises.map((workoutExercise, index) => (
              <View>
                <Text key={index} appearance="hint" style={styles.exerciseText}>{workoutExercise.sets.length}x {workoutExercise.exercise.name}</Text>
              </View>
            ))
          }
        </View>

        {
          props.template.notes &&
          <Text style={styles.notes} appearance="hint">{props.template.notes}</Text>
        }
      </TouchableOpacity>
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
  },
  notes: {
    fontSize: 13,
    fontStyle: 'italic',
    marginTop: 5
  }
})