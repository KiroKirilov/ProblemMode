import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { Exercise, ExerciseModel } from "../../../db/models/exercise";
import { useRepository } from "../../../db/useRepository";
import { ExerciseStackParamList } from "../exercisesPageNames";

export const useExerciseDetails = () => {
  const { params } = useRoute<RouteProp<ExerciseStackParamList, 'exerciseDetails'>>();
  const navigation = useNavigation();
  const { remove, useObjectById } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);

  const exercise = useObjectById(params.id)
  
  const onDelete = async () => {
    await remove(exercise);
    navigation.goBack();
  }

  return {
    onDelete,
    exercise
  }
}