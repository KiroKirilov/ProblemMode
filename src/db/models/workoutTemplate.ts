import { ObjectId } from "bson";
import { staticImplements } from "../../common/staticImplementsDecorator";
import { BaseModel, BaseModelStatic } from "./baseModel";
import { Exercise } from "./exercise";
import { WorkoutExercise } from "./workoutExercise";

export interface WorkoutTemplate extends BaseModel {
  name: string;
  notes: string;
  exercises: WorkoutExercise[];
  completedOn: Date;
}

@staticImplements<BaseModelStatic<WorkoutTemplateModel>>()
export class WorkoutTemplateModel extends Realm.Object<WorkoutTemplateModel> implements WorkoutTemplate {
  _id!: ObjectId;
  name!: string;
  notes!: string;
  exercises!: WorkoutExercise[];
  completedOn!: Date;

  static generate(name: string, notes: string, exercises: WorkoutExercise[], id?: ObjectId | undefined): WorkoutTemplate {
    return {
      _id: id || new Realm.BSON.ObjectId(),
      name,
      notes,
      completedOn: new Date(),
      exercises: exercises
    }
  }

  static schema = {
    name: 'WorkoutTemplate',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      notes: 'string',
      exercises: { type: 'list', objectType: 'WorkoutExercise' }
    },
  };
}
