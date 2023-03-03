import { Layout } from "@ui-kitten/components";
import React, { FC } from "react";
import { commonStyles } from "../../common/commonStyles";
import { BottomTabs } from "../../common/pageNames";
import { MainPage } from "../navigation/MainPage";
import { ExerciseGroup } from "./ExerciseGroup";
import { ExercisePageActions } from "./ExercisePageActions";
import { useExercises } from "./useExercises";

export const ExercisesView: FC = () => {
  const { exercisesByLetter } = useExercises();

  return (
    <MainPage title={BottomTabs.exercises.title} RightAccessory={ExercisePageActions}>
      <Layout style={commonStyles.container}>
        {
          exercisesByLetter.map(exerciseGroup => (
            <ExerciseGroup key={exerciseGroup.key} title={exerciseGroup.key} exercises={exerciseGroup.items} />
          ))
        }
      </Layout>
    </MainPage>
  );
};
