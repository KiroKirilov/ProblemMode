import { WorkoutExerciseModel } from "../../db/models/workoutExercise";
import { WorkoutSetModel } from "../../db/models/workoutSet";
import { WorkoutTemplate, WorkoutTemplateModel } from "../../db/models/workoutTemplate";
import { useRepository } from "../../db/useRepository"
import { WorkoutFormModel } from "./form/workoutFormModel";

export const useWorkoutTemplateRepository = () => {
  const { insert } = useRepository<WorkoutTemplate, WorkoutTemplateModel>(WorkoutTemplateModel.schema.name);

  const create = async (formModel: WorkoutFormModel) => {
    const exercises = formModel.exercises
      .map(exercise => WorkoutExerciseModel.generate(
        exercise.model,
        exercise.sets.map(set => WorkoutSetModel.generate(set.isCompleted, set.value, set.reps, set.specialType))
      ))

    const workout = WorkoutTemplateModel.generate(formModel.name, formModel.notes, exercises);
    await insert(workout);
  }

  return {
    create
  }
}