import { ObjectId } from "bson";
import { staticImplements } from "../../common/staticImplementsDecorator";
import { BaseModel, BaseModelStatic } from "./baseModel";
import { Exercise } from "./exercise";
import { WorkoutExercise } from "./workoutExercise";

export interface Workout extends BaseModel {
  name: string;
  notes: string;
  exercises: WorkoutExercise[];
  completedOn: Date;
}

@staticImplements<BaseModelStatic<WorkoutModel>>()
export class WorkoutModel extends Realm.Object<WorkoutModel> implements Workout {
  _id!: ObjectId;
  name!: string;
  notes!: string;
  exercises!: WorkoutExercise[];
  completedOn!: Date;

  static generate(name: string, notes: string, exercises: WorkoutExercise[], id?: ObjectId | undefined): Workout {
    return {
      _id: id || new Realm.BSON.ObjectId(),
      name,
      notes,
      completedOn: new Date(),
      exercises: exercises
    }
  }

  static schema = {
    name: 'Workout',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      notes: 'string',
      exercises: { type: 'list', objectType: 'WorkoutExercise' }
    },
  };
}
