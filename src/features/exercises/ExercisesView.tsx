import { RouteProp, useRoute } from "@react-navigation/native";
import React, { FC, memo, useEffect, useState } from "react";
import { StyleSheet, SectionList, Animated, SectionListData, DefaultSectionT, SectionListRenderItemInfo, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { SectionHeader } from "../../common/SectionHeader";
import { MainPageWithSections } from "../navigation/MainPageWithSections";
import { ExercisePageActions } from "./ExercisePageActions";
import { ExerciseSelectActions } from "./ExerciseSelectActions";
import { ExercisesStackPages, ExerciseStackParamList } from "./exercisesPages";
import { ExerciseListItem } from './ExerciseListItem';
import { ExerciseModel } from "../../db/models/exercise";
import { hasMoreData, incrementSliceAmount, setSliceAmount, slicedExercisesByLetter } from "./exercisesSlice";
import { ExerciseGroup } from "./ExerciseGroup";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList<ExerciseModel>);

interface SectionInfo {
  section: SectionListData<ExerciseModel, DefaultSectionT>;
}

const renderSectionHeader = (sectionInfo: SectionInfo) => (<SectionHeader title={sectionInfo.section.title} />);
const renderItem = (itemInfo: SectionListRenderItemInfo<ExerciseModel, DefaultSectionT>) => (<ExerciseListItem item={itemInfo.item} />);

const ITEM_HEIGHT = 50;
const getItemLayout = (_: any, index: number) => (
  { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
);


export const ExercisesView: FC = () => {
  const exercisesByLetter = useSelector(slicedExercisesByLetter);
  const hasMoreExercises = useSelector(hasMoreData);
  const dispatch = useDispatch();
  console.log('render');
  const { params } = useRoute<RouteProp<ExerciseStackParamList, 'exercisesView'>>();

  useEffect(() => {
    dispatch(setSliceAmount(15));
  }, [])

  const onLoadNext = () => {
    console.log('called')
    console.log('set');
    dispatch(incrementSliceAmount(25))
  }

  return (
    <>
      <MainPageWithSections
        onLoadNext={onLoadNext}
        hasMoreData={hasMoreExercises}
        title={ExercisesStackPages.exercisesView.title}
        rightAccessory={() => <ExercisePageActions />}
        renderAfterContent={params?.selectMode && (() => <ExerciseSelectActions />)}>

        <ScrollView decelerationRate='fast'>
          {
            exercisesByLetter.map(groupItem => (
              'key' in groupItem
                ? <SectionHeader key={groupItem.key} title={groupItem.key} />
                : <ExerciseListItem key={groupItem.name} item={groupItem} />
            ))
          }
        </ScrollView>


        {/* <AnimatedSectionList sections={exercisesByLetter}
          initialNumToRender={5}
          removeClippedSubviews
          keyExtractor={(item) => item.name}
          getItemLayout={getItemLayout}
          renderSectionHeader={renderSectionHeader}
          renderItem={(itemInfo: SectionListRenderItemInfo<ExerciseModel, DefaultSectionT>) => (<ExerciseListItem item={itemInfo.item} />)} /> */}

      </MainPageWithSections>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
