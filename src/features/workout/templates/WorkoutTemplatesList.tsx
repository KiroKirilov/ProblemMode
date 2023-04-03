import React, { FC } from "react";
import { useWorkoutTemplates } from './useWorkoutTemplates';
import { FlatList } from "react-native-gesture-handler";
import { ListRenderItemInfo, View } from "react-native";
import { WorkoutTemplateModel } from "../../../db/models/workoutTemplate";
import { WorkoutTemplateListItem } from "./WorkoutTemplateListItem";

type WorkoutTemplateItemInfo = ListRenderItemInfo<WorkoutTemplateModel & Realm.Object<unknown, never>>;

const renderWorkoutTemplateListItem = (itemInfo: WorkoutTemplateItemInfo) => {
  return (<WorkoutTemplateListItem template={itemInfo.item} />)
}

export const WorkoutTemplatesList: FC = () => {
  const { templates } = useWorkoutTemplates();

  console.log(templates.length);
  return (
    <View style={{ paddingHorizontal: 15, gap: 10 }}>
      {
        templates.map((item, index) => <WorkoutTemplateListItem key={index} template={item} />)
      }
    </View>
  );
};