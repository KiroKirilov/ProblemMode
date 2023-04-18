import { Button, Text } from "@ui-kitten/components";
import React, { FC } from "react";
import { View } from "react-native";
import { FontAwesomeIcon } from "../../../common/FontAwesomeIcon";
import { useTrackedExercises } from "./useTrackedExercises";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { DashboardStackPages, DashboardStackParamList } from "../dashboardPages";
import { startSelecting } from "./trackedExercisesSelectionSlice";
import { TrackedExercisesList } from "./TrackedExercisesList";
import { useTrackedExerciseSelection } from "./useTrackedExerciseSelection";
import { SelectionType } from "../../exercises/selectionType";

export const ExerciseProgress: FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<DashboardStackParamList>>();
  useTrackedExerciseSelection();
  
  const goToExercisePicker = () => {
    dispatch(startSelecting());
    navigation.navigate(DashboardStackPages.trackedExercisePicker.name, { selectMode: true, selectionType: SelectionType.Tracked })
  }

  return (
    <View style={{ padding: 15 }}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{ fontWeight: 'bold' }}>Tracked exercises</Text>
        
        <Button
          appearance="ghost"
          size="small"
          onPress={goToExercisePicker}
          accessoryLeft={(props) => <FontAwesomeIcon iconStyle={props?.style} name="plus" />} />
      </View>
      
      <View>
        <TrackedExercisesList />
      </View>
    </View>
  );
};