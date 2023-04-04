import { Button, Text } from "@ui-kitten/components";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AllCapsButton } from "../../../common/AllCapsButton";
import { commonStyles } from "../../../common/commonStyles";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { manualMinimize } from "../workoutSlice";
import { WorkoutFormAction, WorkoutFormMode } from "./WorkoutForm";
import { useNavigation } from "@react-navigation/native";

export interface ActiveWorkoutHeaderActionsProps {
  onFinish: () => void;
  workoutName: string;
  mode: WorkoutFormMode;
  action: WorkoutFormAction;
}

export const ActiveWorkoutHeaderActions: React.FC<ActiveWorkoutHeaderActionsProps> = (props: ActiveWorkoutHeaderActionsProps) => {
  const formIsMinimized = useSelector((x: RootState) => x.workout.formIsMinimized);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isTemplate = props.mode == WorkoutFormMode.Template;
  const iconName = isTemplate
    ? "arrow-left"
    : "chevron-down";

  const templateHeaderText = props.action == WorkoutFormAction.Create
    ? 'Create Workout Template'
    : 'Edit Workout Template'

  const handleLeftButtonPress = () => {
    if (isTemplate) {
      navigation.goBack();
    } else {
      dispatch(manualMinimize())
    }
  }

  return (
    <>
      {
        formIsMinimized && !isTemplate
          ? <View style={styles.minimizedContainer}>
            <View style={styles.indicator}></View>
            <Text style={styles.minimizedTitle}>{props.workoutName}</Text>
          </View>

          : <View style={styles.container}>
            <View style={styles.leftSide}>
              <Button
                appearance="ghost"
                status="control"
                onPress={handleLeftButtonPress}
                accessoryRight={(props) => <FontAwesomeIcon iconStyle={props?.style} name={iconName} />} />


              {isTemplate && <Text>{templateHeaderText}</Text>}
            </View>

            <AllCapsButton appearance="ghost" status="info" onPress={props.onFinish}>
              {
                isTemplate
                  ? "Save"
                  : "Finish"
              }
            </AllCapsButton>


          </View>
      }
    </>

  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  minimizedContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 5,
    width: "100%",
  },
  minimizedTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 5,
  },
  indicator: {
    position: "absolute",
    width: 15,
    height: 4,
    borderRadius: 5,
    backgroundColor: "#999",
    marginTop: -5,
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})