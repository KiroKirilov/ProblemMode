
import { Realm } from '@realm/react';
import { ObjectId } from 'bson';
import { staticImplements } from '../../common/staticImplementsDecorator';
import { BaseModel, BaseModelStatic } from "./baseModel";

export interface ExerciseCategory extends BaseModel {
  name: string;
}

@staticImplements<BaseModelStatic<ExerciseCategory>>()
export class ExerciseCategoryModel extends Realm.Object<ExerciseCategoryModel> implements ExerciseCategory {
  _id!: ObjectId;
  name!: string;
  
  static generate(name: string): ExerciseCategory {
    return {
      _id: new Realm.BSON.ObjectId(),
      name
    };
  }

  static schema = {
    name: 'ExerciseCategory',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
  };
}
