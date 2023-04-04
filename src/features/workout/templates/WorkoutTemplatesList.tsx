import React, { FC } from "react";
import { useWorkoutTemplates } from './useWorkoutTemplates';
import { View } from "react-native";
import { WorkoutTemplateListItem } from "./WorkoutTemplateListItem";

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