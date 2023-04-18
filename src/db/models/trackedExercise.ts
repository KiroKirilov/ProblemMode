import { BaseModel, BaseModelStatic } from './baseModel';
import { Realm } from '@realm/react';
import { ExerciseBodyPart, ExerciseBodyPartModel } from './exerciseBodyPart';
import { ExerciseCategory, ExerciseCategoryModel } from './exerciseCategory';
import { ObjectId } from 'bson';
import { staticImplements } from '../../common/staticImplementsDecorator';
import { ExerciseCategoryType } from '../../features/exercises/exerciseCategoryType';
import { ExerciseModel } from './exercise';

export interface TrackedExercise extends BaseModel {
  exercise: ExerciseModel;
}

@staticImplements<BaseModelStatic<TrackedExercise>>()
export class TrackedExerciseModel extends Realm.Object<TrackedExerciseModel> implements TrackedExercise {
  _id!: ObjectId;
  exercise!: ExerciseModel;
  static generate(exercise: ExerciseModel, id?: ObjectId | undefined): TrackedExercise {
    return {
      _id: id || new Realm.BSON.ObjectId(),
      exercise
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'TrackedExercise',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      exercise: 'Exercise',
    },
  };
}
