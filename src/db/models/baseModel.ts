import { Realm } from '@realm/react';


export interface BaseModel {
  _id: Realm.BSON.ObjectId;
}

export interface BaseModelStatic<T,BaseT = BaseModel, RequiredProperties extends keyof OmittedRealmTypes<T> = never> {
  new(realm: Realm, values: Unmanaged<T, RequiredProperties>): BaseT;
  schema: Realm.ObjectSchema;
}