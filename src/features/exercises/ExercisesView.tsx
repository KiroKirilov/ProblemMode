import { Button, Divider, Layout, List, ListItem } from "@ui-kitten/components";
import React, { FC, useMemo } from "react";
import { commonStyles } from "../../common/commonStyles";
import { FontAwesomeIcon } from "../../common/FontAwesomeIcon";
import { BottomTabs } from "../../common/pageNames";
import { Exercise, ExerciseModel } from "../../db/models/exercise";
import { MainPage } from "../navigation/MainPage";
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
export const ExercisePageActions = () => {
  return (
    <Button
      onPress={() => console.log('pressed')}
      style={{ width: 50 }}
      appearance='ghost'
      status='control'
      accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="plus" />} />
  )
}

interface ExerciseListItemProps {
  item: ExerciseModel;
  index: number
}

export const ExerciseListItem = (props: ExerciseListItemProps) => {
  const { item } = props;
  let name = item.name;

  if (props.index == 0) name = 'first';
  return (
    <ListItem
      title={name}
    />
  )
}