import React, { FC } from "react";
import { WorkoutForm, WorkoutFormAction, WorkoutFormMode } from "../form/WorkoutForm";
import { useRoute, RouteProp } from "@react-navigation/native";
import { WorkoutStackParamList } from "../workoutPages";

export const WorkoutTemplateForm: FC = () => {
  const { params } = useRoute<RouteProp<WorkoutStackParamList, 'templateForm'>>();

  const action = params?.isEdit
    ? WorkoutFormAction.Edit
    : WorkoutFormAction.Create;

  console.log('action: ', action);

  return (
    <>
      <WorkoutForm mode={WorkoutFormMode.Template} action={action} />
    </>
  );
};