import React from "react";
import { WorkoutModel } from "../../db/models/workout";
import { WorkoutCard } from "../workout/WorkoutCard";

export interface HistoryListItemProps {
  item: WorkoutModel;
}

export const HistoryListItem: React.FC<HistoryListItemProps> = (props: HistoryListItemProps) => {
  return (
      <WorkoutCard workout={props.item} showTotalVolume={true} marginVertical={7.5} />
  );
};