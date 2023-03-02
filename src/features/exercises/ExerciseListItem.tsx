import { ListItem } from "@ui-kitten/components";
import React from "react";
import { ExerciseModel } from "../../db/models/exercise";

interface ExerciseListItemProps {
  item: ExerciseModel;
  index: number;
}

export const ExerciseListItem: React.FC<ExerciseListItemProps> = (props: ExerciseListItemProps) => {
  const { item } = props;
  let name = item.name;

  if (props.index == 0)
    name = 'first';
  return (
    <ListItem
      title={name} />
  );
};
