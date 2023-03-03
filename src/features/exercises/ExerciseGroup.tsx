import React from "react";
import { ExerciseModel } from "../../db/models/exercise";
import { ExerciseGroupHeader } from "./ExerciseGroupHeader";
import { ExerciseListItem } from "./ExerciseListItem";

export interface ExerciseGroupProps {
  title: string;
  exercises: ExerciseModel[];
}

export const ExerciseGroup: React.FC<ExerciseGroupProps> = (props: ExerciseGroupProps) => {
  return (
    <>
      <ExerciseGroupHeader title={props.title} />
      {
        props.exercises.map((exercise, index) => (
          <ExerciseListItem item={exercise} key={index} />
        ))
      }
    </>
  );
};