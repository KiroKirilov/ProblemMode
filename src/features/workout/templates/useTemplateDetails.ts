import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { WorkoutTemplate, WorkoutTemplateModel } from "../../../db/models/workoutTemplate";
import { useRepository } from "../../../db/useRepository";
import { WorkoutStackPages, WorkoutStackParamList } from "../workoutPages";
import { useDispatch } from "react-redux";
import { setTemplate, startWorkout } from "../workoutSlice";
import { StackNavigationProp } from "@react-navigation/stack";

export const useTemplateDetails = () => {
  const { params } = useRoute<RouteProp<WorkoutStackParamList, 'templateDetails'>>();
  const navigation = useNavigation<StackNavigationProp<WorkoutStackParamList>>();
  const { useObjectById, remove } = useRepository<WorkoutTemplate, WorkoutTemplateModel>(WorkoutTemplateModel.schema.name);
  const dispatch = useDispatch()
  const templateId = params.templateId;
  const template = useObjectById(templateId);

  const startNewWorkout = () => {
    dispatch(startWorkout(template));
    navigation.goBack();
  }

  const onDelete = async () => {
    await remove(template);
    navigation.goBack();
  }

  const goToEdit = () => {
    dispatch(setTemplate(template));
    navigation.navigate(WorkoutStackPages.templateForm.name, { isEdit: true })
  }

  return {
    template,
    startNewWorkout,
    onDelete,
    goToEdit
  }
}