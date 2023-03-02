import { Layout } from "@ui-kitten/components";
import React, { FC } from "react";
import { commonStyles } from "../../common/commonStyles";
import { BottomTabs } from "../../common/pageNames";
import { MainPage } from "../navigation/MainPage";
import { ExerciseListItem } from "./ExerciseListItem";
import { ExercisePageActions } from "./ExercisePageActions";
import { useExercises } from "./useExercises";

export const ExercisesView: FC = () => {
  const { exercises } = useExercises();

  return (
    <MainPage title={BottomTabs.exercises.title} RightAccessory={ExercisePageActions}>
      <Layout style={commonStyles.container}>
        {
          exercises.map((x, i) => (<ExerciseListItem item={x} index={i} key={x._id.toHexString()} />))
        }
      </Layout>
    </MainPage>
  );
};
