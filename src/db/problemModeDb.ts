import { createRealmContext } from "@realm/react";
import { ExerciseModel } from "./models/exercise";
import { ExerciseBodyPart, ExerciseBodyPartModel } from "./models/exerciseBodyPart";
import { ExerciseCategoryModel } from "./models/exerciseCategory";
import { WorkoutModel } from "./models/workout";
import { WorkoutExerciseModel } from "./models/workoutExercise";
import { WorkoutSetModel } from "./models/workoutSet";
import { WorkoutTemplateModel } from "./models/workoutTemplate";

const config = {
  schema: [
    ExerciseModel,
    ExerciseBodyPartModel,
    ExerciseCategoryModel,
    WorkoutModel,
    WorkoutExerciseModel,
    WorkoutSetModel,
    WorkoutTemplateModel
  ],
};

export default createRealmContext(config);
