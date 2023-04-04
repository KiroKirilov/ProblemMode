import React, { FC } from "react";
import { SubPage } from "../../navigation/SubPage";
import { StyleSheet, View } from "react-native";
import { WorkoutStackParamList } from "../workoutPages";
import { useRoute, RouteProp } from "@react-navigation/native";
import { useTemplateDetails } from "./useTemplateDetails";
import { Button, Text } from "@ui-kitten/components";
import { InitialsAvatar } from "../../../common/avatars/InitialsAvatar";
import { TouchableOpacity } from "react-native-gesture-handler";
import { WorkoutTemplateDetailsActions } from "./WorkoutTemplateDetailsActions";

export const WorkoutTemplateDetails: FC = () => {
  const { template, startNewWorkout, onDelete, goToEdit } = useTemplateDetails();

  return (
    <SubPage title={template?.name} level="2"
      rightAccessory={() => <WorkoutTemplateDetailsActions onDelete={onDelete} onEdit={goToEdit} />}>

      {
        template?.notes &&
        <View style={styles.notesContainer}>
          <Text appearance="hint" style={styles.notes}>Notes: {template.notes}</Text>
        </View>
      }

      <View style={styles.container}>

        {
          template?.exercises.map((workoutExercise, index) => (
            <TouchableOpacity key={index}>
              <View style={styles.exerciseRow}>
                <InitialsAvatar title={workoutExercise.exercise.name} />

                <View>
                  <Text>{workoutExercise.sets.length} x {workoutExercise.exercise.name}</Text>
                  <Text appearance="hint">{workoutExercise.exercise.bodyPart.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }

        <Button appearance="outline" style={{ marginTop: 15 }} onPress={startNewWorkout}>Start workout</Button>
      </View>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingVertical: 5,
    paddingHorizontal: 15,
    paddingTop: 15
  },
  exerciseRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginVertical: 7.5
  },
  notesContainer: {
    paddingHorizontal: 15,
    paddingTop: 15
  },
  notes: {
    marginTop: 5,
    marginBottom: -5,
    fontStyle: 'italic'
  }
})