import { RouteProp, useRoute } from "@react-navigation/native";
import React, { FC, useEffect } from "react";
import { StyleSheet, ScrollView, ListRenderItemInfo } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SectionHeader } from "../../common/SectionHeader";
import { ExercisePageActions } from "./ExercisePageActions";
import { ExerciseSelectActions } from "./ExerciseSelectActions";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPages";
import { ExerciseListItem } from './ExerciseListItem';
import { FlatList } from "react-native-gesture-handler";
import { RootState } from "../../app/store";
import { MainPageWithScrollCopy } from "../navigation/MainPageWithScrollCopy";
import { ExerciseModel } from "../../db/models/exercise";

type ExerciseItemInfo = ListRenderItemInfo<(ExerciseModel & Realm.Object<unknown, never>) | {
  key: string | number;
}>

const renderItem = (itemInfo: ExerciseItemInfo) => (
  'key' in itemInfo.item
    ? <SectionHeader key={itemInfo.item.key} title={itemInfo.item.key} />
    : <ExerciseListItem key={itemInfo.item.name} item={itemInfo.item} />
)

export const ExercisesView: FC = () => {
  const exercisesByLetter = useSelector((x: RootState) => x.exercises.exercsiesByLetter);
  const { params } = useRoute<RouteProp<ExerciseStackParamList, 'exercisesView'>>();

  return (
    <MainPageWithScrollCopy
      title={ExercisesStackPages.exercisesView.title}
      rightAccessory={() => <ExercisePageActions />}
      renderAfterContent={params?.selectMode && (() => <ExerciseSelectActions />)}>

      <FlatList data={exercisesByLetter}
        windowSize={8}
        initialNumToRender={10}
        renderItem={renderItem} />

    </MainPageWithScrollCopy>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
