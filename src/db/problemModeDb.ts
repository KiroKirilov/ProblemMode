import { createRealmContext } from "@realm/react";
import { ExerciseModel } from "./models/exercise";
import { ExerciseBodyPart, ExerciseBodyPartModel } from "./models/exerciseBodyPart";
import { ExerciseCategoryModel } from "./models/exerciseCategory";

const config = {
  schema: [ExerciseModel, ExerciseBodyPartModel, ExerciseCategoryModel],
};

export default createRealmContext(config);
