import { Button, Input, Text } from "@ui-kitten/components";
import { useTheme } from "@ui-kitten/components/theme";
import React, { useMemo } from "react";
import { Control, FieldArrayWithId } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { WorkoutFormModel } from "./workoutFormModel";
import { exerciseTypeValueLabelsMap } from "./exerciseTypeColumnsInfo";
import { useWorkoutExerciseForm } from "./useWorkoutExerciseForm";

export interface ExerciseFormProps {
  exercise: FieldArrayWithId<WorkoutFormModel, "exercises", "id">;
  control: Control<WorkoutFormModel, any>
  index: number;
}

export const ExerciseForm: React.FC<ExerciseFormProps> = (props: ExerciseFormProps) => {
  const setCompletedBgColor = useTheme()['color-success-500'] + '44';
  const { controls, updateSet, addEmptySet, toggleCompleteSet } = useWorkoutExerciseForm(props.control, props.index);


  const columnInfo = useMemo(() => {
    return exerciseTypeValueLabelsMap[props.exercise.categoryType]
  }, [props.exercise.categoryType])


  return (
    <View style={styles.container}>
      <View style={styles.horizontalPadding}>
        <Text style={styles.name} status='primary'>{controls.name.field.value}</Text>

        <View style={styles.setsTable}>
          <Text style={[styles.setCol, commonStyles.allCaps, styles.tableHeader]}>Set</Text>

          <Text style={[styles.valueCol, commonStyles.allCaps, styles.tableHeader]}>{columnInfo.valueLabel}</Text>

          <Text style={[styles.repsCol, commonStyles.allCaps, styles.tableHeader]}>{columnInfo.repsLabel}</Text>
        </View>
      </View>

      {
        controls.sets.fields.map((set, index) => (
          <View key={index} style={set.isCompleted ? { backgroundColor: setCompletedBgColor } : {}}>

            <View style={[styles.horizontalPadding, styles.setsTable, styles.tableRow]}>
              <Text status="primary" style={styles.setCol}>{index + 1}</Text>

              {
                columnInfo.showValue &&
                <Input
                  keyboardType="numeric"
                  textAlign="center"
                  size='small'
                  onChangeText={newVal => updateSet(index, 'value', newVal)}
                  style={[styles.valueCol, set.isCompleted ? commonStyles.backgroundlessInput : {}]}
                  value={set.value ? set.value.toString() : ''} />
              }

              {
                columnInfo.showReps &&
                <Input
                  keyboardType="numeric"
                  textAlign="center"
                  size='small'
                  onChangeText={newVal => updateSet(index, 'reps', newVal)}
                  style={[styles.repsCol, set.isCompleted ? commonStyles.backgroundlessInput : {}]}
                  value={set.reps ? set.reps.toString() : ''} />
              }

              <Button
                style={[styles.completeSetButton]}
                status={set.isCompleted ? "success" : "basic"}
                appearance={set.isCompleted ? "filled" : "outline"}
                size="small"
                onPress={() => toggleCompleteSet(index, set.isCompleted)}
                accessoryRight={(accessoryProps) => <FontAwesomeIcon name='check' iconStyle={accessoryProps?.style} />} />
            </View>
          </View>
        ))
      }

      <AllCapsButton appearance="ghost" status="info" onPress={addEmptySet}>Add Set</AllCapsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    // paddingHorizontal: 15
  },
  horizontalPadding: {
    paddingHorizontal: 15
  },
  setsTable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  setCol: {
    width: '10%',
    textAlign: 'center',
    marginRight: '9.33%',
    fontWeight: "bold"
  },
  valueCol: {
    width: '25%',
    textAlign: 'center',
    marginRight: '9.33%'
  },
  repsCol: {
    width: '25%',
    textAlign: 'center',
    marginRight: '9.33%'
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "700"
  },
  tableHeader: {
    fontSize: 11,
    marginBottom: 5
  },
  completeSetButton: {
    width: '10%',
    height: 30,
    borderRadius: 5,
    textAlign: 'center',
  },
  tableRow: {
    paddingVertical: 5
  }
})