import { Button, IndexPath, Input, MenuItem, OverflowMenu, Text, useTheme } from "@ui-kitten/components";
import React, { useRef, useState } from "react";
import { FieldArrayWithId, UseFieldArrayReturn } from "react-hook-form";
import { StyleSheet, View, TextInput, PanResponder } from "react-native";
import { Swipeable, TextInput as GestureText, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { SwipableInput } from "../../../common/SwipableInput";
import { SpecialSetTypes, specialSetTypesAbbreviationsMap, specialSetTypesTitlesMap, specialTypesAsArray } from "../specialSetTypes";
import { ExerciseTypeColumnInfo } from "./exerciseTypeColumnsInfo";
import { useWorkoutSetForm } from "./useWorkoutSetForm";
import { WorkoutFormModel } from "./workoutFormModel";

export interface WorkoutSetFormProps {
  set: FieldArrayWithId<WorkoutFormModel, `exercises.${number}.sets`, "id">
  index: number;
  setsControl: UseFieldArrayReturn<WorkoutFormModel, `exercises.${number}.sets`, "id">;
  columnInfo: ExerciseTypeColumnInfo;
}

const completedSetBgColorAlpha = '44';

export const WorkoutSetForm: React.FC<WorkoutSetFormProps> = (props: WorkoutSetFormProps) => {
  const theme = useTheme()
  const setCompletedBgColor = theme['color-success-500'] + completedSetBgColorAlpha;
  const setBgColor = theme['background-basic-color-1'];
  const dangerColor = theme['color-danger-500'];
  const swipableRef = useRef<Swipeable>(null);

  const [setTypeMenuVisible, setSetTypeMenuVisible] = useState(false);
  const [selectedSpecialTypeIndex, setSelectedSpecialTypeIndex] = React.useState<IndexPath | undefined>();
  const { getSetNumber, updateSet, updateSetSpecialType, toggleCompleteSet, removeSet, getSetNumberStatus } = useWorkoutSetForm(props.setsControl);

  const handleSetTypeChange = (index: IndexPath) => {
    const newType = specialTypesAsArray[index.row];
    updateSetSpecialType(props.index, newType)
    setSetTypeMenuVisible(false);

    setSelectedSpecialTypeIndex(
      selectedSpecialTypeIndex?.row === index.row
        ? undefined
        : index);
  }

  const renderSetSwipeActions = () => {
    return (
      <View
        style={{
          margin: 0,
          alignItems: 'flex-end',
          justifyContent: 'center',
          width: 70
        }}>
        <Button
          status="danger"
          size="small"
          onPress={() => {
            swipableRef.current?.close();
            removeSet(props.index);
          }}
          style={styles.deleteSetButton}
          accessoryRight={props => <FontAwesomeIcon iconStyle={props?.style} name="trash" />}
        />
      </View>
    );
  }

  const renderSetNumber = () => {
    return <Text
      onPress={() => setSetTypeMenuVisible(true)}
      status={getSetNumberStatus(props.setsControl.fields[props.index].specialType)}
      style={styles.setCol}>
      {getSetNumber(props.index)}
    </Text>;
  }

  const renderSpecialTypeAccessory = (specialType: SpecialSetTypes) => {
    return (
      <Text
        style={styles.specialTypeAccessory}
        status={getSetNumberStatus(specialType)}>
        {specialSetTypesAbbreviationsMap[specialType]}
      </Text>
    )
  }

  return (
    <Swipeable
      ref={swipableRef}
      containerStyle={{ backgroundColor: dangerColor }}
      childrenContainerStyle={{ backgroundColor: setBgColor }}
      renderRightActions={renderSetSwipeActions}
      overshootFriction={8}>
      <View style={props.set.isCompleted ? { backgroundColor: setCompletedBgColor } : {}}>

        <View style={[styles.horizontalPadding, styles.setsTable, styles.tableRow]}>

          <OverflowMenu
            visible={setTypeMenuVisible}
            anchor={renderSetNumber}
            onSelect={handleSetTypeChange}
            selectedIndex={selectedSpecialTypeIndex}
            onBackdropPress={() => setSetTypeMenuVisible(false)}>
            {
              specialTypesAsArray.map(x => (
                <MenuItem key={x} title={specialSetTypesTitlesMap[x]} accessoryLeft={() => renderSpecialTypeAccessory(x)} />
              ))
            }
          </OverflowMenu>

          {
            props.columnInfo.showValue &&
            <SwipableInput
              containerStyle={styles.valueCol}
              keyboardType="numeric"
              textAlign="center"
              size='small'
              onChangeText={newVal => updateSet(props.index, 'value', newVal)}
              style={[props.set.isCompleted ? commonStyles.backgroundlessInput : {}]}
              value={props.set.value ? props.set.value.toString() : ''} />
          }

          {
            props.columnInfo.showReps &&
            <SwipableInput
              containerStyle={styles.repsCol}
              keyboardType="numeric"
              textAlign="center"
              size='small'
              onChangeText={newVal => updateSet(props.index, 'reps', newVal)}
              style={[props.set.isCompleted ? commonStyles.backgroundlessInput : {}]}
              value={props.set.reps ? props.set.reps.toString() : ''} />
          }

          <Button
            style={[styles.completeSetButton]}
            status={props.set.isCompleted ? "success" : "basic"}
            appearance={props.set.isCompleted ? "filled" : "outline"}
            size="small"
            onPress={() => toggleCompleteSet(props.index, props.set.isCompleted)}
            accessoryRight={(accessoryProps) => <FontAwesomeIcon name='check' iconStyle={accessoryProps?.style} />} />
        </View>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
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
  deleteSetButton: {
    width: '100%'
  },
  specialTypeAccessory: {
    fontWeight: 'bold',
    marginHorizontal: 5
  }
})