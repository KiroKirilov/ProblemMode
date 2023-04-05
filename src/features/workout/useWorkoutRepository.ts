import { Workout, WorkoutModel } from "../../db/models/workout";
import { WorkoutExerciseModel } from "../../db/models/workoutExercise";
import { WorkoutSetModel } from "../../db/models/workoutSet";
import { useRepository } from "../../db/useRepository"
import { WorkoutFormModel } from "./form/workoutFormModel";

export const useWorkoutRepository = () => {
  const { insert } = useRepository<Workout, WorkoutModel>(WorkoutModel.schema.name);

  const create = async (formModel: WorkoutFormModel) => {
    const exercises = formModel.exercises
      .map(exercise => WorkoutExerciseModel.generate(
        exercise.model,
        exercise.sets.map(set => WorkoutSetModel.generate(set.isCompleted, set.value, set.reps, set.specialType))
      ))

    const workout = WorkoutModel.generate(formModel.name, formModel.notes, exercises);
    await insert(workout);

    return workout;
  }

  return {
    create
  }
}