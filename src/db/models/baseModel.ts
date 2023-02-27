import { Realm } from '@realm/react';


export interface BaseModel {
  _id: Realm.BSON.ObjectId;
}

export interface BaseModelStatic<T, RequiredProperties extends keyof OmittedRealmTypes<T> = never> {
  new(realm: Realm, values: Unmanaged<T, RequiredProperties>): BaseModel;
  schema: Realm.ObjectSchema;
}