import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useController, useForm } from "react-hook-form";
import { getIndexPathOfItem } from "../../../common/getIndexPathOfItem";
import { Exercise, ExerciseModel } from "../../../db/models/exercise";
import { useRepository } from "../../../db/useRepository";
import { ExerciseStackParamList } from "../exercisesPages";
import { useBodyParts } from "../useBodyParts";
import { useCategories } from "../useCategories";
import { ExerciseFormModel } from "./exerciseFormModel";

export const useExerciseForm = () => {
  const { params: exercise } = useRoute<RouteProp<ExerciseStackParamList, 'exercisesForm'>>();
  const { control, handleSubmit } = useForm<ExerciseFormModel>();
  const { insert, update } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const navigation = useNavigation();

  const { bodyParts } = useBodyParts();
  const { categories } = useCategories();

  const nameControl = useController({
    control,
    defaultValue: exercise?.name || '',
    name: 'name',
    rules: {
      required: 'Please fill in the name'
    }
  })

  const bodyPartControl = useController({
    control,
    name: 'bodyPart',
    defaultValue: getIndexPathOfItem(bodyParts, exercise?.bodyPart, x => x?._id.toHexString()),
    rules: {
      required: 'Please select a body part'
    }
  })

  const categoryControl = useController({
    control,
    name: 'category',
    defaultValue: getIndexPathOfItem(categories, exercise?.category, x => x?._id.toHexString()),
    rules: {
      required: 'Please select a category'
    }
  })
 
  const onSubmit = async (model: ExerciseFormModel) => {
    const bodyPart = bodyParts[model.bodyPart.row];
    const category = categories[model.category.row];
    const dbModel = ExerciseModel.generate(model.name, category, bodyPart, exercise?._id);

    if (exercise) {
      await update(dbModel);
      navigation.goBack();
    } else {
      await insert(dbModel);
      navigation.goBack();
    }
  }

  return {
    bodyParts,
    categories,
    onSubmit: handleSubmit(onSubmit),
    controls: {
      name: nameControl,
      bodyPart: bodyPartControl,
      category: categoryControl
    }
  }
}
