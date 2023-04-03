import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { FloatingActionButton } from "../../common/FloatingActionButton";
import { ExercisesAddMode, stopSelecting } from "./exercisesSelectionSlice";

export const ExerciseSelectActions: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const finishSelecting = (addMode: ExercisesAddMode) => {
    dispatch(stopSelecting(addMode));
    navigation.goBack();
  }

  return (
    <>
      <FloatingActionButton iconName="check" buttonNumber={0} onPress={() => finishSelecting(ExercisesAddMode.Regular)} />
      {/* <FloatingActionButton iconName="link" status="info" buttonNumber={1} onPress={() => finishSelecting(ExercisesAddMode.SuperSet)} /> */}
    </>
  );
};