import { useRoute, RouteProp } from "@react-navigation/native";
import React, { FC } from "react";
import { WorkoutStackParamList } from "./workoutPages";
import { SubPage } from "../navigation/SubPage";
import { Text, useTheme } from "@ui-kitten/components";
import { Image, StyleSheet, View } from "react-native";
import { getBestSetAsString } from "./workoutCalculator";
import { WorkoutCard } from "./WorkoutCard";


const muscleImage = require("../../assets/images/muscle.png");

export const WorkoutFinished: FC = () => {
  const { params } = useRoute<RouteProp<WorkoutStackParamList, 'workoutFinished'>>();
  const workout = params.workout;

  return (
    <SubPage>
      <View style={styles.header}>
        <Image style={styles.muscleImage} source={muscleImage} />
        <Text category="h3">Congratulations!</Text>
      </View>

      <WorkoutCard workout={workout} />
    </SubPage>
  );
};

const styles = StyleSheet.create({
  muscleImage: {
    width: '35%',
    aspectRatio: 1 / 1,
    height: undefined,
    marginBottom: 15
  },
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '7.5%'
  },
})