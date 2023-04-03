import { Input, Layout, Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { SubPage } from "../../navigation/SubPage";
import { WorkoutExerciseForm } from "./WorkoutExerciseForm";
import { ActiveWorkoutHeaderActions } from "./ActiveWorkoutHeaderActions";
import { useWorkoutForm } from "./useWorkoutForm";
import { commonStyles } from "../../../common/commonStyles";
import { useExerciseSelection } from "./useExerciseSelection";
import { RestTimer } from "./RestTimer";
import { KeyboardBehaviour, useKeyboardBehaviour } from "../../../common/useKeyboardBehaviour";

export enum WorkoutFormMode {
  Workout = "Workout",
  Template = "Template"
}

export interface WorkoutFormProps {
  mode?: WorkoutFormMode;
}

export const WorkoutForm: FC<WorkoutFormProps> = (props: WorkoutFormProps) => {
  const mode = props.mode || WorkoutFormMode.Workout;
  const isTemplate = mode == WorkoutFormMode.Template;
  const { goToExercisePicker, controls, control, onSubmit, onCancel, removeExercise } = useWorkoutForm(mode);
  useExerciseSelection(controls.exercises);
  useKeyboardBehaviour(KeyboardBehaviour.AdjustNothing);

  return (
    <SubPage leftAccessory={() => <ActiveWorkoutHeaderActions mode={mode} onFinish={onSubmit} workoutName={controls.name.field.value} />}>
      <Layout style={styles.container}>

        <View style={styles.horizontalPadding}>
          <Input
            style={commonStyles.backgroundlessInput}
            textStyle={styles.workoutName}
            value={controls.name.field.value}
            onBlur={controls.name.field.onBlur}
            onChangeText={controls.name.field.onChange}
            accessoryRight={props => <FontAwesomeIcon iconStyle={props?.style} name='pen' />}
          />

          {!isTemplate && <RestTimer />}

          <Input
            style={styles.notes}
            value={controls.notes.field.value}
            onBlur={controls.notes.field.onBlur}
            onChangeText={controls.notes.field.onChange}
            multiline={true}
            placeholder='Workout notes'
          />
        </View>

        {
          controls.exercises.fields.map((e, index) => (
            <WorkoutExerciseForm onRemove={removeExercise} key={index} exercise={e} control={control} index={index} />
          ))
        }

        <AllCapsButton appearance="ghost" status="info" onPress={goToExercisePicker}>Add Exercise</AllCapsButton>

        {
          !isTemplate &&
          <AllCapsButton appearance="ghost" status="danger" onPress={onCancel}>Cancel Workout</AllCapsButton>
        }

      </Layout>
    </SubPage>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flex: 1
  },
  horizontalPadding: {
    paddingHorizontal: 15
  },
  workoutName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -10,
    paddingLeft: 0
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  notes: {
    marginVertical: 10
  },
})
