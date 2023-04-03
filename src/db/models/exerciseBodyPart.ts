
import { Realm } from '@realm/react';
import { ObjectId } from 'bson';
import { staticImplements } from '../../common/staticImplementsDecorator';
import { BaseModel, BaseModelStatic } from "./baseModel";

export interface ExerciseBodyPart extends BaseModel {
  name: string;
}

@staticImplements<BaseModelStatic<ExerciseBodyPartModel>>()
export class ExerciseBodyPartModel extends Realm.Object<ExerciseBodyPartModel> implements ExerciseBodyPart {
  _id!: ObjectId;
  name!: string;

  static generate(name: string): ExerciseBodyPart {
    return {
      _id: new Realm.BSON.ObjectId(),
      name
    };
  }

  static schema = {
    name: 'ExerciseBodyPart',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: 'string',
    },
  };
}
