import { Divider, Layout, List, ListItem } from "@ui-kitten/components";
import { FC, useMemo } from "react";
import { commonStyles } from "../../common/commonStyles";
import { Exercise, ExerciseModel } from "../../db/models/exercise";
import { useExercises } from "./useExercises";

export const ExercisesView: FC = () => {
  const { exercises } = useExercises();

  return (
    <Layout style={commonStyles.container}>
      <List
        data={exercises as any}
        ItemSeparatorComponent={Divider}
        renderItem={ExerciseListItem}
      />
    </Layout>
  );
};

interface ExerciseListItemProps {
  item: ExerciseModel;
  index: number;
}

export const ExerciseListItem = (props: ExerciseListItemProps) => {
  const {item} = props;
  return (
    <ListItem
      title={item.name}
    />
  )
}