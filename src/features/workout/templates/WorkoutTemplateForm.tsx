import React, { FC } from "react";
import { WorkoutForm, WorkoutFormMode } from "../form/WorkoutForm";

export const WorkoutTemplateForm: FC = () => {
  return (
    <>
      <WorkoutForm mode={WorkoutFormMode.Template} />
    </>
  );
};