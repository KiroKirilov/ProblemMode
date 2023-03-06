import React from "react";
import { SectionHeader } from "../../common/SectionHeader";
import { ExerciseModel } from "../../db/models/exercise";
import { ExerciseListItem } from "./ExerciseListItem";

export interface ExerciseGroupProps {
  title: string;
  exercises: ExerciseModel[];
}

export const ExerciseGroup: React.FC<ExerciseGroupProps> = (props: ExerciseGroupProps) => {
  return (
    <>
      <SectionHeader title={props.title} />
      {
        props.exercises.map((exercise, index) => (
          <ExerciseListItem item={exercise} key={index} />
        ))
      }
    </>
  );
};