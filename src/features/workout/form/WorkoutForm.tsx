import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Input, Layout, Text } from "@ui-kitten/components";
import React, { FC, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { getTimeOfDayString } from "../../../common/dates";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { SubPage } from "../../navigation/SubPage";
import { ExerciseForm } from "./ExerciseForm";
import { ActiveWorkoutHeaderActions } from "./ActiveWorkoutHeaderActions";
import { useWorkoutForm } from "./useWorkoutForm";
import { commonStyles } from "../../../common/commonStyles";
import { useRestTimer } from "../useRestTimer";
import { useExerciseSelection } from "./useExerciseSelection";

export const WorkoutForm: FC = () => {
  const { goToExercisePicker, controls, control, onSubmit } = useWorkoutForm();
  const { formattedTime } = useRestTimer();
  useExerciseSelection(controls.exercises);

  const onFinish = () => {
    onSubmit();
  }

  const onCancel = () => {

  }

  return (
    <SubPage leftAccessory={() => <ActiveWorkoutHeaderActions onFinish={onFinish} />}>
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

          <Text appearance="hint" style={styles.restTimer} category="c2">Rest: {formattedTime}</Text>

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
            <ExerciseForm key={index} exercise={e} control={control} index={index} />
          ))
        }

        <View style={styles.horizontalPadding}>
          <AllCapsButton appearance="ghost" status="info" onPress={goToExercisePicker}>Add Exercise</AllCapsButton>
          <AllCapsButton appearance="ghost" status="dange" onPress={onCancel}>Cancel Workout</AllCapsButton>
        </View>

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
  restTimer: {
    textTransform: 'uppercase'
  }
})
