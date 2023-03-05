import { useNavigation } from "@react-navigation/native";
import { useController, useForm } from "react-hook-form";
import { Exercise, ExerciseModel } from "../../../db/models/exercise";
import { useRepository } from "../../../db/useRepository";
import { useBodyParts } from "../useBodyParts";
import { useCategories } from "../useCategories";
import { ExerciseFormModel } from "./exerciseFormModel";

export const useExerciseForm = () => {
  const { control, handleSubmit } = useForm<ExerciseFormModel>();
  const { insert } = useRepository<Exercise, ExerciseModel>(ExerciseModel.schema.name);
  const navigation = useNavigation();

  const { bodyParts } = useBodyParts();
  const { categories } = useCategories();

  const nameControl = useController({
    control,
    defaultValue: '',
    name: 'name',
    rules: {
      required: 'Please fill in the name'
    }
  })

  const bodyPartControl = useController({
    control,
    name: 'bodyPart',
    rules: {
      required: 'Please select a body part'
    }
  })

  const categoryControl = useController({
    control,
    name: 'category',
    rules: {
      required: 'Please select a category'
    }
  })
 
  const onSubmit = async (model: ExerciseFormModel) => {
    const bodyPart = bodyParts[model.bodyPart.row];
    const category = categories[model.category.row];
    const dbModel = ExerciseModel.generate(model.name, category, bodyPart);
    await insert(dbModel);
    navigation.goBack();
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
