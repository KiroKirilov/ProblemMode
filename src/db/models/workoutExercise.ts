import { ObjectId } from "bson";
import { staticImplements } from "../../common/staticImplementsDecorator";
import { BaseModel, BaseModelStatic } from "./baseModel";
import { Exercise } from "./exercise";
import { WorkoutSet, WorkoutSetModel } from "./workoutSet";

export interface WorkoutExercise {
  exercise: Exercise;
  sets: WorkoutSet[];
}

@staticImplements<BaseModelStatic<WorkoutExerciseModel, {}>>()
export class WorkoutExerciseModel extends Realm.Object<WorkoutExerciseModel> implements WorkoutExercise {
  exercise!: Exercise;
  sets!: WorkoutSet[];

  static generate(exercise: Exercise, sets: WorkoutSet[]): WorkoutExercise {
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