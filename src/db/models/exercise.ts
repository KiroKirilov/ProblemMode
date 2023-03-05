import { BaseModel, BaseModelStatic } from './baseModel';
import { Realm } from '@realm/react';
import { ExerciseBodyPart, ExerciseBodyPartModel } from './exerciseBodyPart';
import { ExerciseCategory, ExerciseCategoryModel } from './exerciseCategory';
import { ObjectId } from 'bson';
import { staticImplements } from '../../common/staticImplementsDecorator';

export interface Exercise extends BaseModel {
  name: string;
  bodyPart: ExerciseBodyPart;
  category: ExerciseCategory;
}

@staticImplements<BaseModelStatic<Exercise>>()
export class ExerciseModel extends Realm.Object<ExerciseModel> implements Exercise {
  _id!: ObjectId;
  name!: string;
  bodyPart!: ExerciseBodyPart;
  category!: ExerciseCategory;

  static generate(name: string, category: ExerciseCategoryModel, bodyPart: ExerciseBodyPartModel, id?: ObjectId | undefined): Exercise {
    return {
      _id: id || new Realm.BSON.ObjectId(),
      name,
      category: category,
      bodyPart: bodyPart
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Exercise',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      bodyPart: 'ExerciseBodyPart',
      category: 'ExerciseCategory'
    },
  };
}
