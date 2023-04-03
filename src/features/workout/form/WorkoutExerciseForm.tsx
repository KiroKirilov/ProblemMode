import { Button, Input, MenuItem, OverflowMenu, Text } from "@ui-kitten/components";
import { useTheme } from "@ui-kitten/components/theme";
import React, { useMemo, useState } from "react";
import { Control, FieldArrayWithId } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { WorkoutFormModel } from "./workoutFormModel";
import { exerciseTypeValueLabelsMap } from "./exerciseTypeColumnsInfo";
import { useWorkoutExerciseForm } from "./useWorkoutExerciseForm";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { TouchableOpacity } from "react-native-gesture-handler";
import { WorkoutSetForm } from "./WorkoutSetForm";

export interface WorkoutExerciseFormProps {
  exercise: FieldArrayWithId<WorkoutFormModel, "exercises", "id">;
  control: Control<WorkoutFormModel, any>
  index: number;
  onRemove: (index: number) => void;
}

export const WorkoutExerciseForm: React.FC<WorkoutExerciseFormProps> = (props: WorkoutExerciseFormProps) => {
  const { controls, addEmptySet } = useWorkoutExerciseForm(props.control, props.index);
  const [removeMenuVisible, setRemoveMenuVisible] = useState(false);

  const handleRemove = () => {
    setRemoveMenuVisible(false);
    props.onRemove(props.index);
  }

  const renderToggleButton = () => {
    return <Button
      size="small"
      appearance="ghost"
      status="basic"
      onPress={() => setRemoveMenuVisible(true)}
      accessoryLeft={props => <FontAwesomeIcon iconStyle={props?.style} name="ellipsis-v" />} />
  }

  const columnInfo = useMemo(() => {
    return exerciseTypeValueLabelsMap[props.exercise.categoryType]
  }, [props.exercise.categoryType])

  return (
    <View style={styles.container}>
      <View style={styles.horizontalPadding}>
        <View style={styles.titleContainer}>
          <Text style={styles.name} status='primary'>{controls.name.field.value}</Text>

          <OverflowMenu
            visible={removeMenuVisible}
            anchor={renderToggleButton}
            onBackdropPress={() => setRemoveMenuVisible(false)}>
            <MenuItem title='Remove' onPress={handleRemove} />
          </OverflowMenu>
        </View>

        <View style={styles.setsTable}>
          <Text style={[styles.setCol, commonStyles.allCaps, styles.tableHeader]}>Set</Text>

          <Text style={[styles.valueCol, commonStyles.allCaps, styles.tableHeader]}>{columnInfo.valueLabel}</Text>

          <Text style={[styles.repsCol, commonStyles.allCaps, styles.tableHeader]}>{columnInfo.repsLabel}</Text>
        </View>
      </View>

      {
        controls.sets.fields.map((set, index) => (
          <WorkoutSetForm key={index} set={set} index={index} columnInfo={columnInfo} setsControl={controls.sets} />
        ))
      }

      <AllCapsButton appearance="ghost" status="info" onPress={addEmptySet}>Add Set</AllCapsButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  deleteSetButton: {
    width: '100%'
  }
})