import React, { FC } from "react";
import { ListRenderItemInfo } from "react-native";
import { WorkoutModel } from "../../db/models/workout";
import { SectionHeader } from "../../common/SectionHeader";
import { HistoryListItem } from "./HistoryListItem";
import { HistoryStackPages } from "./historyPages";
import { MainPageWithScrollCopy } from "../navigation/MainPageWithScrollCopy";
import { FlatList } from "react-native-gesture-handler";
import { useWorkoutHistory } from "./useWorkoutHistory";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { workoutsByMonth } from "./workoutHistorySlice";

type WorkoutItemInfo = ListRenderItemInfo<(WorkoutModel & Realm.Object<unknown, never>) | {
  key: string | number;
  count: number
}>

const renderItem = (itemInfo: WorkoutItemInfo) => (
  'key' in itemInfo.item
    ? <SectionHeader key={itemInfo.item.key} title={itemInfo.item.key} subTitle={`${itemInfo.item.count} workouts`} />
    : <HistoryListItem key={itemInfo.item.name} item={itemInfo.item} />
)

export const HistoryHome: FC = () => {
  const byMonth = useSelector(workoutsByMonth);

  return (
    <MainPageWithScrollCopy
      title={HistoryStackPages.historyHome.title}>

      <FlatList data={byMonth}
        windowSize={8}
        initialNumToRender={10}
        renderItem={renderItem} />

    </MainPageWithScrollCopy>
  );
};