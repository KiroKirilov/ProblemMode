import { WorkoutExerciseModel } from "../../db/models/workoutExercise";
import { WorkoutSetModel } from "../../db/models/workoutSet";
import { WorkoutTemplate, WorkoutTemplateModel } from "../../db/models/workoutTemplate";
import { useRepository } from "../../db/useRepository"
import { WorkoutFormModel } from "./form/workoutFormModel";
import { ObjectId } from 'bson';

export const useWorkoutTemplateRepository = () => {
  const { insert, update } = useRepository<WorkoutTemplate, WorkoutTemplateModel>(WorkoutTemplateModel.schema.name);

  const create = async (formModel: WorkoutFormModel) => {
    const template = formModelToDbModel(formModel);
    await insert(template);
  }

  const edit = async (formModel: WorkoutFormModel, templateId?: ObjectId) => {
    console.log('templateId: ', templateId)
    if (templateId) {
      const template = formModelToDbModel(formModel, templateId);
      await update(template);
    }
  }

  const formModelToDbModel = (formModel: WorkoutFormModel, templateId?: ObjectId) => {
    const exercises = formModel.exercises
      .map(exercise => WorkoutExerciseModel.generate(
        exercise.model,
        exercise.sets.map(set => WorkoutSetModel.generate(set.isCompleted, set.value, set.reps, set.specialType))
      ))

    return WorkoutTemplateModel.generate(formModel.name, formModel.notes, exercises, templateId);
  }

  return {
    create,
    edit
  }
}