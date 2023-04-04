import { ObjectId } from "bson";
import { staticImplements } from "../../common/staticImplementsDecorator";
import { BaseModel, BaseModelStatic } from "./baseModel";
import { Exercise, ExerciseModel } from "./exercise";
import { WorkoutSet, WorkoutSetModel } from "./workoutSet";

export interface WorkoutExercise {
  exercise: ExerciseModel;
  sets: WorkoutSet[];
}

@staticImplements<BaseModelStatic<WorkoutExerciseModel, {}>>()
export class WorkoutExerciseModel extends Realm.Object<WorkoutExerciseModel> implements WorkoutExercise {
  exercise!: ExerciseModel;
  sets!: WorkoutSet[];

  static generate(exercise: ExerciseModel, sets: WorkoutSet[]): WorkoutExercise {
    return {
      exercise,
      sets
    }
  }

  static schema = {
    name: 'WorkoutExercise',
    embedded: true, 
    properties: {
      name: 'string',
      notes: 'string',
      exercise: 'Exercise',
      sets: { type: "list", objectType: 'WorkoutSet' }
    },
  }
}