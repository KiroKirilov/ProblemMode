
import { Realm } from '@realm/react';
import { ObjectId } from 'bson';
import { staticImplements } from '../../common/staticImplementsDecorator';
import { ExerciseCategoryType } from '../../features/exercises/exerciseCategoryType';
import { BaseModel, BaseModelStatic } from "./baseModel";

export interface ExerciseCategory extends BaseModel {
  name: string;
  categoryType: ExerciseCategoryType;
}

@staticImplements<BaseModelStatic<ExerciseCategory>>()
export class ExerciseCategoryModel extends Realm.Object<ExerciseCategoryModel> implements ExerciseCategory {
  _id!: ObjectId;
  name!: string;
  categoryType!: ExerciseCategoryType;
  
  static generate(name: string, categoryType: ExerciseCategoryType): ExerciseCategory {
    return {
      _id: new Realm.BSON.ObjectId(),
      name,
      categoryType
    };
  }

  static schema = {
    name: 'ExerciseCategory',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
      categoryType: 'string'
    },
  };
}
