import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { FloatingActionButton } from "../../common/FloatingActionButton";
import { ExercisesAddMode, stopSelecting } from "./exercisesSelectionSlice";
import { stopSelecting as stopSelectingTracked } from "../dashboard/trackedExercises/trackedExercisesSelectionSlice";
import { SelectionType } from "./selectionType";


export interface ExerciseSelectActionsProps {
  selectionType: SelectionType
}

export const ExerciseSelectActions: FC<ExerciseSelectActionsProps> = (props: ExerciseSelectActionsProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const finishSelecting = (addMode: ExercisesAddMode) => {
    if (props.selectionType == SelectionType.Form) {
      dispatch(stopSelecting(addMode));
    } else if (props.selectionType == SelectionType.Tracked) {      
      dispatch(stopSelectingTracked());
    }
    navigation.goBack();
  }

  return (
    <>
      <FloatingActionButton iconName="check" buttonNumber={0} onPress={() => finishSelecting(ExercisesAddMode.Regular)} />
      {/* <FloatingActionButton iconName="link" status="info" buttonNumber={1} onPress={() => finishSelecting(ExercisesAddMode.SuperSet)} /> */}
    </>
  );
};