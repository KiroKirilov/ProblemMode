import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { View } from "react-native";
import { TrackedExerciseChart } from "./TrackedExerciseChart";

export const TrackedExercisesList: FC = () => {
  const trackedExercises = useSelector((x: RootState) => x.trackedExercises.exercises)

  return (
    <>
    {
      trackedExercises.map((trackedExercise, index) => (
        <View key={index} style={{marginBottom: 15}}>
          <TrackedExerciseChart exercise={trackedExercise.exercise} />
        </View>
      ))
    }
    </>
  );
};