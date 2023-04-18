import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useTheme } from "@ui-kitten/components";
import { useState, useMemo } from "react";
import { ViewStyle } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ExerciseModel } from "../../db/models/exercise";
import { ExerciseStackParamList, ExercisesStackPages } from "./exercisesPages";
import { selectExercise, unselectExercise } from "./exercisesSelectionSlice";
import { SelectionType } from "./selectionType";
import { 
  selectExercise as selectTrackedExercise, 
  unselectExercise as unselectTrackedExercise 
} from "../dashboard/trackedExercises/trackedExercisesSelectionSlice";

export const useExerciseListItemState = (item: ExerciseModel) => {
  const { params } = useRoute<RouteProp<ExerciseStackParamList, 'exercisesView'>>();
  const navigation = useNavigation<StackNavigationProp<ExerciseStackParamList>>();
  const [isSelected, setIsSelected] = useState(false);
  const selectedBackgroundColor = useTheme()['background-basic-color-3'];
  const dispatch = useDispatch();

  const handlePress = () => {
    if (params?.selectMode) {
      if (isSelected) {
        unselect();
        setIsSelected(false);
      } else {
        select();
        setIsSelected(true);
      }
    } else {
      navigation.navigate(ExercisesStackPages.exercisesDetails.name, { id: item._id.toHexString() });
    }
  }

  const unselect = () => {
    if (params?.selectionType == SelectionType.Form) {
      dispatch(unselectExercise(item._id.toHexString()))
    } else if (params?.selectionType == SelectionType.Tracked) {
      dispatch(unselectTrackedExercise(item._id.toHexString()))
    }
  }

  const select = () => {
    if (params?.selectionType == SelectionType.Form) {
      dispatch(selectExercise(item));
    } else if (params?.selectionType == SelectionType.Tracked) {
      dispatch(selectTrackedExercise(item));
    }
  }

  const selectedStyles: ViewStyle | undefined = useMemo(() => {
    if (isSelected) {
      return {
        backgroundColor: selectedBackgroundColor
      }
    }
  }, [isSelected])

  return {
    isSelected,
    handlePress,
    selectedStyles,
    selectedBackgroundColor
  }
}